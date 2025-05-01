let paragraph = document.querySelector("#intro");
paragraph.style.backgroundColor = "#f2c556";

document.querySelector('em').style.backgroundColor = "#abcafc";
document.querySelector('em').textContent = 'USS Voyager Starship';

let image = document.createElement('img');
image.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/USS_Voyager_%28Star_Trek%29.png/800px-USS_Voyager_%28Star_Trek%29.png');
image.setAttribute('alt', 'USS Voyager Starship');
let container = document.querySelector('#starship');
container.appendChild(image);

image.id = 'ship';

let img1 = document.querySelector('#ship');
img1.classList.add('rounded');