from app.services.executor import execute_plan
from app.services.planner import generate_plan
from app.services.reviewer import review_document
from app.utils.document import save_document


def run_agent(user_request: str):
    # Step 1: Generate execution plan
    planning = generate_plan(user_request)

    # Step 2: Execute the plan
    draft = execute_plan(user_request, planning)

    # Step 3: Review and improve the document
    reviewed = review_document(draft)

    # Step 4: Generate Word document
    file_path = save_document(
        planning["document_type"],
        reviewed
    )

    # Extract only the filename
    filename = file_path.replace("\\", "/").split("/")[-1]

    # Return response
    return {
        "planning": planning,
        "download_url": f"/output/{filename}"
    }