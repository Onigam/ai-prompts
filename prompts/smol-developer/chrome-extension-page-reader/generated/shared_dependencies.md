the app is: a Chrome extension that, when clicked, opens a small window with a page where you can enter a prompt for reading the currently open page and generating some response from openai. It should ask the open ai API key and the prompt to use. It will store the API key in the browser's local storage. When submitted, it should send a request to the openai API and display the response in the window. The UI should be fancy and modern and look like a real product and having a good sizing and layout to have a good user experience. The extension should contains a manifest.json file with the following contents: {manifest_json} It should also contains 'icon.png' specified in 'browser_action'.

the files we have decided to generate are: manifest.json, icon.png, popup.html, popup.js, popup.css, api.js

Shared dependencies between the files:

1. Exported variables:
   - apiKey (popup.js, api.js)

2. Data schemas:
   - OpenAI API response schema (popup.js)

3. ID names of DOM elements:
   - api-key-input (popup.html, popup.js)
   - prompt-input (popup.html, popup.js)
   - submit-button (popup.html, popup.js)
   - response-container (popup.html, popup.js)

4. Message names:
   - None

5. Function names:
   - getApiKey (popup.js)
   - setApiKey (popup.js)
   - sendRequestToOpenAI (popup.js, api.js)
   - displayResponse (popup.js)