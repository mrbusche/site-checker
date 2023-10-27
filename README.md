# site-checker

This runs a cypress test every 10 minutes and sends you a text message using twilio if the test fails

You will need to set up the following secrets from twilio

```shell
ACCOUNT_SID
AUTH_TOKEN
FROM_NUMBER
TO_NUMBER
```

This is configured for the URL to be a secret, but you could also hardcode it in the Cypress test

```shell
CYPRESS_URL
```

Modify [website.cy.js](https://github.com/mrbusche/site-checker/blob/main/cypress/e2e/website.cy.js) to suit your needs

Once you've received a text message you'll want to disable the workflow unless you want to continue receiving text messages 😺
