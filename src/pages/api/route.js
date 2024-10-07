import formData from 'form-data'
import Mailgun from 'mailgun.js'

const mailgun = new Mailgun(formData)
const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY,
    url:"https://api.eu.mailgun.net/"
})

export default async function sendEmail(req, res) {
    if (req.method === 'POST') {
        const { fullname, email, subject, message } = req.body

        try {
            const result = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
                from: '<kontakt@letbefound.pl>', // Email, z którego wysyłasz wiadomość
                to: 'kontakt@letbefound.pl', // Email, na który ma przyjść wiadomość
                subject: subject,
                text: `You've got a new mail from ${fullname}, their email is: ${email}. Message: ${message}`,
                html: `<h3>You've got a new mail from ${fullname}, their email is: ✉️${email}</h3>
                        <div style="font-size: 16px;">
                            <p>Message:</p>
                            <p>${message}</p>
                            <br>
                        </div>`
            })

            return res.status(200).json({ message: 'Email sent successfully!', id: result.id })
        } catch (error) {
            console.error('Error sending email:', error)
            return res.status(error.status || 500).json({ error: error.message || 'Error sending email' })
        }
    } else {
        res.setHeader('Allow', ['POST'])
        return res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}



















// import sendgrid from '@sendgrid/mail'

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

// async function sendEmail(req, res) {
//     try {
//         await sendgrid.send({
//             to: 'kontakt@letbefound.pl', // Your email where you'll receive emails
//             from: 'kontakt@letbefound.pl', // your website email address here
//             subject: `${req.body.subject}`,
//             text: 'test',
//             html: `<h3>You\'ve got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email}</h3>
//                    <div style="font-size: 16px;">
//                       <p>Message:</p>
//                       <p>${req.body.message}</p>
//                       <br>
//                    </div>`
//         })
//     } catch (error) {
//         return res
//             .status(error.statusCode || 500)
//             .json({ error: error.message })
//     }

//     return res.status(200).json({ error: '' })
// }

// export default sendEmail
