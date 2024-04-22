# project3
All the files in project3

# Task 2:Describe the redis data structures
See task2.md

# Task 3:Modify the redis database
See task3.md

# Optional task
First create the new directory
mkdir redis-games
cd redis-games
npm init -y

The host runs on localhost:6379

Create file called optional1.js

then npm start

test with cURL

to create a game:
curl -X POST http://localhost:6379/games -H 'Content-Type: application/json' -d '{"gameID": "1", "name": "Call of Duty", "category": "Shooter", "publisherID": "1"}'

to update a game:
curl -X PUT http://localhost:6379/games/1 -H 'Content-Type: application/json' -d '{"name": "Call of Duty: Modern Warfare", "category": "Shooter", "publisherID": "2"}'

# Optional redis script
First create directory
mkdir redis-node-script
cd redis-node-script
npm init -y

Create file called theScript.js

run with node redis_script.js

This script will perform the following operations sequentially:

Create a new game entry in Redis.
Retrieve the game details and print them.
Update the game details (change the name).
Retrieve and print the updated details.
Delete the game entry.
