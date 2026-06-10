import app from './app';
import { logFrontendUrlStatus } from './config/frontendUrl';
import { logSmtpStatus } from './config/mailer';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ok! ${PORT}`);
  logFrontendUrlStatus();
  logSmtpStatus();
});