class Player 
{
  constructor()
  {

  }

  getCount()
  {
    var playerCountRef = database.ref('playerCount');

    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count)
  {
    database.ref('/').update({
      playerCount: count
    })
  }

  update(name)
  {
    //when we combine string and number the result is string
    var playerIndex = "player" + playerCount;  //"player1"

    database.ref(playerIndex).set({
      name: name
    })
  }
}
