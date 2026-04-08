import transporter from '../../../config/mailer';

export async function sendResetPasswordEmail(to: string, token: string) {
  const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

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

  return info;
}