module.exports = ({env}) => ({
  email: {
    provider: 'nodemailer',
    providerOptions: {
      host: env('SMTP_HOST', 'smtp.mailtrap.io'),
      port: env('SMTP_PORT', 2525),
      auth: {
        user: env('64bc724377ab8a'),
        pass: env('fb65e849624284'),
      },
    },
    settings: {
      defaultFrom: 'noreply@fusioneers.space',
      defaultReplyTo: 'noreply@fusioneers.space',
    },
  },
});
