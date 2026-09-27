/**
 * Text variant pools for Verkehrsabsicherung city pages.
 */

const heroSubtitles = [
    (c) => `Wir sichern Ihre Baustellen und Arbeitsstellen in ${c.name} (${c.landkreis}) fachgerecht ab – nach RSA und MVAS. Genehmigung bei der ${c.behoerdeKurz}, Aufstellung und Abbau: alles aus einer Hand. Auch in ${c.nachbarorte.slice(0,2).join(' und ')}.`,
    (c) => `Professionelle Verkehrsabsicherung für ${c.name}: Von der Planung über die Genehmigung bei der ${c.behoerdeKurz} bis zum Abbau – wir übernehmen alles. RSA- und MVAS-konform.`,
    (c) => `Ihr zuverlässiger Partner für Verkehrsabsicherung in ${c.name} und dem ${c.landkreis}. Wir planen, beantragen und setzen um – termingerecht und normgerecht.`,
    (c) => `Verkehrsabsicherung in ${c.name} aus einer Hand: Verkehrszeichenpläne, behördliche Genehmigungen bei der ${c.behoerdeKurz} und fachgerechte Umsetzung durch MVAS-geschultes Personal.`,
    (c) => `Sichere Straßen in ${c.name}: Wir übernehmen die komplette Verkehrsabsicherung – von der Antragstellung bei der ${c.behoerdeKurz} bis zur letzten Kontrollfahrt.`
];

const sectionLabels = [
    'Sicherheit für Ihren Verkehrsraum',
    'Professionell & normgerecht',
    'Komplettservice Verkehrsabsicherung',
    'Von Experten für Ihre Sicherheit',
    'Alles aus einer Hand'
];

const introP1 = [
    (c) => `Die <strong>Verkehrsabsicherung in ${c.name}</strong> umfasst alle Maßnahmen zur Sicherung von Arbeitsstellen im öffentlichen Straßenverkehr. Grundlage sind die <strong>RSA</strong> (Richtlinien für die Sicherung von Arbeitsstellen) und das <strong>MVAS</strong>.`,
    (c) => `Unter <strong>Verkehrsabsicherung</strong> versteht man die Gesamtheit aller Maßnahmen, die Arbeitsstellen im Straßenverkehr von ${c.name} sicher machen. Dazu gehören Beschilderung, Absperrungen, Beleuchtung und Verkehrsführung nach <strong>RSA</strong>.`,
    (c) => `<strong>Verkehrsabsicherung in ${c.name}</strong> bedeutet: fachgerechter Schutz von Verkehrsteilnehmern und Arbeitskräften an Baustellen und Arbeitsstellen. Die gesetzliche Grundlage bilden die <strong>RSA-Richtlinien</strong> und das <strong>MVAS</strong>.`,
    (c) => `Jede Arbeitsstelle im Straßenraum von ${c.name} muss nach den <strong>Richtlinien für die Sicherung von Arbeitsstellen (RSA)</strong> gesichert werden. Die <strong>Verkehrsabsicherung</strong> schützt dabei alle Beteiligten – Arbeiter, Fußgänger und Autofahrer.`,
    (c) => `Die <strong>Verkehrsabsicherung</strong> sichert Arbeitsstellen im öffentlichen Straßenraum von ${c.name} und schützt Bauarbeiter wie Verkehrsteilnehmer. Maßgeblich sind die <strong>RSA</strong> und das <strong>MVAS</strong>, deren Einhaltung die ${c.behoerdeKurz} überwacht.`
];

