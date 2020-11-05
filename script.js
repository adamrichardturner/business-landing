let myIndex = 0;
carousel();

function carousel() {
    let i;
    let x = document.getElementsByClassName("slide");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block"
    x[myIndex - 1].style.opacity = "1"
    setTimeout(carousel, 2000);
}