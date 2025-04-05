# General Flow

This documents the general flow of information from when a room is created, to users connecting and till the end of the game  
Notes on styling:

- When a path is specified without a root, then it is assumed to be for the backend
- Paths from the frontend are specified as frontend/...

## States  

### Room Creation

Host sends a request to /create_lobby  
This redirects the host to frontend/lobby?roomID=roomID&host=true  
When the host enters this page, a websocket connection is opened between the client and the backend  
This sends the roomID as a property, and the fact the connection is from the host  
move to in lobby  

### User Connecting to Room

When the user submits the game code and their username to the front page, the content is sent to /join  
If the room ID is correct, they are redirected to frontend/lobby?roomID=gameCode&host=false&username=username
This then sets up a websocket connection with the backend, and emits a "userJoined" message from the server to the host  
move to in lobby  

### In Lobby

During this time, the host is broadcasted about new users being joined  
and whether any users have disconnected  
Once the host determines enough people are present, they send the startGame message
This triggers a gameStart broadcast, all connected devices should go to frontend/gameLoop  
move to in game  

### In Game

During the game this standard flow is followed:  

1. Users are sent updated information about the game - Update Phase
    - The host is sent the leaderboard, which contains where users are positioned relative to offset - leaderboard message
    - The users are sent information about their positioning and whats upcoming via the inGameStatus message. This moves them into lane choosing
2. Users are given time to choose to change lanes - Lane Choose Phase
    - Users send a message when they go to a new lane - changeLane message - this is forwarded to the host
    - Once selection is done, the server a laneFinalization message to each user saying what they hit and the question to display  
3. User Questions and responses - Questioning Phase
    - The user responds to the question via answerQuestion message, this does move the user to a state where they cant answer
    - Extension / not MVP: at any time, the host can stop the current question by sending to the server the endQuestion message
4. Users see feedback / results of their question - Feedback Phase
    - Once the question time is over / host ends it, questionTimeEnd message is sent to the users  
    - Users are given a small bit to reflect on the results, before their screens are cleared -> shown by the inGameStatus message

At any time, the host can send a gameEnd message, which is then broadcasted, ending the loop. Bringing the users to the endgame steps

### Endgame and leaderboard

In this stage, users are brought to the game end screen  
The host is given a button to display the leaderboard, they send displayLeaderboard message  
At this point, the host is sent the leaderboard message, and each user is sent an endGameRatings message

Connections are then terminated from the server and the room is destroyed, causing any game states to be saved but the game to be completely finished  

## Websocket Messages

These are transmitted as `{ messageType: string, data: object }`  
? is used to specify possibility of it being null  
if a bad message is sent, badMessage is sent back  

### Host to server

- gameStart {}
- endGame {}
- endQuestion {}
- displayLeaderboard {}

### User to server

- changeLane { lane: int }  
- answerQuestion { answerIndex: int } // 0 based

### Server to host

- userJoined { username: String, userCount: int }
- userLeft { username: String, userCount: int}
- leaderboard { leaderboard: { username: string, correctCount: int, positionDelta: int, colour: string}[], groupCentre: int, maxQuestions: int} // the group centre is used as an offset for where the position delta is from
- changeLane { username: string, lane: int }  

### Server to User

- inGameStatus{ lane: int, correctCount: int, incorrectCount: int, skipCount: int, upcomingLaneInfo: laneObject[] }
- endGameRatings{ name: string, score: int, leaderboardPosition: int }
- laneFinalization { hit: laneObjects, question: question? }
- questionTimeEnd { result: "correct" || "incorrect" || "timeOut" || "noResult", answerIndex: int?, score: int }
- carColour { colour: string }

### Server to Any

- badMessage{ text: string }

### Broadcast

- gameStart{}
- gameEnd{}

### Types / Enums

Enums are sent as a string containing the values  
  
enum laneObject { "nothing", "question", "obstacle" }  
type question {  
    question: string,  
    answerOptions: string[], // max 4  
}  