const introP2 = [
    (c) => `Als erfahrener Dienstleister für Verkehrsabsicherung in ${c.name} und Umgebung übernehmen wir den <strong>kompletten Prozess</strong> für Sie: von der Erstellung des Verkehrszeichenplans über die Beantragung der verkehrsrechtlichen Anordnung bei der ${c.behoerdeKurz} bis zum fachgerechten Aufbau und Abbau.`,
    (c) => `Wir bieten <strong>Verkehrsabsicherung als Komplettservice in ${c.name}</strong>: Planung, Genehmigung bei der ${c.behoerdeKurz}, Aufbau durch MVAS-geschultes Personal und regelmäßige Kontrollfahrten – Sie kümmern sich um nichts.`,
    (c) => `Von der Verkehrszeichenplanung bis zur Kontrollfahrt: Unsere <strong>Verkehrsabsicherung in ${c.name}</strong> deckt den gesamten Prozess ab. Die Genehmigung bei der ${c.behoerdeKurz} beantragen wir selbstverständlich für Sie.`,
    (c) => `Unser Full-Service für ${c.name}: <strong>Verkehrsabsicherung aus einer Hand</strong>. Wir erstellen Verkehrszeichenpläne, holen die Anordnung bei der ${c.behoerdeKurz} ein und setzen alles termingerecht um.`,
    (c) => `In ${c.name} und dem gesamten ${c.landkreis} sind wir Ihr Partner für <strong>professionelle Verkehrsabsicherung</strong>. Von der Planung bis zum Abbau koordinieren wir alles – inklusive Abstimmung mit der ${c.behoerdeKurz}.`
];

const introP3 = [
    (c) => `Unser Leistungsspektrum umfasst die Absicherung aller Straßenklassen in ${c.name} – von der Gemeindestraße bis zur Bundesstraße. Mit modernem Equipment und <strong>MVAS-zertifiziertem Personal</strong> garantieren wir höchste Sicherheitsstandards.`,
    (c) => `Ob Gehwegabsicherung, Fahrbahneinengung oder komplette Straßensperrung in ${c.name} – wir haben die Erfahrung und Ausrüstung für jede Anforderung. Unsere Mitarbeiter sind nach <strong>MVAS</strong> geschult und regelmäßig fortgebildet.`,
    (c) => `Mit unserem eigenen Fuhrpark und <strong>MVAS-geschultem Fachpersonal</strong> sind wir für jede Verkehrsabsicherung in ${c.name} gerüstet – von der temporären Gehwegsicherung bis zur langfristigen Großbaustelle.`,
    (c) => `Wir sichern in ${c.name} alle Arten von Arbeitsstellen ab: Gehwege, Radwege, innerörtliche Straßen und Überlandstraßen. Unser <strong>MVAS-geschultes Team</strong> arbeitet präzise nach RSA-Regelplänen.`,
    (c) => `Von der kleinen Leitungsbaustelle bis zur großen Straßenbaumaßnahme in ${c.name}: Unsere <strong>Verkehrsabsicherung</strong> ist immer RSA-konform. Alle Mitarbeiter verfügen über die erforderliche MVAS-Qualifikation.`
];

const usecasePool = [
    { icon: '🏗️', title: 'Baustellenabsicherung', text: (c) => `Komplette Absicherung von Baustellen aller Art in ${c.name} – von Tiefbau bis Hochbau, RSA-konform und mit Verkehrszeichenplan.` },
    { icon: '🛣️', title: 'Straßenbauarbeiten', text: (c) => `Absicherung von Asphaltier- und Straßenbauarbeiten in ${c.name} mit Fahrbahneinengung, Überleitung und Umleitungsbeschilderung.` },
    { icon: '💡', title: 'Versorgungsleitungen', text: (c) => `Sicherung bei Verlegung und Reparatur von Strom-, Gas- und Wasserleitungen in ${c.name} mit minimaler Verkehrsbeeinträchtigung.` },
    { icon: '🚶', title: 'Gehweg- & Radwegsicherung', text: (c) => `Sichere Führung von Fußgängern und Radfahrern um Arbeitsstellen in ${c.name} mit barrierefreien Zugängen.` },
    { icon: '🎪', title: 'Veranstaltungsabsicherung', text: (c) => `Verkehrsabsicherung für Veranstaltungen, Feste und Märkte in ${c.name} – mit Sperrplänen und Umleitungskonzepten.` },
    { icon: '🌙', title: 'Nacht- & Wochenendarbeiten', text: (c) => `Spezielle Beleuchtungskonzepte und reflektierende Absicherungen für Arbeiten bei Dunkelheit in ${c.name}.` },
    { icon: '🚧', title: 'Vollsperrungen', text: (c) => `Planung und Umsetzung von Vollsperrungen mit Umleitungsbeschilderung für Baumaßnahmen in ${c.name}.` },
    { icon: '🚦', title: 'Mobile Ampelregelung', text: (c) => `Einrichtung mobiler Lichtsignalanlagen bei Fahrbahnverengungen und Einbahnstraßenregelungen in ${c.name}.` },
    { icon: '📋', title: 'Verkehrszeichenpläne', text: (c) => `Erstellung normgerechter Verkehrszeichenpläne für die Genehmigung bei der ${c.behoerdeKurz}.` },
    { icon: '🔍', title: 'Kontrollfahrten', text: (c) => `Regelmäßige Überprüfung aller Absicherungselemente in ${c.name} mit sofortiger Mängelbeseitigung und Dokumentation.` }
];

