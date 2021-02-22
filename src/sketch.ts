// -------------------
//  Parameters and UI
// -------------------

/*const gui = new dat.GUI()
const params = {
    Ellipse_Size: 30,
    Download_Image: () => save(),
}
gui.add(params, "Ellipse_Size", 0, 100, 1)
gui.add(params, "Download_Image")*/

// -------------------
//       Drawing
// -------------------

function draw() {
    background(135, 206, 235)
    rectMode(CENTER)
    noStroke()
    fill(132,46,27)
    rect(width/2, height*0.75, 200, 66)
    fill(186,196,200)
    triangle((width/2)-100,(height*0.75)-33, (width/2)+100, (height*0.75)-33, width/2, height*0.50)
    rect(width/2, (height*0.75)+18,20, 30)

     //MICKEY
    /*background(0)
    noStroke()
    ellipseMode(CENTER)
    ellipse(width/2, height/2, 115, 115)
    ellipse((width/2)-60, (height/2)-60, 60, 60)
    ellipse((width/2)+60, (height/2)-60, 60, 60)*/

    //FACE
    /*background('lightblue')
    noStroke()
    fill('#fff5d4')
    ellipseMode(CENTER)
    ellipse(width/2, height/2, height * 0.5, height * 0.6)
    // Eyes
    {
        fill('white')
        ellipse((width/2)-50, (height/2)-40, 50)
        ellipse((width/2)+50, (height/2)-40, 50)
        fill('black')
        ellipse((width/2)-51, (height/2)-40, 15)
        ellipse((width/2)+51, (height/2)-40, 15)
    }
    // Mouth
    fill('black')
    ellipse(width/2, (height/2)+70, height * 0.2, height * 0.1)*/
    
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