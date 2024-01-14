model = "gpt-4-1106-preview"
async def profile_eval(messages, client) -> str:
  
  content = """
  You will be given the transcript of what a parient told a therapist during a therapy session. 
  Generate a json with the following format:
  {
  "communication_style": "one word to describe their communication style",
  "learning_style": "one word to describe their learning style",
  "interests": ["list", "of", "interests"],
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
  
 
async def next_steps_eval(transcript, client) -> str:
    
  content = """
    Based on the following transcript of a therapy session, provide suggestions for what the therapist should do next to assist the patient. Consider the patient's needs, communication style, and any issues or concerns raised during the session. Provide practical and specific steps that the therapist can take in the next session or as follow-up actions.
    Generate a json with the following format:
    {"recommendations":
      ["Review patient's progress", "Discuss new stressors", "Introduce new techniques"]
    }
    """

  messages = [
        {"role": "system", "content": content},
        {'role': 'user', 'content': transcript}
    ]
    
  response = await client.chat.completions.create(
          model=model,
          response_format={ "type": "json_object" },
          messages=messages,
          temperature=0
        )
    
  next_steps = response.choices[0].message.content
  return next_steps

async def emotions_eval(transcript, client) -> str:
    
  content = """
    Analyze the following transcript of a conversation and evaluate the prevalence of four emotions: Happy, Sad, Fear, and Anger. Provide a score for each emotion as a percentage, with 0% meaning the emotion is not present at all and 100% meaning the emotion is extremely present. The scores should add up to no more than 100%.
    Format your response as a JSON object like this:
    {
      "Happy": 25,
      "Sad": 50,
      "Fear": 15,
      "Anger": 10
    }
    """

  messages = [
        {"role": "system", "content": content},
        {'role': 'user', 'content': transcript}
    ]
    
  response = await client.chat.completions.create(
          model=model,
          response_format={ "type": "json_object" },
          messages=messages,
          temperature=0
        )
    
  emotion_scores = response.choices[0].message.content
  return emotion_scores

async def therapist_eval(transcript, client):
    
  content = """
    Analyze the following transcript of a therapy session and evaluate the therapist's performance in three key areas: Language, Empathy, and Sensitivity. Provide a score for each area as a percentage, with 0% meaning very poor performance and 100% meaning excellent performance. The scores should reflect the following metrics:
    - Language: The clarity, appropriateness, and effectiveness of the therapist's communication.
    - Empathy: The therapist's ability to understand and share the feelings of the patient.
    - Sensitivity: The therapist's awareness and responsiveness to the patient's needs and emotions.
    Format your response as a JSON object like this:
    {
      "Language": 80,
      "Empathy": 75,
      "Sensitivity": 90
    }
    """

  messages = [
        {"role": "system", "content": content},
        {'role': 'user', 'content': transcript}
    ]
    
  response = await client.chat.completions.create(
          model=model,
          response_format={ "type": "json_object" },
          messages=messages,
          temperature=0
        )
    
  performance_scores = response.choices[0].message.content
  return performance_scores