export default async function handler(req, res) {
    // Nur POST erlauben
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Methode nicht erlaubt' });
    }

    const { ansprechpartner, firma, telefon, email, nachricht } = req.body;

    // Validierung
    if (!ansprechpartner || !firma || !telefon || !email) {
        return res.status(400).json({ error: 'Bitte füllen Sie alle Pflichtfelder aus.' });
    }

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Kontaktformular <onboarding@resend.dev>',
                to: ['info@verkehrssicherung-adler.de'],
                subject: `Neue Anfrage von ${firma} – ${ansprechpartner}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <div style="background: #0B1D3A; color: white; padding: 24px; border-radius: 12px 12px 0 0;">
                            <h1 style="margin: 0; font-size: 20px;">Neue Kontaktanfrage</h1>
                            <p style="margin: 8px 0 0; opacity: 0.8;">über verkehrssicherung-adler.de</p>
                        </div>
                        <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0;">
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155; width: 160px;">Ansprechpartner</td>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #475569;">${ansprechpartner}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Firma</td>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #475569;">${firma}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Telefon</td>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #475569;"><a href="tel:${telefon}" style="color: #DC2626;">${telefon}</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">E-Mail</td>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #475569;"><a href="mailto:${email}" style="color: #DC2626;">${email}</a></td>
                                </tr>
                                ${nachricht ? `
                                <tr>
                                    <td style="padding: 12px 0; font-weight: bold; color: #334155; vertical-align: top;">Nachricht</td>
                                    <td style="padding: 12px 0; color: #475569; white-space: pre-line;">${nachricht}</td>
                                </tr>` : ''}
                            </table>
                        </div>
                        <div style="padding: 16px 24px; background: #f1f5f9; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: 0;">
                            <p style="margin: 0; color: #94a3b8; font-size: 13px;">Diese E-Mail wurde automatisch über das Kontaktformular auf verkehrssicherung-adler.de gesendet.</p>
                        </div>
                    </div>
                `,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Resend Error:', data);
            return res.status(500).json({ error: 'E-Mail konnte nicht gesendet werden.' });
        }

        return res.status(200).json({ success: true, message: 'Anfrage erfolgreich gesendet!' });

    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({ error: 'Serverfehler. Bitte versuchen Sie es später erneut.' });
    }
}
