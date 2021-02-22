var gui = new dat.GUI();
var rotation = 0;
var params = {
    Number_Ellipse: 50,
    Rotation: false,
    Rotation_Speed: 0.1,
    Colors1_r: 73,
    Colors1_g: 153,
    Colors1_b: 45,
    Colors2_r: 2,
    Colors2_g: 2,
    Colors2_b: 105,
    Download_Image: function () { return save(); },
};
gui.add(params, "Number_Ellipse", 20, 70, 1);
var f0 = gui.addFolder('Rotation');
f0.add(params, "Rotation");
f0.add(params, "Rotation_Speed", 0.1, 1, 0.1);
var f1 = gui.addFolder('Colors 1');
f1.add(params, "Colors1_r", 0, 255, 1);
f1.add(params, "Colors1_g", 0, 255, 1);
f1.add(params, "Colors1_b", 0, 255, 1);
var f2 = gui.addFolder('Colors 2');
f2.add(params, "Colors2_r", 0, 255, 1);
f2.add(params, "Colors2_g", 0, 255, 1);
f2.add(params, "Colors2_b", 0, 255, 12);
gui.add(params, "Download_Image");
function draw() {
    ellipseMode(CENTER);
    background(234, 234, 234);
    noFill();
    translate(width / 2, height / 2);
    noStroke();
    ellipse(0, 0, width, height);
    blendMode(DIFFERENCE);
    for (var i = 0; i < params.Number_Ellipse; i++) {
        noStroke();
        if (i % 2 == 0) {
            fill(color(params.Colors1_r, params.Colors1_g, params.Colors1_b, 20));
        }
        else {
            fill(color(params.Colors2_r, params.Colors2_g, params.Colors2_b, 20));
        }
        var p = void 0;
        if (params.Rotation) {
            p = p5.Vector.fromAngle(((i * TAU) + radians(rotation)) / params.Number_Ellipse).mult(width / 4);
            rotation += params.Rotation_Speed;
        }
        else {
            p = p5.Vector.fromAngle(i * TAU / params.Number_Ellipse).mult(width / 4);
        }
        ellipse(p.x, p.y, width / 2);
    }
    blendMode(BLEND);
}
function setup() {
    p6_CreateCanvas();
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map