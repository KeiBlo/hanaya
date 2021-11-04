import aws from 'aws-sdk'

const ses = new aws.SES({ region: 'us-east-1' })

const sendClientEmail = async (req, res) => {
  const { name, lastName, email, phoneNumber, clientMessage } = req.body

  try {
    const data = await sendMessage(
      'keiblokhin@gmail.com',
      name,
      lastName,
      email,
      phoneNumber,
      clientMessage
    )
    res.json({ message: 'successful', data })
  } catch (error) {
    console.error(error)
  }
}

const sendMessage = (
  emailTo,
  name,
  lastName,
  email,
  phoneNumber,
  clientMessage
) => {
  const params = {
    Destination: {
      ToAddresses: [emailTo],
    },
    Message: {
      Body: {
        Text: {
          Data:
            'From Contact: ' +
            name +
            ' ' +
            lastName +
            '\n' +
            'Email from: ' +
            email +
            '\n' +
            'Phone number: ' +
            phoneNumber +
            '\n' +
            clientMessage,
        },
      },
      Subject: {
        Data: 'Name: ' + name + '  ' + lastName,
      },
    },
    Source: 'blokhin_sergey@hotmail.com',
  }
  return ses.sendEmail(params).promise()
}

export { sendClientEmail }
