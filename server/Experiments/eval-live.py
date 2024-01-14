from openai import OpenAI


async def live_eval(messages):

  client = OpenAI() # Not sure if this is necessary in the program flow.

  content = """
  You will be given the transcript of what a patient told a therapist during a therapy session. 
  Generate a json with the following information:
  {
  "advice": 
    {
    "recommendation": "a 60 to 80 character specific recommendation to the therapist to aid them in helping the client",
    "tag": "an emoji followed by one word to summarize the corresponding recommendation"
    },
  "mood": "one of the following four words to best describe the client's current mood: Hopeful, Melancholy, Frustrated, Fearful"
  }
  """

  messages = [
      {"role": "system", "content": content},
      {'role': 'user', 'content': messages}
  ]

  response = await client.chat.completions.create(
    model="gpt-3.5-turbo",
    response_format={ "type": "json_object" },
    messages=messages,
    temperature=0
  )

  res = response.choices[0].message.content
  return res


