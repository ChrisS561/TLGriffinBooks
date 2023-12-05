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

app.post('/api/newsletter', async (req, res) => {
	const { name, email, message, subject } = req.body;
	try {
		const snapshot = await admin.firestore().collection('users').get();
		const newsletterEmails = snapshot.docs.map((doc) => doc.data().email);

		const emailPromises = newsletterEmails.map((usersEmail) => {
			const msg = {
				to: usersEmail,
				from: email,
				subject: subject,
				html: `<h3>${name}</h3><p>${message}</p>`,
			};

			return sgMail.send(msg);
		});

		// Wait for all email promises to resolve
		await Promise.all(emailPromises);

		res.json({ success: true });
	} catch (error) {
		res.json({ success: false, error: error.toString() });
	}
}); // Add a closing parenthesis for the app.post function

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
