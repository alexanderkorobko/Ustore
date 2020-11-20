'use strict'

const generateOverlay=()=>{
let overlay=document.createElement('div');
overlay.classList.add('overlay');

document.body.insertAdjacentElement('beforeend', overlay);
}

export default generateOverlay;