const processStepVariants = [
    [
        { title: 'Projektdetails & Beratung', text: (c) => `Beschreiben Sie uns Ihr Projekt in ${c.name}: Standort, Art der Arbeiten, Zeitraum und besondere Anforderungen. Wir beraten Sie zur optimalen Lösung.` },
        { title: 'Verkehrszeichenplan erstellen', text: (c) => `Wir erstellen einen maßstabsgetreuen Verkehrszeichenplan nach RSA – individuell für die Gegebenheiten in ${c.name}.` },
        { title: 'Genehmigung einholen', text: (c) => `Wir beantragen die verkehrsrechtliche Anordnung bei der ${c.behoerdeKurz} und koordinieren alle behördlichen Abstimmungen.` },
        { title: 'Aufbau & Dokumentation', text: (c) => `Unser MVAS-geschultes Team stellt alle Absicherungselemente in ${c.name} fachgerecht auf. Alles wird fotografisch dokumentiert.` },
        { title: 'Kontrolle & Abbau', text: (c) => `Regelmäßige Kontrollfahrten sichern die Qualität. Nach Projektende bauen wir alles in ${c.name} rückstandslos ab.` }
    ],
    [
        { title: 'Anfrage & Analyse', text: (c) => `Teilen Sie uns die Details zu Ihrer Arbeitsstelle in ${c.name} mit. Wir analysieren die Situation und empfehlen die passende Absicherung.` },
        { title: 'Planung & Angebot', text: (c) => `Wir planen die Verkehrsabsicherung für ${c.name} und erstellen ein transparentes Festpreisangebot inklusive Verkehrszeichenplan.` },
        { title: 'Behördliche Koordination', text: (c) => `Die verkehrsrechtliche Anordnung bei der ${c.behoerdeKurz} übernehmen wir komplett – Sie müssen sich um nichts kümmern.` },
        { title: 'Professionelle Umsetzung', text: (c) => `Termingerechter Aufbau aller Verkehrszeichen, Absperrungen und Warnleuchten in ${c.name} durch geschultes Fachpersonal.` },
        { title: 'Wartung & Rückbau', text: (c) => `Während der Bauzeit überprüfen wir die Absicherung regelmäßig. Am Ende erfolgt der fachgerechte Abbau in ${c.name}.` }
    ],
    [
        { title: 'Erstberatung & Ortstermin', text: (c) => `Wir besprechen Ihr Bauvorhaben und klären vor Ort in ${c.name} die beste Absicherungsstrategie.` },
        { title: 'Individuelle Planung', text: (c) => `Unser Planungsteam erstellt den Verkehrszeichenplan nach RSA – maßgeschneidert für die Straßenverhältnisse in ${c.name}.` },
        { title: 'Genehmigungsmanagement', text: (c) => `Wir übernehmen die komplette Kommunikation mit der ${c.behoerdeKurz} und sichern die schnellstmögliche Genehmigung.` },
        { title: 'Fachgerechter Aufbau', text: (c) => `MVAS-zertifizierte Mitarbeiter bauen die Absicherung in ${c.name} normgerecht auf und erstellen eine Fotodokumentation.` },
        { title: 'Betreuung & Abbau', text: (c) => `Kontrollfahrten sichern die dauerhafte Qualität. Nach Projektende erfolgt der vollständige Rückbau und die Abmeldung bei der ${c.behoerdeKurz}.` }
    ]
];

