from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from apps.model import lead
from apps.services import append_to_sheet, send_notification_email

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this in production to match your React app's URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "success": True,
        "message": "working"
    }
    

@app.post("/api/lead")
def create_contact(leads_data: lead):
    data = leads_data.model_dump()
    append_to_sheet(data)
    send_notification_email(data)
    
    return {
        "success": True,
        "message": "Lead received successfully",
        "lead": leads_data
    }