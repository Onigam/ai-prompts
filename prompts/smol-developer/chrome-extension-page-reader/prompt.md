a Chrome extension that, when clicked, opens a small window with a page where you can enter a prompt for reading the currently open page and generating some response from openai.
It should ask the open ai API key and the prompt to use.
It will store the API key in the browser's local storage.
When submitted, it should send a request to the openai API and display the response in the window.
The UI should be fancy and modern and look like a real product and having a good sizing and layout to have a good user experience.
The extension should contains a manifest.json file with the following contents:
```json
{
  "name": "Page Reader",
  "version": "1.0",
  "manifest_version": 3,
  "description": "A Chrome extension that reads the current page and generates a response from openai.",
  "browser_action": {
    "default_popup": "popup.html",
    "default_icon": "icon.png"
  },
  "permissions": [
    "activeTab"
  ]
}
```
It should also contains 'icon.png' specified in 'browser_action'.
