// src/emailService.js
import { ElasticEmail } from "@elasticemail/elasticemail-client";

let defaultClient = ElasticEmail.ApiClient.instance;
const apikey = defaultClient.authentications["apikey"];
apikey.apiKey = import.meta.env.VITE_APP_ELASTIC_EMAIL_API_KEY;
let api = new ElasticEmail.EmailsApi();

export const sendOrderRecieved = async (
  recipientEmail,
  firstName,
  orderID,
  orderDate,
  total
) => {
  try {
    const emailData = {
      Recipients: {
        To: [recipientEmail],
      },
      Content: {
        Body: [
          {
            ContentType: "HTML",
            Charset: "utf-8",
            Content: "<strong>Example content<strong>",
          },
        ],
        TemplateName: "Order Received",
        Merge: {
          firstname: firstName,
          orderid: orderID,
          orderdate: orderDate,
          total: total,
        },
        From: "Atelier <atelier@crystalveey.com>",
        Subject: `Yay! We Received Your Order!`,
      },
    };

    const response = await api.emailsTransactionalPost(emailData);
    console.log("Email sent successfully", response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
