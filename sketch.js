/**
* Aileen Lian <al7168@bard.edu>
* 17 Feb 2017
* IDEA 135
* Sketch 6 - Interactive Avatar
* I worked alone on this assignment. 
*   Static image: most of the avatar's body including the dress, 
                  arms, legs, and head
    Static animation: avatar's hair 
    Dynamic animation: fairy dust that appears randomly, also some 
                       colors that are set to randomly change
    Interactive animation: fairy dust appears when mouse is pressed, 
                           color of fairy dust varies depending on mouse position, monster #1 appears when "m" key is pressed, monster #2 appears when "c" is pressed
*/
    

function setup() {
  createCanvas(450, 400);
          
}

function draw() {
    background(0);
  
//MONSTER
  if (key == "m"){
    noStroke();
    fill(random(122, 225), 0, 0);
    triangle(300, height, random(310, 320), 300, 440, height);
    triangle(310, height, random(370, 380), 280, 445, height);
    
//monster eyebrows
    stroke(0);
    strokeWeight(2);
    line(325, 340, 345, 348);
    line(370, 348, 390, 330);
    
//monster eyes
    fill(196, 236, 255);
    ellipse(335, 355, 18, 21);
    ellipse(382, 352, 18, 21);
    
    fill(random(122, 225), 0, 0)
    ellipse(random(334, 336), random(354, 355), 5, 8);
    ellipse(random(381, 383), random(351, 354), 5, 8);
    
//monster mouth
    stroke(0);
    noFill();
    bezier(315, 360, 330, height, 380, height, 410, 350);
  }
  
//MONSTER 2
  if (key == "c"){
    
//monster head
    noStroke();
    fill(random(0, 38), random(190, 230), random(0, 45));
    triangle(260, 0, random(290, 310), 90, 400, 0);
    triangle(270, 0, random(350, 370), 100, 410, 0);
    
//monster eyebrows
    stroke(0);
    strokeWeight(2);
    line(305, 60, 317, 50);
    line(335, 50, 350, 60);
    
//monster eyes
    fill(196, 236, 255);
    ellipse(308, 43, 16, 20);
    ellipse(345, 44, 16, 20);
    
    fill(random(0, 38), random(190, 230), random(0, 45));
    ellipse(random(307, 310), random(42, 45), 4, 7);
    ellipse(random(343, 348), random(43, 45), 4, 7);
    
    stroke(0);
    noFill();
    bezier(290, 40, 305, 0, 370, 0, 370, 50);
  }
  
//fairy dust
  noStroke();
  if (mouseIsPressed){
     frameRate(5);
     fill(mouseX, mouseY, 178, 70);
     ellipse(random(183, 187), random(156,158), 17, 17);
     ellipse(random(195, 203), random(135, 145), 3, 3);
     ellipse(random(245,255), random(165, 175), 5, 5);
     ellipse(random(220, 230), random(195, 205), 5, 5);
     ellipse(random(180, 195), random(90, 110), 3, 3);
     ellipse(random(145, 160), random(105, 125), 4, 4);
     ellipse(random(140, 155), random(80, 100), 5, 5);
     ellipse(random(130, 170), random(140, 170), 3, 3);  
     ellipse(random(250,275), random(270, 290), 4, 4);
     ellipse(random(240, 280), random(90, 130), 3, 3);
     fill(mouseX, mouseY, 178, random(20, 100));
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 3, 3);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 4, 4);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 5, 5);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 6, 6);
     ellipse(random(width), random(height), 6, 6);
     ellipse(random(width), random(height), 6, 6);
     ellipse(random(width), random(height), 6, 6);
     ellipse(random(width), random(height), 4, 4);
     ellipse(random(width), random(height), 4, 4);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
     ellipse(random(width), random(height), 2, 2);
    
    
    
  }
    

  frameRate(2);
//wings
  stroke(98, 112, 127);
  fill(98, 112, 127, 95);
  ellipse(random(79, 81), 170, 50, 60);
  ellipse(random(139, 141), 170, 50, 60);
  ellipse(random(94, 96), 205, 30, 40);
  ellipse(random(124, 126), 205, 30, 40);
      
   
//HEAD

