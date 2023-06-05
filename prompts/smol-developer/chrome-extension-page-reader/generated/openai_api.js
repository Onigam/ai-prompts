async function sendRequestToOpenAI(apiKey, prompt) {
  const url = "https://api.openai.com/v1/engines/davinci-codex/completions";
  const headers = new Headers({
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`
  });

  const body = JSON.stringify({
    prompt: prompt,
    max_tokens: 100,
    n: 1,
    stop: null,
    temperature: 0.5
  });

  const response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: body
  });

  if (response.ok) {
    const data = await response.json();
    return data.choices[0].text;
  } else {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
}