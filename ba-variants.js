/**
 * Text variant pools for Baustellenabsicherung city pages.
 * Used with pick()/pickN() from template-utils.js for unique content per city.
 */

const heroSubtitles = [
    (c) => `Komplette Sicherung Ihrer Baustelle in ${c.name} (${c.landkreis}): Beschilderung, Absperrungen, Beleuchtung – alles aus einer Hand. Genehmigung bei der ${c.behoerdeKurz}. Auch in ${c.nachbarorte.slice(0,2).join(' und ')}.`,
    (c) => `Ihr zuverlässiger Partner für Baustellenabsicherung in ${c.name}: Wir übernehmen Planung, Genehmigung und Aufbau – RSA-konform und termingerecht. Einsatzgebiet: ${c.landkreis}.`,
    (c) => `Von der Verkehrszeichenplanung bis zur Kontrollfahrt – wir sichern Ihre Baustelle in ${c.name} professionell ab. Antragstellung bei der ${c.behoerdeKurz} inklusive.`,
    (c) => `Professionelle Baustellenabsicherung für ${c.name} und ${c.landkreis}: Absperrbaken, Beschilderung, Warnleuchten und behördliche Genehmigungen – alles aus einer Hand.`,
    (c) => `Sichere Baustellen in ${c.name}: Wir kümmern uns um Verkehrszeichenpläne, Absperrungen und die Anordnung bei der ${c.behoerdeKurz}. Auch für ${c.nachbarorte[0]} und Umgebung.`
];

const sectionLabels = [
    'Komplett-Service für Ihre Baustelle',
    'Alles aus einer Hand',
    'Ihr Partner für sichere Baustellen',
    'Professionell & zuverlässig',
    'Rundum-Service für Baustellensicherheit'
];

const introP1 = [
    (c) => `Die <strong>Baustellenabsicherung</strong> ist die fachgerechte Sicherung von Arbeitsstellen im Straßenverkehr nach den <strong>Richtlinien für die Sicherung von Arbeitsstellen (RSA)</strong>. Sie schützt Bauarbeiter, Verkehrsteilnehmer und Passanten gleichermaßen und ist in ${c.name} gesetzlich vorgeschrieben.`,
    (c) => `Unter <strong>Baustellenabsicherung</strong> versteht man sämtliche Maßnahmen zur Sicherung von Arbeitsstellen an Straßen gemäß <strong>RSA</strong>. In ${c.name} sorgt eine korrekte Absicherung für den Schutz aller Verkehrsteilnehmer und Ihrer Mitarbeiter.`,
    (c) => `Jede Arbeitsstelle im öffentlichen Straßenraum von ${c.name} muss nach den <strong>Richtlinien für die Sicherung von Arbeitsstellen (RSA)</strong> abgesichert werden. Die <strong>Baustellenabsicherung</strong> umfasst dabei alle verkehrssichernden Maßnahmen zum Schutz von Arbeitern und Verkehrsteilnehmern.`,
    (c) => `Eine professionelle <strong>Baustellenabsicherung in ${c.name}</strong> gewährleistet die Sicherheit aller Beteiligten – von Bauarbeitern über Fußgänger bis hin zu Autofahrern. Die Grundlage bilden die <strong>RSA-Richtlinien</strong> und das <strong>MVAS</strong>.`,
    (c) => `Die <strong>Baustellenabsicherung</strong> in ${c.name} dient dem Schutz von Arbeitskräften und Verkehrsteilnehmern. Gesetzliche Grundlage sind die <strong>RSA</strong> (Richtlinien für die Sicherung von Arbeitsstellen an Straßen), deren Einhaltung von der ${c.behoerdeKurz} überwacht wird.`
];

