import nodemailer from 'nodemailer';

export function isSmtpConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST?.trim() &&
      process.env.SMTP_PORT?.trim() &&
      process.env.SMTP_USER?.trim() &&
      process.env.SMTP_PASS?.trim() &&
      process.env.MAIL_FROM?.trim()
  );
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  connectionTimeout: 10_000,
  greetingTimeout: 10_000,
  socketTimeout: 10_000,
});

export function logSmtpStatus(): void {
  if (isSmtpConfigured()) {
    console.log('[config] SMTP configured for password reset emails');
    return;
  }

  const missing = [
    !process.env.SMTP_HOST?.trim() && 'SMTP_HOST',
    !process.env.SMTP_PORT?.trim() && 'SMTP_PORT',
    !process.env.SMTP_USER?.trim() && 'SMTP_USER',
    !process.env.SMTP_PASS?.trim() && 'SMTP_PASS',
    !process.env.MAIL_FROM?.trim() && 'MAIL_FROM',
  ].filter(Boolean);

  console.warn(
    `[config] SMTP incomplete (${missing.join(', ')}). Password reset emails will not be sent.`
  );
}

export default transporter;
