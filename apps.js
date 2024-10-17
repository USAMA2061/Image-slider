var image = document.getElementById("slider");
var links = ["img2.jpeg", "img1.jpeg", "pic4.jpeg"];
var count = 0;


function fun(value) {
    if (value === '+') {
        count++;
    } else {
        count--;
    }

    
    if (count >= links.length) {
        count = 0;
    } else if (count < 0) {
        count = links.length - 1;
    }

    image.setAttribute("src", links[count]);
}
setInterval(() => fun('+'), 2000);
