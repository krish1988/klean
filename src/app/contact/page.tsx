"use client";

import { useState, useEffect } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function Contact() {
  useScrollReveal();

  const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    project: "Rideaux sur-mesure",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [currentDay, setCurrentDay] = useState<number | null>(null);

  useEffect(() => {
    // Determine the current day on the client side to avoid hydration mismatch (Sunday = 0, Monday = 1, etc.)
    setCurrentDay(new Date().getDay());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          project: "Rideaux sur-mesure",
          message: "",
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Une erreur est survenue lors de l'envoi.");
      }
    } catch (error: any) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error.message || "Impossible d'envoyer le message. Veuillez réessayer.");
    }
  };

  return (
    <main className="page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero__bg">
          <img src="/images/storefront.jpg" alt="Contact Kélane Créations" />
        </div>
        <span className="eyebrow reveal">Contact</span>
        <h1 className="h-display reveal" data-delay="1">
          Parlons de votre <em>projet</em>.
        </h1>
        <p className="lead reveal" data-delay="2" style={{ marginTop: "32px" }}>
          Devis, visite-conseil, simple avis. Nous sommes à votre écoute.
        </p>
      </section>

      {/* CONTACT PAGE GRID */}
      <section className="contact-page">
        <div className="contact-grid">
          {/* FORM */}
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="field-row">
              <div className="field">
                <label htmlFor="firstname">Prénom</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={formState.firstname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="lastname">Nom</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={formState.lastname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="phone">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="project">Type de projet</label>
              <select
                id="project"
                name="project"
                value={formState.project}
                onChange={handleChange}
              >
                <option value="Rideaux sur-mesure">Rideaux sur-mesure</option>
                <option value="Stores">Stores</option>
                <option value="Coussins">Coussins</option>
                <option value="Tapisserie / réfection de siège">Tapisserie / réfection de siège</option>
                <option value="Restauration">Restauration</option>
                <option value="Visite-conseil à domicile">Visite-conseil à domicile</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Votre message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Parlez-nous de votre intérieur, de la pièce concernée, de vos envies…"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn" disabled={status === "submitting"}>
              {status === "submitting" && "Envoi en cours..."}
              {status === "success" && "Merci ✦"}
              {status === "error" && "Réessayer"}
              {status === "idle" && "Envoyer ma demande"}
              <span className="arrow">→</span>
            </button>

            {status === "success" && (
              <p style={{ marginTop: "16px", color: "var(--sage)", fontSize: "14px" }}>
                Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
              </p>
            )}
            {status === "error" && (
              <p style={{ marginTop: "16px", color: "var(--rust)", fontSize: "14px" }}>
                {errorMessage}
              </p>
            )}
          </form>

          {/* CONTACT INFO & HOURS */}
          <div className="contact-info">
            <div className="info-card reveal" data-delay="1">
              <div className="info-card__ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 21s-7-7.5-7-13a7 7 0 1 1 14 0c0 5.5-7 13-7 13z" />
                  <circle cx="12" cy="8.5" r="2.5" />
                </svg>
              </div>
              <div>
                <div className="info-card__label">Atelier &amp; showroom</div>
                <div className="info-card__value">
                  <a href="https://maps.google.com/?q=120+Rue+de+l'%C3%8Ele+Napol%C3%A9on+68170+Rixheim" target="_blank" rel="noopener noreferrer">
                    120 Rue de l'Île Napoléon<br />68170 Rixheim, Alsace
                  </a>
                </div>
              </div>
            </div>

            <div className="info-card reveal" data-delay="2">
              <div className="info-card__ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.98.37 1.93.72 2.83a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.29a2 2 0 0 1 2.11-.45c.9.35 1.85.59 2.83.72A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="info-card__label">Téléphone</div>
                <div className="info-card__value">
                  <a href="tel:0389604345">03 89 60 43 45</a>
                </div>
              </div>
            </div>

            <div className="info-card reveal" data-delay="3">
              <div className="info-card__ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>
              <div>
                <div className="info-card__label">Écrivez-nous</div>
                <div className="info-card__value">
                  <a href="mailto:contact@kelanecreations.fr">contact@kelanecreations.fr</a>
                </div>
              </div>
            </div>

            <div className="hours-card reveal" data-delay="4">
              <h3>Horaires d'<em>ouverture</em></h3>
              <div className="hours-list">
                <div className={`hours-row ${currentDay === 1 ? "today" : ""}`}>
                  <span>Lundi</span>
                  <span className="hours-time">9h — 17h</span>
                </div>
                <div className={`hours-row ${currentDay === 2 ? "today" : ""}`}>
                  <span>Mardi</span>
                  <span className="hours-time">9h — 17h</span>
                </div>
                <div className={`hours-row ${currentDay === 3 ? "today" : ""}`}>
                  <span>Mercredi</span>
                  <span className="hours-time">9h — 17h</span>
                </div>
                <div className={`hours-row ${currentDay === 4 ? "today" : ""}`}>
                  <span>Jeudi</span>
                  <span className="hours-time">9h — 17h</span>
                </div>
                <div className={`hours-row ${currentDay === 5 ? "today" : ""}`}>
                  <span>Vendredi</span>
                  <span className="hours-time">9h — 17h</span>
                </div>
                <div className={`hours-row closed ${currentDay === 6 ? "today" : ""}`}>
                  <span>Samedi</span>
                  <span className="hours-time">Sur rendez-vous</span>
                </div>
                <div className={`hours-row closed ${currentDay === 0 ? "today" : ""}`}>
                  <span>Dimanche</span>
                  <span className="hours-time">Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="map-wrap reveal">
          <iframe 
            title="Google Maps"
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            src="https://maps.google.com/maps?q=120%20Rue%20de%20l%27%C3%8Ele%20Napol%C3%A9on%2068170%20Rixheim&t=&z=15&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
