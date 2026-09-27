/**
 * Shared utilities for city page generation.
 * Provides deterministic variant selection based on city slug hashing.
 */

/**
 * Simple string hash → positive integer
 */
function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

/**
 * Pick ONE variant from an array, deterministically by slug + key
 */
function pick(variants, slug, key) {
    return variants[hashCode(slug + ':' + key) % variants.length];
}

/**
 * Pick N unique items from a pool, deterministically
 */
function pickN(pool, n, slug, key) {
    const base = hashCode(slug + ':' + key);
    const indices = [];
    const used = new Set();
    let attempt = 0;
    while (indices.length < n && indices.length < pool.length) {
        const idx = hashCode(slug + ':' + key + ':' + attempt) % pool.length;
        if (!used.has(idx)) { used.add(idx); indices.push(idx); }
        attempt++;
    }
    return indices.map(i => pool[i]);
}

/**
 * Deterministic shuffle of an array copy
 */
function shuffle(arr, slug, key) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = hashCode(slug + ':' + key + ':' + i) % (i + 1);
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

/**
 * Build <head> section
 */
function buildHead({ title, description, keywords, canonical, ogTitle, ogDesc, ogImage, ogImageAlt, twitterTitle, twitterDesc, geoRegion, geoPlace, siteName, cssFiles }) {
    return `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta name="keywords" content="${keywords}">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
    <meta name="author" content="${siteName || 'Verkehrssicherung'}">
    <meta name="language" content="de">
    <meta name="revisit-after" content="7 days">
    <link rel="canonical" href="${canonical}">
    <link rel="icon" type="image/png" href="../favicon.png">
    <link rel="apple-touch-icon" href="../favicon.png">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${canonical}">
    <meta property="og:title" content="${ogTitle}">
    <meta property="og:description" content="${ogDesc}">
    <meta property="og:image" content="${ogImage}">
    <meta property="og:image:alt" content="${ogImageAlt}">
    <meta property="og:locale" content="de_DE">
    <meta property="og:site_name" content="Verkehrssicherung">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${twitterTitle}">
    <meta name="twitter:description" content="${twitterDesc}">
    <meta name="twitter:image" content="${ogImage}">
    <meta name="geo.region" content="${geoRegion}">
    <meta name="geo.placename" content="${geoPlace}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
${cssFiles.map(f => `    <link rel="stylesheet" href="${f}">`).join('\n')}`;
}

/**
 * Build site header
 */
function buildHeader() {
    return `<header class="header scrolled" id="header" role="banner">
        <div class="container header__inner">
            <a href="../index.html" class="logo">
                <div class="logo__icon"><svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 2L37 12V28L20 38L3 28V12L20 2Z" fill="currentColor" opacity="0.15"/><path d="M20 6L33 14V26L20 34L7 26V14L20 6Z" stroke="currentColor" stroke-width="2"/><path d="M20 14V26M14 17L20 14L26 17M14 23L20 26L26 23" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div>
                <div class="logo__text"><span class="logo__name">Verkehrssicherung</span><span class="logo__tagline">Professionell &amp; Zuverlässig</span></div>
            </a>
            <nav class="nav" id="nav" role="navigation" aria-label="Hauptnavigation">
                <ul class="nav__list">
                    <li><a href="../index.html#leistungen" class="nav__link">Leistungen</a></li>
                    <li><a href="../index.html#ueber-uns" class="nav__link">Über uns</a></li>
                    <li><a href="#kontakt" class="nav__link nav__link--cta">Kontakt</a></li>
                </ul>
            </nav>
            <button class="hamburger" id="hamburger" aria-label="Menü öffnen"><span></span><span></span><span></span></button>
        </div>
    </header>`;
}

/**
 * Build site footer
 */
function buildFooter(footerDesc) {
    return `<footer class="footer" role="contentinfo">
        <div class="container">
            <div class="footer__grid">
                <div class="footer__brand">
                    <a href="../index.html" class="logo logo--footer">
                        <div class="logo__icon"><svg viewBox="0 0 40 40" fill="none"><path d="M20 2L37 12V28L20 38L3 28V12L20 2Z" fill="currentColor" opacity="0.15"/><path d="M20 6L33 14V26L20 34L7 26V14L20 6Z" stroke="currentColor" stroke-width="2"/><path d="M20 14V26M14 17L20 14L26 17M14 23L20 26L26 23" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div>
                        <div class="logo__text"><span class="logo__name">Verkehrssicherung</span></div>
                    </a>
                    <p class="footer__desc">${footerDesc}</p>
                </div>
                <div class="footer__links">
                    <h4>Leistungen</h4>
                    <ul>
                        <li><a href="../verkehrsabsicherung/">Verkehrsabsicherung</a></li>
                        <li><a href="../baustellenabsicherung/">Baustellenabsicherung</a></li>
                        <li><a href="../halteverbotszone/">Halteverbotszone</a></li>
                    </ul>
                </div>
                <div class="footer__links">
                    <h4>Rechtliches</h4>
                    <ul>
                        <li><a href="../impressum/">Impressum</a></li>
                        <li><a href="../datenschutz/">Datenschutz</a></li>
                        <li><a href="#">AGB</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer__bottom"><p>&copy; 2026 Verkehrssicherung. Alle Rechte vorbehalten.</p></div>
        </div>
    </footer>`;
}

/**
 * Build back-to-top button + scripts
 */
