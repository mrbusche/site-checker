const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

client.messages
    .create({
        body: "site checker test failed",
        from: process.env.FROM_NUMBER,
        to: process.env.TO_NUMBER
    })
    .then(message => console.log(message.sid));