const costIntros = [
    (c) => `Die <strong>Kosten für eine Verkehrsabsicherung in ${c.name}</strong> hängen von Umfang, Dauer, Straßenklasse und den benötigten Elementen ab. Hier ein Überblick:`,
    (c) => `Was Sie für eine <strong>professionelle Verkehrsabsicherung in ${c.name}</strong> investieren, hängt von mehreren Faktoren ab. Wir kalkulieren transparent:`,
    (c) => `Die <strong>Preise für Verkehrsabsicherung in ${c.name}</strong> werden individuell nach Projektumfang berechnet. Folgende Faktoren bestimmen die Kosten:`,
    (c) => `Jedes Projekt in ${c.name} ist anders – und so auch die Kosten der Verkehrsabsicherung. <strong>Unsere Kalkulation</strong> basiert auf diesen Faktoren:`
];

const costItemPool = [
    { title: 'Absperrungen & Beschilderung', text: (c) => `Kosten für Absperrbaken, Verkehrszeichen und Leiteinrichtungen in ${c.name}. Individuell nach Projektgröße.` },
    { title: 'Verkehrszeichenplan', text: (c) => `Erstellung des RSA-konformen Plans für Ihre Arbeitsstelle in ${c.name}. Komplexität variiert nach Straßenklasse.` },
    { title: 'Behördliche Gebühren', text: (c) => `Die ${c.behoerdeKurz} erhebt Verwaltungsgebühren für die verkehrsrechtliche Anordnung. Diese geben wir transparent weiter.` },
    { title: 'Kontrollfahrten', text: (c) => `Regelmäßige Überprüfung der Absicherung in ${c.name} – Häufigkeit richtet sich nach Projektdauer und Vorschriften.` },
    { title: 'Auf- & Abbaukosten', text: (c) => `Personalkosten für den fachgerechten Auf- und Abbau aller Absicherungselemente in ${c.name}.` },
    { title: 'Warnleuchten & Beleuchtung', text: (c) => `LED-Warnleuchten und Baustellenbeleuchtung für Nachtabsicherungen in ${c.name} werden nach Bedarf berechnet.` }
];

