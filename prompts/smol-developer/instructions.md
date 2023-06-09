Ask Chat-GPT:

```bash
Write me really precise instructions and technical specifications in a prompt in markdown format that will be asked to an AI world class web developer to generate in one request, it is important to remind the assistant that the output should be able to run directly in a modern web browser without any error, and that it needs to be sure that every function is well written and completely implemented, that the layout should be responsive, correctly sized with an appropriate design :

# What you want here like for exampke:
I want a really simple and light webpage (no backend) in which I can play to a generated js snake game, the game design and ui should be simple but have vertical layout, a good user experience and a vibrant fancy colored style with a modern design and the game difficulty should be realistic. 
```

copy the markdown result usnig the chat-gpt copy button and past it into a prompt.md

```bash
# Increase the timeout value from 120s to 240s in the code of smol developer to avoid timeout error
modal run main.py --prompt prompt.md --model=gpt-4
```

