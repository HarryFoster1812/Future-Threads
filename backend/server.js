const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const getAudioPath = require("./voiceGen")

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

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

app.get("/api/voice/:title", async (req, res) => {
    const audioPath = await getAudioPath(req.params.title)
    res.sendFile(audioPath)
  })

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

