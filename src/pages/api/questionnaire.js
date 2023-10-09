import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendQuestionnaire(req, res) {
    try {
        await sendgrid.send({
            to: 'kontakt@letbefound.pl', // Your email where you'll receive emails
            from: 'kontakt@letbefound.pl', // your website email address here
            subject: `temat`,
            text: 'test',
            html: `<h3>You\'ve got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email}, their phone number is: ✉️${req.body.phone}</h3>
                   <div style="font-size: 16px;">
                      <p>Message:</p>
                      ${req.body.answers}
                      <br>
                   </div>`
        })
    } catch (error) {
        (console.log(error.message))
        return res
            .status(error.statusCode || 500)
            .json({ error: error.message })
    }

    return res.status(200).json({ error: '' })
}

export default sendQuestionnaire