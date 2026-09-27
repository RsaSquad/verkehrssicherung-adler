const fs = require('fs');
const path = require('path');
const cities = require('./city-data.json');
const { pick, pickN, shuffle, buildHead, buildHeader, buildFooter, buildScripts, buildTrustBar, buildFaqItem, buildCrossLinks, buildLocalSection } = require('./template-utils');
const V = require('./ba-variants');

const cssSource = path.join(__dirname, 'baustellenabsicherung', 'baustellenabsicherung.css');
let generated = 0;

cities.forEach(city => {
    const slug = city.slug;
    const folderName = `baustellenabsicherung-${slug}`;
    const folderPath = path.join(__dirname, folderName);
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });
    if (fs.existsSync(cssSource)) fs.copyFileSync(cssSource, path.join(folderPath, 'baustellenabsicherung.css'));

    // Pick variants deterministically
    const heroSub = pick(V.heroSubtitles, slug, 'hero')(city);
    const secLabel = pick(V.sectionLabels, slug, 'seclabel');
    const p1 = pick(V.introP1, slug, 'p1')(city);
    const p2 = pick(V.introP2, slug, 'p2')(city);
    const p3 = pick(V.introP3, slug, 'p3')(city);
    const usecases = pickN(V.usecasePool, 6, slug, 'uc');
    const steps = pick(V.processStepVariants, slug, 'steps');
    const costIntro = pick(V.costIntros, slug, 'cost')(city);
    const costItems = pickN(V.costItemPool, 4, slug, 'ci');
    const faqs = pickN(V.faqPool, 10, slug, 'faq');
    const trustItems = pickN(V.trustBarPool, 4, slug, 'trust');
    const sidebarG = pick(V.sidebarGesetzlich, slug, 'sg')(city);
    const sidebarW = pick(V.sidebarWarum, slug, 'sw');
    const checklist = pickN(V.checklistPool, 7, slug, 'cl');
    const ctaTxt = pick(V.ctaTexts, slug, 'cta')(city);
    const footerD = pick(V.footerDescs, slug, 'foot')(city);

    const canonical = `https://www.verkehrssicherung.de/baustellenabsicherung-${slug}`;
    const ogImage = 'https://www.verkehrssicherung.de/baustellenabsicherung-hero.png';

    const head = buildHead({
        title: `Baustellenabsicherung ${city.name} | Professionelle Baustellensicherung | Verkehrssicherung`,
        description: `Professionelle Baustellenabsicherung in ${city.name} ✓ RSA-konform ✓ ${city.landkreis} ✓ Verkehrszeichenpläne ✓ Absperrungen & Beleuchtung ✓ Komplett-Service. Jetzt anfragen!`,
        keywords: `Baustellenabsicherung ${city.name}, Baustellensicherung ${city.name}, RSA Absicherung ${city.name}, Verkehrszeichenplan ${city.name}, ${city.landkreis}`,
        canonical, ogTitle: `Baustellenabsicherung ${city.name} | Professionell & RSA-konform`,
        ogDesc: `Professionelle Baustellenabsicherung in ${city.name} (${city.landkreis}) – RSA-konform. Jetzt anfragen!`,
        ogImage, ogImageAlt: `Baustellenabsicherung in ${city.name}`,
        twitterTitle: `Baustellenabsicherung ${city.name} | RSA-konform`,
        twitterDesc: `Professionelle Baustellenabsicherung in ${city.name}. ${city.landkreis}. Komplett-Service.`,
        geoRegion: `DE-${city.bundeslandCode}`, geoPlace: city.name, siteName: 'Verkehrssicherung',
        cssFiles: ['../style.css', 'baustellenabsicherung.css']
    });

    // JSON-LD
    const jsonLd = `
    <script type="application/ld+json">
    {"@context":"https://schema.org","@type":"Service","name":"Baustellenabsicherung ${city.name}","description":"Professionelle Baustellenabsicherung in ${city.name} (${city.landkreis}) nach RSA und MVAS.","provider":{"@type":"LocalBusiness","@id":"https://www.verkehrssicherung.de/#business","name":"Verkehrssicherung"},"serviceType":"Baustellenabsicherung ${city.name}","areaServed":[{"@type":"City","name":"${city.name}"},{"@type":"AdministrativeArea","name":"${city.landkreis}"}],"url":"${canonical}"}
    </script>
    <script type="application/ld+json">
    {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Startseite","item":"https://www.verkehrssicherung.de/"},{"@type":"ListItem","position":2,"name":"Baustellenabsicherung","item":"https://www.verkehrssicherung.de/baustellenabsicherung"},{"@type":"ListItem","position":3,"name":"Baustellenabsicherung ${city.name}","item":"${canonical}"}]}
    </script>
    <script type="application/ld+json">
    {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[${faqs.map(f => `{"@type":"Question","name":"${f.q(city).replace(/"/g,'\\"')}","acceptedAnswer":{"@type":"Answer","text":"${f.a(city).replace(/"/g,'\\"').replace(/<[^>]+>/g, '')}"}}`).join(',')}]}
    </script>`;

    const header = buildHeader();
    const trust = buildTrustBar(trustItems);

    // Icons for leistungen (reuse from base)
    const icons = [
        '<svg viewBox="0 0 24 24" fill="none"><path d="M12 2L15 8H9L12 2Z" fill="currentColor"/><rect x="11" y="8" width="2" height="10" rx="1" fill="currentColor" opacity="0.7"/><rect x="6" y="18" width="12" height="3" rx="1.5" fill="currentColor"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="2"/><path d="M3 9h18" stroke="currentColor" stroke-width="2"/><rect x="6" y="12" width="12" height="2" rx="1" fill="currentColor" opacity="0.4"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" fill="currentColor" opacity="0.3"/><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3.5 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="2"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    ];

    const leistungenItems = [
        { title: 'Absperrbaken & Leiteinrichtungen', text: `Aufstellung aller erforderlichen Absperrbaken und Leiteinrichtungen zur sicheren Verkehrsführung in ${city.name}.` },
        { title: 'Verkehrszeichen & Beschilderung', text: `Fachgerechte Aufstellung aller Warn-, Verbots- und Hinweiszeichen inkl. Umleitungsbeschilderung in ${city.name}.` },
        { title: 'Warnleuchten & Beleuchtung', text: `LED-Warnleuchten und Baustellenbeleuchtung für Tag- und Nachtsicherung an Ihrer Baustelle in ${city.name}.` },
        { title: 'Verkehrszeichenpläne', text: `Erstellung maßstabsgetreuer Verkehrszeichenpläne als Grundlage für die Genehmigung der ${city.behoerdeKurz}.` },
        { title: 'Kontrollfahrten & Wartung', text: `Regelmäßige Überprüfung aller Absicherungselemente in ${city.name} mit sofortiger Mängelbeseitigung.` },
        { title: 'Genehmigungen & Anordnungen', text: `Komplette Beantragung der verkehrsrechtlichen Anordnung bei der ${city.behoerdeKurz}.` }
    ];
    const shuffledLeistungen = shuffle(leistungenItems, slug, 'leist');

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
                    <li><a href="../baustellenabsicherung/">Baustellenabsicherung</a></li>
                    <li aria-current="page">Baustellenabsicherung ${city.name}</li>
                </ol>
            </div>
        </nav>

        <section class="sub-hero" aria-label="Baustellenabsicherung">
            <div class="sub-hero__bg">
                <img src="../baustellenabsicherung-hero.png" alt="Baustellenabsicherung in ${city.name}" loading="eager" width="1440" height="600">
                <div class="sub-hero__overlay"></div>
            </div>
            <div class="container sub-hero__content">
                <div class="hero__badge">✓ RSA-konforme Baustellenabsicherung in ${city.name} & Umgebung</div>
                <h1 class="sub-hero__title">Baustellenabsicherung in ${city.name}<br><span class="hero__highlight">professionell & RSA-konform</span></h1>
                <p class="sub-hero__subtitle">${heroSub}</p>
                <div class="hero__actions">
                    <a href="#kontakt-ba" class="btn btn--primary btn--lg"><span>Jetzt kostenlos anfragen</span><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
                    <a href="#ablauf-ba" class="btn btn--outline btn--lg">So funktioniert's</a>
                </div>
            </div>
        </section>

        ${trust}

        <section class="section" aria-label="Baustellenabsicherung ${city.name}">
            <div class="container">
                <div class="content-two-col">
                    <div class="content-main reveal">
                        <span class="section__label">${secLabel}</span>
                        <h2 class="section__title">Baustellenabsicherung in ${city.name}</h2>
                        <p>${p1}</p>
                        <p>${p2}</p>
                        <p>${p3}</p>
                        <h3>Unsere Absicherungsleistungen</h3>
                        <div class="leistungen-grid">
${shuffledLeistungen.map((l, i) => `                            <div class="leistung-item"><div class="leistung-item__icon">${icons[i % icons.length]}</div><div><h4>${l.title}</h4><p>${l.text}</p></div></div>`).join('\n')}
                        </div>
                    </div>
                    <aside class="content-sidebar reveal">
                        <div class="info-card info-card--accent">
                            <div class="info-card__icon"><svg viewBox="0 0 24 24" fill="none"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" stroke-width="2"/><path d="M12 9v4M12 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div>
                            <h3>Gesetzliche Pflicht</h3>
                            <p>${sidebarG}</p>
                        </div>
                        <div class="info-card">
                            <div class="info-card__icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" stroke-width="2"/><path d="M12 8v4M12 16h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div>
                            <h3>Warum professionell?</h3>
                            <p>${sidebarW}</p>
                        </div>
                        <div class="info-card info-card--highlight">
                            <div class="info-card__icon"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M22 4L12 14.01l-3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                            <h3>Ihre Vorteile</h3>
                            <ul class="checklist">${checklist.map(c => `<li>${c}</li>`).join('')}</ul>
                        </div>
                    </aside>
                </div>
            </div>
        </section>

        <section class="section" aria-label="Einsatzbereiche">
            <div class="container">
                <div class="section__header reveal">
                    <span class="section__label">Für jede Baustelle die passende Lösung</span>
                    <h2 class="section__title">Baustellenabsicherung in ${city.name} für alle Bauarten</h2>
                    <p class="section__desc">Von der kleinen Gehwegreparatur bis zur mehrspurigen Straßenbaustelle in ${city.name} – wir sichern jede Arbeitsstelle professionell ab.</p>
                </div>
                <div class="usecase-grid">
${usecases.map(uc => `                    <div class="usecase-card reveal"><div class="usecase-card__icon">${uc.icon}</div><h3>${uc.title}</h3><p>${uc.text(city)}</p></div>`).join('\n')}
                </div>
            </div>
        </section>

        <section class="section process-section" id="ablauf-ba" aria-label="So funktioniert's">
            <div class="container">
                <div class="section__header reveal">
                    <span class="section__label">Unser Ablauf</span>
                    <h2 class="section__title">Baustellenabsicherung in ${city.name} – 5 Schritte</h2>
                    <p class="section__desc">Von der Anfrage bis zum Abbau – wir sorgen für eine reibungslose Baustellenabsicherung in ${city.name}.</p>
                </div>
                <div class="process-steps reveal">
${steps.map((s, i) => `                    <div class="process-step"><div class="process-step__number">${String(i+1).padStart(2,'0')}</div><div class="process-step__content"><h3>${s.title}</h3><p>${s.text(city)}</p></div></div>`).join('\n')}
                </div>
            </div>
        </section>

        <section class="section" aria-label="Kosten">
            <div class="container">
                <div class="content-two-col">
                    <div class="content-main reveal">
                        <span class="section__label">Faire & transparente Preise</span>
                        <h2 class="section__title">Was kostet eine Baustellenabsicherung in ${city.name}?</h2>
                        <p>${costIntro}</p>
                        <div class="cost-breakdown">
${costItems.map(ci => `                            <div class="cost-item"><h4>${ci.title}</h4><p>${ci.text(city)}</p></div>`).join('\n')}
                        </div>
                        <p>Fordern Sie jetzt Ihr <strong>kostenloses und unverbindliches Angebot</strong> an – exakt zugeschnitten auf Ihre Baustelle in ${city.name}.</p>
                    </div>
                    <aside class="content-sidebar reveal">
                        <div class="info-card info-card--accent">
                            <div class="info-card__icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                            <h3>Kostenloses Angebot</h3>
                            <p>Wir erstellen Ihnen ein <strong>individuelles Angebot</strong> – transparent, fair und ohne versteckte Kosten. Alle Preise zzgl. MwSt.</p>
                        </div>
                    </aside>
                </div>
            </div>
        </section>

        <section class="section faq-section" aria-label="Häufig gestellte Fragen">
            <div class="container">
                <div class="section__header reveal">
                    <span class="section__label">FAQ</span>
                    <h2 class="section__title">Häufig gestellte Fragen zur Baustellenabsicherung in ${city.name}</h2>
                    <p class="section__desc">Antworten auf die wichtigsten Fragen rund um die Baustellenabsicherung in ${city.name}.</p>
                </div>
                <div class="faq-list reveal">
${faqs.map(f => `                    ${buildFaqItem(f.q(city), f.a(city))}`).join('\n')}
                </div>
            </div>
        </section>

        <section class="cta-banner" aria-label="Jetzt anfragen">
            <div class="container">
                <div class="cta-banner__inner reveal">
                    <h2>Baustellenabsicherung in ${city.name} benötigt?</h2>
                    <p>${ctaTxt}</p>
                    <a href="#kontakt-ba" class="btn btn--primary btn--lg"><span>Jetzt kostenlos anfragen</span><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
                </div>
            </div>
        </section>

        <section class="section contact" id="kontakt-ba" aria-label="Kontakt Baustellenabsicherung">
            <div class="container">
                <div class="contact__grid">
                    <div class="contact__info reveal">
                        <span class="section__label">Kontakt</span>
                        <h2 class="section__title">Baustellenabsicherung in ${city.name}<br>jetzt anfragen</h2>
                        <p class="contact__text">Teilen Sie uns die Details zu Ihrer Baustelle in ${city.name} mit. Wir erstellen Ihnen umgehend ein individuelles Angebot.</p>
                        <div class="contact__details">
                            <div class="contact__detail"><div class="contact__detail-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div><strong>Telefon</strong><p>+49 (0) 123 456 789</p></div></div>
                            <div class="contact__detail"><div class="contact__detail-icon"><svg viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" stroke-width="2"/><path d="M2 7l10 6 10-6" stroke="currentColor" stroke-width="2"/></svg></div><div><strong>E-Mail</strong><p>info@verkehrssicherung.de</p></div></div>
                        </div>
                    </div>
                    <div class="contact__form-wrapper reveal">
                        <form class="contact-form" id="contactForm" novalidate>
                            <h3 class="contact-form__title">Baustellenabsicherung anfragen</h3>
                            <div class="form-row">
                                <div class="form-group"><label for="ansprechpartner">Ansprechpartner *</label><input type="text" id="ansprechpartner" name="ansprechpartner" placeholder="Max Mustermann" required><span class="form-error">Bitte geben Sie Ihren Namen ein.</span></div>
                                <div class="form-group"><label for="firma">Firma (optional)</label><input type="text" id="firma" name="firma" placeholder="Musterfirma GmbH"></div>
                            </div>
                            <div class="form-row">
                                <div class="form-group"><label for="telefon">Telefonnummer *</label><input type="tel" id="telefon" name="telefon" placeholder="+49 123 456 789" required><span class="form-error">Bitte geben Sie eine Telefonnummer ein.</span></div>
                                <div class="form-group"><label for="email">E-Mail-Adresse *</label><input type="email" id="email" name="email" placeholder="info@firma.de" required><span class="form-error">Bitte geben Sie eine gültige E-Mail ein.</span></div>
                            </div>
                            <div class="form-group"><label for="standort">Baustellenadresse *</label><input type="text" id="standort" name="standort" placeholder="Straße, PLZ, ${city.name}" required><span class="form-error">Bitte geben Sie den Standort ein.</span></div>
                            <div class="form-group">
                                <label for="bauart">Art der Baustelle *</label>
                                <select id="bauart" name="bauart" required>
                                    <option value="" disabled selected>Bitte wählen</option>
                                    <option value="tiefbau">Tiefbau / Kanalsanierung</option>
                                    <option value="strassenbau">Straßenbau / Deckenerneuerung</option>
                                    <option value="leitungsbau">Leitungsbau (Strom/Gas/Wasser)</option>
                                    <option value="hochbau">Hochbau / Gerüst / Kran</option>
                                    <option value="gehweg">Gehweg- / Radwegabsicherung</option>
                                    <option value="sonstiges">Sonstiges</option>
                                </select>
                                <span class="form-error">Bitte wählen Sie eine Bauart.</span>
                            </div>
                            <div class="form-group"><label for="nachricht">Weitere Details</label><textarea id="nachricht" name="nachricht" rows="4" placeholder="Z.B. geplanter Zeitraum, Straßenklasse, besondere Anforderungen..."></textarea></div>
                            <div class="form-group form-group--checkbox">
                                <input type="checkbox" id="datenschutz" name="datenschutz" required>
                                <label for="datenschutz">Ich stimme der Verarbeitung meiner Daten gemäß der <a href="../datenschutz/" class="link">Datenschutzerklärung</a> zu. *</label>
                                <span class="form-error">Bitte akzeptieren Sie die Datenschutzerklärung.</span>
                            </div>
                            <button type="submit" class="btn btn--primary btn--full" id="submitBtn"><span>Anfrage absenden</span><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
                            <div class="form-success" id="formSuccess">
                                <div class="form-success__icon"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" fill="#10b981" opacity="0.15"/><path d="M14 24l7 7 13-13" stroke="#10b981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                                <h3>Vielen Dank!</h3>
                                <p>Ihre Anfrage für eine Baustellenabsicherung in ${city.name} wurde gesendet. Wir melden uns in Kürze.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        ${buildLocalSection(city, slug, 'Baustellenabsicherung')}
        ${buildCrossLinks('baustellenabsicherung', 'Baustellenabsicherung', city, cities, slug)}
    </main>

    ${buildFooter(footerD)}
    ${buildScripts()}
</body>
</html>`;

    fs.writeFileSync(path.join(folderPath, 'index.html'), html, 'utf8');
    generated++;
    console.log(`✅ ${folderName}/`);
});

console.log(`\n🎉 Fertig! ${generated} Baustellenabsicherung-Stadtseiten generiert.`);
