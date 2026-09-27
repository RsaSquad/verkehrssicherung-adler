const fs = require('fs');
const path = require('path');
const cities = require('./city-data.json');
const { pick, pickN, shuffle, buildHead, buildHeader, buildFooter, buildScripts, buildFaqItem, buildCrossLinks, buildLocalSection } = require('./template-utils');
const V = require('./hv-variants');

const cssSource = path.join(__dirname, 'halteverbotszone', 'halteverbotszone.css');
let generated = 0;

cities.forEach(city => {
    const slug = city.slug;
    const folderName = `halteverbotszone-${slug}`;
    const folderPath = path.join(__dirname, folderName);
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });
    if (fs.existsSync(cssSource)) fs.copyFileSync(cssSource, path.join(folderPath, 'halteverbotszone.css'));

    const heroSub = pick(V.heroSubtitles, slug, 'hero')(city);
    const secLabel = pick(V.sectionLabels, slug, 'seclabel');
    const p1 = pick(V.introP1, slug, 'p1')(city);
    const p2 = pick(V.introP2, slug, 'p2')(city);
    const p3 = pick(V.introP3, slug, 'p3')(city);
    const usecases = pickN(V.usecasePool, 6, slug, 'uc');
    const steps = pick(V.processStepVariants, slug, 'steps');
    const costIntro = pick(V.costIntros, slug, 'cost')(city);
    const costItems = pickN(V.costItemPool, 3, slug, 'ci');
    const faqs = pickN(V.faqPool, 10, slug, 'faq');
    const trustItems = pickN(V.trustBarPool, 4, slug, 'trust');
    const sidebarG = pick(V.sidebarGutZuWissen, slug, 'sg')(city);
    const sidebarW = pick(V.sidebarWarnung, slug, 'sw')(city);
    const sidebarT = pick(V.sidebarTipp, slug, 'st')(city);
    const checklist = pickN(V.checklistPool, 8, slug, 'cl');
    const ctaTxt = pick(V.ctaTexts, slug, 'cta')(city);
    const footerD = pick(V.footerDescs, slug, 'foot')(city);

    const canonical = `https://www.verkehrssicherung.de/halteverbotszone-${slug}`;
    const ogImage = 'https://www.verkehrssicherung.de/halteverbotszone-hero.png';

    const head = buildHead({
        title: `Halteverbotszone einrichten ${city.name} | Schnell & Günstig | Verkehrssicherung`,
        description: `Halteverbotszone einrichten in ${city.name} ✓ Genehmigung & Aufstellung ✓ ${city.landkreis} ✓ Für Umzug, Baustelle & Lieferung ✓ Festpreise. Jetzt anfragen!`,
        keywords: `Halteverbotszone ${city.name}, Halteverbot beantragen ${city.name}, Halteverbotszone Umzug ${city.name}, Halteverbotszone Kosten ${city.name}, ${city.landkreis}`,
        canonical, ogTitle: `Halteverbotszone einrichten ${city.name} | Schnell & Günstig`,
        ogDesc: `Halteverbotszone in ${city.name} einrichten lassen – Genehmigung, Aufstellung & Abbau aus einer Hand. Jetzt anfragen!`,
        ogImage, ogImageAlt: `Halteverbotszone einrichten in ${city.name}`,
        twitterTitle: `Halteverbotszone ${city.name} | Verkehrssicherung`,
        twitterDesc: `Halteverbotszone in ${city.name} – Genehmigung, Aufstellung & Abbau. Festpreise.`,
        geoRegion: `DE-${city.bundeslandCode}`, geoPlace: city.name, siteName: 'Verkehrssicherung',
        cssFiles: ['../style.css', 'halteverbotszone.css']
    });

    const jsonLd = `
    <script type="application/ld+json">
    {"@context":"https://schema.org","@type":"Service","name":"Halteverbotszone einrichten ${city.name}","description":"Professionelle Einrichtung von Halteverbotszonen in ${city.name} (${city.landkreis}). Genehmigung, Aufstellung und Abbau aus einer Hand.","provider":{"@type":"LocalBusiness","@id":"https://www.verkehrssicherung.de/#business","name":"Verkehrssicherung"},"serviceType":"Halteverbotszone einrichten","areaServed":[{"@type":"City","name":"${city.name}"},{"@type":"AdministrativeArea","name":"${city.landkreis}"}],"url":"${canonical}"}
    </script>
    <script type="application/ld+json">
    {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Startseite","item":"https://www.verkehrssicherung.de/"},{"@type":"ListItem","position":2,"name":"Halteverbotszone","item":"https://www.verkehrssicherung.de/halteverbotszone"},{"@type":"ListItem","position":3,"name":"Halteverbotszone ${city.name}","item":"${canonical}"}]}
    </script>
    <script type="application/ld+json">
    {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[${faqs.map(f => `{"@type":"Question","name":"${f.q(city).replace(/"/g,'\\"')}","acceptedAnswer":{"@type":"Answer","text":"${f.a(city).replace(/"/g,'\\"').replace(/<[^>]+>/g, '')}"}}`).join(',')}]}
    </script>`;

    const header = buildHeader();

    // HV trust bar uses different SVG icons
    const trustSvgs = [
        '<svg viewBox="0 0 24 24" fill="none" width="28" height="28"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" width="28" height="28"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" width="28" height="28"><path d="M17 9V7a5 5 0 00-10 0v2M5 9h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" width="28" height="28"><path d="M3 10h18M3 14h18M12 3v18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
    ];
    const trustHtml = `<section class="trust-bar" aria-label="Vorteile"><div class="container"><div class="trust-bar__grid">
${trustItems.map((t, i) => `            <div class="trust-bar__item">${trustSvgs[i % trustSvgs.length]}<span>${t}</span></div>`).join('\n')}
        </div></div></section>`;

    const html = `<!DOCTYPE html>
<html lang="de">
${head}
${jsonLd}
</head>

<body itemscope itemtype="https://schema.org/WebPage">
    ${header}

    <main id="main-content" role="main">
        <nav class="breadcrumb" aria-label="Breadcrumb">
            <div class="container">
                <ol class="breadcrumb__list">
                    <li><a href="../index.html">Startseite</a></li>
                    <li><a href="../halteverbotszone/">Halteverbotszone</a></li>
                    <li aria-current="page">Halteverbotszone ${city.name}</li>
                </ol>
            </div>
        </nav>

        <section class="sub-hero" aria-label="Halteverbotszone einrichten">
            <div class="sub-hero__bg">
                <img src="../halteverbotszone-hero.png" alt="Halteverbotszone einrichten in ${city.name}" loading="eager" width="1440" height="600">
                <div class="sub-hero__overlay"></div>
            </div>
            <div class="container sub-hero__content">
                <div class="hero__badge">✓ Ihr Partner für Halteverbotszonen in ${city.name} & Umgebung</div>
                <h1 class="sub-hero__title">Halteverbotszone in ${city.name}<br><span class="hero__highlight">einrichten lassen</span></h1>
                <p class="sub-hero__subtitle">${heroSub}</p>
                <div class="hero__actions">
                    <a href="#kontakt-hvz" class="btn btn--primary btn--lg"><span>Jetzt kostenlos anfragen</span><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
                    <a href="#ablauf" class="btn btn--outline btn--lg">So funktioniert's</a>
                </div>
            </div>
        </section>

        ${trustHtml}

        <section class="section content-section" aria-label="Was ist eine Halteverbotszone">
            <div class="container">
                <div class="content-two-col">
                    <div class="content-main reveal">
                        <span class="section__label">${secLabel}</span>
                        <h2 class="section__title">Was ist eine Halteverbotszone in ${city.name}?</h2>
                        <p>${p1}</p>
                        <p>${p2}</p>
                        <p>${p3}</p>
                    </div>
                    <aside class="content-sidebar reveal">
                        <div class="info-card">
                            <div class="info-card__icon"><svg viewBox="0 0 24 24" fill="none"><path d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div>
                            <h3>Gut zu wissen</h3>
                            <p>${sidebarG}</p>
                        </div>
                        <div class="info-card info-card--accent">
                            <div class="info-card__icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 9v2m0 4h.01M5.07 19H19a2 2 0 001.73-3L13.73 4a2 2 0 00-3.46 0L3.34 16A2 2 0 005.07 19z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div>
                            <h3>Wichtiger Hinweis</h3>
                            <p>${sidebarW}</p>
                        </div>
                        <div class="info-card">
                            <div class="info-card__icon"><svg viewBox="0 0 24 24" fill="none"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div>
                            <h3>Unser Tipp</h3>
                            <p>${sidebarT}</p>
                        </div>
                    </aside>
                </div>
            </div>
        </section>

        <section class="section process-section" id="ablauf" aria-label="Ablauf">
            <div class="container">
                <div class="section__header reveal">
                    <span class="section__label">Schritt für Schritt</span>
                    <h2 class="section__title">So richten wir Ihre Halteverbotszone in ${city.name} ein</h2>
                    <p class="section__desc">Von der Anfrage bis zum Abbau – wir kümmern uns um alles.</p>
                </div>
                <div class="process-steps">
${steps.map((s, i) => `                    <div class="process-step reveal"><div class="process-step__number">${String(i+1).padStart(2,'0')}</div><div class="process-step__content"><h3>${s.title}</h3><p>${s.text(city)}</p></div></div>`).join('\n')}
                </div>
            </div>
        </section>

        <section class="section use-cases" aria-label="Anwendungsfälle">
            <div class="container">
                <div class="section__header reveal">
                    <span class="section__label">Einsatzgebiete</span>
                    <h2 class="section__title">Halteverbotszone in ${city.name} für jeden Anlass</h2>
                    <p class="section__desc">Egal ob privater Umzug oder gewerbliche Baustelle – wir haben die passende Lösung.</p>
                </div>
                <div class="usecase-grid">
${usecases.map(uc => `                    <article class="usecase-card reveal"><div class="usecase-card__icon">${uc.icon}</div><h3>${uc.title} in ${city.name}</h3><p>${uc.text(city)}</p></article>`).join('\n')}
                </div>
            </div>
        </section>

        <section class="section pricing-info" aria-label="Kosten und Preise">
            <div class="container">
                <div class="content-two-col">
                    <div class="content-main reveal">
                        <span class="section__label">Kosten & Preise</span>
                        <h2 class="section__title">Was kostet eine Halteverbotszone in ${city.name}?</h2>
                        <p>${costIntro}</p>
                        <div class="cost-breakdown">
${costItems.map(ci => `                            <div class="cost-item"><h4>${ci.title}</h4><p>${ci.text(city)}</p></div>`).join('\n')}
                        </div>
                        <p>Wir erstellen Ihnen gerne ein <strong>kostenloses und unverbindliches Angebot für Ihre Halteverbotszone in ${city.name}</strong>.</p>
                        <a href="#kontakt-hvz" class="btn btn--primary"><span>Kostenloses Angebot anfordern</span><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
                    </div>
                    <aside class="content-sidebar reveal">
                        <div class="info-card info-card--highlight">
                            <h3>✓ In unserem Service enthalten</h3>
                            <ul class="checklist">${checklist.map(c => `<li>${c}</li>`).join('')}</ul>
                        </div>
                    </aside>
                </div>
            </div>
        </section>

        <section class="section faq-section" id="faq" aria-label="Häufig gestellte Fragen">
            <div class="container">
                <div class="section__header reveal">
                    <span class="section__label">FAQ</span>
                    <h2 class="section__title">Häufig gestellte Fragen zur Halteverbotszone in ${city.name}</h2>
                    <p class="section__desc">Antworten auf die wichtigsten Fragen rund um Halteverbotszonen in ${city.name}.</p>
                </div>
                <div class="faq-list">
${faqs.map(f => `                    ${buildFaqItem(f.q(city), f.a(city))}`).join('\n')}
                </div>
            </div>
        </section>

        <section class="cta-banner" aria-label="Jetzt anfragen">
            <div class="container">
                <div class="cta-banner__inner reveal">
                    <h2>Halteverbotszone in ${city.name} benötigt?</h2>
                    <p>${ctaTxt}</p>
                    <a href="#kontakt-hvz" class="btn btn--primary btn--lg"><span>Jetzt kostenlos anfragen</span><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
                </div>
            </div>
        </section>

        <section class="section contact" id="kontakt-hvz" aria-label="Kontakt Halteverbotszone">
            <div class="container">
                <div class="contact__grid">
                    <div class="contact__info reveal">
                        <span class="section__label">Kontakt</span>
                        <h2 class="section__title">Halteverbotszone in ${city.name}<br>jetzt anfragen</h2>
                        <p class="contact__text">Teilen Sie uns Ihren Wunschtermin, den Standort in ${city.name} und den Anlass mit. Wir erstellen Ihnen umgehend ein Angebot.</p>
                        <div class="contact__details">
                            <div class="contact__detail"><div class="contact__detail-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div><strong>Telefon</strong><p>+49 (0) 123 456 789</p></div></div>
                            <div class="contact__detail"><div class="contact__detail-icon"><svg viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" stroke-width="2"/><path d="M2 7l10 6 10-6" stroke="currentColor" stroke-width="2"/></svg></div><div><strong>E-Mail</strong><p>info@verkehrssicherung.de</p></div></div>
                        </div>
                    </div>
                    <div class="contact__form-wrapper reveal">
                        <form class="contact-form" id="contactForm" novalidate>
                            <h3 class="contact-form__title">Halteverbotszone anfragen</h3>
                            <div class="form-row">
                                <div class="form-group"><label for="ansprechpartner">Ansprechpartner *</label><input type="text" id="ansprechpartner" name="ansprechpartner" placeholder="Max Mustermann" required><span class="form-error">Bitte geben Sie Ihren Namen ein.</span></div>
                                <div class="form-group"><label for="firma">Firma (optional)</label><input type="text" id="firma" name="firma" placeholder="Musterfirma GmbH"></div>
                            </div>
                            <div class="form-row">
                                <div class="form-group"><label for="telefon">Telefonnummer *</label><input type="tel" id="telefon" name="telefon" placeholder="+49 123 456 789" required><span class="form-error">Bitte geben Sie eine Telefonnummer ein.</span></div>
                                <div class="form-group"><label for="email">E-Mail-Adresse *</label><input type="email" id="email" name="email" placeholder="info@firma.de" required><span class="form-error">Bitte geben Sie eine gültige E-Mail ein.</span></div>
                            </div>
                            <div class="form-group"><label for="standort">Standort der Halteverbotszone *</label><input type="text" id="standort" name="standort" placeholder="Straße, PLZ, ${city.name}" required><span class="form-error">Bitte geben Sie den Standort ein.</span></div>
                            <div class="form-group">
                                <label for="anlass">Anlass *</label>
                                <select id="anlass" name="anlass" required>
                                    <option value="" disabled selected>Bitte wählen</option>
                                    <option value="umzug">Umzug</option>
                                    <option value="baustelle">Baustelle / Container</option>
                                    <option value="lieferung">Lieferung / Anlieferung</option>
                                    <option value="geruest">Gerüst / Kran</option>
                                    <option value="dreharbeiten">Dreharbeiten</option>
                                    <option value="veranstaltung">Veranstaltung</option>
                                    <option value="sonstiges">Sonstiges</option>
                                </select>
                                <span class="form-error">Bitte wählen Sie einen Anlass.</span>
                            </div>
                            <div class="form-group"><label for="nachricht">Weitere Details</label><textarea id="nachricht" name="nachricht" rows="4" placeholder="Z.B. Wunschtermin, Zonenlänge, besondere Anforderungen..."></textarea></div>
                            <div class="form-group form-group--checkbox">
                                <input type="checkbox" id="datenschutz" name="datenschutz" required>
                                <label for="datenschutz">Ich stimme der Verarbeitung meiner Daten gemäß der <a href="../datenschutz/" class="link">Datenschutzerklärung</a> zu. *</label>
                                <span class="form-error">Bitte akzeptieren Sie die Datenschutzerklärung.</span>
                            </div>
                            <button type="submit" class="btn btn--primary btn--full" id="submitBtn"><span>Anfrage absenden</span><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
                            <div class="form-success" id="formSuccess">
                                <div class="form-success__icon"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" fill="#10b981" opacity="0.15"/><path d="M14 24l7 7 13-13" stroke="#10b981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                                <h3>Vielen Dank!</h3>
                                <p>Ihre Anfrage für eine Halteverbotszone in ${city.name} wurde gesendet. Wir melden uns in Kürze.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        ${buildLocalSection(city, slug, 'Halteverbotszone')}
        ${buildCrossLinks('halteverbotszone', 'Halteverbotszone', city, cities, slug)}
    </main>

    ${buildFooter(footerD)}
    ${buildScripts()}
</body>
</html>`;

    fs.writeFileSync(path.join(folderPath, 'index.html'), html, 'utf8');
    generated++;
    console.log(`✅ ${folderName}/`);
});

console.log(`\n🎉 Fertig! ${generated} Halteverbotszone-Stadtseiten generiert.`);
