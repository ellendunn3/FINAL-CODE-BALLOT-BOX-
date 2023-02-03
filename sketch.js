let counter = 0;
let step = 5;
let x = step/2;  // original plan was to create multiple "ballot boxes", but the code with the html and jpeg of image wouldnt work
let y = step/2;
let img;





function draw() {

while(counter<= (width/step)*(height/step)) {

  if (counter %2 === 0) {
    fill(90,130,180);  

  }else {
    fill(random(0,255),random(100), random(95));
  
fill (253,255,13);
  }
  function setup(){
    createCanvas (1000,800);
    img=loadImage('ballotbox.jpg') ,(x,y,step,step);


  }

  function draw() {
    image(img,0,0);


  }
  



x += step;
if (x >= width) {
  y += step;
  x = step/3



}

  counter++;
  }

  counter = (0);


}

/* Function to create an HTML tag at 
   x/y cordinates relative to #home */
   function createTag(word, x, y, d){
    let tag = document.createElement("div");
    tag.innerHTML = word;                  
     //words flying out of ballot box
    tag.setAttribute("vote", "freedom");
    tag.style.left = x+'px';
    tag.style.top = y+'px';
    tag.style.transform = "rotate("+d+"deg)"; // this transformation creates a shake
    home.appendChild(tag);
}

// this loops through word array (dont need to list all words multiple times)
function createShamConsultation(){
  let x, y;
  let body = document.body;
  for(word=0; word<words.length; word++){
      x = createRandom(-100); 
      y = createRandom(500);  
      d = createRandom(-30,500); 
      createTag(words[word], x, y, d);
      intensity++; // # Num of words
  }
  body.style.transform = "rotate("+d+"deg)";
  console.log('generated words');

  // Keeps loading till 500 words
  setTimeout(function(){
      if(intensity>=500){
          home.innerHTML = "";
          intensity=0;
      }else{
          createShamConsultation();
      } 
  }, 400); // Timer

}
//senstive to mouse
function moveMe(event){
  submit.style.left=(event.pageX-20)+'px';
  submit.style.top=(event.pageY-30)+'px';
}

function createRandom(from, to){ 
  let r1 = [0.0,1.0];
  let r2 = [from,to]; 
  let rand = Math.random(); 
  return Math.floor((rand-r1[0])*(r2[1]-r2[0])/(r1[1]-r1[0])+r2[0]);
}


console.log('all OK');


