"use client";

import useScrollReveal from "@/hooks/useScrollReveal";

export default function Services() {
  useScrollReveal();

  return (
    <main className="page">
      {/* SERVICES HERO */}
      <section className="svc-hero">
        <div className="svc-hero__inner">
          <div>
            <span className="eyebrow reveal">Services</span>
            <h1 className="h-display svc-hero__title reveal" data-delay="1" style={{ marginTop: "24px" }}>
              Nos <em>savoir-faire</em>.
            </h1>
          </div>
          <p className="lead reveal" data-delay="2">
            Un atelier complet pour habiller, restaurer et transformer vos intérieurs. Chaque mission est traitée avec la même exigence : qualité des matières, précision du geste, accompagnement personnalisé.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="svc-list">
        <div className="svc-row reveal">
          <div className="svc-row__num">01</div>
          <h2 className="svc-row__title">
            Tapisserie<br /><em>d'ameublement</em>
          </h2>
          <div className="svc-row__body">
            Remise en état complète de vos sièges : démontage, dégarnissage, réfection des sangles, des ressorts, des crins et des mousses, jusqu'à la pose du tissu d'apparat. Nous travaillons aussi bien le siège contemporain que la bergère Louis XV.
            <div className="svc-row__tags">
              <span>Fauteuils</span><span>Canapés</span><span>Banquettes</span><span>Sièges anciens</span>
            </div>
          </div>
          <div className="svc-row__thumb">
            <img src="/images/cushions-detail.jpg" alt="Tapisserie d'ameublement" />
          </div>
        </div>

        <div className="svc-row reveal">
          <div className="svc-row__num">02</div>
          <h2 className="svc-row__title">
            Rideaux <em>sur-mesure</em>
          </h2>
          <div className="svc-row__body">
            Étude des tombés et des têtes de rideaux, choix des doublures et thermo-collants, finitions à la main pour les pièces d'exception. Confection en atelier puis pose à domicile sur tringles, rails ou systèmes motorisés.
            <div className="svc-row__tags">
              <span>À plis</span><span>À œillets</span><span>Voilages</span><span>Doubles rideaux</span>
            </div>
          </div>
          <div className="svc-row__thumb">
            <img src="/images/interior-tree.jpg" alt="Rideaux sur-mesure" />
          </div>
        </div>

        <div className="svc-row reveal">
          <div className="svc-row__num">03</div>
          <h2 className="svc-row__title">Stores</h2>
          <div className="svc-row__body">
            Stores bateaux à plis croisés ou à plis plats, stores enrouleurs, stores vénitiens en bois noble. Réalisation dans le tissu de votre choix avec mécanismes silencieux et sécurisés conformes aux normes en vigueur.
            <div className="svc-row__tags">
              <span>Bateau</span><span>Enrouleur</span><span>Vénitien</span><span>Motorisation</span>
            </div>
          </div>
          <div className="svc-row__thumb">
            <img src="/images/storefront-window.jpg" alt="Stores" />
          </div>
        </div>

        <div className="svc-row reveal">
          <div className="svc-row__num">04</div>
          <h2 className="svc-row__title">Coussins</h2>
          <div className="svc-row__body">
            Coussins décoratifs aux formes et dimensions de votre choix. Mariage des textures, broderies, passementeries, finitions piquées ou cordées. Une signature personnelle qui rythme l'espace.
            <div className="svc-row__tags">
              <span>Décoratifs</span><span>Sièges</span><span>Banquettes</span><span>Extérieur</span>
            </div>
          </div>
          <div className="svc-row__thumb">
            <img src="/images/cushions-top.jpg" alt="Coussins" />
          </div>
        </div>

        <div className="svc-row reveal">
          <div className="svc-row__num">05</div>
          <h2 className="svc-row__title">Restauration</h2>
          <div className="svc-row__body">
            Pièces de famille, mobilier d'époque, sièges chinés : nous redonnons une seconde vie aux meubles à valeur sentimentale ou patrimoniale, dans le respect des techniques d'origine.
            <div className="svc-row__tags">
              <span>Sièges anciens</span><span>Bergères</span><span>Crapauds</span><span>Méridiennes</span>
            </div>
          </div>
          <div className="svc-row__thumb">
            <img src="/images/interior-swan.jpg" alt="Restauration" />
          </div>
        </div>

        <div className="svc-row reveal">
          <div className="svc-row__num">06</div>
          <h2 className="svc-row__title">Réparations</h2>
          <div className="svc-row__body">
            Réfection ponctuelle d'un accoudoir, remplacement d'une mousse affaissée, ajustement d'un mécanisme, recoutu invisible. Pour donner aux pièces que vous aimez les années supplémentaires qu'elles méritent.
            <div className="svc-row__tags">
              <span>Diagnostic</span><span>Devis gratuit</span><span>Interventions sur place</span>
            </div>
          </div>
          <div className="svc-row__thumb">
            <img src="/images/interior-sofa.jpg" alt="Réparations" />
          </div>
        </div>

        <div className="svc-row reveal">
          <div className="svc-row__num">07</div>
          <h2 className="svc-row__title">
            Livraison &amp; <em>pose</em>
          </h2>
          <div className="svc-row__body">
            Transport soigné de vos pièces, installation à domicile par notre équipe, conseils d'entretien et garantie sur les ouvrages. Un service complet, de l'atelier à votre intérieur.
            <div className="svc-row__tags">
              <span>Alsace</span><span>Bâle &amp; environs</span><span>Sur devis</span>
            </div>
          </div>
          <div className="svc-row__thumb">
            <img src="/images/cushions-mid.jpg" alt="Livraison &amp; pose" />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <div className="process__head reveal">
          <span className="eyebrow">Notre méthode</span>
          <h2 className="h-section" style={{ marginTop: "24px" }}>
            De la <em>visite</em> à la <em>pose</em>.
          </h2>
        </div>
        <div className="process__grid">
          <div className="step reveal">
            <span className="step__num">Étape 01</span>
            <div className="step__circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 21s-7-7.5-7-13a7 7 0 1 1 14 0c0 5.5-7 13-7 13z" />
                <circle cx="12" cy="8.5" r="2.5" />
              </svg>
            </div>
            <h4>Visite-conseil</h4>
            <p>
              À domicile ou à l'atelier. Échanges sur le projet, prise de mesures, sensibilité aux ambiances.
            </p>
          </div>

          <div className="step reveal" data-delay="1">
            <span className="step__num">Étape 02</span>
            <div className="step__circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="4" y="4" width="16" height="16" rx="1" />
                <path d="M4 9h16M9 4v16" />
              </svg>
            </div>
            <h4>Sélection des étoffes</h4>
            <p>
              Présentation des matières adaptées à votre projet. Échantillons, lumières, mises en regard.
            </p>
          </div>

          <div className="step reveal" data-delay="2">
            <span className="step__num">Étape 03</span>
            <div className="step__circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M3 7h18l-2 12H5L3 7z" />
                <path d="M3 7l1.5-3h15L21 7" />
                <path d="M9 11v4M15 11v4" />
              </svg>
            </div>
            <h4>Confection</h4>
            <p>
              Travail en atelier à Rixheim. Découpe, assemblage, garnissage. Finitions à la main pour les pièces d'exception.
            </p>
          </div>

          <div className="step reveal" data-delay="3">
            <span className="step__num">Étape 04</span>
            <div className="step__circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M3 12l3 3 5-5" />
                <path d="M21 6L11 16l-3-3" />
              </svg>
            </div>
            <h4>Pose &amp; suivi</h4>
            <p>
              Installation à domicile, conseils d'entretien et garantie. L'ouvrage prend sa place.
            </p>
          </div>
        </div>
      </section>

      {/* SPOTLIGHT */}
      <section className="svc-spotlight">
        <div className="svc-spotlight__inner">
          <img src="/images/interior-mural.jpg" className="reveal" alt="Showroom Kélane" />
          <div>
            <div className="eyebrow reveal" style={{ color: "rgba(243, 236, 225, .7)" }}>
              L'expérience Kélane
            </div>
            <h2 className="h-section reveal" data-delay="1" style={{ marginTop: "24px", color: "var(--ivory)" }}>
              Pourquoi nous <em>choisir</em>.
            </h2>
            <p className="reveal" data-delay="2">
              Chaque projet suit un cheminement précis, pensé pour la justesse du résultat et la sérénité du parcours.
            </p>
            <ul className="reveal" data-delay="3">
              <li>Un atelier indépendant, à taille humaine</li>
              <li>Plus de 300 références d'étoffes en showroom</li>
              <li>Confection 100% sur-mesure</li>
              <li>Pose et finitions à domicile</li>
              <li>Garantie sur tous les ouvrages</li>
              <li>Devis gratuit et sans engagement</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
