const team = {
    _players: [
    {firstName: 'Pablo', lastName: 'Sanchez',age: 11},
     {firstName: 'Pete', lastName: 'Wheeler',  age: 54},
      {firstName: 'Jack', lastName: 'Tomson',  age: 36}
      ],
  
  
     _games: [
       {opponent: 'Broncos',teamPoints: 42, opponentPoints: 27},
       {opponent: 'Wolves',teamPoints: 55, opponentPoints: 34},
       {opponent: 'Boulders',teamPoints: 32, opponentPoints: 66}
       ],

        
  
  get players() {
    return this._players;
  },
  
  get games() {
    return this._games
  },
  
  addPlayer(firstName, lastName, age) {
    let player = {
        firstName: firstName,
        lastName: lastName,
        age: age

        };

        this.players.push(player);
  
  },

  addGame(opp, myPts, oppPts) {
  let game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
  };

  this.games.push(game);    
  }

};
  
  
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs' ,'Bunny',76);
  
  team.addGame('Chucky', 33, 70);
  team.addGame('Pineapple', 23, 21);
  team.addGame('Chums', 67, 09);
  
  console.log(team.players);
   console.log(team.games);