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
let rotation=0;
const params = {
    Number_Ellipse: 50,
    Rotation:false,
    Rotation_Speed: 0.1,
    Colors1_r: 73,
    Colors1_g: 153,
    Colors1_b: 45,
    Colors2_r: 2,
    Colors2_g: 2,
    Colors2_b: 105,


    Download_Image: () => save(),
}

gui.add(params, "Number_Ellipse", 20, 70, 1)


let f0=gui.addFolder('Rotation')
f0.add(params, "Rotation")
f0.add(params, "Rotation_Speed", 0.1, 1, 0.1)

let f1=gui.addFolder('Colors 1')
f1.add(params,"Colors1_r", 0, 255, 1)
f1.add(params,"Colors1_g", 0, 255, 1)
f1.add(params,"Colors1_b", 0, 255, 1)

let f2=gui.addFolder('Colors 2')
f2.add(params,"Colors2_r", 0, 255, 1)
f2.add(params,"Colors2_g", 0, 255, 1)
f2.add(params,"Colors2_b", 0, 255, 12)

gui.add(params, "Download_Image")


// -------------------
//       Drawing
// -------------------

function draw() {
    ellipseMode(CENTER)
    background(234,234, 234)
    noFill()
    translate(width/2, height/2)
    noStroke()
    ellipse(0,0,width,height)
    blendMode(DIFFERENCE)

    for(let i=0; i< params.Number_Ellipse; i++){
        noStroke()
        if(i%2==0){
            fill(color(params.Colors1_r, params.Colors1_g, params.Colors1_b, 20))
        }else{
            fill(color(params.Colors2_r, params.Colors2_g, params.Colors2_b,20))
        }
        let p
        if(params.Rotation){
            p= p5.Vector.fromAngle(((i* TAU)+radians(rotation)) /params.Number_Ellipse).mult(width/4)
            rotation+=params.Rotation_Speed;
        }else{
            p= p5.Vector.fromAngle(i* TAU /params.Number_Ellipse).mult(width/4)
        }
        
        ellipse(p.x, p.y, width/2)

        
    }
    blendMode(BLEND)
    
    
}

//CHESSBOARD
/*
//
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    N: 8,
    Download_Image: () => save(),
}
gui.add(params, "N", 2, 16, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    noStroke()
    const N= params.N
    background(244,244, 244)
    for(let i=0; i< N*N ;i++){
        if(N%2==0){
            if((i+floor(i/N))%2==0){
                fill("white")
            }else{
                fill("black")
            }
        }else{
            if(i%2==0){
                fill("white")
            }else{
                fill("black")
            }
        }
            
        rect((i%N)*width/N, (floor(i/N))*height/N, width/N, height/N)
    }
    
    
}
*/
// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}