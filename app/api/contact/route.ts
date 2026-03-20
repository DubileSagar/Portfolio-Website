import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Web3Forms endpoint
        const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

        // Add the Web3Forms access key from environment variables
        // If it's not set, it will fail gracefully.
        const payload = {
            ...data,
            access_key: process.env.WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
        };

        const response = await fetch(WEB3FORMS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });
        } else {
            return NextResponse.json({ success: false, message: 'Web3Forms error.' }, { status: response.status });
        }
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Internal server error.' }, { status: 500 });
    }
}
