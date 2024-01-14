model = "gpt-4-1106-preview"
async def recommend_eval(messages, client):

  content = """
    You will be given the transcript of what a patient told a therapist during a therapy session. 
    Generate a json with the following format:
    {
      "Recommendation": "60 to 80 characters making a recommendation to the therapist how they can better help their client",
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
      "mood": "one of the following four words to best describe the client's current mood: Hopeful, Melancholy, Frustrated, Fearful"
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