const faqPool = [
    { q: (c) => `Was kostet eine Verkehrsabsicherung in ${c.name}?`, a: (c) => `Die Kosten für eine Verkehrsabsicherung in ${c.name} variieren je nach Umfang. Einfache Gehwegabsicherungen starten bei ca. 150 Euro, komplexere Projekte werden individuell kalkuliert. Wir erstellen Ihnen gerne ein kostenloses Angebot.` },
    { q: (c) => `Welche Leistungen umfasst Ihre Verkehrsabsicherung in ${c.name}?`, a: (c) => `Unsere Verkehrsabsicherung in ${c.name} umfasst: Verkehrszeichenplan-Erstellung, Beantragung der Anordnung bei der ${c.behoerdeKurz}, Aufstellung aller Absicherungselemente sowie regelmäßige Kontrollfahrten.` },
    { q: (c) => `Brauche ich in ${c.name} eine Genehmigung für Verkehrsabsicherung?`, a: (c) => `Ja, für jede Arbeitsstelle im öffentlichen Straßenraum von ${c.name} ist eine <strong>verkehrsrechtliche Anordnung</strong> der ${c.behoerdeKurz} erforderlich. Wir beantragen diese für Sie.` },
    { q: (c) => `Wie schnell können Sie in ${c.name} eine Baustelle absichern?`, a: (c) => `In dringenden Fällen sind wir in ${c.name} innerhalb von <strong>24 Stunden</strong> einsatzbereit. Reguläre Absicherungen planen wir mit 5–10 Werktagen Vorlauf wegen der Genehmigung bei der ${c.behoerdeKurz}.` },
    { q: (c) => `Welche Arten von Arbeitsstellen sichern Sie in ${c.name} ab?`, a: (c) => `Wir sichern alle Arten ab: Tiefbau, Straßenbau, Leitungsarbeiten, Gerüst- und Kranbaustellen, Gehwegabsicherungen, Veranstaltungen und mehr in ${c.name}.` },
    { q: (c) => `Was ist ein Verkehrszeichenplan und brauche ich einen in ${c.name}?`, a: (c) => `Ein Verkehrszeichenplan ist eine maßstabsgetreue Zeichnung aller Verkehrszeichen und Absperrungen an Ihrer Arbeitsstelle in ${c.name}. Er ist Voraussetzung für die Genehmigung der ${c.behoerdeKurz}.` },
    { q: (c) => `Sind Sie in ${c.name} und Umgebung tätig?`, a: (c) => `Ja, wir sind in <strong>${c.name} und im gesamten ${c.landkreis}</strong> tätig. Auch in ${c.nachbarorte.slice(0,3).join(', ')} sind wir regelmäßig im Einsatz.` },
    { q: (c) => `Übernehmen Sie auch Kontrollfahrten in ${c.name}?`, a: (c) => `Ja, regelmäßige Kontrollfahrten in ${c.name} sind fester Bestandteil unserer Leistung. Wir prüfen alle Elemente und beheben Mängel sofort vor Ort.` },
    { q: (c) => `Welche Normen gelten für Verkehrsabsicherung in ${c.name}?`, a: (c) => `Die Absicherung in ${c.name} erfolgt nach den <strong>RSA</strong> und dem <strong>MVAS</strong>. Alle unsere Mitarbeiter sind entsprechend geschult und zertifiziert.` },
    { q: (c) => `Bieten Sie auch Nachtabsicherung in ${c.name} an?`, a: (c) => `Ja, wir bieten in ${c.name} LED-Warnleuchten, Baustellenbeleuchtung und reflektierende Leiteinrichtungen für Nachtarbeiten an.` },
    { q: (c) => `Wer beantragt die Genehmigung für meine Arbeitsstelle in ${c.name}?`, a: (c) => `Wir übernehmen die komplette Antragstellung bei der ${c.behoerdeKurz}. Sie erhalten die fertige Genehmigung und müssen sich um nichts kümmern.` },
    { q: (c) => `Können Sie auch Veranstaltungen in ${c.name} absichern?`, a: (c) => `Ja, wir erstellen Sperrpläne und Umleitungskonzepte für Veranstaltungen in ${c.name} und beantragen die nötigen Genehmigungen bei der ${c.behoerdeKurz}.` },
    { q: (c) => `Sichern Sie auch Baustellen auf Bundesstraßen bei ${c.name} ab?`, a: (c) => `Ja, wir sichern Arbeitsstellen auf allen Straßenklassen ab – von innerörtlichen Straßen in ${c.name} bis zu Bundes- und Landesstraßen. Die jeweiligen RSA-Regelpläne setzen wir präzise um.` },
    { q: (c) => `Wie lange im Voraus muss ich in ${c.name} buchen?`, a: (c) => `Ideal sind 2–3 Wochen Vorlauf für ${c.name}, da die ${c.behoerdeKurz} Bearbeitungszeit für die Anordnung benötigt. In Eilfällen bieten wir Express-Service an.` }
];

const trustBarPool = [
    'RSA- & MVAS-konform',
    'Eigener Fuhrpark',
    '24/7 Notfall-Service',
    'Fotodokumentation',
    'Geschultes Fachpersonal',
    'Kostenlose Beratung',
    'Schnelle Umsetzung',
    'Faire Festpreise'
];

