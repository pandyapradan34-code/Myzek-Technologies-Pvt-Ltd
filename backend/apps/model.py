from pydantic import BaseModel, EmailStr
from typing import Optional

class lead(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    message: Optional[str] = None
    source: str = "Website"
