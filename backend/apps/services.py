import os
import smtplib
from email.message import EmailMessage
import gspread
from google.oauth2.service_account import Credentials
from dotenv import load_dotenv

load_dotenv()

# --- Google Sheets Setup ---
SHEET_ID = os.getenv("GOOGLE_SHEET_ID")
SERVICE_ACCOUNT_FILE = os.getenv("GOOGLE_SERVICE_ACCOUNT_FILE", "credentials.json")

def append_to_sheet(lead_data: dict):
    if not SHEET_ID or not os.path.exists(SERVICE_ACCOUNT_FILE):
        print("Google Sheets integration is not configured. Skipping.")
        return

    try:
        scopes = [
            "https://www.googleapis.com/auth/spreadsheets",
            "https://www.googleapis.com/auth/drive"
        ]
        credentials = Credentials.from_service_account_file(
            SERVICE_ACCOUNT_FILE, scopes=scopes
        )
        client = gspread.authorize(credentials)
        sheet = client.open_by_key(SHEET_ID).sheet1

        row = [
            lead_data.get("name", ""),
            lead_data.get("email", ""),
            lead_data.get("phone", ""),
            lead_data.get("company", ""),
            lead_data.get("message", ""),
            lead_data.get("source", "Website")
        ]
        sheet.append_row(row)
        print("Successfully saved lead to Google Sheets.")
    except Exception as e:
        print(f"Failed to save to Google Sheets: {e}")


# --- Email Setup ---
SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", 465))
SMTP_USER = os.getenv("SMTP_USER")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")

def send_notification_email(lead_data: dict):
    if not SMTP_USER or not SMTP_PASSWORD:
        print("SMTP integration is not configured. Skipping.")
        return

    try:
        msg = EmailMessage()
        msg['Subject'] = f"New Lead: {lead_data.get('name')}"
        msg['From'] = SMTP_USER
        msg['To'] = SMTP_USER  # Send notification to yourself

        content = f"""
        New Lead received from the website!
        
        Name: {lead_data.get('name')}
        Email: {lead_data.get('email')}
        Phone: {lead_data.get('phone')}
        Company: {lead_data.get('company')}
        Source: {lead_data.get('source')}
        
        Message:
        {lead_data.get('message')}
        """
        msg.set_content(content)

        if SMTP_PORT == 465:
            with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT) as server:
                server.login(SMTP_USER, SMTP_PASSWORD)
                server.send_message(msg)
        else:
            with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
                server.starttls()
                server.login(SMTP_USER, SMTP_PASSWORD)
                server.send_message(msg)

        print("Successfully sent notification email.")
    except Exception as e:
        print(f"Failed to send email: {e}")
