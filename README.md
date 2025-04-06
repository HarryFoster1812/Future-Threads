# FutureThreads - Hack the Future 2025

## Overview

**Project Name**: FutureThreads  
**Team Size**: 4 members  
**Event**: Manchester University Student Hack 2025  
**Main Theme**: Hack the Future  
**Optional Challenges**: 2080 Challenge, Text-to-Speech Challenge

---


## Technologies Used

- **Frontend**: React
- **Backend**: Express.js
- **AI Integration**: Google Gemini API (for content generation during development)

We utilized the **Google Gemini API** to generate content during development, although we did not use it in real-time runtime during the hackathon. This integration allowed us to enhance the variety and complexity of the decisions and events presented to the user.

---

## Code Overview

FutureThreads follows a **separated architecture**, consisting of a **frontend** and **backend**:

- **Frontend**: Built with React, the frontend displays the decisions and events in a clean and user-friendly interface, enabling easy interaction with the game's features.
- **Backend**: The backend, built with Express.js, handles the logic behind the selection of events and decisions. We store all the events and choices in two **JSON files**, allowing for easy content expansion without requiring a live database. This structure also allows us to easily integrate AI tools like Gemini for dynamic content generation.

### Features:

- **Event and Decision Management**: The backend serves random or pre-defined events and choices, affecting the game’s narrative and gameplay experience.
- **AI Integration (Planned)**: While not fully implemented during the hackathon, we planned to use **Google Gemini** to dynamically generate data, providing a more varied and rich gameplay experience.
  
---

## Challenges

- **Hack the Future** (Main Theme): The core of our project revolved around predicting and simulating the future, showing the impact of political decisions and events on society.
- **2080 Challenge** (Optional): Although not fully integrated, we aimed to project potential future events for humanity, exploring how decisions made today can lead to outcomes by 2080.
- **Text-to-Speech Challenge** (Optional): This challenge was not directly implemented, but there were plans to incorporate accessibility features, such as text-to-speech, to make the game more inclusive.

---

## Problem Statement

By 2080, humanity will face numerous challenges regarding the balance of power, government policies, and societal development. A significant issue that could arise is the lack of information on how human development progresses over time, with various sources predicting diverse events and outcomes. Additionally, the evolving balance of power and governance is often overlooked, leading to instability if not properly managed.

Understanding how different decisions affect both the individual and society will be critical for future generations. We aimed to create a tool that not only explores these themes but also educates users about the far-reaching effects of policy decisions and government actions.

---

## Proposed Solution

**FutureThreads** simulates a dynamic environment where the user makes decisions each year, selecting from a series of political choices and policies that shape humanity's future. The game incorporates the effects of these decisions on various factors, including:

- Human development and societal events
- Balance of power and public trust in the government
- Environmental and natural impact

The challenge is to manage these decisions over time to prevent the game from ending prematurely due to instability, poor governance, or social unrest. Players experience firsthand the intricacies and consequences of major policies, showing how difficult it can be for politicians to balance the needs of society with the forces that shape the world.

By simulating future events based on the user’s choices, FutureThreads fosters a deeper understanding of the complexities of governance and the long-term effects of political decision-making.

---

## How to Run the Project

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/HarryFoster1812/Future-Threads.git
   ```

2. Install dependencies for the frontend and backend:

   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```

   - For the backend:
     ```bash
     cd backend
     npm install
     ```

3. Start both the frontend and backend servers:

   - For the frontend:
     ```bash
     cd frontend
     npm start
     ```

   - For the backend:
     ```bash
     cd backend
     npm start
     ```

4. Open your browser and navigate to `http://localhost:3000` to start playing **FutureThreads**.

---

## Future Enhancements

- **Dynamic Event Generation**: Fully integrate AI (Google Gemini) to generate events and decisions in real-time.
- **User Experience**: Enhance the visual and interactive elements of the game to make it even more immersive and engaging.
- **Multiplayer Mode**: Enable users to make decisions collaboratively or competitively, simulating the effect of political power in groups.
- **Text-to-Speech Integration**: Improve accessibility by integrating text-to-speech for better inclusivity.

---

## Contributing

Feel free to fork the repository and contribute to the project. If you'd like to suggest features, improvements, or report bugs, open an issue or create a pull request!

---


Thank you for checking out **FutureThreads**. We hope you enjoy exploring the future with us!
