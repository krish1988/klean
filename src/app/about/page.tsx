"use client";

import useScrollReveal from "@/hooks/useScrollReveal";

export default function About() {
  useScrollReveal();

  return (
    <main className="page">
      {/* ABOUT HERO */}
      <section className="about-hero">
        <div className="about-hero__text">
          <span className="eyebrow reveal">L'Atelier</span>
          <h1 className="h-display reveal" data-delay="1">
            Un <em>regard</em><br />sur la matière.
          </h1>
          <p className="reveal" data-delay="2">
            Kélane Créations cultive l'art du tapissier-décorateur à Rixheim, dans le sillage des grandes traditions du textile alsacien. Un atelier indépendant, une équipe à taille humaine, une obsession unique : la qualité du geste.
          </p>
        </div>
        <div className="about-hero__media">
          <img src="/images/interior-mural-2.jpg" alt="Intérieur de l'atelier Kélane" />
        </div>
      </section>

      {/* GALLERY */}
      <section className="atelier-gallery">
        <div className="atelier-gallery__head reveal">
          <div>
            <span className="eyebrow">L'atelier en images</span>
            <h2 className="h-section" style={{ marginTop: "24px" }}>
              Un <em>lieu</em>, des matières.
            </h2>
          </div>
          <p className="lead">
            Notre showroom de Rixheim vous accueille pour voir, toucher, comparer. Un univers tactile où chaque projet trouve sa voix.
          </p>
        </div>
        <div className="atelier-grid">
          <div className="ag ag-1 zoom reveal">
            <img src="/images/interior-mural.jpg" alt="Showroom Kélane" />
          </div>
          <div className="ag ag-2 zoom reveal" data-delay="1">
            <img src="/images/cushions-top.jpg" alt="Coussins exposés" />
          </div>
          <div className="ag ag-3 zoom reveal" data-delay="2">
            <img src="/images/storefront-logo.jpg" alt="Logo de l'atelier" />
          </div>
          <div className="ag ag-4 zoom reveal" data-delay="1">
            <img src="/images/cushions-mid.jpg" alt="Coussins sur étagère" />
          </div>
          <div className="ag ag-5 zoom reveal" data-delay="2">
            <img src="/images/interior-swan.jpg" alt="Détail fauteuil" />
          </div>
          <div className="ag ag-6 zoom reveal" data-delay="3">
            <img src="/images/interior-sofa.jpg" alt="Canapé restauré" />
          </div>
          <div className="ag ag-7 zoom reveal" data-delay="2">
            <img src="/images/cushions-detail.jpg" alt="Détail couture" />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="story">
        <div className="story__inner">
          <h3 className="reveal">
            Une <em>maison</em> de famille,<br />une exigence de métier.
          </h3>
          <p className="reveal">
            Né de la passion d'un couple pour les beaux tissus et le mobilier de caractère, l'atelier Kélane Créations est devenu en quelques années une référence sur l'axe Mulhouse-Bâle. Un lieu où l'on vient choisir une étoffe comme on choisirait un parfum : avec lenteur, en se laissant guider.
          </p>
          <p className="reveal">
            Notre vocabulaire est celui du tapissier : sangles, crins, ressorts, embrasses, passementeries. Mais notre regard est résolument contemporain. Nous croyons qu'un savoir-faire ancien ne se transmet qu'à condition de le faire vivre dans nos intérieurs d'aujourd'hui.
          </p>
          <div className="pull reveal">
            « Une étoffe bien posée raconte autant que le meuble qu'elle habille. »
          </div>
          <h3 className="reveal">
            Les <em>matières</em><br />avant tout.
          </h3>
          <p className="reveal">
            Nous travaillons en partenariat avec les plus belles éditions textiles européennes et nous prêtons une attention particulière aux fabrications française et italienne. Lin, velours, jacquards, soies tissées : chaque pièce mérite la matière qui lui rendra son éclat.
          </p>
          <h3 className="reveal">
            Au cœur de <em>Rixheim</em>.
          </h3>
          <p className="reveal">
            Notre showroom de la rue de l'Île Napoléon accueille particuliers, architectes d'intérieur et professionnels de l'hôtellerie. On y vient pour voir, toucher, comparer — et repartir avec un projet qui prend forme.
          </p>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="partners">
        <div className="partners__head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Nos éditeurs
          </span>
          <h3 style={{ fontFamily: "var(--ff-display)", fontWeight: "300", fontSize: "clamp(24px, 2.2vw, 32px)", marginTop: "16px" }}>
            Maisons <em style={{ fontFamily: "var(--ff-italic)", fontStyle: "normal", color: "var(--rust)" }}>partenaires</em>.
          </h3>
        </div>
        <div className="partners__row reveal" data-delay="1">
          <span>Nobilis</span>
          <span>Casal</span>
          <span><em>Zephyr</em>&amp;Co</span>
          <span>Pierre Frey</span>
          <span>Designers Guild</span>
          <span>Romo</span>
        </div>
      </section>

      {/* VALUES */}
      <section className="values">
        <div className="values__inner">
          <div className="values__head reveal">
            <div>
              <span className="eyebrow">Nos engagements</span>
              <h2 className="h-section" style={{ marginTop: "24px" }}>
                Ce qui nous <em>tient.</em>
              </h2>
            </div>
            <p className="lead">
              Quatre principes simples qui guident chaque choix, chaque pièce, chaque rendez-vous.
            </p>
          </div>
          <div className="values__grid">
            <div className="value reveal">
              <span className="value__num">01</span>
              <h4>Le geste juste</h4>
              <p>
                La technique transmise par les maîtres tapissiers, appliquée avec rigueur à chaque ouvrage, du fauteuil de cuisine à la pièce de collection.
              </p>
            </div>
            <div className="value reveal" data-delay="1">
              <span className="value__num">02</span>
              <h4>Le sur-mesure absolu</h4>
              <p>
                Aucune commande ne ressemble à la précédente. Chaque projet est pensé pour un lieu, une lumière, une histoire.
              </p>
            </div>
            <div className="value reveal" data-delay="2">
              <span className="value__num">03</span>
              <h4>Des matières choisies</h4>
              <p>
                Étoffes européennes, fournisseurs sélectionnés un par un. La beauté commence avant la première coupe.
              </p>
            </div>
            <div className="value reveal" data-delay="3">
              <span className="value__num">04</span>
              <h4>Le temps qu'il faut</h4>
              <p>
                Nous travaillons à la cadence de l'ouvrage, jamais celle de la production. C'est aussi cela, l'artisanat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
