import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

        const payload = {
            ...data,
            access_key: process.env.WEB3FORMS_ACCESS_KEY || '59a29125-e791-459e-a0aa-30aaebc781dd',
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
