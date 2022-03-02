# ExpressPWAShifts
Basic PoC to show how to notify (push) a subscriber PWA

# Overview
This project was created with
- Express to manage REST APIs
- Cron Node to manage the push notification schedule
- Web Push to manage encryption and sending notifications

## Registration flow
1) First, the PWA has to query the server to get the public key for the encryption step: `GET /public-key`;
2) Then the PWA has to send the subscription details to the server: `POST /subscription`.

For simplicity, each subscription is stored in a simple in-memory data structure. Each subscription is identified by the endpoint, see https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications.

## Get the turns
The last endpoint exposed by this application is `GET /`, which returns shifts for a certain date. Shifts are mocked within the application.

# To start
Generate VAPID keys and save them in the .env file using `webPush.generateVAPIDKeys ()`. `webPush` derives from the` web-push` package. See https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Re-engageable_Notifications_Push#push.

Run the following command: `yarn install && yarn start`
