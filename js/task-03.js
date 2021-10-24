const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector(".gallery");


const markup = images
  .map((image, index) => `<li class="item"><img class="image" src="${image.url}" alt="${image.alt}"></li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);


  










// const array = [];
// for (let i = 0; i < images.length; i+=1) {
//   list.append(document.createElement("li"));

//   list.querySelector("li").append(image);
//   list.querySelector("img").setAttribute('alt', images[i].alt);
//   list.querySelector("img").setAttribute('src', images[i].url);
//   console.log(i)
  
// };
  
// console.log(array)

