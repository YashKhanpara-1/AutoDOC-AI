from app.core.llm import chat


def review_document(document: str):
    prompt = f"""
You are a senior technical reviewer.

Review the document below.

Rules:
- Improve grammar.
- Improve clarity.
- Formatting.
- Consistency.
- Fill missing information if required.
- DO NOT explain your changes.
- DO NOT give suggestions.
- Return ONLY the final improved document.

Document:

{document}
"""

    return chat(prompt)