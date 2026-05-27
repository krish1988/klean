"use client";

import Link from "next/link";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <main className="page">
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero__media">
          <img 
            src="/images/storefront.jpg" 
            alt="Atelier Kélane Créations" 
          />
        </div>
        <div className="hero__content">
          <div className="hero__meta">
            <div>EST. RIXHEIM · ALSACE</div>
            <div>Tapissier d'ameublement<br />Créations sur-mesure</div>
          </div>
          <h1 className="hero__title">
            <span className="l1">Kélane</span>
            <span className="l2">
              <em>créations</em>
            </span>
          </h1>
          <div className="hero__bottom">
            <p className="hero__tag">
              L'art du sur-mesure depuis notre atelier alsacien. Rideaux, stores, fauteuils et coussins façonnés avec exigence et passion du détail.
            </p>
            <Link href="/services" className="hero__scroll">
              Découvrir <span></span>
            </Link>
          </div>
        </div>
      </section>

      {/* HERO STRIP */}
      <section className="hero-strip">
        <div className="hero-strip__item" data-label="Showroom">
          <img src="/images/interior-tree.jpg" alt="Showroom mural" />
        </div>
        <div className="hero-strip__item" data-label="Collection">
          <img src="/images/cushions-top.jpg" alt="Collection de coussins" />
        </div>
        <div className="hero-strip__item" data-label="Détails">
          <img src="/images/interior-swan.jpg" alt="Détail fauteuil" />
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto">
        <svg className="manifesto__deco" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="100" cy="100" r="80" />
            <circle cx="100" cy="100" r="60" />
            <circle cx="100" cy="100" r="40" />
            <path d="M20 100 Q100 20 180 100 T20 100" />
            <path d="M20 100 Q100 180 180 100" />
          </g>
        </svg>
        <div className="manifesto__inner">
          <div className="reveal">
            <span className="eyebrow">Notre maison</span>
            <h2 className="h-section" style={{ marginTop: "24px" }}>
              L'<em>élégance</em>,<br />une affaire de matière.
            </h2>
          </div>
          <div className="reveal" data-delay="2">
            <p>
              Chez Kélane Créations, chaque pièce naît d'un dialogue. Entre une étoffe et une lumière, entre un fauteuil et son histoire, entre un client et notre atelier.
            </p>
            <p>
              Nous travaillons les tissus comme on écrit un récit : choix du fil, tension du point, justesse du tombé. Une intimité avec la matière qui ne s'enseigne pas — elle se transmet.
            </p>
            <div className="manifesto__sig">L'atelier Kélane</div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="marquee">
        <div className="marquee__track">
          <span>Rideaux</span><span>Stores</span><span>Coussins</span><span>Fauteuils</span><span>Restauration</span><span>Sur-mesure</span>
          <span>Rideaux</span><span>Stores</span><span>Coussins</span><span>Fauteuils</span><span>Restauration</span><span>Sur-mesure</span>
          <span>Rideaux</span><span>Stores</span><span>Coussins</span><span>Fauteuils</span><span>Restauration</span><span>Sur-mesure</span>
        </div>
      </section>

      {/* LOOKBOOK */}
      <section className="lookbook">
        <div className="lookbook__head reveal">
          <div>
            <span className="eyebrow">Lookbook</span>
            <h2 className="h-section" style={{ marginTop: "24px" }}>
              Esprit de <em>maison</em>.
            </h2>
          </div>
          <p className="lead">
            Un aperçu des ambiances créées dans notre showroom. Couleurs, matières et compositions qui font la signature Kélane.
          </p>
        </div>
        <div className="lookbook__grid">
          <div className="lb lb-1 reveal">
            <img src="/images/interior-mural.jpg" alt="Vue showroom complet" />
            <div className="lb__caption">
              <small>Édition № 01</small>Un <em>récit</em><br />en clair-obscur.
            </div>
          </div>
          <div className="lb lb-2 reveal" data-delay="1">
            <img src="/images/cushions-mid.jpg" alt="Étagère de coussins" />
            <div className="lb__caption">
              <small>Collection · Coussins</small>Les <em>accents</em>.
            </div>
          </div>
          <div className="lb lb-3 reveal" data-delay="2">
            <img src="/images/interior-swan.jpg" alt="Fauteuil contemporain" />
            <div className="lb__caption">
              <small>Pièces signature</small>Le <em>fauteuil</em>.
            </div>
          </div>
          <div className="lb lb-4 reveal" data-delay="1">
            <img src="/images/storefront-window.jpg" alt="Vitrine boutique" />
            <div className="lb__caption">
              <small>Vitrine</small>Une <em>vitrine</em><br />vivante.
            </div>
          </div>
          <div className="lb lb--text lb-5 reveal" data-delay="2">
            <span className="eyebrow">Manifeste</span>
            <h3>Tisser le <em>quotidien</em>.</h3>
            <p>
              Une étoffe bien posée transforme une pièce en lieu. C'est ce que nous cherchons à chaque ouvrage.
            </p>
          </div>
          <div className="lb lb-6 reveal" data-delay="3">
            <img src="/images/cushions-detail.jpg" alt="Détail textile" />
            <div className="lb__caption">
              <small>Détail · Texture</small><em>Toucher</em>.
            </div>
          </div>
        </div>
      </section>

      {/* ETOFFES */}
      <section className="etoffes">
        <div className="etoffes__head reveal">
          <div>
            <span className="eyebrow">Bibliothèque de matières</span>
            <h2 className="h-section" style={{ marginTop: "24px" }}>
              Étoffes <em>choisies</em>.
            </h2>
          </div>
          <p className="lead">
            Plus de trois cents références d'étoffes sélectionnées avec exigence. Un aperçu de notre vocabulaire de matières.
          </p>
        </div>

        <div className="swatch-grid">
          <div className="swatch reveal">
            <div className="swatch__pattern">
              <svg width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="p1" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                    <rect width="6" height="6" fill="#d8c4a3" />
                    <path d="M0 0 L6 6 M6 0 L0 6" stroke="#9c8459" strokeWidth=".5" opacity=".6" />
                    <path d="M0 3 L6 3 M3 0 L3 6" stroke="#b8a07a" strokeWidth=".3" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#p1)" />
              </svg>
            </div>
            <div className="swatch__label">
              <span className="swatch__name">Lin <em>naturel</em></span>
              <span className="swatch__num">№ 01</span>
            </div>
          </div>

          <div className="swatch reveal" data-delay="1">
            <div className="swatch__pattern">
              <svg width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="g2" cx="50%" cy="40%" r="70%">
                    <stop offset="0%" stopColor="#a8482e" />
                    <stop offset="100%" stopColor="#5b2615" />
                  </radialGradient>
                  <filter id="n2">
                    <feTurbulence baseFrequency=".8" numOctaves="2" />
                    <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .35 0" />
                  </filter>
                </defs>
                <rect width="100%" height="100%" fill="url(#g2)" />
                <rect width="100%" height="100%" filter="url(#n2)" opacity=".4" />
              </svg>
            </div>
            <div className="swatch__label">
              <span className="swatch__name">Velours <em>terre</em></span>
              <span className="swatch__num">№ 02</span>
            </div>
          </div>

          <div className="swatch reveal" data-delay="2">
            <div className="swatch__pattern">
              <svg width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="p3" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                    <rect width="8" height="8" fill="#eee5d1" />
                    <circle cx="2" cy="2" r="1.4" fill="#c9b88e" />
                    <circle cx="6" cy="6" r="1.6" fill="#b5a172" />
                    <circle cx="6" cy="2" r="1" fill="#d4c4a0" />
                    <circle cx="2" cy="6" r="1.2" fill="#c9b88e" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#p3)" />
              </svg>
            </div>
            <div className="swatch__label">
              <span className="swatch__name">Bouclé <em>écru</em></span>
              <span className="swatch__num">№ 03</span>
            </div>
          </div>

          <div className="swatch reveal" data-delay="3">
            <div className="swatch__pattern">
              <svg width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="p4" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect width="20" height="20" fill="#f3ece1" />
                    <path d="M0 0 L10 0 L10 5 L5 5 L5 10 L0 10 Z M10 10 L20 10 L20 15 L15 15 L15 20 L10 20 Z M5 5 L10 10 L5 10 Z M15 15 L20 20 L15 20 Z" fill="#2b2520" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#p4)" />
              </svg>
            </div>
            <div className="swatch__label">
              <span className="swatch__name">Pied-de-<em>poule</em></span>
              <span className="swatch__num">№ 04</span>
            </div>
          </div>

          <div className="swatch reveal" data-delay="1">
            <div className="swatch__pattern">
              <svg width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="p5" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                    <rect width="6" height="6" fill="#6a7256" />
                    <path d="M-1 5 L7 -3 M-1 9 L7 1 M-1 13 L7 5" stroke="#4d5440" strokeWidth="1.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#p5)" />
              </svg>
            </div>
            <div className="swatch__label">
              <span className="swatch__name">Sergé <em>olive</em></span>
              <span className="swatch__num">№ 05</span>
            </div>
          </div>

          <div className="swatch reveal" data-delay="2">
            <div className="swatch__pattern">
              <svg width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="p6" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                    <rect width="48" height="48" fill="#1b1812" />
                    <g fill="none" stroke="#b8965a" strokeWidth=".8" opacity=".85">
                      <path d="M24 6 Q34 16 24 24 Q14 16 24 6 Z" />
                      <path d="M24 24 Q34 32 24 42 Q14 32 24 24 Z" />
                      <circle cx="24" cy="24" r="2.5" />
                      <path d="M6 24 Q14 14 24 24 Q14 34 6 24" />
                      <path d="M42 24 Q34 14 24 24 Q34 34 42 24" />
                    </g>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#p6)" />
              </svg>
            </div>
            <div className="swatch__label">
              <span className="swatch__name">Damas <em>or</em></span>
              <span className="swatch__num">№ 06</span>
            </div>
          </div>

          <div className="swatch reveal" data-delay="3">
            <div className="swatch__pattern">
              <svg width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="g7" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e8d6c8" />
                    <stop offset="40%" stopColor="#c89b86" />
                    <stop offset="60%" stopColor="#e0bdaa" />
                    <stop offset="100%" stopColor="#9c6b58" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#g7)" />
                <g opacity=".25" stroke="#fff" strokeWidth="1" fill="none">
                  <path d="M0 30 Q60 10 120 30" />
                  <path d="M0 60 Q60 40 120 60" />
                  <path d="M0 90 Q60 70 120 90" />
                </g>
              </svg>
            </div>
            <div className="swatch__label">
              <span className="swatch__name">Soie <em>rosée</em></span>
              <span className="swatch__num">№ 07</span>
            </div>
          </div>

          <div className="swatch reveal" data-delay="1">
            <div className="swatch__pattern">
              <svg width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="p8" x="0" y="0" width="16" height="100" patternUnits="userSpaceOnUse">
                    <rect width="16" height="100" fill="#ebe2d2" />
                    <rect x="0" width="2" height="100" fill="#1b1812" />
                    <rect x="6" width="1" height="100" fill="#b65436" />
                    <rect x="11" width=".5" height="100" fill="#1b1812" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#p8)" />
              </svg>
            </div>
            <div className="swatch__label">
              <span className="swatch__name">Rayé <em>tailleur</em></span>
              <span className="swatch__num">№ 08</span>
            </div>
          </div>

          <div className="swatch reveal" data-delay="2">
            <div className="swatch__pattern">
              <svg width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="p9" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <rect width="40" height="40" fill="#e8e4d2" />
                    <g fill="#6a7256">
                      <ellipse cx="10" cy="10" rx="4" ry="2" transform="rotate(30 10 10)" />
                      <ellipse cx="30" cy="22" rx="3.5" ry="1.8" transform="rotate(-25 30 22)" />
                      <ellipse cx="18" cy="32" rx="3.5" ry="1.8" transform="rotate(60 18 32)" />
                    </g>
                    <g fill="#b65436">
                      <circle cx="10" cy="10" r="1.4" />
                      <circle cx="30" cy="22" r="1.4" />
                      <circle cx="18" cy="32" r="1.4" />
                    </g>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#p9)" />
              </svg>
            </div>
            <div className="swatch__label">
              <span className="swatch__name">Floral <em>jardin</em></span>
              <span className="swatch__num">№ 09</span>
            </div>
          </div>

          <div className="swatch reveal" data-delay="3">
            <div className="swatch__pattern">
              <svg width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="p10" x="0" y="0" width="3" height="3" patternUnits="userSpaceOnUse">
                    <rect width="3" height="3" fill="#1b1812" />
                    <circle cx="1.5" cy="1.5" r=".3" fill="#3b342a" />
                  </pattern>
                  <filter id="nn10">
                    <feTurbulence baseFrequency=".9" numOctaves="2" />
                    <feColorMatrix values="0 0 0 0 .2  0 0 0 0 .18  0 0 0 0 .14  0 0 0 .5 0" />
                  </filter>
                </defs>
                <rect width="100%" height="100%" fill="url(#p10)" />
                <rect width="100%" height="100%" filter="url(#nn10)" opacity=".4" />
              </svg>
            </div>
            <div className="swatch__label">
              <span className="swatch__name">Coton <em>encre</em></span>
              <span className="swatch__num">№ 10</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="svc-preview">
        <div className="svc-preview__head reveal">
          <div>
            <span className="eyebrow">Nos métiers</span>
            <h2 className="h-section" style={{ marginTop: "24px" }}>
              Des gestes<br /><em>maîtrisés</em>.
            </h2>
          </div>
          <p className="lead">
            De la confection des rideaux à la restauration des fauteuils anciens, nos savoir-faire répondent à toutes les exigences de l'art décoratif.
          </p>
        </div>
        <div className="svc-grid">
          <Link href="/services" className="svc-card s-1 reveal">
            <div className="svc-card__bg">
              <img src="/images/cushions-detail.jpg" alt="" />
            </div>
            <div>
              <div className="svc-card__num">01 — Signature</div>
              <h3 className="svc-card__title" style={{ marginTop: "18px" }}>
                Tapisserie<br /><em>d'ameublement</em>
              </h3>
            </div>
            <p className="svc-card__desc">
              Remise en état complète de fauteuils, canapés et sièges anciens. Sangles, ressorts, mousses, tissu d'apparat.
            </p>
            <div className="svc-card__shape"></div>
          </Link>

          <Link href="/services" className="svc-card s-2 reveal" data-delay="1">
            <div className="svc-card__bg">
              <img src="/images/interior-tree.jpg" alt="" />
            </div>
            <div>
              <div className="svc-card__num">02</div>
              <h3 className="svc-card__title" style={{ marginTop: "18px" }}>
                Rideaux<br /><em>sur-mesure</em>
              </h3>
            </div>
            <p className="svc-card__desc">
              Tombés, doublures, finitions. Sélection d'étoffes haut de gamme.
            </p>
            <div className="svc-card__shape"></div>
          </Link>

          <Link href="/services" className="svc-card s-3 reveal" data-delay="2">
            <div className="svc-card__bg">
              <img src="/images/storefront-window.jpg" alt="" />
            </div>
            <div>
              <div className="svc-card__num">03</div>
              <h3 className="svc-card__title" style={{ marginTop: "18px" }}>Stores</h3>
            </div>
            <p className="svc-card__desc">
              Bateau, enrouleur, vénitien.
            </p>
            <div className="svc-card__shape"></div>
          </Link>

          <Link href="/services" className="svc-card s-4 reveal" data-delay="1">
            <div className="svc-card__bg">
              <img src="/images/cushions-top.jpg" alt="" />
            </div>
            <div>
              <div className="svc-card__num">04</div>
              <h3 className="svc-card__title" style={{ marginTop: "18px" }}>Coussins</h3>
            </div>
            <p className="svc-card__desc">
              Pièces uniques ou collections, en accord parfait avec vos intérieurs.
            </p>
            <div className="svc-card__shape"></div>
          </Link>

          <Link href="/services" className="svc-card s-5 reveal" data-delay="2">
            <div className="svc-card__bg">
              <img src="/images/interior-swan.jpg" alt="" />
            </div>
            <div>
              <div className="svc-card__num">05</div>
              <h3 className="svc-card__title" style={{ marginTop: "18px" }}>Restauration</h3>
            </div>
            <p className="svc-card__desc">
              Pièces anciennes, sièges de famille, mobilier d'art.
            </p>
            <div className="svc-card__shape"></div>
          </Link>

          <Link href="/services" className="svc-card s-6 reveal" data-delay="3">
            <div className="svc-card__bg">
              <img src="/images/interior-sofa.jpg" alt="" />
            </div>
            <div>
              <div className="svc-card__num">06</div>
              <h3 className="svc-card__title" style={{ marginTop: "18px" }}>Livraison &amp; pose</h3>
            </div>
            <p className="svc-card__desc">
              Pose à domicile, conseils et finitions sur place.
            </p>
            <div className="svc-card__shape"></div>
          </Link>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <section className="photo-strip">
        <div className="photo-strip__media">
          <img src="/images/cushions-display.jpg" alt="Collection de coussins Kélane" />
        </div>
        <div className="photo-strip__content">
          <span className="eyebrow reveal">Showroom</span>
          <h2 className="h-section reveal" data-delay="1">
            Une <em>collection</em><br />vivante.
          </h2>
          <p className="reveal" data-delay="2">
            Plus de trois cents références d'étoffes et de cuirs sélectionnés auprès des plus grandes maisons : Nobilis, Casal, Zephyr&amp;Co. Une bibliothèque de matières où votre projet trouve sa voix.
          </p>
          <div className="photo-strip__stats reveal" data-delay="3">
            <div className="stat">
              <div className="stat__num">300<span style={{ fontSize: ".5em" }}>+</span></div>
              <div className="stat__label">Étoffes</div>
            </div>
            <div className="stat">
              <div className="stat__num">8</div>
              <div className="stat__label">Maisons partenaires</div>
            </div>
            <div className="stat">
              <div className="stat__num">100<span style={{ fontSize: ".5em" }}>%</span></div>
              <div className="stat__label">Sur-mesure</div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="portfolio">
        <div className="portfolio__head reveal">
          <div>
            <span className="eyebrow">Réalisations</span>
            <h2 className="h-section" style={{ marginTop: "24px" }}>
              Quelques <em>histoires</em>.
            </h2>
          </div>
          <p className="lead">
            Un échantillon de projets réalisés en atelier — particuliers, professionnels, restaurations délicates.
          </p>
        </div>
        <div className="portfolio__grid">
          <article className="work reveal">
            <span className="work__num">01</span>
            <img src="/images/interior-tree.jpg" alt="Aménagement Mulhouse" />
            <div className="work__overlay">
              <span className="work__cat">Aménagement complet</span>
              <h3 className="work__title">Maison de <em>maître</em><br />Mulhouse</h3>
            </div>
          </article>

          <article className="work reveal" data-delay="1">
            <span className="work__num">02</span>
            <img src="/images/cushions-mid.jpg" alt="Coussins Bâle" />
            <div className="work__overlay">
              <span className="work__cat">Coussins · Collection</span>
              <h3 className="work__title">Suite <em>parentale</em><br />Bâle</h3>
            </div>
          </article>

          <article className="work reveal" data-delay="2">
            <span className="work__num">03</span>
            <img src="/images/interior-swan.jpg" alt="Fauteuil Riedisheim" />
            <div className="work__overlay">
              <span className="work__cat">Fauteuil contemporain</span>
              <h3 className="work__title">Salon <em>privé</em><br />Riedisheim</h3>
            </div>
          </article>

          <article className="work reveal" data-delay="1">
            <span className="work__num">04</span>
            <img src="/images/storefront-window.jpg" alt="Rideaux Saint-Louis" />
            <div className="work__overlay">
              <span className="work__cat">Rideaux sur-mesure</span>
              <h3 className="work__title">Bureau <em>d'architecte</em><br />Saint-Louis</h3>
            </div>
          </article>

          <article className="work reveal" data-delay="2">
            <span className="work__num">05</span>
            <img src="/images/cushions-top.jpg" alt="Coussins Colmar" />
            <div className="work__overlay">
              <span className="work__cat">Coussins · Hôtellerie</span>
              <h3 className="work__title">Lobby <em>hôtel</em><br />Colmar</h3>
            </div>
          </article>

          <article className="work reveal" data-delay="3">
            <span className="work__num">06</span>
            <img src="/images/interior-sofa.jpg" alt="Canapé Rixheim" />
            <div className="work__overlay">
              <span className="work__cat">Restauration · Canapé</span>
              <h3 className="work__title">Pièce de <em>famille</em><br />Rixheim</h3>
            </div>
          </article>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="testimonials__head reveal">
          <span className="eyebrow">Témoignages</span>
          <h2 className="h-section" style={{ marginTop: "24px" }}>
            Ce qu'on <em>nous dit</em>.
          </h2>
        </div>

        <div className="testimonials__grid">
          <div className="testi reveal">
            <div className="testi__quote-mark">“</div>
            <p className="testi__text">
              Un savoir-faire rare et un sens du conseil exceptionnel. Le résultat dépasse nos attentes — les rideaux transforment littéralement la pièce.
            </p>
            <div className="testi__author">
              <div className="testi__avatar">SR</div>
              <div>
                <div className="testi__name">Sophie R.</div>
                <div className="testi__role">Particulier · Mulhouse</div>
              </div>
            </div>
          </div>

          <div className="testi reveal" data-delay="1">
            <div className="testi__quote-mark">“</div>
            <p className="testi__text">
              Travail d'orfèvre sur un fauteuil de famille. Maxime et son équipe ont su respecter le caractère de la pièce tout en la modernisant.
            </p>
            <div className="testi__author">
              <div className="testi__avatar">JM</div>
              <div>
                <div className="testi__name">Jean-Marc B.</div>
                <div className="testi__role">Particulier · Bâle</div>
              </div>
            </div>
          </div>

          <div className="testi reveal" data-delay="2">
            <div className="testi__quote-mark">“</div>
            <p className="testi__text">
              Pour nos suites hôtelières, nous cherchions un atelier capable de comprendre une charte. Kélane Créations a livré dans les temps, sans compromis.
            </p>
            <div className="testi__author">
              <div className="testi__avatar">CL</div>
              <div>
                <div className="testi__name">Camille L.</div>
                <div className="testi__role">Hôtellerie · Colmar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT TEASER */}
      <section className="contact-teaser">
        <div className="contact-teaser__bg">
          <img src="/images/storefront.jpg" alt="Contact" />
        </div>
        <span className="eyebrow reveal">Prendre rendez-vous</span>
        <h2 className="h-display reveal" data-delay="1">
          Venez à <em>l'atelier</em>.
        </h2>
        <p className="lead reveal" data-delay="2">
          120 Rue de l'Île Napoléon, Rixheim.<br />Du lundi au vendredi de 9h à 17h.
        </p>
        <div className="reveal" data-delay="3">
          <Link href="/contact" className="btn">
            Nous rencontrer
            <svg 
              className="arrow" 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <path d="M6 3l5 5-5 5" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
