import dns from 'node:dns';
import net from 'node:net';
import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

export function isSmtpConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST?.trim() &&
      process.env.SMTP_PORT?.trim() &&
      process.env.SMTP_USER?.trim() &&
      process.env.SMTP_PASS?.trim() &&
      process.env.MAIL_FROM?.trim()
  );
}

function buildSmtpOptions(): SMTPTransport.Options {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);

  return {
    host,
    port,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 10_000,
    getSocket(options, callback) {
      const smtpHost = options.host ?? host;
      const smtpPort = options.port ?? port;

      if (!smtpHost || !smtpPort) {
        callback(new Error('SMTP host or port is not configured'), false);
        return;
      }

      dns.lookup(smtpHost, { family: 4 }, (lookupError, address) => {
        if (lookupError) {
          callback(lookupError, false);
          return;
        }

        const socket = net.connect({ host: address, port: smtpPort, family: 4 });

        socket.once('connect', () => {
          callback(null, { connection: socket });
        });

        socket.once('error', (socketError) => {
          callback(socketError, false);
        });
      });
    },
  };
}

const transporter = nodemailer.createTransport(buildSmtpOptions());

export function logSmtpStatus(): void {
  if (isSmtpConfigured()) {
    console.log(
      `[config] SMTP configured (${process.env.SMTP_HOST}:${process.env.SMTP_PORT}, IPv4 only)`
    );
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
