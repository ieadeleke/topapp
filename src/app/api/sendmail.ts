'use client';

import axios from 'axios';

interface reqHandler {
    method: string;
    body: {
        name: string;
        email: string;
        message: string
    }
}
interface resHandler {
    status: any;
    json: {
        message: string
    }
}

export default async function MailHandler(req: reqHandler, res: resHandler) {
    console.log(req.body)
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        try {
            const response = await axios.post(
                'https://api.maildrip.io/send-email',
                {
                    to: 'recipient@gmail.com', // Replace with your Gmail address
                    from: 'your-email@domain.com', // Replace with the sender's email
                    subject: `New Contact Form Submission from ${name}`,
                    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
                },
                {
                    headers: {
                        Authorization: `Bearer YOUR_MAILDRIP_API_KEY`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}