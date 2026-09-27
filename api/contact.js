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
                from: 'Kontaktformular <info@verkehrssicherung-adler.de>',
                to: ['info@verkehrssicherung-adler.de'],
                subject: `Neue Anfrage von ${firma} – ${ansprechpartner}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <div style="background: #ffffff; padding: 32px; border-radius: 12px 12px 0 0; border: 1px solid #e2e8f0; border-bottom: none; text-align: center;">
                            <img src="https://www.verkehrssicherung-adler.de/logo-dark.png" alt="Adler & Sohn" style="height: 70px; width: auto; margin: 0 auto 20px auto; display: block;">
                            <h1 style="margin: 0; font-size: 20px; color: #0B1D3A;">Neue Kontaktanfrage</h1>
                            <p style="margin: 8px 0 0; color: #64748b;">über verkehrssicherung-adler.de</p>
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

        // Bestätigungs-E-Mail an den Absender
        await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Adler & Sohn – Verkehrssicherung <info@verkehrssicherung-adler.de>',
                to: [email],
                subject: 'Ihre Anfrage ist bei uns eingegangen – Adler & Sohn',
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <div style="background: #ffffff; padding: 32px; border-radius: 12px 12px 0 0; border: 1px solid #e2e8f0; border-bottom: none; text-align: center;">
                            <img src="https://www.verkehrssicherung-adler.de/logo-dark.png" alt="Adler & Sohn" style="height: 70px; width: auto; margin: 0 auto 20px auto; display: block;">
                            <h1 style="margin: 0; font-size: 22px; color: #0B1D3A;">Vielen Dank für Ihre Anfrage!</h1>
                        </div>
                        <div style="background: #ffffff; padding: 32px; border: 1px solid #e2e8f0;">
                            <p style="color: #334155; font-size: 16px; line-height: 1.8; margin: 0 0 16px;">
                                Sehr geehrte/r ${ansprechpartner},
                            </p>
                            <p style="color: #475569; font-size: 15px; line-height: 1.8; margin: 0 0 16px;">
                                vielen Dank für Ihre Nachricht. Ihre Anfrage ist bei uns eingegangen und wir melden uns in Kürze bei Ihnen.
                            </p>
                            <p style="color: #475569; font-size: 15px; line-height: 1.8; margin: 0 0 24px;">
                                Sollten Sie in der Zwischenzeit Fragen haben, erreichen Sie uns jederzeit über die folgenden Kontaktdaten:
                            </p>

                            <div style="background: #f8fafc; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                                <table style="width: 100%; border-collapse: collapse;">
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 100px;">Telefon</td>
                                        <td style="padding: 8px 0; font-weight: 600; color: #0B1D3A; font-size: 14px;">
                                            <a href="tel:+4941313942977" style="color: #DC2626; text-decoration: none;">04131 3942977</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b; font-size: 14px;">E-Mail</td>
                                        <td style="padding: 8px 0; font-weight: 600; color: #0B1D3A; font-size: 14px;">
                                            <a href="mailto:info@verkehrssicherung-adler.de" style="color: #DC2626; text-decoration: none;">info@verkehrssicherung-adler.de</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Webseite</td>
                                        <td style="padding: 8px 0; font-weight: 600; color: #0B1D3A; font-size: 14px;">
                                            <a href="https://www.verkehrssicherung-adler.de" style="color: #DC2626; text-decoration: none;">www.verkehrssicherung-adler.de</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Adresse</td>
                                        <td style="padding: 8px 0; font-weight: 600; color: #0B1D3A; font-size: 14px;">Rehrhöfe 14a, 21423 Winsen (Luhe)</td>
                                    </tr>
                                </table>
                            </div>

                            <p style="color: #475569; font-size: 15px; line-height: 1.8; margin: 0;">
                                Mit freundlichen Grüßen<br>
                                <strong style="color: #0B1D3A;">Ihr Team von Adler & Sohn</strong><br>
                                <span style="color: #64748b; font-size: 13px;">Professionelle Verkehrssicherung</span>
                            </p>
                        </div>
                        <div style="padding: 16px 24px; background: #f1f5f9; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: 0; text-align: center;">
                            <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                                Adler & Sohn · Rehrhöfe 14a · 21423 Winsen (Luhe)<br>
                                <a href="https://www.verkehrssicherung-adler.de" style="color: #94a3b8;">www.verkehrssicherung-adler.de</a>
                            </p>
                        </div>
                    </div>
                `,
            }),
        });

        return res.status(200).json({ success: true, message: 'Anfrage erfolgreich gesendet!' });

    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({ error: 'Serverfehler. Bitte versuchen Sie es später erneut.' });
    }
}
