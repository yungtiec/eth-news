/*
    These environment variables are not hardcoded so as not to put
    production information in a repo. They should be set in your
    heroku (or whatever VPS used) configuration to be set in the
    applications environment, along with NODE_ENV=production

 */


module.exports = {
    "DATABASE_URI": process.env.DATABASE_URI,
    "SESSION_SECRET": process.env.SESSION_SECRET,
    "TWITTER": {
        "consumerKey": process.env.TWITTER_CONSUMER_KEY,
        "consumerSecret": process.env.TWITTER_CONSUMER_SECRET,
        "callbackUrl": process.env.TWITTER_CALLBACK
    },
    "FACEBOOK": {
        "clientID": process.env.FACEBOOK_APP_ID,
        "clientSecret": process.env.FACEBOOK_CLIENT_SECRET,
        "callbackURL": process.env.FACEBOOK_CALLBACK_URL
    },
    "GOOGLE": {
        "clientID": process.env.GOOGLE_CLIENT_ID,
        "clientSecret": process.env.GOOGLE_CLIENT_SECRET,
        "callbackURL": process.env.GOOGLE_CALLBACK_URL
    },
    "ALCHEMY": {
        "url": process.env.ALCHEMY_CALLBACK_URL,
        "apikey": process.env.ALCHEMY_API_KEY
    }
    ,
    "STRIPE":{
        "secretKey": process.env.STRIPE_SECRET_KEY,
        "publicKey": process.env.STRIPE_PUBLIC_KEY
    },
    "ADMIN":{
        "seedPassword": process.env.ADMIN_SEED_PASSWORD
    },
    "LOGGING": true
};
