from app.core.llm import chat


def execute_plan(user_request: str, planning: dict):

    document = f"# {planning['document_type']}\n\n"

    for i, task in enumerate(planning["tasks"], start=1):

        prompt = f"""
You are an experienced Business Analyst and Technical Writer.

User Request:
{user_request}

Document Type:
{planning["document_type"]}

Current Section:
{task}

Instructions:
- Write ONLY the "{task}" section.
- Use professional business language.
- Use paragraphs, bullet points and tables whenever appropriate.
- Add realistic business content.
- If information is missing, make reasonable assumptions.
- Do NOT repeat previous sections.
- Do NOT generate the full document.

Return ONLY the content for this section.
"""

        section = chat(prompt)

        document += f"""

        # {task}

        {section}

        """

    return document