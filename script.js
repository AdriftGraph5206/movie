function fasa(){
let rgb1 = Math.floor(Math.random() * 256);
let rgb2 = Math.floor(Math.random() * 256);
let rgb3 = Math.floor(Math.random() * 256);
return `rgb(${rgb1}, ${rgb2}, ${rgb3})`
}
document.body.style.backgroundColor = fasa()