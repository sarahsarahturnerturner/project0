let img;
function preload(){
	img = loadImage('pinksword.png');
}

function setup() {
createCanvas(1920,1080);
background(252, 83, 252);
noStroke();
fill(252);

image(img, 100, 100, width/12, height/12);

 beginShape();
     fill(147,237,234);
    ellipse(1800, 175, 250,250);
    endShape();

beginShape();
fill(219,150,235);
 vertex(0,height/2);
    vertex(width*16/24,height/2);
    vertex(width*17/24,height*11/32);//peak1
    vertex(width*18/24,height*13/32);
    vertex(width*19/24,height*3/32);//peak2
    vertex(width*20/24,height*8/32);
    vertex(width*21/24,height*0/32);//peak3
    vertex(width*22/24,height*10/32);
    vertex(width*23/24,height*8/32);//peak4
    vertex(width*24/24,height/2);
    vertex(width,height/2);
    vertex(width,height);
    vertex(0,height);
    vertex(0,height/2);
  endShape();

  beginShape();
    fill(147,237,234);
    vertex(width*8/24,height/2);
    bezierVertex(width*6/24,height*17/32,  width*8/24,height*17/32,   width*9/24,height*19/32);//peak1-left
    bezierVertex(width*8/24,height*19/32,  width*9/24,height*15/32  ,width*10/24,height*17/32);//peak1-right
    bezierVertex(width*9/24,height*17/32,  width*19/48,height*21/32  ,width*11/24,height*23/32);//peak2-left
    bezierVertex(width*10/24,height*23/32,  width*11/24,height*19/32  ,width*12/24,height*21/32);//peak2-right
    bezierVertex(width*11/24,height*21/32,  width*11/24,height*27/32  ,width*13/24,height*29/32);//peak3-left
    bezierVertex(width*27/48,height*29/32,  width*13/24,height*17/32  ,width*14/24,height*19/32);//peak3-right
    bezierVertex(width*13/24,height*19/32,  width*14/24,height*20/32  ,width*15/24,height*22/32);//peak4-left
    bezierVertex(width*14/24,height*22/32,  width*16/24,height*17/32  ,width*16/24,height/2);//peak4-right
    vertex(width*8/24,height/2);
  endShape();

  noLoop();


}


