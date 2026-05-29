"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <div className="footer__brand">
            Kélane <i>créations</i>
          </div>
          <p className="footer__tag">
            Tapissier d'ameublement à Rixheim. L'art du sur-mesure depuis notre atelier alsacien.
          </p>
        </div>
        <div>
          <h5>Navigation</h5>
          <ul>
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/about">L'Atelier</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>Services</h5>
          <ul>
            <li>Rideaux sur-mesure</li>
            <li>Stores</li>
            <li>Coussins</li>
            <li>Tapisserie d'ameublement</li>
            <li>Restauration</li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li>120 Rue de l'Île Napoléon</li>
            <li>68170 Rixheim</li>
            <li>
              <a href="tel:0389604345">03 89 60 43 45</a>
            </li>
            <li>
              <a href="mailto:contact@kelanecreations.com">contact@kelanecreations.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div>
          © {year} Kélane Créations · Tous droits réservés
        </div>
        <div>Made with care in Alsace · FR</div>
      </div>
    </footer>
  );
}
