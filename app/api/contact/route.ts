import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Formspree endpoint (User will replace YOUR_FORM_ID later)
        const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';

        const response = await fetch(FORMSPREE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });
        } else {
            return NextResponse.json({ success: false, message: 'Formspree error.' }, { status: response.status });
        }
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Internal server error.' }, { status: 500 });
    }
}
