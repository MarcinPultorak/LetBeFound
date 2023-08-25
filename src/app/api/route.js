import sendgrid from '@sendgrid/mail'
import { NextResponse } from 'next/server';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

export async function POST(req) {
    let response = {};

    const body = await req.json() 

    await sendgrid.send({
        to: 'karbowniczek.daw@gmail.com', // Your email where you'll receive emails
        from: 'karbowniczek.daw@gmail.com', // your website email address here
        subject: `${body.subject}`,
        text: 'test',
        html: `<h3>You\'ve got a new mail from ${body.fullname}, their email is: ✉️${body.email}</h3>
                <div style="font-size: 16px;">
                    <p>Message:</p>
                    <p>${body.message}</p>
                    <br>
                </div>`
        }).then(() => {
            response = {
                status: 'success',
                message: 'Message was sent successfully!'
            }
        }).catch(() => {
            response = {
                status: 'error',
                message: 'Something went wrong. Please try again!'
            }
        })

    return NextResponse.json(response);
}
