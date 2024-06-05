// src/emailService.js
import {
  Configuration,
  EmailsApi,
} from "@elasticemail/elasticemail-client-ts-axios";

const config = new Configuration({
  apiKey: import.meta.env.VITE_APP_ELASTIC_EMAIL_API_KEY,
});


const emailsApi = new EmailsApi(config);

export const sendOrderRecieved = async (
  recipientEmail,
  firstName,
  orderID,
  orderDate,
  total
) => {
  try {
    const emailTransactionalMessageData = {
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
            // if firstname is not empty, use customer
          firstname: firstName || "customer",
          orderid: orderID,
          orderdate: orderDate,
          total: total,
        },
        From: "Atelier <atelier@crystalveey.com>",
        Subject: `Yay! We Received Your Order!`,
      },
    };

    const response = await emailsApi.emailsTransactionalPost(
      emailTransactionalMessageData
    );
    console.log("Transactional email sent successfully.");
    console.log(response.data);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
