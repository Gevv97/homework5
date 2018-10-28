
//(((1)))//
const canvas = document.getElementById("can");
const context=canvas.getContext("2d");

canvas.width=1000;
canvas.height=500;

context.fillStyle="brown";
context.fillRect(0,0,1000,500)
const rand = function(num) {
  return Math.floor(Math.random() * num) + 1;
};
 const colorArray = ["yellow" , "blue", "green","red","purple",];

const createBoxes = function(count,canvasWidth,canvasHeight){

	
	a =[]
		for (i = 0; i < count; i++) { 
			a[i] = {
		 x:rand(canvasWidth-30),
		 y: rand(canvasHeight-30),
		 width: 30,
		 height: 30,
		xDelta: 1, 
		yDelta: 1, 
		color: colorArray[rand(5)-1], 
		draw: function() {
			context.fillStyle = this.color;
			context.fillRect(this.x,this.y,this.width,this.height)
		},
		update: function() {
			contex.fillRect(this.x+this.xDelta,this.y+this.yDelta,this.width,this.height)
		}		
			}
	}
		for (i = 0; i < count; i++){
			a[i].draw()
	
		}
		
}
createBoxes(2,1000,500);

//(((2)))//

const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const colorArray=["yellow","blue","red","green"]
  
  context.fillStyle="brown";
  context.fillRect(0,0,1000,1000)
  const rand = function(num) {
  return Math.floor(Math.random() * num) + 1;
};
  
     

     const createBoxes = function(count, canvasWidth, canvasHeight) {
      const array = [];
    for (let i = 0; i < count; i=i+1){
    
          array[i] = {

            x: rand(canvasWidth-30),
            y: rand(canvasHeight-30),
            width: 30,
            height: 30,
            xDelta: 1, 
            yDelta: 1, 
            color: colorArray[rand(colorArray.length)-1],
            draw: function() {
              context.fillStyle = this.color;
                context.fillRect(this.x, this.y, this.width, this.height);
            },
            update: function() {
              
               this.x = this.x + this.xDelta ;
               this.y = this.y + this.yDelta ;
    
                if(this.x >= canvas.width-this.height)
                    this.xDelta = -1;
                if(this.x <= 0) 
                    this.xDelta = 1;
              
              if(this.y >= canvas.height-this.height)
                    this.yDelta = -1;
               if(this.y <= 0) 
                    this.yDelta = 1;
                     },
      };
}  

     return array;
};
  
  const boxes = createBoxes(20,400,400);
  
  
  
   const update =function(){
        for(let i = 0; i < boxes.length; i = i+1){
          boxes[i].update();
          
            
        }          
      } 

  
  const draw = function(){  
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle="brown";
    context.fillRect(0,0,2000,2000)  
  
 for(let i = 0; i < boxes.length; i = i+1){     
          boxes[i].draw();
                          
            
        }         
  }; 
  
  const loop = function() {  
    draw();  
    update();                            
    requestAnimationFrame(loop);       
  }     
          
  loop(); 
  
  
  //(((3)))//
  
const canvas = document.getElementById("canvas");
  const context = canvas.getContext('2d');
  canvas.width = 1000;
  canvas.height = 700;

  const rand = function(num) {
  return Math.floor(Math.random() * num) + 1;
};
 const backImage = new Image();
 backImage.src = 'https://s3.envato.com/files/234687569/Halloween%20Game%20Background/Halloween%20BG%2001/Halloween%20Background%2001.png'

const badGuyImg = new Image();
badGuyImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHUhMVrE1HixsSse0UxvE8GM1te7J9tVuUboIdsnY1vi566Dgr';

const goodGuyImg = new Image();
goodGuyImg.src = 'https://st.depositphotos.com/1667027/3535/v/950/depositphotos_35358829-stock-illustration-cartoon-happy-guy.jpg'
const hero = {
		x: 0,
		y: 0,
		xDelta: 0,
		yDelta: 0,
		width: 60,
		height: 140,
		image: goodGuyImg,
		draw: function(){
			context.drawImage(this.image, this.x, this.y, this.width, this.height);
		},
		update: function() {
    
              if(this.x < 0 || this.x > canvas.width - this.width+5){
              	this.xDelta = this.xDelta * -1}
		      if(this.y < 0 || this.y > canvas.height - this.height+5){
		      	this.yDelta = this.yDelta * -1}
          
           this.x = this.x + this.xDelta;
           this.y = this.y + this.yDelta;  
      }, 
	}
  
     

     const badguy = function(count, canvasWidth, canvasHeight) {
      const array = [];
    for(let i = 0; i < count; i++){
    
          array[array.length] = {

            x: rand(canvasHeight-50),
            y: rand(canvasWidth-40),
            width: 40,
            height: 60,
            xDelta: 2, 
            yDelta: 2, 
            draw: function() {
              context.drawImage(badGuyImg, this.x, this.y, this.width, this.height)
              
            },
            update: function() { 
                            if(this.x < 0 || this.x > canvasWidth - 40){
                            	this.xDelta *= -1}
		                    if(this.y < 0 || this.y > canvasHeight - 60){
		                    	this.yDelta *= -1}
            
                             this.x += this.xDelta;
                             this.y += this.yDelta;
            
                            if (this.x < hero.x + hero.width && this.x + this.width > hero.x && this.y < hero.y + hero.height && 
       	                         this.height + this.y > hero.y){

      				                                            alert("Game Over!");}
    		}
        };  
     }  
     return array;
};

	
  
  const boxes = badguy(rand(8),canvas.width,canvas.height);
  
  const leftKey = 37;
    const upKey = 38;
    const rightKey = 39;
    const downKey = 40;
    document.addEventListener('keydown', function(event){
        	if(event.keyCode === rightKey){
        		hero.xDelta = 5;
        	}
            }, false);
    document.addEventListener('keyup', function(event){
        	hero.xDelta = 0;
            }, false);
    document.addEventListener('keydown', function(event){
        	if(event.keyCode === leftKey){
        		hero.xDelta = -5;
        	}
            }, false);
    document.addEventListener('keyup', function(event){
        	hero.xDelta = 0;
            }, false);
    document.addEventListener('keydown', function(event){
        	if(event.keyCode === downKey){
        		hero.yDelta = 5;
        	}
            }, false);
    document.addEventListener('keyup', function(event){
        	hero.yDelta = 0;
            }, false);
    document.addEventListener('keydown', function(event){
        	if(event.keyCode === upKey){
        		hero.yDelta = -5;
        	}
        	if(hero.x + hero.width === canvas.width){
        		hero.xDelta = 0;
        	}
            }, false);
    document.addEventListener('keyup', function(event){
        	hero.yDelta = 0;
            }, false);

    const draw = function(array){  

 for(let i = 0; i < array.length; i = i+1){     
          badguy(array[i].draw())       
            
        }         
  }; 

   const update =function(array1){
        for(let i = 0; i < array1.length; i++){
          badguy(array1[i].update());
          
            
        }          
      };

  
  const loop = function() { 
  	context.drawImage(backImage, 0, 0, canvas.width, canvas.height)    
    draw(boxes);  
    update(boxes);
    hero.draw();
    hero.update();                            
    requestAnimationFrame(loop);       
  }         
          
  loop(); 