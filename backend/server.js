const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const session = require('express-session');
const path = require('path');
const fs = require('fs').promises;

const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

eventData = null;


const getJson = async () => {
    try {
        const fileData = await fs.readFile('../public/timeline_data/timeline_data.json', 'utf8');
        eventData = JSON.parse(fileData);
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
    console.log(eventData);

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

// Sample route to set user session
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Dummy authentication logic (replace with real logic)
  if (email === 'user@example.com' && password === 'password123') {
    // Store user info in session
    req.session.user = {
      email: email,
      loggedIn: true
    };
    return res.status(200).json({ message: 'Login successful', user: req.session.user });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
});

// Sample route to check if the user is logged in
app.get('/profile', (req, res) => {
  if (req.session.user && req.session.user.loggedIn) {
    return res.status(200).json({ message: 'User is logged in', user: req.session.user });
  }

  return res.status(401).json({ message: 'You need to log in first' });
});

// Sample route to log out
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to log out' });
    }

    res.status(200).json({ message: 'Logged out successfully' });
  });
});

function execQuery(query) {
    connection.connect(error => {
        if (error) {
            console.error('Error connecting to the database:', error);
            return;
        }
        console.log('Connected to the database');
    });

    // Run a database query
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            connection.end();
            return;
        }
        connection.end();
        return results;
    });

    // Close the connection
    connection.end();
}

getJson().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});

