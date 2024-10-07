import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendQuestionnaire(req, res) {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ error: 'Method not allowed' });
        }

        const { fullname, email, phone, answers } = req.body;

        await resend.emails.send({
            from: 'kontakt@letbefound.pl', // your website email address here
            to: 'kontakt@letbefound.pl',   // Your email where you'll receive emails
            subject: 'temat',
            html: `<h3>You\'ve got a new mail from ${fullname}, their email is: ✉️${email}, their phone number is: ✉️${phone}</h3>
                   <div style="font-size: 16px;">
                      <p>Message:</p>
                      ${answers}
                      <br>
                   </div>`
        });

        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error.message);
        return res.status(error.statusCode || 500).json({ error: error.message });
    }
}

export default sendQuestionnaire;



// import sendgrid from '@sendgrid/mail'

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

// async function sendQuestionnaire(req, res) {
//     try {
//         await sendgrid.send({
//             to: 'kontakt@letbefound.pl', // Your email where you'll receive emails
//             from: 'kontakt@letbefound.pl', // your website email address here
//             subject: `temat`,
//             text: 'test',
//             html: `<h3>You\'ve got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email}, their phone number is: ✉️${req.body.phone}</h3>
//                    <div style="font-size: 16px;">
//                       <p>Message:</p>
//                       ${req.body.answers}
//                       <br>
//                    </div>`
//         })
//     } catch (error) {
//         (console.log(error.message))
//         return res
//             .status(error.statusCode || 500)
//             .json({ error: error.message })
//     }

//     return res.status(200).json({ error: '' })
// }

// export default sendQuestionnaire