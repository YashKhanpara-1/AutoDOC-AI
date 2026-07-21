from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.api.routes import router

app = FastAPI(
    title="AutoDoc AI Agent"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes
app.include_router(router)

# Serve generated Word documents
app.mount(
    "/output",
    StaticFiles(directory="output"),
    name="output"
)

@app.get("/")
def root():
    return {
        "message": "AutoDoc AI Agent Running 🚀"
    }