//hair behind head
  frameRate(5);
  noFill();
  stroke(191, 190, 216);
  strokeWeight(2);
  bezier(110, 120, 110, 120, 90, 100, 70, random(169,171));
  bezier(110, 120, 115, 125, 130, 90, 134, random(175, 180));
  bezier(110, 120, 115, 125, 130, 92, 134, random(177, 179));
  bezier(110, 120, 118, 125, 132, 92, 134, random(180, 185));
  bezier(110, 120, 115, 140, 120, 90, 130, random(174, 187));
  bezier(110, 120, 120, 130, 130, 90, 140, random(174, 187));
  bezier(110, 120, 105, 115, 80, 100, 80, random(180, 187));
  bezier(110, 120, 105, 115, 70, 150, 90, random(174, 187));
  bezier(110, 120, 108, 115, 80, 150, 95, random(174, 187));
  bezier(110, 120, 108, 115, 100, 150, 100, random(180, 185));
  bezier(110, 120, 110, 115, 105, 150, 99, random(174, 187));
  bezier(110, 120, 110, 115, 105, 150, 97, random(180, 187));
  bezier(110, 120, 110, 115, 105, 150, 90, random(180, 185));
  bezier(110, 120, 110, 115, 105, 150, 80, random(180, 185));
  bezier(110, 120, 105, 115, 105, 150, 85, random(180, 185));
  bezier(110, 120, 100, 100, 90, 150, 80, random(182, 184));
  bezier(110, 120, 100, 100, 90, 150, 90, random(182, 184));
  bezier(110, 120, 100, 100, 90, 150, 95, random(182, 187));
  bezier(110, 120, 100, 100, 90, 150, 95, random(182, 187));
  bezier(110, 120, 100, 100, 90, 150, 98, random(182, 184));
  bezier(110, 120, 115, 125, 130, 100, 139, random(177, 177));
  bezier(110, 120, 115, 128, 134, 100, 130, random(182, 187));
  bezier(110, 120, 110, 120, 134, 100, 125, random(182, 187));
  bezier(110, 120, 110, 120, 134, 90, 120, random(185, 187));
  bezier(110, 120, 120, 140, 130, 150, 115, random(185, 187));
  bezier(110, 120, 120, 140, 130, 150, 105, random(174, 187));
  bezier(110, 120, 120, 140, 130, 150, 115, random(182, 187));
  bezier(110, 120, 130, 130, 135, 150, 110, random(182, 187));
  bezier(110, 120, 140, 135, 135, 150, 115, random(182, 187));
  bezier(110, 120, 110, 130, 115, 140, 120, random(182, 187));
  bezier(110, 120, 130, 120, 140, 130, 115, random(174, 187));
  bezier(110, 120, 110, 170, 120, 190, 120, random(174, 187));
  strokeWeight(3);
  line(110, 120, 120, random(179, 183));
  line(110, 120, 110, random(179, 182));
  line(110, 120, 90, random(179, 181));
  line(110, 120, 140, random(179, 181));
  line(110, 120, 102, random(179, 181));
  line(110, 120, 95, random(179, 181));
  line(110, 120, 80, random(179, 181));
  line(110, 120, 70, random(179, 181));
  line(110, 120, 75, random(179, 181));
  line(110, 120, 130, random(179, 181));
  line(110, 120, 135, random(179, 183));
  line(110, 120, 150, random(179, 186));
  line(112, 120, 152, random(179, 183));
  line(115, 125, 152, random(179, 183));
  line(115, 130, 151, random(179, 183)); 
  
  
//head
  strokeWeight(1);
  stroke (244, 214, 193);
  fill(244, 214, 193);
  bezier(88, 149, 101, 175, 132, 169, 134, 137);
  bezier(88, 150, 82, 100, 132, 115, 134, 137);
  
//eyes
  strokeWeight(1);
  stroke(109);
  bezier(99, 150, 101, 148, 102, 148, 104, 150);
  bezier(116, 150, 118, 148, 118, 148, 121, 150);
  
//eyebrows
  strokeWeight(1);
  stroke(191, 190, 216);
  noFill();
  bezier(96, 146, 101, 143, 102, 143, 104, 145);
  bezier(115, 145, 116, 145, 118, 141, 123, 145);
  
//nose
  noFill();
  stroke(109);
  line(110, 152, 111, 154);
  line(110, 154, 111, 154);
  
//mouth
  bezier(108, 160, 109, 161, 111, 161, 112, 160);
  
//HAIR
  stroke(191, 190, 216);
  strokeWeight(2);
  fill(191, 190, 216);
  
