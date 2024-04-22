const redis = require('redis');
const { promisify } = require('util');

// Create and connect the Redis client
const client = redis.createClient();
client.connect();

client.on('error', (err) => console.log('Redis Client Error', err));

// Async utility for Redis commands to use async/await
const hsetAsync = promisify(client.hSet).bind(client);
const hgetallAsync = promisify(client.hGetAll).bind(client);
const delAsync = promisify(client.del).bind(client);

async function runRedisCommands() {
    // Create a new game
    const gameKey = 'game:1';
    await hsetAsync(gameKey, {
        name: 'Call of Duty',
        category: 'Shooter',
        publisherID: '1'
    });
    console.log('Game created');

    // Retrieve the game details
    const gameDetails = await hgetallAsync(gameKey);
    console.log('Game details:', gameDetails);

    // Update game details
    await hsetAsync(gameKey, 'name', 'Call of Duty: Modern Warfare');
    console.log('Game updated');

    // Retrieve updated game details
    const updatedGameDetails = await hgetallAsync(gameKey);
    console.log('Updated game details:', updatedGameDetails);

    // Delete the game
    await delAsync(gameKey);
    console.log('Game deleted');
}

runRedisCommands().then(() => client.quit());