const introP2 = [
    (c) => `Als erfahrener Dienstleister übernehmen wir die <strong>komplette Baustellenabsicherung in ${c.name}</strong> für Sie: von der Erstellung des Verkehrszeichenplans über die Beantragung der verkehrsrechtlichen Anordnung bei der ${c.behoerdeKurz} bis zum fachgerechten Aufbau, der laufenden Kontrolle und dem Abbau aller Absicherungseinrichtungen.`,
    (c) => `Wir sind Ihr <strong>Full-Service-Partner für Baustellenabsicherung in ${c.name}</strong>. Unser Team erstellt den Verkehrszeichenplan, beantragt die Genehmigung bei der ${c.behoerdeKurz}, baut die Absicherung auf und führt regelmäßige Kontrollfahrten durch.`,
    (c) => `Von der ersten Planung bis zum letzten Schild: Wir übernehmen die <strong>gesamte Baustellenabsicherung in ${c.name}</strong>. Die verkehrsrechtliche Anordnung bei der ${c.behoerdeKurz} beantragen wir selbstverständlich für Sie.`,
    (c) => `Unser Leistungsversprechen für ${c.name}: <strong>Komplettservice Baustellenabsicherung</strong> – Verkehrszeichenplan, behördliche Genehmigung über die ${c.behoerdeKurz}, fachgerechter Auf- und Abbau sowie lückenlose Dokumentation.`,
    (c) => `In ${c.name} und dem gesamten ${c.landkreis} bieten wir <strong>professionelle Baustellenabsicherung aus einer Hand</strong>. Wir koordinieren alles mit der ${c.behoerdeKurz} und stellen sicher, dass Ihre Baustelle jederzeit RSA-konform abgesichert ist.`
];

const introP3 = [
    (c) => `Unser Leistungsspektrum reicht von der einfachen <strong>Gehwegabsicherung</strong> bis zur komplexen Straßenbaustelle mit mehrstufiger Verkehrsführung, Umleitungsbeschilderung und Lichtsignalanlagen. Dabei setzen wir auf modernste Absperrtechnik und <strong>MVAS-geschultes Fachpersonal</strong>.`,
    (c) => `Ob Gehwegarbeiten, Kanalsanierung oder großflächige Straßenbaustelle in ${c.name} – wir verfügen über die passende Ausrüstung und das Know-how. Unsere <strong>MVAS-zertifizierten Mitarbeiter</strong> garantieren eine normgerechte Absicherung.`,
    (c) => `Wir sichern in ${c.name} jede Art von Baustelle ab: von der kleinen Gehwegreparatur über Leitungsarbeiten bis hin zur mehrspurigen Straßenbaustelle. Unser <strong>MVAS-geschultes Team</strong> und modernes Equipment garantieren höchste Sicherheit.`,
    (c) => `Mit unserem umfangreichen Fuhrpark und <strong>MVAS-geschultem Personal</strong> sind wir für jede Baustellenabsicherung in ${c.name} gerüstet – egal ob kleine Gehwegreparatur oder komplexe Verkehrsführung mit Ampelregelung.`,
    (c) => `Von der temporären Gehwegabsicherung bis zur langfristigen Straßenbaumaßnahme: In ${c.name} bieten wir das <strong>komplette Spektrum der Baustellenabsicherung</strong>. Alle Mitarbeiter sind nach MVAS geschult und regelmäßig fortgebildet.`
];

