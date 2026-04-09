"""
Send enquiry response PDF via Posso SMTP (info@posso.co.uk)

Usage:
  python send-email.py <pdf_file> <to_email> <recipient_name> [subject]

Example:
  python send-email.py 2026-04-08-gordon-guthrie-agent.pdf gordon@scottishbusinesscoop.org "Gordon Guthrie"
"""

import smtplib
import sys
import os
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication

# SMTP Config — Hostinger
SMTP_HOST = 'smtp.hostinger.com'
SMTP_PORT = 465
SMTP_USER = 'info@posso.co.uk'
SMTP_PASS = os.environ.get('POSSO_SMTP_PASS', '')  # Set this env var or paste below
# SMTP_PASS = 'your-password-here'  # Uncomment and paste if not using env var

SENDER_NAME = 'Paul - Posso Ltd'
SENDER_EMAIL = SMTP_USER


def send_enquiry_email(pdf_path, to_email, recipient_name, subject=None):
    if not SMTP_PASS:
        print('ERROR: Set POSSO_SMTP_PASS environment variable or paste password in script.')
        print('  Windows: set POSSO_SMTP_PASS=yourpassword')
        print('  Then run this script again.')
        sys.exit(1)

    if not os.path.exists(pdf_path):
        print(f'ERROR: PDF not found: {pdf_path}')
        sys.exit(1)

    if not subject:
        subject = f'Your Posso Enquiry Response — {recipient_name}'

    # Build email
    msg = MIMEMultipart()
    msg['From'] = f'{SENDER_NAME} <{SENDER_EMAIL}>'
    msg['To'] = to_email
    msg['Subject'] = subject
    msg['Reply-To'] = SENDER_EMAIL
    msg['Cc'] = SENDER_EMAIL

    # HTML body
    html = f"""
    <div style="font-family: Arial, sans-serif; color: #334155; max-width: 600px;">
        <p>Hi {recipient_name.split()[0]},</p>
        <p>Thank you for your enquiry. Please find our response attached as a PDF.</p>
        <p>If you have any questions or would like to book a call, you can:</p>
        <ul>
            <li><a href="https://calendly.com/delivrr/15min" style="color: #3b82f6;">Book a free 15-minute call</a></li>
            <li>Call us free on <strong>0808 175 3956</strong></li>
            <li>Reply to this email</li>
        </ul>
        <p>Looking forward to hearing from you.</p>
        <p>Best regards,<br>
        <strong>Paul</strong><br>
        Posso Ltd<br>
        0808 175 3956 (free call)<br>
        <a href="https://posso.co.uk" style="color: #3b82f6;">posso.co.uk</a></p>
    </div>
    """
    msg.attach(MIMEText(html, 'html'))

    # Attach PDF
    with open(pdf_path, 'rb') as f:
        pdf_attachment = MIMEApplication(f.read(), _subtype='pdf')
        pdf_filename = os.path.basename(pdf_path)
        pdf_attachment.add_header('Content-Disposition', 'attachment', filename=pdf_filename)
        msg.attach(pdf_attachment)

    # Send
    print(f'Sending to {to_email}...')
    try:
        with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT) as server:
            server.login(SMTP_USER, SMTP_PASS)
            server.send_message(msg, to_addrs=[to_email, SENDER_EMAIL])
        print(f'SENT to {to_email} with PDF: {pdf_filename}')
    except Exception as e:
        print(f'FAILED: {e}')
        sys.exit(1)


if __name__ == '__main__':
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)

    pdf = sys.argv[1]
    to = sys.argv[2]
    name = sys.argv[3] if len(sys.argv) > 3 else 'there'
    subj = sys.argv[4] if len(sys.argv) > 4 else None

    send_enquiry_email(pdf, to, name, subj)
