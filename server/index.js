const express = require('express');
const cors = require('cors');
// const dotenv = require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const admin = require('firebase-admin');
const functions = require("firebase-functions")

// dotenv.config();

const app = express();
const serviceAccount = require(functions.config().service.account_name);

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: functions.config().react.app_auth_domain,
});

sgMail.setApiKey(functions.config().react.app_sendgrid_api_key);

const port = functions.config().dev.port || functions.config().test.port;

const corsOptions = {
	origin: functions.config().test.client_url || functions.config().dev.client_origin_url,
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	credentials: true,
	optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

/**
 * API endpoint for sending custom newsletters to all subscribed users.
 *
 * @param {Object} req - Express request object containing user data.
 *                      Parameters:
 *                        - name: Name of the sender.
 *                        - email: Email address of the sender.
 *                        - message: Content of the newsletter.
 *                        - subject: Subject of the newsletter.
 * @param {Object} res - Express response object.
 * @returns {Object} JSON response indicating success or failure.
 *                    Properties:
 *                      - success: Boolean indicating the success status.
 *                      - error: String containing error details (if any).
 */
app.post('/api/newsletter', async (req, res) => {
	const unsubscribeLink = functions.config().unsubscribe.url;
	const { name, message, subject, image } = req.body;
	try {
    const imageUrl = image || functions.config().welcome.image_url;
		const snapshot = await admin.firestore().collection('users').get();
		const newsletterEmails = snapshot.docs.map((doc) => doc.data().email);

		const emailPromises = newsletterEmails.map((usersEmail) => {
			const msg = {
				to: usersEmail,
				from: functions.config().client.email_address,
				subject: subject,
				html: `
      <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>T.L Griffin Weekly Newsletter</title>
    <style type="text/css">

    /* Reset styles */
    html, body {
      margin: 0;
      padding: 0;
      height: 100% !important;
      width: 100% !important;
    }

    * {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }

    table, td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    table {
      border-spacing: 0 !important;
    }

    img {
      -ms-interpolation-mode: bicubic;
    }

    /* Responsive styles */
    @media screen and (max-width: 600px) {
      .email-container {
        width: 100% !important;
      }

      img[class="fluid"],
      img[class="fluid-centered"] {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
        margin: auto !important;
        display: block !important;
      }

      td[class="stack-column"],
      td[class="stack-column-center"] {
        display: block !important;
        width: 100% !important;
        direction: ltr !important;
      }

      td[class="stack-column-center"] {
        text-align: center !important;
      }

      /* Data Table Styles */
      td[class="data-table-th"],
      td[class="data-table-td"],
      td[class="data-table-td-title"] {
        display: block !important;
        width: 100% !important;
        border: 0 !important;
      }

      td[class="data-table-td-title"] {
        font-weight: bold;
        color: #333333;
        padding: 10px 0 0 0 !important;
        border-top: 2px solid #eeeeee !important;
      }

      td[class="data-table-td"] {
        padding: 5px 0 0 0 !important;
      }

      td[class="data-table-mobile-divider"] {
        display: block !important;
        height: 20px;
      }
    }

  </style>
</head>

<body bgcolor="#222222" style="margin: 0; padding: 0; -webkit-text-size-adjust: none; -ms-text-size-adjust: none;">
  <table cellpadding="0" cellspacing="0" border="0" height="100%" width="100%" bgcolor="#222222" style="border-collapse: collapse;">
    <tr>
      <td>
        <!-- Email wrapper : BEGIN -->
        <table border="0" width="600" cellpadding="0" cellspacing="0" align="center" style="width: 600px; margin: auto;" class="email-container">
          <tr>
            <td>
              <!-- Logo + Links : BEGIN -->
              <table border="0" width="100%" cellpadding="0" cellspacing="0">
                <!-- Your logo and links here -->
              </table>
              <!-- Logo + Links : END -->

              <!-- Main Email Body : BEGIN -->
              <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="border: 1px solid #e0e0e0; border-radius: 5px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <!-- Dynamic Image : BEGIN -->
                <tr>
                  <td valign="middle" align="center">
                    <img src="${imageUrl}" alt="Exclusive Preview: T.L Griffin's Newsletter" height="300" width="600" align="center" border="0" style="margin: auto;" class="fluid">
                  </td>
                </tr>
                <!-- Dynamic Image : END -->

                <!-- Dynamic Message : BEGIN -->
                <tr>
                  <td style="padding: 2%; font-family: sans-serif; font-size: 16px; line-height: 1.3; color: #666666; text-align: left;">
                    ${name},
                  </td>
                </tr>
                <tr>
                  <td style="padding: 2%; font-family: sans-serif; font-size: 16px; line-height: 1.3; color: #666666; text-align: left;">
                    ${message}
                  </td>
                </tr>
                <!-- Dynamic Message : END -->

                <!-- Full Width, Fluid Column : BEGIN -->
                <!-- Additional content here if needed -->
                <!-- Full Width, Fluid Column : END -->

              </table>
              <!-- Main Email Body : END -->

            </td>
          </tr>

          <!-- Footer : BEGIN -->
          <tr>
            <td style="text-align: center; padding: 4% 0; font-family: sans-serif; font-size: 13px; line-height: 1.2; color: #666666;">
              You received this email because you opted in to our newsletter.
              <br><br>Stay connected on social media:
              <a href="https://facebook.com/example" style="color: #3b5998; text-decoration: none;">Facebook</a>
              <br><br>
              <a href="${unsubscribeLink}" style="color: #e74c3c; text-decoration: underline;">Unsubscribe</a>
            </td>
          </tr>
          <!-- Footer : END -->

        </table>
        <!-- Email wrapper : END -->

      </td>
    </tr>
  </table>
</body>

</html>

    `,
			};

			return sgMail.send(msg);
		});

		// Wait for all email promises to resolve
		await Promise.all(emailPromises);

		res.json({ success: true });
	} catch (error) {
		res.json({ success: false, error: error.toString() });
	}
});

/**
 * API endpoint for sending a welcome email to users who sign up for the newsletter.
 *
 * @param {Object} req - Express request object containing user data.
 *                      Parameters:
 *                        - firstname: First name of the subscriber.
 *                        - email: Email address of the subscriber.
 * @param {Object} res - Express response object.
 * @returns {Object} JSON response indicating success or failure.
 *                    Properties:
 *                      - success: Boolean indicating the success status.
 *                      - error: String containing error details (if any).
 */
app.post('/api/welcome', async (req, res) => {
	const unsubscribeLink = functions.config().unsubscribe.url;
	const authorsName = 'T.L Griffin';
	const { firstname, email } = req.body;
	try {
		const msg = {
			to: email,
			from: functions.config().client.email_address,
			subject: 'Unlock Exclusive Stories and Updates!📚',
			html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title></title>
  <style type="text/css">

    /* Reset styles */
    html, body {
      margin: 0;
      padding: 0;
      height: 100% !important;
      width: 100% !important;
    }

    * {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }

    table, td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    table {
      border-spacing: 0 !important;
    }

    img {
      -ms-interpolation-mode: bicubic;
    }

    /* Responsive styles */
    @media screen and (max-width: 600px) {
      .email-container {
        width: 100% !important;
      }

      img[class="fluid"],
      img[class="fluid-centered"] {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
        margin: auto !important;
        display: block !important;
      }

      td[class="stack-column"],
      td[class="stack-column-center"] {
        display: block !important;
        width: 100% !important;
        direction: ltr !important;
      }

      td[class="stack-column-center"] {
        text-align: center !important;
      }

      /* Data Table Styles */
      td[class="data-table-th"],
      td[class="data-table-td"],
      td[class="data-table-td-title"] {
        display: block !important;
        width: 100% !important;
        border: 0 !important;
      }

      td[class="data-table-td-title"] {
        font-weight: bold;
        color: #333333;
        padding: 10px 0 0 0 !important;
        border-top: 2px solid #eeeeee !important;
      }

      td[class="data-table-td"] {
        padding: 5px 0 0 0 !important;
      }

      td[class="data-table-mobile-divider"] {
        display: block !important;
        height: 20px;
      }
    }

  </style>
</head>
<body bgcolor="#222222" style="margin: 0; padding: 0; -webkit-text-size-adjust: none; -ms-text-size-adjust: none;">
  <table cellpadding="0" cellspacing="0" border="0" height="100%" width="100%" bgcolor="#222222" style="border-collapse: collapse;">
    <tr>
      <td>

        <!-- Email wrapper : BEGIN -->
        <table border="0" width="600" cellpadding="0" cellspacing="0" align="center" style="width: 600px; margin: auto;" class="email-container">
          <tr>
            <td>

              <!-- Logo + Links : BEGIN -->
              <table border="0" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td height="5" style="font-size: 0; line-height: 0;">&nbsp;</td>
                </tr>
                <tr>
                  <td valign="middle" style="text-align: center; line-height: 1.1; font-family: sans-serif; font-size: 15px; color: #999999;" class="stack-column-center">
                    Welcome to ${authorsName}'s Newsletter!
                  </td>
                </tr>
                <tr>
                  <td height="5" style="font-size: 0; line-height: 0;">&nbsp;</td>
                </tr>
              </table>
              <!-- Logo + Links : END -->

              <!-- Main Email Body : BEGIN -->
              <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="border: 1px solid #e0e0e0; border-radius: 5px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <!-- Single Fluid Image, No Crop : BEGIN -->
                <tr>
                  <td valign="middle" align="center">
                    <img src="${functions.config().welcome.image_url}" alt="Exclusive Preview: T.L Griffin's Newsletter" height="300" width="600" align="center" border="0" style="margin: auto;" class="fluid">
                  </td>
                </tr>
                <!-- Single Fluid Image, No Crop : END -->

                <!-- Full Width, Fluid Column : BEGIN -->
                <tr>
                  <td style="padding: 2%; font-family: sans-serif; font-size: 16px; line-height: 1.3; color: #666666; text-align: left;">
                    Dear ${firstname},
                  </td>
                </tr>
                <tr>
                  <td style="padding: 2%; font-family: sans-serif; font-size: 16px; line-height: 1.3; color: #666666; text-align: left;">
                    Thank you for joining ${authorsName}'s newsletter community. I am delighted to have you on board!
                  </td>
                </tr>
                <tr>
                  <td style="padding: 2%; font-family: sans-serif; font-size: 16px; line-height: 1.3; color: #666666; text-align: left;">
                    Get ready for an exclusive literary journey. As a subscriber, you'll receive sneak peeks into upcoming works, behind-the-scenes insights, and special promotions just for you.
                  </td>
                </tr>
                <tr>
                  <td style="padding: 2%; font-family: sans-serif; font-size: 16px; line-height: 1.3; color: #666666; text-align: left;">
                    Feel free to reply to this email with any thoughts, questions, or topics you'd like ${authorsName} to cover in future newsletters. Your input is invaluable!
                  </td>
                </tr>
                <tr>
                  <td style="padding: 2%; font-family: sans-serif; font-size: 16px; line-height: 1.3; color: #666666; text-align: left;">
                    Best regards,
                  </td>
                </tr>
                <tr>
                  <td style="padding: 2%; font-family: sans-serif; font-size: 16px; line-height: 1.3; color: #666666; text-align: left;">
                    ${authorsName}
                  </td>
                </tr>
                <!-- Full Width, Fluid Column : END -->

              </table>
              <!-- Main Email Body : END -->

            </td>
          </tr>

          <!-- Footer : BEGIN -->
          <tr>
            <td style="text-align: center; padding: 4% 0; font-family: sans-serif; font-size: 13px; line-height: 1.2; color: #666666;">
              You received this email because you opted in to our newsletter.
              <br><br>Stay connected on social media:
              <a href="https://facebook.com/example" style="color: #3b5998; text-decoration: none;">Facebook</a>
              <br><br>
              <a href="${unsubscribeLink}" style="color: #e74c3c; text-decoration: underline;">Unsubscribe</a>
            </td>
          </tr>
          <!-- Footer : END -->

        </table>
        <!-- Email wrapper : END -->

      </td>
    </tr>
  </table>
</body>
</html>
`,
			text: `Dear ${firstname},

Thank you for joining ${authorsName}'s newsletter community. I am delighted to have you on board!

Get ready for an exclusive literary journey. As a subscriber, you'll receive sneak peeks into upcoming works, behind-the-scenes insights, and special promotions just for you.

Feel free to reply to this email with any thoughts, questions, or topics you'd like ${authorsName} to cover in future newsletters. Your input is invaluable!

Best regards,
${authorsName}`,
		};
		await sgMail.send(msg);
		res.json({ success: true });
	} catch (error) {
		res.json({ success: false, error: error.toString() });
	}
});

// app.listen(port, () => {
// 	console.log(`Server is running on port ${port}`);
// });

exports.api = functions.https.onRequest(app);