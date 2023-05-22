import sqlite3
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

SMTP_SERVER = 'your_smtp_server'
SMTP_PORT = 587
SENDER_EMAIL = 'your_sender_email'
SENDER_PASSWORD = 'your_sender_password'
EMAIL_SUBJECT = 'Handle Reservation'
EMAIL_MESSAGE = 'Love from your team at Special Offer'


conn = sqlite3.connect('example.db')
cursor = conn.cursor()


cursor.execute('SELECT email FROM users')
emails = [row[0] for row in cursor.fetchall()]


conn.close()


for email in emails:
    msg = MIMEMultipart()
    msg['From'] = SENDER_EMAIL
    msg['To'] = email
    msg['Subject'] = EMAIL_SUBJECT

    body = EMAIL_MESSAGE
    msg.attach(MIMEText(body, 'plain'))

    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.send_message(msg)
        server.quit()
        print(f"Email sent successfully to {email}")
    except Exception as e:
        print(f"Error sending email to {email}: {str(e)}")
