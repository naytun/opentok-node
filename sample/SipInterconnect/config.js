module.exports = {
  apiKey: process.env.API_KEY || "46067482",
  apiSecret: process.env.API_SECRET || "425f4fb3cfb18d5fab36bad47d90ab5ca35606ea",
  sipUri: process.env.SIP_URI || "nay@lucy.onsip.com",
  sipHeaders: process.env.SIP_HEADERS ? JSON.parse(process.env.SIP_HEADERS) : null,
  sipUsername: process.env.SIP_USERNAME || "lucy",
  sipPassword: process.env.SIP_PASSWORD || "Password99"
};
