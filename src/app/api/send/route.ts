import axios from 'axios';
import { NextResponse } from 'next/server';
import mailgun from 'mailgun-js';

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

export async function POST(req: Request) {
    if (req.method === 'POST') {
        const { name, email, brand } = await req.json();

        // const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });
        const mg = mailgun({
            apiKey: process.env.MAILGUN_KEY as string,
            domain: process.env.MAILGUN_DOMAIN as string
        });

        try {
            const data = await {
                from: email,
                to: 'info@gaagaagency.com',
                subject: `New Contact Form Submission from ${name}`,
                html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Brand: ${brand}</p>`,
                // text: 'Testing some Mailgun awesomeness!',
            };
            await mg.messages().send(data);
            return NextResponse.json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            return NextResponse.json({ message: 'Failed to send email' });
        }
    } else {
        return NextResponse.json({ message: 'This Method not allowed' });
    }
}