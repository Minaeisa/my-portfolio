import { NextRequest, NextResponse } from 'next/server'
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Read and sanitize env values (remove accidental spaces in App Password)
    const host = (process.env.SMTP_HOST || '').trim()
    const port = Number(process.env.SMTP_PORT || 587)
    const user = (process.env.SMTP_USER || '').trim()
    const pass = (process.env.SMTP_PASS || '').replace(/\s/g, '')
    const to = (process.env.CONTACT_TO_EMAIL || user).trim()

    if (!host || !user || !pass || !to) {
      return NextResponse.json({ error: 'Email configuration not set' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    })

    // Optional: quickly verify SMTP connection for clearer errors in dev
    if (process.env.NODE_ENV === 'development') {
      try {
        await transporter.verify()
      } catch (verifyErr) {
        console.error('SMTP verify failed:', verifyErr)
        return NextResponse.json(
          { error: 'Failed to send message', detail: (verifyErr as any)?.message || 'SMTP verify failed' },
          { status: 500 }
        )
      }
    }

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      </div>
    `

    const mailOptions = {
      from: `${name} <${user}>`,
      replyTo: email,
      to,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact API error:', error)
    const devMessage = (error as any)?.message || 'Failed to send message'
    const body = process.env.NODE_ENV === 'development' 
      ? { error: 'Failed to send message', detail: devMessage }
      : { error: 'Failed to send message' }
    return NextResponse.json(body, { status: 500 })
  }
}