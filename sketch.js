

function preload()
{
  
}

function setup()
{
  createCanvas(400,400);
  username = createInput();
  username.position(200,202).attribute('placeholder', 'Username');
  password = createInput('','password');
  password.position(200,username.width+75).attribute('placeholder', 'Password');
  button = createButton("Log In");
  button.position(200,password.width+100)
  button.size(153);
  button.mousePressed(buttonPressed);
}

function draw() {
  background("white")
  const value = input.value();
  switch(value)
  {
    default:
    break;
  }
  drawSprites();
}

function buttonPressed()
{
  
}


 document.title = 'test';