const usecasePool = [
    { icon: '🏗️', title: 'Tiefbau & Kanalsanierung', text: (c) => `Absicherung von Kanal-, Rohrleitungs- und Erdarbeiten in ${c.name} mit Grabenbrücken, Fußgängerführung und Umleitungsbeschilderung.` },
    { icon: '🛣️', title: 'Straßenbau & Deckenerneuerung', text: (c) => `Großflächige Absicherung bei Asphaltier- und Straßenbauarbeiten in ${c.name} – auch auf mehrspurigen Straßen mit Fahrbahneinengung.` },
    { icon: '💡', title: 'Leitungsbau (Strom/Gas/Wasser)', text: (c) => `Sicherung bei Verlegung und Reparatur von Versorgungsleitungen in ${c.name} mit minimaler Verkehrsbeeinträchtigung.` },
    { icon: '🏠', title: 'Hochbau & Gerüstbau', text: (c) => `Absicherung von Kran- und Gerüststellplätzen, Containerstellflächen und Baustellenzufahrten in ${c.name}.` },
    { icon: '🚶', title: 'Gehweg- & Radwegabsicherung', text: (c) => `Sichere Umleitung von Fußgängern und Radfahrern in ${c.name} mit barrierefreien Zugängen und taktilen Leitsystemen.` },
    { icon: '🌙', title: 'Nacht- & Wochenendarbeiten', text: (c) => `Spezielle Beleuchtungskonzepte und reflektierende Absicherung für Arbeiten bei Dunkelheit in ${c.name}.` },
    { icon: '🚧', title: 'Vollsperrung & Umleitung', text: (c) => `Komplette Sperrung und Umleitungsbeschilderung für größere Baumaßnahmen in ${c.name} und Umgebung.` },
    { icon: '🅿️', title: 'Halteverbotszonen', text: (c) => `Einrichtung temporärer Halteverbotszonen in ${c.name} für Baustellen, Kranaufstellungen und Schwertransporte.` },
    { icon: '🚦', title: 'Lichtsignalanlagen', text: (c) => `Mobile Ampelregelungen für Engstellen und Einbahnstraßenregelungen an Baustellen in ${c.name}.` },
    { icon: '📋', title: 'Verkehrsrechtliche Anordnung', text: (c) => `Komplette Beantragung und Abstimmung der verkehrsrechtlichen Anordnung bei der ${c.behoerdeKurz}.` }
];

const processStepVariants = [
    [ // Variant set 0
        { title: 'Projektdetails & Beratung', text: (c) => `Teilen Sie uns Standort, Art der Bauarbeiten, geplanten Zeitraum und besondere Anforderungen mit. Wir beraten Sie zur optimalen Absicherungslösung in ${c.name}.` },
        { title: 'Verkehrszeichenplan erstellen', text: (c) => `Wir erstellen einen maßstabsgetreuen Verkehrszeichenplan nach RSA-Regelplänen – individuell auf Ihre Baustelle in ${c.name} zugeschnitten.` },
        { title: 'Genehmigung einholen', text: (c) => `Wir beantragen die verkehrsrechtliche Anordnung bei der ${c.behoerdeKurz} und koordinieren alle Abstimmungen.` },
        { title: 'Aufbau & Fotodokumentation', text: (c) => `Unsere MVAS-geschulten Mitarbeiter bauen alle Absicherungselemente in ${c.name} fachgerecht auf. Jeder Aufbau wird fotografisch dokumentiert.` },
        { title: 'Kontrolle, Wartung & Abbau', text: (c) => `Regelmäßige Kontrollfahrten stellen die korrekte Absicherung in ${c.name} sicher. Nach Bauende erfolgt der vollständige Abbau.` }
    ],
    [ // Variant set 1
        { title: 'Anfrage & Bestandsaufnahme', text: (c) => `Beschreiben Sie uns Ihr Projekt in ${c.name}: Wo wird gebaut, welche Straßen sind betroffen, wie lange dauern die Arbeiten?` },
        { title: 'Planung & Kalkulation', text: (c) => `Auf Basis Ihrer Angaben erstellen wir den Verkehrszeichenplan und kalkulieren ein transparentes Angebot für Ihre Baustelle in ${c.name}.` },
        { title: 'Behördliche Abstimmung', text: (c) => `Die verkehrsrechtliche Anordnung beantragen wir direkt bei der ${c.behoerdeKurz}. Sie müssen sich um nichts kümmern.` },
        { title: 'Professioneller Aufbau', text: (c) => `Unser geschultes Team stellt alle Absperrelemente, Verkehrszeichen und Warnleuchten in ${c.name} termingerecht auf.` },
        { title: 'Laufende Betreuung & Abbau', text: (c) => `Während der gesamten Bauzeit führen wir Kontrollfahrten in ${c.name} durch. Am Ende bauen wir alles rückstandslos ab.` }
    ],
    [ // Variant set 2
        { title: 'Erstgespräch & Ortstermin', text: (c) => `Wir besprechen Ihr Bauvorhaben in ${c.name} und klären vor Ort die optimale Absicherungsstrategie.` },
        { title: 'Individuelle Planung', text: (c) => `Unser Planungsteam erstellt den Verkehrszeichenplan nach RSA – passgenau für die Gegebenheiten in ${c.name}.` },
        { title: 'Genehmigungsmanagement', text: (c) => `Wir übernehmen die komplette Kommunikation mit der ${c.behoerdeKurz} und holen die verkehrsrechtliche Anordnung ein.` },
        { title: 'Fachgerechte Umsetzung', text: (c) => `MVAS-zertifizierte Fachkräfte bauen die Absicherung in ${c.name} auf und dokumentieren den korrekten Aufbau mit Fotos.` },
        { title: 'Wartung & Rückbau', text: (c) => `Kontrollfahrten sichern die dauerhafte Qualität. Nach Projektende erfolgt der vollständige Rückbau und die Abmeldung bei der ${c.behoerdeKurz}.` }
    ]
];

