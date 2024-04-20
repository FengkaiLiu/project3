# project3
All the files in project3

# Task 2:Describe the redis data structures
Most Popular Games by Region
KEY: 'regionSales:{regionID}'
VALUES: Game's ID
SCORE: Number of Sales
--------COMMAND EXAMPLE
ZADD regionSales:1 275583 game:1
ZADD regionSales:2 668185 game:2
After this I can use ZRANGE or ZREVRANGE to get the games with the highest scores.

Game Details
To get storing detailed information about each game, including its name, category, and linked publisher, Redis Hashes will be utilized. 
KEY: 'game:{gameID}'
FIELDS: name, category, publisherID
---------COMMAND EXAMPLE
HMSET game:1 name "Call of Duty III" category "FPS" publisherID 1
HMSET game:2 name "Call of Duty V" category "Story-rich" publisherID 2

Publisher Data
Use Redis Hashes to store the Publisher information
KEY: 'publisher:{publisherID}'
FIELDS: name
---------COMMAND EXAMPLE
HMSET publisher:1 name "Activision"
HMSET publisher:2 name "Square Enix"

Platform Details
Use Redis Hashes to store platform details.
KEY: 'platform:{platformID}'
FIELDS: name, release_year
---------COMMAND EXAMPLE
HMSET platform:1 name "Mobile" release_year 1991
HMSET platform:2 name "VR" release_year 1995
