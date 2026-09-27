/**
 * Text variant pools for Halteverbotszone city pages.
 */

const heroSubtitles = [
    (c) => `Wir richten Ihre Halteverbotszone in ${c.name} (${c.landkreis}) ein – Genehmigung bei der ${c.behoerdeKurz}, Aufstellung und Abbau aus einer Hand. Auch in ${c.nachbarorte.slice(0,2).join(' und ')}.`,
    (c) => `Halteverbotszone in ${c.name} schnell und unkompliziert einrichten lassen. Wir übernehmen alles: Antrag bei der ${c.behoerdeKurz}, Schilderaufstellung und Abbau.`,
    (c) => `Ihr Partner für Halteverbotszonen in ${c.name} und Umgebung. Genehmigung, Aufstellung und Dokumentation – alles aus einer Hand. Festpreise ohne versteckte Kosten.`,
    (c) => `Professionelle Halteverbotszonen in ${c.name}: Wir beantragen die Genehmigung bei der ${c.behoerdeKurz}, stellen die Schilder auf und bauen sie termingerecht ab.`,
    (c) => `Halteverbotszone für Ihren Umzug, Ihre Baustelle oder Lieferung in ${c.name}. Komplett-Service inkl. Genehmigung bei der ${c.behoerdeKurz}.`
];

const sectionLabels = [
    'Wissenswertes',
    'Alles Wichtige auf einen Blick',
    'So funktioniert es',
    'Gut informiert',
    'Ihr Halteverbot in wenigen Schritten'
];

const introP1 = [
    (c) => `Eine <strong>Halteverbotszone in ${c.name}</strong> (auch mobiles oder temporäres Halteverbot genannt) ist ein zeitlich begrenzter Bereich im öffentlichen Straßenraum, in dem das Halten und Parken von Fahrzeugen untersagt ist. Die Genehmigung wird von der ${c.behoerdeKurz} erteilt.`,
    (c) => `Ein <strong>temporäres Halteverbot in ${c.name}</strong> schafft freien Straßenraum für Umzüge, Baustellen oder Lieferungen. Die ${c.behoerdeKurz} erteilt die verkehrsrechtliche Anordnung – wir übernehmen den gesamten Prozess für Sie.`,
    (c) => `Mit einer <strong>Halteverbotszone in ${c.name}</strong> sichern Sie sich den benötigten Straßenraum für Ihr Vorhaben. Die Genehmigung erteilt die ${c.behoerdeKurz} per verkehrsrechtlicher Anordnung.`,
    (c) => `Die <strong>Halteverbotszone</strong> ist ein bewährtes Mittel, um in ${c.name} freien Straßenraum für Umzüge, Bauarbeiten oder Anlieferungen zu schaffen. Zuständig für die Genehmigung ist die ${c.behoerdeKurz}.`,
    (c) => `Ob Umzug, Baustelle oder Großlieferung: Eine <strong>Halteverbotszone in ${c.name}</strong> garantiert Ihnen den nötigen Platz. Die verkehrsrechtliche Anordnung beantragt die ${c.behoerdeKurz} – wir kümmern uns darum.`
];

const introP2 = [
    (c) => `Die Einrichtung einer Halteverbotszone in ${c.name} erfordert zwingend eine <strong>verkehrsrechtliche Anordnung</strong> der ${c.behoerdeKurz}. Ohne Genehmigung dürfen keine Halteverbotsschilder im öffentlichen Raum aufgestellt werden. Die Schilder müssen mindestens <strong>3 volle Werktage (72 Stunden)</strong> vor Beginn aufgestellt werden.`,
    (c) => `Für eine Halteverbotszone in ${c.name} ist eine <strong>Genehmigung der ${c.behoerdeKurz}</strong> zwingend erforderlich. Wir beantragen diese für Sie und stellen die Schilder fristgerecht – mindestens <strong>72 Stunden</strong> vor dem Termin – auf.`,
    (c) => `Ohne behördliche Genehmigung dürfen in ${c.name} keine Halteverbotsschilder aufgestellt werden. Die ${c.behoerdeKurz} erteilt die <strong>verkehrsrechtliche Anordnung</strong>. Die Schilder müssen <strong>3 volle Werktage</strong> vor Beginn stehen.`,
    (c) => `Die ${c.behoerdeKurz} verlangt für jede Halteverbotszone in ${c.name} eine <strong>verkehrsrechtliche Anordnung</strong>. Eigenmächtiges Aufstellen von Schildern ist eine Ordnungswidrigkeit. Wir kümmern uns um die korrekte Genehmigung und Aufstellung.`,
    (c) => `Eine <strong>Halteverbotszone in ${c.name}</strong> ohne Genehmigung der ${c.behoerdeKurz} ist nicht zulässig. Wir stellen den Antrag, erhalten die Anordnung und platzieren die Schilder rechtzeitig – mindestens <strong>72 Stunden</strong> im Voraus.`
];

