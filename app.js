// Section 5 can leave the handler empty.
function addH3(event){
    let header = document.getElementById(`header`);
    header.insertAdjacentHTML(`afterend`, `<h3>Secret Hover!</h3>`)
}
// Section 6
function removeH3(event){
    let h3 = document.querySelector(`#header + h3`)
//    h3.outerHTML = ``/null; (Empty string to remove h3 text. But use .remove() instead.)
    h3.remove();
}
// Section 7 use debugger to find .sections to help select if statement
function makePurple(event){
    if (event.code == `KeyP`){
        document.body.style.backgroundColor = `purple`;
    } else{
        console.log(event.key);
    }
}
// Section 8 used only when the button has been released.
function makeBisque(event){
    if (event.code == `KeyP`){
        document.body.style.backgroundColor = `bisque`;
    } else{
        console.log(event.key);
    }
}
// Section 10 to change a photo source on click.
function chgPic(event){
    console.log(`Birs is ${isBird}`);
    if (isBird == true){
        isBird = false;
        event.target.setAttribute(`src`, `https://cdn.the-scientist.com/assets/articleNo/32240/iImg/5528/34062eeb-f1bb-4034-a21e-dfd96fd85e80-640-annas-hummingbird-hovering.jpg`);
    } else{
        isBird = true;
        event.target.setAttribute(`src`, `https://image.shutterstock.com/image-photo/male-longbilled-starthroat-hovering-garden-260nw-1894488049.jpg`);
    }
}

let heading = document.getElementById(`header`);
heading.addEventListener(`mouseover`, addH3);
heading.addEventListener(`mouseleave`, removeH3);
document.body.addEventListener(`keydown`, makePurple)
document.body.addEventListener(`keyup`, makeBisque)

let isBird = true
document.getElementById(`humming`).addEventListener(`click`, chgPic)

console.log(heading);