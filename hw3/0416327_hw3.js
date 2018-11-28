var Ball = [];
var nball;
var id;

//Change the Ball Size 
function ChangeSize(){ 
	var j;
	for(j=0;j<nball;j++){
		var Bno = document.getElementById(Ball[j].id);
		Ball[j].size = (Ball[j].size==25)?40:25;
		Bno.style.width = Ball[j].size + 'px';
		Bno.style.height = Ball[j].size + 'px';
	}
}

//Remove all the Child Element
function Close(){ 									
	var i;
	var parent = document.getElementById("animate");
	clearInterval(id);
	while(parent.firstChild){
		parent.removeChild(parent.firstChild);
		Ball.pop();
	} 
	//Enable back the function of the Generate Ball button 
	document.getElementById("GB").onclick = GenerateBall;
}

function GenerateBall(){
	//Disable the button's function after one click
	document.getElementById("GB").onclick = null;
	var elem = document.getElementById("animate");
	//Random number of ball between 3 ~ 10 ball
	nball = Math.floor(Math.random()*8) + 3; 
	var n;
	//Set up the initial position of each ball
	var initial_row = [225,200,200,175,175,175,150,150,150,150];
	var initial_col = [650,625,675,650,600,700,625,675,575,725];
	//Color of Ball within different column range
	var colour  = [["#e6ffff","#ccffff","#b3ffff","#99ffff","#80ffff","#66ffff","#4dffff","#33ffff","#1affff","#00ffff","#00e6e6","#00cccc","#00b3b3","#009999","#008080","#006666"]
				  ,["#ffe6e6","#ffcccc","#ffb3b3","#ff9999","#ff8080","#ff6666","#ff4d4d","#ff3333","#ff1a1a","#ff0000","#e60000","#cc0000","#b30000","#990000","#800000","#660000"]
				  ,["#e6ecff","#ccd9ff","#b3c6ff","#99b3ff","#809fff","#668cff","#4d79ff","#3366ff","#1a53ff","#0040ff","#0039e6","#0033cc","#002db3","#002699","#002080","#001a66"]
				  ,["#ffffe6","#ffffcc","#ffffb3","#ffff99","#ffff80","#ffff66","#ffff4d","#ffff33","#ffff1a","#ffff00","#e6e600","#cccc00","#b3b300","#999900","#808000","#666600"]
				  ,["#ffe6ff","#ffccff","#ffb3ff","#ff99ff","#ff80ff","#ff66ff","#ff4dff","#ff33ff","#ff1aff","#ff00ff","#e600e6","#cc00cc","#b300b3","#990099","#800080","#660066"]
				  ,["#f9ffe6","#f2ffcc","#ecffb3","#e6ff99","#dfff80","#d9ff66","#d2ff4d","#ccff33","#c6ff1a","#bfff00","#ace600","#99cc00","#86b300","#739900","#608000","#4d6600"]
				  ,["#f0e6ff","#e0ccff","#d1b3ff","#c299ff","#b380ff","#a366ff","#944dff","#8533ff","#751aff","#6600ff","#5c00e6","#5200cc","#4700b3","#3d0099","#330080","#290066"]
				  ,["#fff0e6","#ffe0cc","#ffd1b3","#ffb380","#ffb366","#ff944d","#ff8533","#ff751a","#ff6600","#e65c00","#cc5200","#b34700","#993d00","#803300","#662900","#4d1f00"]
				  ,["#f5e6ff","#ebccff","#e0b3ff","#d699ff","#cc80ff","#c266ff","#b84dff","#ad33ff","#a31aff","#9900ff","#8a00e6","#7a00cc","#6b00b3","#5c0099","#4c0080","#3d0066"]
				  ,["#e6fffa","#ccfffa","#ccfff5","#b3fff0","#99ffeb","#80ffe5","#66ffe0","#4dffdb","#33ffd6","#1affd1","#00ffcc","#00e6b8","#00cca3","#00b38f","#00997a","#008066"]];
	
	//Create child element depending on the random number of ball
	for(n=0;n<nball;n++){
		var child = document.createElement("div");
		var ncolor = n; 
		var ndir = Math.floor(Math.random()*7) + 1; // Beginning direction
		var nsize = 25;
		var nrow = initial_row[n];
		var ncol = initial_col[n];
		Ball.push({id:"B"+n,color:ncolor,dir:ndir,size:nsize,row:nrow,col:ncol});
		child.id = Ball[n].id;
		child.style.top = Ball[n].row + 'px';
		child.style.left = Ball[n].col + 'px';
		elem.appendChild(child);
	}

	id = setInterval(Bounce, 5);
	function Bounce(){
		var k;
		for(k=0;k<nball;k++){
			var Ball_no = document.getElementById(Ball[k].id);
			var temp;
			//When hit UpLeft corner
			if(Ball[k].row==0 && Ball[k].col==0){
				Ball[k].dir = 4;
				Ball[k].row++;Ball[k].col++;
			}
			//When hit UpRight corner
			else if(Ball[k].row==0 && Ball[k].col==(1250-Ball[k].size)){
				Ball[k].dir = 6;
				Ball[k].row++;Ball[k].col--;
			}
			//When hit BottomLeft corner
			else if(Ball[k].row==(450-Ball[k].size) && Ball[k].col==0){
				Ball[k].dir = 2;
				Ball[k].row--;Ball[k].col++;
			}
			//When hit BottomRight corner
			else if(Ball[k].row==(450-Ball[k].size) && Ball[k].col==(1250-Ball[k].size)){
				Ball[k].dir = 8;
				Ball[k].row--;Ball[k].col--;
			}
			//When hit ceiling 
			else if(Ball[k].row==0){
				temp = Math.floor(Math.random()*3);
				Ball[k].dir = (temp==0)?6:(temp==1)?5:4;
				switch(Ball[k].dir){
					case 4:
						Ball[k].row++;Ball[k].col++;
						break;
					case 5:
						Ball[k].row++;
						break;
					case 6:
						Ball[k].row++;Ball[k].col--;										
						break;
				}
			}
			//When hit floor
			else if(Ball[k].row==(450-Ball[k].size)){
				temp = Math.floor(Math.random()*3);
				Ball[k].dir = (temp==0)?8:(temp==1)?1:2;
				switch(Ball[k].dir){
					case 8:
						Ball[k].row--;Ball[k].col--;
						break;
					case 1:
						Ball[k].row--;
						break;
					case 2:
						Ball[k].row--;Ball[k].col++;											
						break;
				}
			}
			//When hit Left wall
			else if(Ball[k].col==0){
				temp = Math.floor(Math.random()*3);
				Ball[k].dir = (temp==0)?2:(temp==1)?3:4;
				switch(Ball[k].dir){
					case 2:
						Ball[k].row--;Ball[k].col++;
						break;
					case 3:
						Ball[k].col++;
						break;
					case 4:
						Ball[k].row++;Ball[k].col++;											
						break;
				}
			}
			//When hit Right wall
			else if(Ball[k].col==(1250-Ball[k].size)){
				temp = Math.floor(Math.random()*3);
				Ball[k].dir = (temp==0)?8:(temp==1)?7:6;
				switch(Ball[k].dir){
					case 8:
						Ball[k].row--;Ball[k].col--;
						break;
					case 7:
						Ball[k].col--;
						break;
					case 6:
						Ball[k].row++;Ball[k].col--;											
						break;
				}
			}
			//Within the box
			else{
				switch(Ball[k].dir){
					case 1: //UP
						Ball[k].row--;
						break;
					case 2: //U_RIGHT
						Ball[k].row--;Ball[k].col++;
						break;
					case 3: //RIGHT
						Ball[k].col++;
						break;
					case 4: //D_RIGHT
						Ball[k].row++;Ball[k].col++;
						break;
					case 5: //DOWN
						Ball[k].row++;
						break;
					case 6: //D_LEFT
						Ball[k].row++;Ball[k].col--;
						break;
					case 7: //LEFT
						Ball[k].col--;
						break;
					case 8: //U_LEFT
						Ball[k].row--;Ball[k].col--;
						break;
					default:
						alert("ALLERT!");
				}	
			}
			Ball_no.style.top  = Ball[k].row + 'px';
			Ball_no.style.left = Ball[k].col + 'px';
			Ball_no.style.backgroundColor = colour[Ball[k].color][Math.round(Ball[k].col*16/1250)];
		}
		
	}
}