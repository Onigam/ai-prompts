Ask Chat-GPT:

```bash
Write me really precise instructions and technical specifications in a prompt in markdown format that will be asked to an AI web developer assistant to generate in one request, the output should be able to run directly in a modern web browser without any error:

# What you want here like for exampke:
I want a really simple and light webpage (no backend) in which I can play to a generated js snake game, the game design and ui should be simple but have vertical layout, a good user experience and a vibrant fancy colored style with a modern design and the game difficulty should be realistic. 
```

copy the markdown result usnig the chat-gpt copy button and past it into a prompt.md

```bash
modal run main.py --prompt prompt.md --model=gpt-4
```