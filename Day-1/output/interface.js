"use strict";
function drawTectangle(options) {
    const { length, width } = options;
    console.log(length * width);
}
let threeDoptions = {
    width: 30,
    length: 20,
    height: 20
};
drawTectangle(threeDoptions);
drawTectangle({ width: 20, length: 20 });