const introP3 = [
    (c) => `Als erfahrener Dienstleister übernehmen wir den <strong>kompletten Prozess</strong> für Sie: von der Antragstellung bei der ${c.behoerdeKurz} über die fristgerechte Aufstellung der Halteverbotsschilder bis zum Abbau. Alles wird fotografisch dokumentiert.`,
    (c) => `Wir sind Ihr <strong>Full-Service-Partner für Halteverbotszonen in ${c.name}</strong>. Von der Beratung über die Genehmigung bei der ${c.behoerdeKurz} bis zur lückenlosen Fotodokumentation – Sie müssen sich um nichts kümmern.`,
    (c) => `Unser Komplett-Service für ${c.name}: Wir beantragen die Genehmigung bei der ${c.behoerdeKurz}, stellen die Schilder <strong>fristgerecht auf</strong>, dokumentieren alles fotografisch und bauen nach Ende der Zone wieder ab.`,
    (c) => `Verlassen Sie sich auf unseren <strong>Rundum-Service in ${c.name}</strong>: Antragstellung bei der ${c.behoerdeKurz}, termingerechte Schilderaufstellung mit Fotodokumentation und fachgerechter Abbau – alles inklusive.`,
    (c) => `In ${c.name} und dem ${c.landkreis} bieten wir <strong>Halteverbotszonen als Komplett-Service</strong>: Beratung, Genehmigung bei der ${c.behoerdeKurz}, Aufstellung, Dokumentation und Abbau aus einer Hand.`
];

const usecasePool = [
    { icon: '🏠', title: 'Umzug', text: (c) => `Halteverbotszone für Ihren Umzug in ${c.name} – der Umzugswagen parkt direkt vor der Tür. Besonders wichtig in Straßen mit knappem Parkraum.` },
    { icon: '🏗️', title: 'Baustelle', text: (c) => `Für Container, Baumaterial oder Baufahrzeuge in ${c.name} – wir richten die nötige Halteverbotszone fachgerecht ein.` },
    { icon: '🚚', title: 'Lieferung & Anlieferung', text: (c) => `Bei umfangreichen Lieferungen in ${c.name} sorgt eine Halteverbotszone dafür, dass der Lieferwagen nah am Eingang parken kann.` },
    { icon: '🏗️', title: 'Gerüst & Kran', text: (c) => `Gerüstaufbauten und Kranarbeiten in ${c.name} erfordern freien Straßenraum. Eine Halteverbotszone schafft den nötigen Platz.` },
    { icon: '📦', title: 'Container & Mulden', text: (c) => `Für Abrollcontainer, Schuttmulden oder Baggerbetrieb in ${c.name} – Genehmigung bei der ${c.behoerdeKurz} inklusive.` },
    { icon: '🎬', title: 'Dreharbeiten', text: (c) => `Stellflächen für Produktionsfahrzeuge und Equipment bei Film- und Fernsehproduktionen in ${c.name}.` },
    { icon: '🎪', title: 'Veranstaltungen', text: (c) => `Temporäre Halteverbotszonen für Events, Feste und Märkte in ${c.name} mit Sperrplänen.` },
    { icon: '🚛', title: 'Schwertransporte', text: (c) => `Rangier- und Stellflächen für Schwertransporte in ${c.name} – wir koordinieren die Genehmigungen.` }
];

