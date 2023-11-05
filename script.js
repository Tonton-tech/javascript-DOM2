document.querySelector('.box').style.borderRadius = "240px";
const myContainer = document.querySelector('.nav');

myContainer.addEventListener('click', () => {
myContainer.style.background = "yellow";
});

const mousemove  = document.querySelector('.mousemove');


window.addEventListener('mousemove', (e) => {
 mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});


window.addEventListener('mousedown', () =>{
mousemove.style.transform = "scale(2) translate(-25%, -25%)";

});


window.addEventListener('mouseup', () =>{
mousemove.style.transform = "scale(1) translate(-50%, -50%)";
mousemove.style.border = "3px solid green";

});

myContainer.addEventListener('mouseenter', () =>{
myContainer.style.background = "rgba(0, 0, 0, 0.6)";

});


myContainer.addEventListener('mouseout', () =>{
    myContainer.style.background = "red";
});






