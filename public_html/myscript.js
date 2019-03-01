function getIndex() {
  var x=  document.getElementById("mySelect").selectedIndex;
  var min=0; 
  var max=3;  
  var random =Math.floor(Math.random() * (+max - +min)) + +min; 
  var string="";
  if((random==0)&&(x==0))
  {
  document.getElementById("computer").src = "rock.png";
  string="Draw!";
  }
  if((random==0)&&(x==1))
  {
  document.getElementById("computer").src = "rock.png";
      document.getElementById("player").src = "paper.png";
        string="Player Wins!";
  }
  if((random==0)&&(x==2))
  {
  document.getElementById("computer").src = "rock.png";
    document.getElementById("player").src = "scissors.png";
         string="Computer Wins!";
  }
  if((random==1)&&(x==0))
  {
  document.getElementById("player").src = "rock.png";
  document.getElementById("computer").src = "paper.png";
           string="Computer Wins!";
  }
  if((random==1)&&(x==1))
  {
  document.getElementById("computer").src = "paper.png";
    document.getElementById("player").src = "paper.png";
      string="Draw!";
  }
  if((random==1)&&(x==2))
  {
  document.getElementById("computer").src = "paper.png";
      document.getElementById("player").src = "scissors.png";
              string="Player Wins!";
  }
   if((random==2)&&(x==0))
  {
  document.getElementById("computer").src = "scissors.png";
  document.getElementById("player").src = "rock.png";
                string="Player Wins!";

  }
  if((random==2)&&(x==1))
  {
  document.getElementById("computer").src = "scissors.png";
      document.getElementById("player").src = "paper.png";
                string="Computer Wins!";
  }
  if((random==2)&&(x==2))
  {
  document.getElementById("computer").src = "scissors.png";
      document.getElementById("player").src = "scissors.png";
                      string="Draw!";


  }
    document.getElementById("demo").innerHTML = string;

}