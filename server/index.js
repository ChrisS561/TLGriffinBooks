const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sgMail = require('@sendgrid/mail');
var admin = require('firebase-admin');
dotenv.config();

const app = express();
const serviceAccount = require(process.env.SERVICE_ACCOUNT_NAME);

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: process.env.REACT_APP_AUTH_DOMAIN,
});

sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY); // Set your SendGrid API key

const port = process.env.DEV_PORT || process.env.TEST_PORT;

const corsOptions = {
	origin: process.env.TEST_CLIENT_URL || process.env.DEV_CLIENT_ORIGIN_URL,
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	credentials: true,
	optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

//TODO Implement the unsubscribe button for users
app.post('/api/newsletter', async (req, res) => {
	const unsubscribeLink = process.env.UNSUBSCRIBE_URL;
	const { name, email, message, subject } = req.body;
	try {
		const snapshot = await admin.firestore().collection('users').get();
		const newsletterEmails = snapshot.docs.map((doc) => doc.data().email);

		const emailPromises = newsletterEmails.map((usersEmail) => {
			const msg = {
				to: usersEmail,
				from: email,
				subject: subject,
				html: `
      <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <h2 style="color: #333333; margin-bottom: 20px;">${subject}</h2>
        <div style="color: #555555; font-size: 16px; line-height: 1.6; text-align: center;">
          ${
						name
							? `<p style="font-size: 18px; margin-bottom: 10px;">Dear ${name},</p>`
							: ''
					}
          <p>${message}</p>
          <p style="margin-top: 20px;">Best regards,</p>
          <p>The Newsletter Team</p>
        </div>
        <p style="margin-top: 20px; color: #777777; font-size: 14px;">Follow us on social media: <a href="https://twitter.com/example" style="color: #3498db; text-decoration: none;">Twitter</a>, <a href="https://facebook.com/example" style="color: #3b5998; text-decoration: none;">Facebook</a></p>
        <p style="margin-top: 20px; color: #777777; font-size: 14px;">To unsubscribe, click <a href="${unsubscribeLink}" style="color: #e74c3c; text-decoration: none;">here</a>.</p>
      </div>
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

app.post('/api/welcome', async (req, res) => {
	const unsubscribeLink = process.env.UNSUBSCRIBE_URL;
	const authorsName = 'T.L Griffin';
	const { name, email } = req.body;
	try {
		const msg = {
			to: email,
			from: 'chrissmithjr97@gmail.com',
			subject: 'Unlock Exclusive Stories and Updates!📚',
			html: `<div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); display: flex; flex-direction: column; align-items: center; justify-content: center;">
					<h2 style="color: #333333; margin-bottom: 20px;">
						Welcome to ${authorsName}'s Newsletter!
					</h2>
					<div style="color: #555555; font-size: 16px; line-height: 1.6; text-align: center;">
						<p style="font-size: 18px; margin-bottom: 10px;">
							Dear ${name},
						</p>
						<p>
							Thank you for joining ${authorsName}'s newsletter community. We're
							delighted to have you on board!
						</p>
						<p>
							Get ready for an exclusive literary journey. As a subscriber,
							you'll receive sneak peeks into upcoming works, behind-the-scenes
							insights, and special promotions just for you.
						</p>
						<p>
							Feel free to reply to this email with any thoughts, questions, or
							topics you'd like ${authorsName} to cover in future newsletters.
							Your input is invaluable!
						</p>
						<p style="margin-top: 20px;">Best regards,</p>
						<p>${authorsName}</p>
					</div>
					<p style="margin-top: 20px; color: #777777; font-size: 14px;">
						Stay connected on social media:{' '}
						<a
							href="https://twitter.com/example"
							style="color: #3498db; text-decoration: none;"
						>
							Twitter
						</a>
						,{' '}
						<a
							href="https://facebook.com/example"
							style="color: #3b5998; text-decoration: none;"
						>
							Facebook
						</a>
					</p>
					<p style="margin-top: 20px; color: #777777; font-size: 14px;">
						To unsubscribe, click{' '}
						<a
							href="${unsubscribeLink}"
							style="color: #e74c3c; text-decoration: none;"
						>
							here
						</a>
						.
					</p>
				</div>`,
		};
		res.json({ success: true });
		return sgMail.send(msg);
	} catch (error) {
		res.json({ success: false, error: error.toString() });
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