const costIntros = [
    (c) => `Die <strong>Kosten für eine Baustellenabsicherung in ${c.name}</strong> richten sich nach Umfang, Dauer, Straßenklasse und den benötigten Absicherungselementen. Hier ein Überblick der Kostenfaktoren:`,
    (c) => `Was Sie für eine <strong>professionelle Baustellenabsicherung in ${c.name}</strong> investieren, hängt von mehreren Faktoren ab. Wir kalkulieren transparent und fair:`,
    (c) => `Die <strong>Preise für Baustellenabsicherung in ${c.name}</strong> werden individuell berechnet. Folgende Faktoren bestimmen die Kosten:`,
    (c) => `Jede Baustelle in ${c.name} ist anders – und so auch die Kosten. <strong>Unsere Preiskalkulation</strong> basiert auf diesen Faktoren:`
];

const costItemPool = [
    { title: 'Absperrungen & Beschilderung', text: (c) => `Kosten für Absperrbaken, Verkehrszeichen und Leiteinrichtungen in ${c.name}. Individuell nach Baustellengröße berechnet.` },
    { title: 'Verkehrszeichenplan', text: (c) => `Erstellung des maßstabsgetreuen Plans nach RSA für Ihre Baustelle in ${c.name}. Komplexität variiert nach Straßenklasse.` },
    { title: 'Behördliche Gebühren', text: (c) => `Die ${c.behoerdeKurz} erhebt Gebühren für die verkehrsrechtliche Anordnung. Diese werden transparent weitergegeben.` },
    { title: 'Kontrollfahrten & Beleuchtung', text: (c) => `Regelmäßige Kontrollfahrten in ${c.name} und ggf. Warnleuchten werden nach Aufwand berechnet.` },
    { title: 'Auf- & Abbaukosten', text: (c) => `Personalkosten für den fachgerechten Auf- und Abbau aller Absicherungselemente an Ihrer Baustelle in ${c.name}.` },
    { title: 'Mietkosten Absperrtechnik', text: (c) => `Tages- oder Wochenmietpauschalen für Absperrbaken, Leitschwellen und mobile Schutzeinrichtungen in ${c.name}.` }
];