const processStepVariants = [
    [
        { title: 'Anfrage & Beratung', text: (c) => `Teilen Sie uns Ihren Wunschtermin, den genauen Standort in ${c.name} und den Anlass mit. Wir beraten Sie zur idealen Größe und erstellen ein kostenloses Angebot.` },
        { title: 'Genehmigung beantragen', text: (c) => `Wir stellen den Antrag für die verkehrsrechtliche Anordnung bei der ${c.behoerdeKurz}. Wir kennen die Abläufe und wickeln alles schnell ab.` },
        { title: 'Schilder aufstellen', text: (c) => `Mindestens 3 Werktage vor dem Termin stellen wir die Halteverbotsschilder in ${c.name} fachgerecht auf und dokumentieren alles fotografisch.` },
        { title: 'Ihr Termin – Zone ist frei', text: (c) => `Am Tag Ihres Umzugs oder Projekts in ${c.name} steht Ihnen die freigehaltene Zone zur Verfügung. Widerrechtlich parkende Fahrzeuge können abgeschleppt werden.` },
        { title: 'Abbau & Abschluss', text: (c) => `Nach Ende der Halteverbotszone in ${c.name} holen wir die Schilder ab und melden die Genehmigung bei der ${c.behoerdeKurz} zurück.` }
    ],
    [
        { title: 'Details mitteilen', text: (c) => `Sagen Sie uns, wann und wo in ${c.name} Sie eine Halteverbotszone benötigen. Wir erstellen umgehend ein transparentes Angebot.` },
        { title: 'Behördliche Genehmigung', text: (c) => `Wir übernehmen die Antragstellung bei der ${c.behoerdeKurz} und sorgen für eine zügige Bearbeitung Ihrer Halteverbotszone.` },
        { title: 'Fristgerechte Aufstellung', text: (c) => `Unsere Mitarbeiter stellen die Schilder in ${c.name} rechtzeitig auf – mit fotografischer Dokumentation als Nachweis.` },
        { title: 'Freier Straßenraum', text: (c) => `Zum gewünschten Termin ist die Zone in ${c.name} frei. Bei Falschparkern unterstützen wir Sie mit unserer Dokumentation.` },
        { title: 'Schilder abholen', text: (c) => `Nach Ablauf bauen wir die Schilder in ${c.name} termingerecht ab. Die Rückmeldung an die ${c.behoerdeKurz} erfolgt automatisch.` }
    ],
    [
        { title: 'Kostenlose Erstberatung', text: (c) => `Wir besprechen Ihren Bedarf und empfehlen die optimale Zonengröße für Ihr Projekt in ${c.name}. Das Angebot ist kostenlos.` },
        { title: 'Genehmigungsservice', text: (c) => `Die ${c.behoerdeKurz} erhält unseren Antrag und erteilt die verkehrsrechtliche Anordnung für Ihre Halteverbotszone in ${c.name}.` },
        { title: 'Professionelle Aufstellung', text: (c) => `72 Stunden vor Ihrem Termin stehen die Schilder in ${c.name}. Jedes Schild wird mit Zeitstempel und Foto dokumentiert.` },
        { title: 'Nutzung der Zone', text: (c) => `Die Zone in ${c.name} steht Ihnen zur freien Verfügung. Unsere Dokumentation sichert Sie bei Falschparkern rechtlich ab.` },
        { title: 'Rückbau & Abmeldung', text: (c) => `Pünktlicher Abbau aller Schilder in ${c.name} und Rückmeldung an die ${c.behoerdeKurz} – Sie müssen sich um nichts kümmern.` }
    ]
];

