from groq import Groq

from app.core.config import settings

client = Groq(api_key=settings.GROQ_API_KEY)


def chat(prompt: str) -> str:
    try:
        response = client.chat.completions.create(
            model=settings.MODEL_NAME,
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.3,
        )

        return response.choices[0].message.content

    except Exception as e:
        raise Exception(f"LLM Error: {str(e)}")