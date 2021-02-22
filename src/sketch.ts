//RECTANGLE
/*// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    N: 100,
    rotation: 0.5,
    Random_Seed: 0,
    Download_Image: () => save(),
}
gui.add(params, "N", 0, 1000, 1)
gui.add(params,"rotation", 0, 1, 0.001)
gui.add(params,"Random_Seed", 0,100,1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    randomSeed(params.Random_Seed)
    rectMode(CENTER)
    noStroke()
    background(244,244, 244)
    for(let i=0; i< params.N; i++){
        fill(color(random(0,255), random(0,255), random(0,255), random(144,255)))
        push()
        translate(random(width), random(height))
        if(random() < params.rotation){
            rotate(TWO_PI/4)
        }
        
        rect(0, 0, random(30, 100), random(10, 40))
        pop()
    }
    
    
}
*/

//ELLIPSE
/*// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    N: 100,
    Dispersion: 500,
    Random_Seed: 0,
    Download_Image: () => save(),
}
gui.add(params, "N", 0, 1000, 1)
gui.add(params,"Dispersion",0, 100, 1)
gui.add(params,"Random_Seed", 0,100,1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    randomSeed(params.Random_Seed)
    ellipseMode(CENTER)
    noStroke()
    background(244,244, 244)
    for(let i=0; i< params.N; i++){
        fill(color(random(0,255), random(0,255), random(0,255), random(144,255)))
        push()
        translate(width/2, height/2)
        for (let i = 0; i < params.N; i++) {
            const R = randomGaussian(0, params.Dispersion)
            const angle = random(TWO_PI)
            ellipse(R * cos(angle), R * sin(angle), random(10, 20), random(10,20))
        }
        pop()
    }
    
    
}*/

//ROSACE
// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Number_Ellipse: 50,
    Download_Image: () => save(),
}
gui.add(params, "Number_Ellipse", 20, 70, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    ellipseMode(CENTER)
    background(244,244, 244)
    noFill()
    translate(width/2, height/2)
    noStroke()
    ellipse(0,0,width,height)
    blendMode(DIFFERENCE)

    for(let i=0; i< params.Number_Ellipse; i++){
        noStroke()
        if(i%2==0){
            fill(color(73, 153, 45,20))
        }else{
            fill(color(2, 2, 105,20))
        }
        const p= p5.Vector.fromAngle(i* TAU /params.Number_Ellipse).mult(width/4)
        ellipse(p.x, p.y, width/2)
        
    }
    blendMode(BLEND)
    
    
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}