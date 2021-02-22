var gui = new dat.GUI();
var params = {
    Number_Ellipse: 50,
    Download_Image: function () { return save(); },
};
gui.add(params, "Number_Ellipse", 20, 70, 1);
gui.add(params, "Download_Image");
function draw() {
    ellipseMode(CENTER);
    background(244, 244, 244);
    noFill();
    translate(width / 2, height / 2);
    noStroke();
    ellipse(0, 0, width, height);
    blendMode(DIFFERENCE);
    for (var i = 0; i < params.Number_Ellipse; i++) {
        noStroke();
        if (i % 2 == 0) {
            fill(color(73, 153, 45, 20));
        }
        else {
            fill(color(2, 2, 105, 20));
        }
        var p = p5.Vector.fromAngle(i * TAU / params.Number_Ellipse).mult(width / 4);
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