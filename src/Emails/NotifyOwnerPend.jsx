import {
  Configuration,
  EmailsApi,
} from "@elasticemail/elasticemail-client-ts-axios";

const config = new Configuration({
  apiKey: import.meta.env.VITE_APP_ELASTIC_EMAIL_API_KEY,
});

const emailsApi = new EmailsApi(config);

export const notifyOwnerPending = async (
  recipientEmail,
  name,
  price,
  date,
  link
) => {
  try {
    const emailTransactionalMessageData = {
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

    const response = await emailsApi.emailsTransactionalPost(
      emailTransactionalMessageData
    );
    console.log("Email sent successfully", response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
