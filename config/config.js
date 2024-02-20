module.exports = () => ({
  mongo: {
    pw :process.env.dbpassword,
    uri: process.env.DB_URI,
  },
});
