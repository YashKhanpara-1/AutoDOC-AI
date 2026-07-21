import json

from app.core.llm import chat


def generate_plan(user_request: str):
    prompt = f"""
You are an Autonomous AI Planning Agent.

Your job is to analyze the user's request and create a professional document outline.

User Request:
{user_request}

Instructions:
1. Identify the document type.
2. Think like a Business Analyst.
3. Create a logical execution plan.
4. The task names MUST match the requested document.
5. Every document should have different sections depending on the request.

Examples:

If the request is "AI CRM Proposal"

Return:

{{
    "document_type":"AI CRM Proposal",
    "tasks":[
        "Executive Summary",
        "Business Problem",
        "Proposed AI CRM Solution",
        "Core Features",
        "Technical Architecture",
        "Implementation Roadmap",
        "Budget Estimate",
        "Risk Analysis",
        "Expected Business Benefits",
        "Conclusion"
    ]
}}

If the request is "Meeting Minutes"

Return:

{{
    "document_type":"Meeting Minutes",
    "tasks":[
        "Meeting Details",
        "Attendees",
        "Agenda",
        "Discussion Summary",
        "Decisions Made",
        "Action Items",
        "Next Meeting"
    ]
}}

If the request is "Employee SOP"

Return:

{{
    "document_type":"Employee SOP",
    "tasks":[
        "Purpose",
        "Scope",
        "Roles and Responsibilities",
        "Procedure",
        "Safety Guidelines",
        "Exceptions",
        "References"
    ]
}}

Rules:
- Return ONLY JSON.
- No markdown.
- No explanations.
- Between 6 and 10 tasks.
- Make the outline specific to the user's request.

"""

    result = chat(prompt)

    cleaned = (
        result.replace("```json", "")
        .replace("```", "")
        .strip()
    )

    try:
        return json.loads(cleaned)

    except Exception:
        return {
            "document_type": "Business Document",
            "tasks": [
                "Executive Summary",
                "Background",
                "Objectives",
                "Proposed Solution",
                "Implementation Plan",
                "Budget",
                "Risk Analysis",
                "Conclusion",
            ],
        }