const costIntros = [
    (c) => `Die <strong>Kosten für eine Halteverbotszone in ${c.name}</strong> setzen sich aus mehreren Faktoren zusammen und können je nach Dauer und Umfang variieren:`,
    (c) => `Was eine <strong>Halteverbotszone in ${c.name}</strong> kostet, hängt von Länge, Standzeit und Standort ab. Hier ein Überblick der Kostenfaktoren:`,
    (c) => `Die <strong>Preise für Halteverbotszonen in ${c.name}</strong> sind transparent und fair kalkuliert. Folgende Faktoren bestimmen den Gesamtpreis:`,
    (c) => `Unsere <strong>Halteverbotszone in ${c.name}</strong> wird zum Festpreis angeboten. Die Kosten setzen sich wie folgt zusammen:`
];

const costItemPool = [
    { title: 'Dienstleistungspauschale', text: (c) => `Beantragung, Aufstellung, Dokumentation und Abbau der Halteverbotsschilder in ${c.name} – alles im Festpreis enthalten.` },
    { title: 'Verwaltungsgebühren', text: (c) => `Die ${c.behoerdeKurz} erhebt eine Verwaltungsgebühr für die verkehrsrechtliche Anordnung. Diese wird separat ausgewiesen.` },
    { title: 'Zonenlänge & Standzeit', text: (c) => `Die Kosten richten sich nach der Länge (in Metern) und der Standzeit (Anzahl der Tage) Ihrer Halteverbotszone in ${c.name}.` },
    { title: 'Sonderleistungen', text: (c) => `Nacht- oder Wochenendaufstellungen in ${c.name} sowie beidseitige Zonen werden nach Aufwand berechnet.` },
    { title: 'Festpreis-Garantie', text: (c) => `Unser Angebot für ${c.name} enthält alle Leistungen – keine versteckten Kosten, keine Nachberechnungen.` }
];

