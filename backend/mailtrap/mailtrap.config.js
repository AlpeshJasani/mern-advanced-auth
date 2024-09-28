import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const mailtrapClient = new MailtrapClient({
    // endpoint: process.env.MAILTRAP_ENDPOINT,
    token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
    email: "hello@demomailtrap.com",
    // name: "Mailtrap Test",
};

// From mailtrap.com
// const { MailtrapClient } = require("mailtrap");

// const TOKEN = "b19ee23a691f5f74d6551d688d973f9d";

// const client = new MailtrapClient({
//   token: TOKEN,
// });

// const sender = {
//   email: "hello@demomailtrap.com",
//   name: "Mailtrap Test",
// };
// const recipients = [
//   {
//     email: "alpeshjasani777@gmail.com",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);
