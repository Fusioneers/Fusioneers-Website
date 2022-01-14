module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '028fbc3ef42948b409a543a33736f8e7'),
  },
});