const faqPool = [
    { q: (c) => `Was kostet eine Halteverbotszone in ${c.name}?`, a: (c) => `Die Kosten für eine Halteverbotszone in ${c.name} liegen in der Regel zwischen 80 und 250 Euro inklusive Genehmigung, Aufstellung und Abbau. Die Verwaltungsgebühren der ${c.behoerdeKurz} kommen ggf. hinzu. Wir erstellen Ihnen gerne ein kostenloses Angebot.` },
    { q: (c) => `Wie lange vorher muss ich eine Halteverbotszone in ${c.name} beantragen?`, a: (c) => `Wir empfehlen mindestens <strong>10 bis 14 Werktage</strong> Vorlauf für ${c.name}. Die ${c.behoerdeKurz} benötigt Bearbeitungszeit. Die Schilder müssen dann mindestens 3 volle Werktage (72 Stunden) vor Beginn aufgestellt werden.` },
    { q: (c) => `Was passiert, wenn ein Auto in meiner Halteverbotszone in ${c.name} steht?`, a: (c) => `Wurde die Zone in ${c.name} von der ${c.behoerdeKurz} genehmigt und die Schilder fristgerecht aufgestellt, können Fahrzeuge kostenpflichtig abgeschleppt werden. Unsere Fotodokumentation dient als Nachweis.` },
    { q: (c) => `Für welche Anlässe kann ich eine Halteverbotszone in ${c.name} beantragen?`, a: (c) => `Halteverbotszonen in ${c.name} können für Umzüge, Baustelleneinrichtungen, Möbellieferungen, Containerstellplätze, Kranarbeiten, Gerüstaufbauten und viele weitere Zwecke eingerichtet werden.` },
    { q: (c) => `Brauche ich in ${c.name} eine Genehmigung?`, a: (c) => `Ja, eine Halteverbotszone im öffentlichen Straßenraum von ${c.name} erfordert immer eine <strong>verkehrsrechtliche Anordnung</strong> der ${c.behoerdeKurz}. Wir übernehmen den kompletten Genehmigungsprozess.` },
    { q: (c) => `Kann ich eine Halteverbotszone in ${c.name} kurzfristig einrichten?`, a: (c) => `In dringenden Fällen bieten wir in ${c.name} einen Express-Service an. Wir stellen Eilanträge bei der ${c.behoerdeKurz} und versuchen, den Prozess schnellstmöglich abzuwickeln.` },
    { q: (c) => `Wie groß sollte die Halteverbotszone in ${c.name} sein?`, a: (c) => `Für einen normalen Umzug in ${c.name} empfehlen wir mindestens 15 bis 20 Meter. Die optimale Größe hängt vom Anlass ab – wir beraten Sie gerne.` },
    { q: (c) => `Kann ich eine Halteverbotszone in ${c.name} auf beiden Straßenseiten einrichten?`, a: (c) => `Ja, beidseitige Halteverbotszonen in ${c.name} sind möglich und bei engen Straßen sinnvoll. Wir beantragen die Genehmigung bei der ${c.behoerdeKurz} für beide Seiten.` },
    { q: (c) => `Kann die Zone in ${c.name} auch mehrere Tage bestehen?`, a: (c) => `Ja, eine Halteverbotszone in ${c.name} kann für mehrere Tage oder Wochen eingerichtet werden – z.B. bei Baumaßnahmen oder Gerüstarbeiten. Die Dauer wird im Antrag bei der ${c.behoerdeKurz} festgelegt.` },
    { q: (c) => `Werden Schilder in ${c.name} auch am Wochenende aufgestellt?`, a: (c) => `Ja, wir stellen Schilder in ${c.name} bei Bedarf auch an Wochenenden auf. Sonn- und Feiertage zählen jedoch nicht als Werktage bei der 72-Stunden-Vorlaufzeit.` },
    { q: (c) => `Wer trägt die Abschleppkosten in ${c.name}?`, a: (c) => `Bei korrekt genehmigter und fristgerecht aufgestellter Halteverbotszone in ${c.name} trägt der Fahrzeughalter die Abschleppkosten. Unsere Dokumentation sichert Sie rechtlich ab.` },
    { q: (c) => `Brauche ich auf Privatgelände in ${c.name} eine Genehmigung?`, a: (c) => `Nein, auf Privatgelände in ${c.name} ist keine behördliche Genehmigung erforderlich. Sobald der öffentliche Straßenraum betroffen ist, ist eine Anordnung der ${c.behoerdeKurz} nötig.` },
    { q: (c) => `Sind Sie in ${c.name} und Umgebung tätig?`, a: (c) => `Ja, wir sind in <strong>${c.name} und im gesamten ${c.landkreis}</strong> tätig. Auch in ${c.nachbarorte.slice(0,3).join(', ')} sind wir regelmäßig im Einsatz.` },
    { q: (c) => `Was ist im Festpreis für ${c.name} enthalten?`, a: (c) => `Unser Festpreis für ${c.name} umfasst: Beratung, Antragstellung bei der ${c.behoerdeKurz}, Schilderaufstellung, Fotodokumentation und termingerechten Abbau. Keine versteckten Kosten.` }
];

const trustBarPool = [
    'Genehmigung inklusive',
    'Aufstellung mind. 72h vorher',
    'Festpreise ohne Extras',
    'Fotografische Dokumentation',
    'Express-Service möglich',
    'Kostenlose Beratung',
    'Alle Anlässe',
    'Termingerechter Abbau'
];

const sidebarGutZuWissen = [
    (c) => `In ${c.name} ist die <strong>${c.behoerdeKurz}</strong> für die Genehmigung verantwortlich. Die Halteverbotsschilder müssen mindestens <strong>3 volle Werktage (72 Stunden)</strong> vor Beginn aufgestellt werden.`,
    (c) => `Die ${c.behoerdeKurz} erteilt die verkehrsrechtliche Anordnung für Halteverbotszonen in ${c.name}. Ohne Genehmigung dürfen keine Schilder aufgestellt werden. Wir kennen die Abläufe genau.`,
    (c) => `Für eine Halteverbotszone in ${c.name} muss die ${c.behoerdeKurz} eine verkehrsrechtliche Anordnung erlassen. Die Vorlaufzeit beträgt mindestens <strong>72 Stunden</strong>. Wir übernehmen alles.`,
    (c) => `In ${c.name} genehmigt die ${c.behoerdeKurz} Halteverbotszonen. Wichtig: Die Schilder müssen <strong>3 volle Werktage</strong> vor Beginn stehen – Sonn- und Feiertage zählen nicht.`
];

