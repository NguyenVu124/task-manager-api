const sgMail = require("@sendgrid/mail");

const sendgridAPIKey =
  "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";

sgMail.send({
  to: "hoangnguyenvubk@gmail.com",
  from: "hoangnguyenvubk@gmail.com",
  subject: " This sis my first creation",
  text: "Hello",
});
