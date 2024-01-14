model = "gpt-4-1106-preview"
async def recommend_eval(messages, client):

  content = """
    You will be given the transcript of a therapy session. You are to generate four concise recommendations for the therapist to talk about next.
    Generate a json with the following format:
    {
      "recommendations": ["List", "of", "four", "recommendations"]
    }
    """

  messages = [
      {"role": "system", "content": content},
      {'role': 'user', 'content': messages}
  ]

  response = await client.chat.completions.create(
    model=model,
    response_format={ "type": "json_object" },
    messages=messages,
    temperature=0
  )

  return response.choices[0].message.content

async def mood_eval(messages, client):

  content = """
    You will be given the transcript of what a patient told a therapist during a therapy session. 
    Generate a json with the following format:
    {
      "mood": "a word to describe the patient's mood"
    }
    """

  messages = [
      {"role": "system", "content": content},
      {'role': 'user', 'content': messages}
  ]

  response = await client.chat.completions.create(
    model=model,
    response_format={ "type": "json_object" },
    messages=messages,
    temperature=0
  )

  return response.choices[0].message.content