//bangs
  bezier(85, 145, 82, 100, 132, 115, 130, 125);
  bezier(85, 144, 90, 145, 100, 150, 130, 125);
  
//side bang - right
  bezier(125, 129, 132, 150, 138, 145, 131, 124);
  
//long hair - left
  strokeWeight(3);
  bezier(88, 145, 83, 156, 70, 165, 75, 170);
  bezier(86, 145, 83, 150, 70, 160, 75, 170);
  bezier(86, 135, 83, 150, 70, 160, 75, 170);
  bezier(86, 135, 83, 150, 70, 160, 70, 177);
  bezier(86, 135, 83, 150, 70, 160, 65, 179);
  bezier(105, 115, 88, 130, 78, 150, 75, 170);
  
  
//long hair - right
  bezier(130, 125, 135, 150, 140, 160, 140, 170);
  bezier(130, 127, 137, 160, 145, 160, 142, 177);
  bezier(130, 125, 145, 160, 148, 160, 145, 179);
 
 
//BODY
   stroke(244, 214, 193);
  
//neck
  strokeWeight(2);
  fill(244, 214, 193);
  rect(105, 165, 10, 3);
  line(105, 165, 105, 169);
  line(114, 165, 114, 169);
  
  
//shoulders
  bezier(98, 170, 100, 169, 97, 168, 105, 168);
  bezier(105, 168, 113, 168, 114, 165, 122, 170);
  bezier(99, 170, 106, 175, 110, 175, 119, 170);
  strokeWeight(2);
 
  
//arm - left
  strokeWeight(2);
  fill(244, 214, 193);
  quad(95, 172, 99, 180, 87, 200, 84, 195);
  quad(84, 195, 87, 200, 70, 220, 70, 215);
  
//hand-left
  line(62, 216, 70, 216);
  line(60, 221, 70, 217);
  line(63, 224, 70, 218);
  line(69, 225, 70, 218);
  
//arm-right
  quad(122, 171, 145, 193, 145, 198, 115, 175);
  quad(145, 193, 170, 193, 170, 197, 147, 199);
  
//wand
  stroke(138, 161, 209);
  line(185, 160, 175, 200);
  noStroke();
    
  fill(255, 255, 255, 70);
  ellipse(185, 158, 10, 10);
  
//hand-right
  stroke(244, 214, 193);
  line(170, 197, 175, 200);
  line(170, 196, 178, 197);
  line(170, 195, 180, 194);
  line(170, 193, 177, 190);
  
//leg-right
  fill(244, 214, 193);
  quad(102, 205, 112, 205, 140, 260, 135, 270);
  quad(130, 255, 140, 260, 125, 290, 123, 280);
  
//leg-left
  quad(102, 205, 117, 205, 96, 260, 87, 260);
  quad(87, 260, 95, 260, 73, 285, 76, 275);
  strokeWeight(2);
  line(96, 260, 73, 285);

//shoe-right
  stroke(140, 130, 160);
  fill(140, 130, 160);
  triangle(121, 280, 134, 278, 120, 290);
  triangle(120, 292, 135, 296, 130, 283);
  
//shoe-left
  triangle(78, 268, 87, 278, 67, 278);
  triangle(66, 280, 79, 280, 74, 292);

frameRate(10);
  
//dress
  strokeWeight(2);
  stroke(140, 130, 160);
  fill(140, 130, 160);
  line(96, 170, 101, 205);
  line(123, 170, 118, 205);

  
  triangle(96, 170, 123, 170, 110, 240);
  triangle(102, 205, 117, 205, 75, 240);
  triangle(102, 205, 115, 209, 85, 250);

  triangle(95, 217, 123, 217, 109, 260);

  triangle(102, 205, 125, 219, 130, 255);
  triangle(102, 205, 117, 205, 140, 240);
  
  stroke(244, 214, 193);
  fill(244, 214, 193);
  bezier(98, 169, 106, 172, 110, 172, 121, 169);
  
//cursor
  stroke(209, 175, 177);
  fill(209, 175, 177);
  ellipse(mouseX+30, mouseY+30, 11, 13);
  ellipse(mouseX+40, mouseY+30, 11, 13);
  triangle(mouseX+25, mouseY+32, mouseX+45, mouseY+32, mouseX+35, mouseY+48);
  
  


}
