// Import packages
const express = require('express');
const redis = require('redis');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Create a Redis client
const client = redis.createClient();

client.on('error', (err) => console.log('Redis Client Error', err));
client.connect();

// Define routes
// Route to create a new game entry
app.post('/games', async (req, res) => {
    const { gameID, name, category, publisherID } = req.body;
    await client.hSet(`game:${gameID}`, 'name', name, 'category', category, 'publisherID', publisherID);
    res.send('Game added successfully');
});

// Route to get a game's details
app.get('/games/:gameID', async (req, res) => {
    const game = await client.hGetAll(`game:${req.params.gameID}`);
    if (Object.keys(game).length) {
        res.json(game);
    } else {
        res.status(404).send('Game not found');
    }
});

// Route to update a game's details
app.put('/games/:gameID', async (req, res) => {
    const { name, category, publisherID } = req.body;
    await client.hSet(`game:${req.params.gameID}`, 'name', name, 'category', category, 'publisherID', publisherID);
    res.send('Game updated successfully');
});

// Route to delete a game
app.delete('/games/:gameID', async (req, res) => {
    await client.del(`game:${req.params.gameID}`);
    res.send('Game deleted successfully');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${6379}`);
});
