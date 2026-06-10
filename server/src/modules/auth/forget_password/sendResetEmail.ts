import { getFrontendUrl } from '../../../config/frontendUrl';
import transporter, { isSmtpConfigured } from '../../../config/mailer';

export async function sendResetPasswordEmail(to: string, token: string) {
  const resetUrl = `${getFrontendUrl()}/reset-password?token=${token}`;

  if (!isSmtpConfigured()) {
    console.warn('[reset-password] SMTP not configured; email not sent to', to);
    console.warn('[reset-password] Reset link:', resetUrl);
    return;
  }

  const info = await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to,
    subject: 'Restablecer contraseña',
    text: `Pulsa este enlace para restablecer tu contraseña: ${resetUrl}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2>Restablecer contraseña</h2>
        <p>Has solicitado cambiar tu contraseña.</p>
        <p>
          <a href="${resetUrl}">Pulsa aquí para restablecerla</a>
        </p>
        <p>Si tú no hiciste esta solicitud, ignora este correo.</p>
      </div>
    `,
  });

  console.log('[reset-password] Email sent to', to, 'messageId:', info.messageId);
  return info;
}