const faqPool = [
    { q: (c) => `Was kostet eine Baustellenabsicherung in ${c.name}?`, a: (c) => `Die Kosten für eine Baustellenabsicherung in ${c.name} variieren je nach Umfang und Dauer. Einfache Gehwegabsicherungen beginnen ab ca. 150 Euro, komplexe Absicherungen werden individuell kalkuliert. Wir erstellen Ihnen ein kostenloses Angebot für ${c.name}.` },
    { q: (c) => `Welche Leistungen umfasst die Baustellenabsicherung in ${c.name}?`, a: (c) => `Unsere Baustellenabsicherung in ${c.name} umfasst: Verkehrszeichenplan-Erstellung, Beantragung der verkehrsrechtlichen Anordnung bei der ${c.behoerdeKurz}, Aufstellung von Absperrbaken, Verkehrszeichen und Warnleuchten sowie regelmäßige Kontrollfahrten.` },
    { q: (c) => `Brauche ich in ${c.name} für jede Baustelle eine Genehmigung?`, a: (c) => `Ja, für jede Arbeitsstelle im öffentlichen Straßenraum von ${c.name} ist eine <strong>verkehrsrechtliche Anordnung</strong> der ${c.behoerdeKurz} erforderlich. Auf Privatgelände ist dies nicht nötig. Wir beantragen die Genehmigung für Sie.` },
    { q: (c) => `Wie schnell können Sie eine Baustelle in ${c.name} absichern?`, a: (c) => `In Notfällen sind wir in ${c.name} innerhalb von <strong>24 Stunden</strong> einsatzbereit. Reguläre Absicherungen planen wir mit 5–10 Werktagen Vorlauf, da die Anordnung bei der ${c.behoerdeKurz} beantragt werden muss.` },
    { q: (c) => `Was ist ein Verkehrszeichenplan?`, a: (c) => `Ein Verkehrszeichenplan (VZP) ist eine <strong>maßstabsgetreue Zeichnung</strong>, die alle erforderlichen Verkehrszeichen und Absperrungen an der Baustelle in ${c.name} darstellt. Er ist Voraussetzung für die verkehrsrechtliche Anordnung der ${c.behoerdeKurz}.` },
    { q: (c) => `Sichern Sie auch Autobahnbaustellen in der Nähe von ${c.name} ab?`, a: (c) => `Ja, wir sichern Arbeitsstellen auf allen Straßenklassen ab – von der Gemeindestraße in ${c.name} bis zur Autobahn. Für Autobahnbaustellen gelten besondere <strong>RSA-Regelpläne</strong>.` },
    { q: (c) => `Was passiert bei Sturmschäden an der Absicherung in ${c.name}?`, a: (c) => `Wir sind über unsere <strong>24/7-Notfallnummer</strong> erreichbar und rücken in ${c.name} bei Sturmschäden oder Unfällen schnellstmöglich aus, um die Absicherung wiederherzustellen.` },
    { q: (c) => `Übernehmen Sie Kontrollfahrten in ${c.name}?`, a: (c) => `Ja, regelmäßige Kontrollfahrten in ${c.name} und Umgebung sind fester Bestandteil unserer Leistung. Wir prüfen alle Absicherungselemente und beheben Mängel sofort vor Ort.` },
    { q: (c) => `Welche Normen gelten für die Baustellenabsicherung in ${c.name}?`, a: (c) => `Die Absicherung in ${c.name} erfolgt nach den <strong>RSA</strong> (Richtlinien für die Sicherung von Arbeitsstellen) und dem <strong>MVAS</strong>. Unsere Mitarbeiter sind entsprechend geschult und zertifiziert.` },
    { q: (c) => `Bieten Sie Nachtabsicherung in ${c.name} an?`, a: (c) => `Ja, wir stellen in ${c.name} LED-Warnleuchten, Baustellenbeleuchtung und reflektierende Leiteinrichtungen auf. Die Beleuchtung wird regelmäßig auf Funktionsfähigkeit geprüft.` },
    { q: (c) => `Können Sie Gehwege und Radwege in ${c.name} absichern?`, a: (c) => `Ja, Gehweg- und Radwegabsicherungen in ${c.name} gehören zu unserem Kerngeschäft. Wir sorgen für sichere Umgehungsmöglichkeiten und <strong>barrierefreie Zugänge</strong>.` },
    { q: (c) => `Sind Sie in ${c.name} und Umgebung tätig?`, a: (c) => `Ja, wir sind in <strong>${c.name} und im gesamten ${c.landkreis}</strong> tätig. Auch in ${c.nachbarorte.slice(0,3).join(', ')} sind wir regelmäßig im Einsatz.` },
    { q: (c) => `Wer beantragt die Genehmigung für meine Baustelle in ${c.name}?`, a: (c) => `Wir übernehmen die komplette Antragstellung bei der ${c.behoerdeKurz} für Sie. Sie müssen sich um nichts kümmern – wir liefern Ihnen die fertige Genehmigung.` },
    { q: (c) => `Wie lange muss die Absicherung in ${c.name} stehen bleiben?`, a: (c) => `Die Absicherung bleibt so lange stehen, wie die Baustelle in ${c.name} aktiv ist. Die genaue Dauer wird in der verkehrsrechtlichen Anordnung der ${c.behoerdeKurz} festgelegt.` },
    { q: (c) => `Was kostet ein Verkehrszeichenplan für ${c.name}?`, a: (c) => `Die Kosten für einen Verkehrszeichenplan in ${c.name} hängen von der Komplexität der Baustelle ab. Bei uns ist die Planung oft im Gesamtpaket enthalten. Fragen Sie uns nach einem Angebot.` },
    { q: (c) => `Stellen Sie auch mobile Ampeln in ${c.name} auf?`, a: (c) => `Ja, bei Fahrbahnverengungen oder Einbahnstraßenregelungen in ${c.name} setzen wir mobile Lichtsignalanlagen ein. Diese werden in der verkehrsrechtlichen Anordnung der ${c.behoerdeKurz} genehmigt.` }
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
    (c) => `Jede Baustelle in ${c.name} muss nach <strong>RSA</strong> abgesichert werden. In ${c.name} ist die ${c.behoerdeKurz} für die Anordnung zuständig. Wir übernehmen den kompletten Prozess.`,
    (c) => `Die ${c.behoerdeKurz} verlangt für jede Baustelle in ${c.name} eine verkehrsrechtliche Anordnung. Ohne Genehmigung drohen Bußgelder und Haftungsrisiken. Wir erledigen das für Sie.`,
    (c) => `Im öffentlichen Straßenraum von ${c.name} ist eine <strong>RSA-konforme Absicherung</strong> Pflicht. Die Genehmigung erteilt die ${c.behoerdeKurz}. Wir übernehmen alles – von der Antragstellung bis zum Aufbau.`,
    (c) => `Baustellen in ${c.name} ohne korrekte Absicherung sind eine Ordnungswidrigkeit. Die ${c.behoerdeKurz} prüft die Einhaltung der <strong>RSA-Vorschriften</strong>. Mit uns sind Sie auf der sicheren Seite.`
];

