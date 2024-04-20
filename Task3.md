# Task3 Interact with Redis

# Regional Sales
In order to manage the most popular games by sales in different regions

Add/Update Sales Data for a Game in a Region
When a sale is made, increase the score for the game in the region
ZINCRBY regionSales:{regionID} {incrementBy} game:{gameID}
**EX
ZADD regionSales:1 275583 game:1
ZADD regionSales:2 668185 game:2
ZADD regionSales:3 620739 game:3
ZADD regionSales:4 831193 game:4
ZADD regionSales:5 587883 game:5
ZADD regionSales:6 798569 game:6

Retrieve the Top Selling Games in a Region
Get the list of games from highest to lowest in that region
ZREVRANGE regionSales:{regionID} 0 -1 WITHSCORES
**EX
ZREVRANGE regionSales:1 0 -1 WITHSCORES

Delete a Game from the Sales List:
In case that some game is no longer solde or relevant
ZREM regionSales:{regionID} game:{gameID}
**EX
ZREM regionSales:1 game:1

# Game Details
For storing and managing detailed information about each game

Add a New Game
HMSET game:{gameID} name "{gameName}" category "{categoryName}" publisherID {publisherID}
**EX
HMSET game:1 name "Call of Duty" category "Fielding" publisherID 1
HMSET game:2 name "Call of Duty" category "Base Running" publisherID 2
HMSET game:3 name "Call of Duty" category "Offense" publisherID 3
HMSET game:4 name "Assassin's Creed" category "Pitching" publisherID 4
HMSET game:5 name "Super Mario Bros" category "Pitching" publisherID 5
HMSET game:6 name "Assassin's Creed" category "Base Running" publisherID 6

Retrive the Game Information
HGETALL game:{gameID}
**EX
HGETALL game:1

Update the Information for that Game
HSET game:{gameID} name "{newGameName}"
**EX
HSET game:1 name "New Call of Duty"

Delete the Game
DEL game:{gameID}
**EX
DEL game:1

# Publisher Data
For storing information about publishers

Add a New Publisher
HMSET publisher:{publisherID} name "{publisherName}"
**EX
HMSET publisher:1 name "Activision"
HMSET publisher:2 name "Square Enix"
HMSET publisher:3 name "Capcom"
HMSET publisher:4 name "Capcom"
HMSET publisher:5 name "Square Enix"
HMSET publisher:6 name "Ubisoft"

Retrieve Publisher Information
HGETALL publisher:{publisherID}
**EX
HGETALL publisher:1

Update the Publisher Information
HSET publisher:{publisherID} name "{newPublisherName}"
**EX
HSET publisher:1 name "New Activision"

Delete the Publisher
DEL publisher:{publisherID}
**EX
DEL publisher:1

# Platform Datails
For storing details about gameing platforms

Add a New Platform:
HMSET platform:{platformID} name "{platformName}" release_year {releaseYear}
**EX
HMSET platform:1 name "Mobile" release_year 1991
HMSET platform:2 name "VR" release_year 1995
HMSET platform:3 name "Linux" release_year 2000
HMSET platform:4 name "Android" release_year 2004
HMSET platform:5 name "iOS" release_year 1985
HMSET platform:6 name "VR" release_year 2006
... and so on for each platform

Retrieve Platform Information
HGETALL platform:{platformID}
**EX
HGETALL platform:1

Upddate Platform Information
HMSET platform:{platformID} name "{newPlatformName}" release_year {newReleaseYear}
**EX
HMSET platform:1 name "New Mobile" release_year 1992

Delete a Platform
DEL platform:{platformID}
**EX
DEL platform:1
