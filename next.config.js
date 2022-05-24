/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    mongoURI: process.env.MONGODB_URI,
    mongoDB: process.env.MONGODB_DB,
    hostUrl: process.env.HOST_URL,
  },
};
