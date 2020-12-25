class Game 
{
    constructor()
    {

    }

    getState()
    {
        var gameStateRef = database.ref("gameState");
        //anonymous function is the function without any name
        gameStateRef.on("value", function(data){
            gameState = data.val(); 
        })
    }

    update(state)
    {
        //set() is used to store data inside database
        //update() is used to change data in the database
        database.ref('/').update({
            gameState: state
        })
    }


    start()
    {
        if(gameState === 0)
        {
            player = new Player();
            player.getCount();
            
            form = new Form();
            form.display();
        }
    }
}