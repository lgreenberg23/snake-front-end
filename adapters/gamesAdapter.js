class GamesAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/games'
  }

  getGames() {
    return fetch(this.baseUrl).then(resp => resp.json())
    //fetch is a get request to the URL
    //then it is parsed in JSON

  }

  saveGame(game) {
    if (!game.savedYet) {

    };
    const gameCreateParams = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({game: {user: game.user, snakeCoordinatesAndBearing: game.snakeCoordinatesAndBearing(), id: game.id}})
    }
    return fetch(this.baseUrl, gameCreateParams).then( resp => resp.json() ).then(function(resp){
      console.log("after database in gamesAdapter.js", resp)
      // call handler to get the game going again with this info
    })
  }

}
