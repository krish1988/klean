import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstname, lastname, email, phone, project, message } = body;

    // Validation
    if (!firstname || !lastname || !email || !message) {
      return NextResponse.json(
        { message: "Champs obligatoires manquants (Prénom, Nom, Email, Message)" },
        { status: 400 }
      ) as any;
    }

    // SMTP configuration
    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || "587", 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const receiver = process.env.CONTACT_RECEIVER || "contact@kelanecreations.com";

    if (!host || !user || !pass) {
      console.warn("SMTP credentials are not configured in environment variables. Email sending skipped.");
      return NextResponse.json(
        { message: "Le serveur SMTP n'est pas configuré. Veuillez contacter l'administrateur." },
        { status: 500 }
      ) as any;
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE === "true", // false for 587, true for 465
      auth: {
        user,
        pass,
      },
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false, // Prevents certificate handshake errors
      },
    });

    const mailOptions = {
      from: `"${firstname} ${lastname}" <${user}>`, // Must send from the authenticated SMTP address to prevent spoofing blockages
      replyTo: email,
      to: receiver,
      subject: `[Nouveau Contact] ${project} - ${firstname} ${lastname}`,
      text: `Nouveau message de contact depuis le site Kélane Créations:\n\n` +
            `Nom: ${lastname}\n` +
            `Prénom: ${firstname}\n` +
            `Email: ${email}\n` +
            `Téléphone: ${phone || "Non renseigné"}\n` +
            `Type de projet: ${project}\n\n` +
            `Message:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f3ece1; background-color: #f7f2e8; color: #1b1812;">
          <h2 style="color: #b65436; border-bottom: 2px solid #b65436; padding-bottom: 10px;">Nouveau message de contact</h2>
          <p>Un visiteur a soumis le formulaire de contact sur le site <strong>Kélane Créations</strong>.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #ebe2d2;">
              <td style="padding: 10px; font-weight: bold; width: 150px;">Nom complet :</td>
              <td style="padding: 10px;">${firstname} ${lastname}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Email :</td>
              <td style="padding: 10px;"><a href="mailto:${email}" style="color: #b65436;">${email}</a></td>
            </tr>
            <tr style="background-color: #ebe2d2;">
              <td style="padding: 10px; font-weight: bold;">Téléphone :</td>
              <td style="padding: 10px;">${phone || "Non renseigné"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Projet :</td>
              <td style="padding: 10px;">${project}</td>
            </tr>
          </table>
          
          <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #b65436; border-radius: 4px; margin-top: 20px;">
            <h4 style="margin-top: 0; color: #1b1812;">Message :</h4>
            <p style="white-space: pre-wrap; line-height: 1.5; color: #2b2520;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; font-size: 11px; color: #75706a; text-align: center;">
            Ce message a été généré automatiquement par le site web Kélane Créations.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Votre message a été envoyé avec succès !" }, { status: 200 }) as any;
  } catch (error: any) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { message: "Une erreur est survenue lors de l'envoi de votre message.", error: error.message },
      { status: 500 }
    ) as any;
  }
}
