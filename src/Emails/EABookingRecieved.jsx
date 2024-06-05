// src/emailService.js
import { ElasticEmail } from "@elasticemail/elasticemail-client";

let defaultClient = ElasticEmail.ApiClient.instance;
const apikey = defaultClient.authentications["apikey"];
apikey.apiKey = import.meta.env.VITE_APP_ELASTIC_EMAIL_API_KEY;
let api = new ElasticEmail.EmailsApi();

export const sendEARecieved = async (
  recipientEmail,
  firstName,
  travellers,
  checkInDate,
  itemName,
  confirmationNumber
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
        TemplateName: "EA - Bank Booking Recieved Email",
        Merge: {
          firstname: firstName,
          travelling: travellers,
          confirmationnumber: confirmationNumber,
          checkindate: checkInDate,
          itemname: itemName,
        },
        From: "ExploreCrystalveey <bookings@crystalveey.com>",
        Subject: `Booking Received - ${confirmationNumber}`,
      },
    };

    const response = await api.emailsTransactionalPost(emailData);
    console.log("Email sent successfully", response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
