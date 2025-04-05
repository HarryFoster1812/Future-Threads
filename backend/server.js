const GameManagerClass = require("./game");
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const session = require('express-session');
const path = require('path');
const fs = require('fs').promises;

const { GoogleGenerativeAI } = require("@google/generative-ai");
const getAudioPath = require("./voiceGen")

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

let eventData = null;
let cardData = null;
let gameManager = null;


const getJsons = async () => {
    try {
        let fileData = await fs.readFile('../public/timeline_data/timeline_data.json', 'utf8');
        eventData = JSON.parse(fileData);
         fileData = await fs.readFile('../public/timeline_data/choices.json', 'utf8');
        cardData = JSON.parse(fileData);
        console.log('Timeline data loaded successfully.');
    } catch (err) {
        console.error('Error loading timeline data:', err);
        return null;
    }
};

function addEventItem(event){

}

function addChoiceCardItem(choice){

}

app.post('/api/filteredEvents', async (req, res) =>{

})

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    if (typeof message !== 'string' || message.trim() === '') {
        return res.status(400).json({ error: 'Invalid message' });
    }

    try {
        const result = await model.generateContent([message]);
        console.log(result.response.text());

        const botMessage = result.response.text();
        if (!botMessage) {
            return res.status(500).json({ error: 'No message received from AI model' });
        }

        res.json({ content: botMessage });
    } catch (error) {
        console.error('Error calling API:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});


// Set up session middleware
app.use(
  session({
    secret: 'your-secret-key', // Replace with a secure key for your app
    resave: false,             // Avoid saving session if unmodified
    saveUninitialized: true,   // Save session for new users
    cookie: {
      secure: false,           // Set to `true` if using HTTPS
      maxAge: 1000 * 60 * 60   // Set session expiration (1 hour)
    }
  })
);



getJsons().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
    gameManager = new GameManagerClass(eventData, cardData);
});

app.get("/api/voice/:title", async (req, res) => {
    const audioPath = await getAudioPath(req.params.title)
    res.sendFile(audioPath)
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