const sidebarWarum = [
    `Fehlerhafte Baustellenabsicherung ist eine der häufigsten Unfallursachen im Straßenverkehr. <strong>Professionelle Absicherung</strong> schützt Ihr Team, Passanten und minimiert Ihr Haftungsrisiko.`,
    `Mangelhafte Absicherung kann zu schweren Unfällen und hohen Haftungsansprüchen führen. <strong>Professionelle Baustellenabsicherung</strong> ist eine Investition in die Sicherheit aller Beteiligten.`,
    `Über 30% aller Baustellenunfälle entstehen durch fehlerhafte Absicherung. Mit <strong>professioneller Baustellenabsicherung</strong> schützen Sie Ihre Mitarbeiter und reduzieren Ihr persönliches Haftungsrisiko.`,
    `Eine korrekte Absicherung schützt nicht nur Menschenleben, sondern auch Ihr Unternehmen vor <strong>Regressforderungen</strong>. Wir sorgen dafür, dass Ihre Baustelle allen Vorschriften entspricht.`
];

const ctaTexts = [
    (c) => `Kontaktieren Sie uns für ein kostenloses Angebot für Ihre Baustellenabsicherung in ${c.name}. Wir melden uns innerhalb kürzester Zeit.`,
    (c) => `Sichern Sie Ihre Baustelle in ${c.name} professionell ab. Fordern Sie jetzt Ihr unverbindliches Angebot an – wir antworten noch heute.`,
    (c) => `Sie planen eine Baustelle in ${c.name}? Lassen Sie sich von uns beraten und erhalten Sie ein maßgeschneidertes Angebot.`,
    (c) => `Professionelle Baustellenabsicherung in ${c.name} – schnell, zuverlässig und fair kalkuliert. Kontaktieren Sie uns jetzt!`
];

const footerDescs = [
    (c) => `Professionelle Baustellenabsicherung in ${c.name} – sicher, zuverlässig und RSA-konform.`,
    (c) => `Ihr Experte für Baustellenabsicherung in ${c.name} und ${c.landkreis}.`,
    (c) => `Baustellenabsicherung in ${c.name}: RSA-konform, termingerecht und aus einer Hand.`,
    (c) => `Sichere Baustellen in ${c.name} – professionelle Absicherung nach RSA und MVAS.`
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