const sidebarWarnung = [
    (c) => `Das eigenmächtige Aufstellen von Halteverbotsschildern in ${c.name} ohne Genehmigung der ${c.behoerdeKurz} ist eine <strong>Ordnungswidrigkeit</strong> und kann mit einem Bußgeld geahndet werden.`,
    (c) => `Ohne Genehmigung der ${c.behoerdeKurz} dürfen in ${c.name} keine Halteverbotsschilder aufgestellt werden. Verstöße sind eine <strong>Ordnungswidrigkeit</strong>. Beauftragen Sie einen Fachbetrieb.`,
    (c) => `Achtung: Schilder ohne Anordnung der ${c.behoerdeKurz} in ${c.name} aufzustellen, ist illegal und kann mit <strong>Bußgeldern</strong> bestraft werden. Wir kümmern uns um die korrekte Genehmigung.`,
    (c) => `In ${c.name} ist das Aufstellen von Halteverbotsschildern ohne behördliche Genehmigung eine <strong>Ordnungswidrigkeit</strong>. Die ${c.behoerdeKurz} muss die Anordnung erteilen.`
];

const sidebarTipp = [
    (c) => `Wer ohne Halteverbotszone in ${c.name} umzieht, riskiert keinen Parkplatz zu finden. Die Kosten für eine Halteverbotszone sind deutlich geringer als Mehrkosten durch verlängerte Umzugszeiten.`,
    (c) => `Eine Halteverbotszone in ${c.name} spart Zeit und Nerven. Statt stundenlanger Parkplatzsuche haben Sie garantiert freien Platz vor der Tür.`,
    (c) => `Tipp für ${c.name}: Buchen Sie die Halteverbotszone rechtzeitig – mindestens 2 Wochen im Voraus. So bleibt genug Zeit für die Genehmigung bei der ${c.behoerdeKurz}.`,
    (c) => `In ${c.name} lohnt sich eine Halteverbotszone besonders bei Straßen mit wenig Parkraum. Die geringe Investition spart erhebliche Umzugs- oder Projektkosten.`
];

const ctaTexts = [
    (c) => `Kontaktieren Sie uns für ein kostenloses Angebot für Ihre Halteverbotszone in ${c.name}. Wir melden uns innerhalb kürzester Zeit.`,
    (c) => `Sie brauchen eine Halteverbotszone in ${c.name}? Fordern Sie jetzt Ihr unverbindliches Angebot an – schnell und unkompliziert.`,
    (c) => `Halteverbotszone in ${c.name} einrichten lassen – zum Festpreis, ohne versteckte Kosten. Jetzt anfragen!`,
    (c) => `Planen Sie einen Umzug oder ein Projekt in ${c.name}? Wir richten Ihre Halteverbotszone professionell ein. Jetzt beraten lassen!`
];

const footerDescs = [
    (c) => `Halteverbotszone in ${c.name} einrichten – schnell, günstig und zuverlässig.`,
    (c) => `Ihr Experte für Halteverbotszonen in ${c.name} und ${c.landkreis}.`,
    (c) => `Halteverbotszone in ${c.name}: Genehmigung, Aufstellung und Abbau aus einer Hand.`,
    (c) => `Professionelle Halteverbotszonen in ${c.name} – Festpreise ohne versteckte Kosten.`
];

const checklistPool = [
    'Kostenlose Erstberatung',
    'Beantragung der Genehmigung',
    'Anlieferung der Schilder',
    'Fachgerechte Aufstellung',
    'Fotografische Dokumentation',
    'Protokoll parkender Fahrzeuge',
    'Termingerechter Abbau',
    'Rückmeldung an die Behörde',
    'Express-Service möglich',
    'Festpreis-Garantie'
];

module.exports = {
    heroSubtitles, sectionLabels, introP1, introP2, introP3,
    usecasePool, processStepVariants, costIntros, costItemPool,
    faqPool, trustBarPool, sidebarGutZuWissen, sidebarWarnung, sidebarTipp,
    ctaTexts, footerDescs, checklistPool
};