const sidebarGesetzlich = [
    (c) => `Jede Arbeitsstelle im Straßenraum von ${c.name} muss nach den <strong>RSA</strong> abgesichert werden. In ${c.name} ist die ${c.behoerdeKurz} für die verkehrsrechtliche Anordnung zuständig.`,
    (c) => `Im öffentlichen Straßenraum von ${c.name} ist eine <strong>RSA-konforme Verkehrsabsicherung</strong> gesetzlich vorgeschrieben. Die Genehmigung erteilt die ${c.behoerdeKurz}.`,
    (c) => `Ohne verkehrsrechtliche Anordnung der ${c.behoerdeKurz} dürfen in ${c.name} keine Arbeitsstellen im Straßenverkehr eingerichtet werden. Wir kümmern uns um alles.`,
    (c) => `Die ${c.behoerdeKurz} verlangt für jede Arbeitsstelle in ${c.name} eine Genehmigung nach <strong>RSA</strong>. Ohne drohen Bußgelder und Haftungsrisiken. Wir übernehmen den Prozess.`
];

const sidebarWarum = [
    `Mangelhafte Verkehrsabsicherung zählt zu den häufigsten Unfallursachen an Baustellen. <strong>Professionelle Absicherung</strong> schützt Ihr Team und minimiert Ihr Haftungsrisiko.`,
    `Fehlerhafte Absicherung kann zu schweren Unfällen führen. Mit <strong>professioneller Verkehrsabsicherung</strong> schützen Sie Ihre Mitarbeiter und reduzieren Haftungsrisiken erheblich.`,
    `Über 30% aller Baustellenunfälle entstehen durch mangelhafte Absicherung. <strong>Professionelle Verkehrsabsicherung</strong> ist eine Investition in die Sicherheit aller Beteiligten.`,
    `Korrekte Verkehrsabsicherung schützt nicht nur Menschenleben, sondern auch Ihr Unternehmen vor <strong>Regressforderungen und Bußgeldern</strong>.`
];

const ctaTexts = [
    (c) => `Kontaktieren Sie uns jetzt für ein kostenloses Angebot für Ihre Verkehrsabsicherung in ${c.name}. Wir melden uns innerhalb kürzester Zeit.`,
    (c) => `Sichern Sie Ihre Arbeitsstelle in ${c.name} professionell ab. Fordern Sie jetzt Ihr unverbindliches Angebot an.`,
    (c) => `Sie planen Arbeiten im Straßenraum von ${c.name}? Lassen Sie sich beraten und erhalten Sie ein maßgeschneidertes Angebot.`,
    (c) => `Professionelle Verkehrsabsicherung in ${c.name} – schnell, zuverlässig und fair kalkuliert. Kontaktieren Sie uns!`
];

const footerDescs = [
    (c) => `Professionelle Verkehrsabsicherung in ${c.name} – damit alle sicher nach Hause kommen.`,
    (c) => `Ihr Experte für Verkehrsabsicherung in ${c.name} und ${c.landkreis}.`,
    (c) => `Verkehrsabsicherung in ${c.name}: RSA-konform, termingerecht und aus einer Hand.`,
    (c) => `Sichere Arbeitsstellen in ${c.name} – professionelle Absicherung nach RSA und MVAS.`
];

const checklistPool = [
    'Komplett-Service aus einer Hand',
    'RSA- und MVAS-konformer Aufbau',
    'Modernste Absperrtechnik',
    '24/7 Notfall-Bereitschaft',
    'Lückenlose Fotodokumentation',
    'Fester Ansprechpartner',
    'Haftungsminimierung',
    'Transparente Preise',
    'Schnelle Reaktionszeiten',
    'Regelmäßige Kontrollfahrten'
];

module.exports = {
    heroSubtitles, sectionLabels, introP1, introP2, introP3,
    usecasePool, processStepVariants, costIntros, costItemPool,
    faqPool, trustBarPool, sidebarGesetzlich, sidebarWarum,
    ctaTexts, footerDescs, checklistPool
};
