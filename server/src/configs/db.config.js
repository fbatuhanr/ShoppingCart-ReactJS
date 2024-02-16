const env = process.env;
const db = {
    port: env.PORT || 8000,
    mongodb_uri: env.MONGODB_URI
};
module.exports = db;