function buildScripts() {
    return `<button class="back-to-top" id="backToTop" aria-label="Nach oben scrollen"><svg viewBox="0 0 24 24" fill="none"><path d="M18 15l-6-6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <script src="../script.js" defer></script>
    <script>
        document.querySelectorAll('.faq-item').forEach(item => {
            item.addEventListener('toggle', () => {
                if (item.open) {
                    document.querySelectorAll('.faq-item').forEach(other => {
                        if (other !== item) other.open = false;
                    });
                }
            });
        });
    </script>`;
}

/**
 * Build trust bar
 */
function buildTrustBar(items) {
    const checkSvg = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    return `<div class="trust-bar">
            <div class="container">
                <div class="trust-bar__grid">
${items.map(t => `                    <div class="trust-bar__item">${checkSvg}${t}</div>`).join('\n')}
                </div>
            </div>
        </div>`;
}

/**
 * Build FAQ item
 */
function buildFaqItem(question, answer) {
    return `<details class="faq-item"><summary class="faq-item__question">${question}<svg class="faq-item__chevron" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></summary><div class="faq-item__answer"><p>${answer}</p></div></details>`;
}

/**
 * Build cross-linking section to nearby cities
 * @param {string} serviceType - 'baustellenabsicherung', 'verkehrsabsicherung', or 'halteverbotszone'
 * @param {string} serviceName - Display name e.g. 'Baustellenabsicherung'
 * @param {object} currentCity - Current city object
 * @param {array} allCities - All city objects
 * @param {string} slug - Current city slug
 */
function buildCrossLinks(serviceType, serviceName, currentCity, allCities, slug) {
    // Get nachbarorte that exist in our city list
    const nachbarSlugs = (currentCity.nachbarorte || []).map(n => {
        const found = allCities.find(c => c.name === n);
        return found ? found : null;
    }).filter(Boolean);

    // Pick up to 8 nearby cities, plus 2-3 from other regions for variety
    const nearby = nachbarSlugs.slice(0, 8);
    const otherCities = pickN(
        allCities.filter(c => c.slug !== slug && !nachbarSlugs.find(n => n.slug === c.slug)),
        3, slug, 'crosslink'
    );
    const linkCities = [...nearby, ...otherCities].slice(0, 10);

    if (linkCities.length === 0) return '';

    return `
        <section class="section cross-links" aria-label="Weitere Standorte">
            <div class="container">
                <div class="section__header reveal">
                    <span class="section__label">Weitere Standorte</span>
                    <h2 class="section__title">${serviceName} auch in diesen Städten</h2>
                    <p class="section__desc">Wir bieten ${serviceName} nicht nur in ${currentCity.name} an. Entdecken Sie unseren Service in weiteren Städten der Region.</p>
                </div>
                <div class="cross-links__grid reveal">
${linkCities.map(c => `                    <a href="../${serviceType}-${c.slug}/" class="cross-link__item">
                        <span class="cross-link__city">${c.name}</span>
                        <span class="cross-link__region">${c.landkreis}</span>
                    </a>`).join('\n')}
                </div>
            </div>
        </section>`;
}

/**
 * Build a city-specific extra section (shown deterministically for ~60% of cities)
 */
function buildLocalSection(city, slug, serviceName) {
    const show = hashCode(slug + ':localsection') % 10 < 6; // 60% of cities get this
    if (!show) return '';

    const localTexts = [
        (c) => `<p>${c.name} liegt im ${c.landkreis} und ist über die umliegenden Verkehrsanbindungen gut erreichbar. Für die ${serviceName} in ${c.name} stimmen wir uns eng mit der ${c.behoerdeKurz} ab und kennen die lokalen Besonderheiten und Anforderungen genau.</p>`,
        (c) => `<p>Als regional verwurzelter Dienstleister kennen wir ${c.name} und den ${c.landkreis} bestens. Die Zusammenarbeit mit der ${c.behoerdeKurz} ist eingespielt, sodass Genehmigungen für die ${serviceName} in ${c.name} zügig erteilt werden.</p>`,
        (c) => `<p>Im ${c.landkreis} rund um ${c.name} sind wir regelmäßig im Einsatz. Die ${c.behoerdeKurz} kennt uns als zuverlässigen Partner für ${serviceName}. Auch in den Nachbarorten ${c.nachbarorte.slice(0,3).join(', ')} sind wir häufig tätig.</p>`,
        (c) => `<p>${c.name} im ${c.landkreis} gehört zu unserem Kerngebiet. Wir kennen die Straßenverhältnisse, die zuständige ${c.behoerdeKurz} und die spezifischen Anforderungen vor Ort. Das ermöglicht uns eine schnelle und unkomplizierte ${serviceName}.</p>`
    ];

    const text = pick(localTexts, slug, 'localtext')(city);

    return `
        <section class="section local-section" aria-label="Lokale Informationen">
            <div class="container">
                <div class="content-main reveal">
                    <span class="section__label">Lokal verankert</span>
                    <h2 class="section__title">${serviceName} in ${city.name} – Ihre Region, unser Einsatzgebiet</h2>
                    ${text}
                </div>
            </div>
        </section>`;
}

module.exports = { hashCode, pick, pickN, shuffle, buildHead, buildHeader, buildFooter, buildScripts, buildTrustBar, buildFaqItem, buildCrossLinks, buildLocalSection };
