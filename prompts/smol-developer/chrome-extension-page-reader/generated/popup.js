document.addEventListener("DOMContentLoaded", () => {
  const apiKeyInput = document.getElementById("api-key-input");
  const promptInput = document.getElementById("prompt-input");
  const submitButton = document.getElementById("submit-button");
  const responseContainer = document.getElementById("response-container");

  apiKeyInput.value = getApiKey();

  submitButton.addEventListener("click", async () => {
    const apiKey = apiKeyInput.value;
    const prompt = promptInput.value;

    if (!apiKey || !prompt) {
      alert("Please enter both API key and prompt.");
      return;
    }

    setApiKey(apiKey);

    const response = await sendRequestToOpenAI(apiKey, prompt);
    displayResponse(response);
  });
});

function getApiKey() {
  return localStorage.getItem("apiKey");
}

function setApiKey(apiKey) {
  localStorage.setItem("apiKey", apiKey);
}

async function sendRequestToOpenAI(apiKey, prompt) {
  const openai_api = await import("./openai_api.js");
  return openai_api.sendRequest(apiKey, prompt);
}

function displayResponse(response) {
  responseContainer.innerHTML = response.choices[0].text;
}