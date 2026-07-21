from fastapi import APIRouter

from app.models.schemas import AgentRequest
from app.services.agent import run_agent

router = APIRouter(prefix="/api/v1", tags=["AI Agent"])


@router.post("/agent")
def execute(payload: AgentRequest):

    result = run_agent(payload.request)

    return {
    "status": "completed",
    "execution": {
        "planner": "completed",
        "executor": "completed",
        "reviewer": "completed",
        "document": "completed"
    },
    "plan": result["planning"],
    "download_url": result["download_url"],
    "message": "Document generated successfully."
}