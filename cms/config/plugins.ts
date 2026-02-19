export default ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: env("SMTP_USERNAME"),
          clientId: env("G_CLIENT_ID"),
          clientSecret: env("G_CLIENT_SECRET"),
          refreshToken: env("G_REFRESH_TOKEN"),
        },
      },
      settings: {
        defaultFrom: "CME Solver <cs@cmesolver.com>",
        defaultReplyTo: "cs@cmesolver.com",
      },
    },
  },
});
