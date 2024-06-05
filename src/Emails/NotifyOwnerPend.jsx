import { ElasticEmail } from "@elasticemail/elasticemail-client";

let defaultClient = ElasticEmail.ApiClient.instance;
const apikey = defaultClient.authentications["apikey"];
apikey.apiKey = import.meta.env.VITE_APP_ELASTIC_EMAIL_API_KEY;
let api = new ElasticEmail.EmailsApi();

export const notifyOwnerPending = async (
  recipientEmail,
  name,
  price,
  date,
  link
) => {
  try {
    const emailData = {
      Recipients: {
        To: ["atelier@crystalveey.com"],
      },
      Content: {
        Body: [
          {
            Charset: "utf-8",
            Content: `
                          A new order has been made on Atelier:<br>
                          <strong>Price:</strong> ${price}<br>
                          <strong>Date:</strong> ${date}<br><br><br><br>
                          <strong>Customer Name:</strong> ${name}<br>
                            <strong>Customer Email:</strong> ${recipientEmail}<br>
                            <p><strong><a href="${link}">Click here to view booking</a></strong></p><br><br>
                          <p>Please review and confirm the booking.<p/>`,
            ContentType: "HTML",
          },
        ],
        From: "Orders Atelier <orders@crystalveey.com>",
        Subject: `${name} has made a order - Pending Confirmation`,
      },
    };

    const response = await api.emailsTransactionalPost(emailData);
    console.log("Email sent successfully", response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
