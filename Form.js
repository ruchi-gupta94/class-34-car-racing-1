class Form 
{
  constructor() 
  {
    
  }

  display()
  {
    //createElement() is used to create HTML tags
    var title = createElement('h2');  //<h2></h2>
    //html() is used to write text inside tags
    title.html("Car Racing Game");    //<h2>Car Racing Game</h2>
    //position() is used to give the horizontal and vertical position where we want to display tags
    title.position(130, 0);
    
    //createInput() is used to create text box
    var input = createInput("Name");
    input.position(130, 160);

    //createButton() is used to create button
    var button = createButton('Play');
    button.position(250, 200);

    button.mousePressed(function(){
      input.hide();
      button.hide();

      var name = input.value(); 
      
      playerCount += 1;     //playerCount = playerCount + 1
      player.update(name);
      player.updateCount(playerCount);

      var greeting = createElement('h3');
      greeting.html("Hello " + name );
      greeting.position(130, 160);
    })

  }

  
}
