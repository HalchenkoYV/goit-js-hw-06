const allcategories = document.querySelector("#categories");
    
const allcategories2 = allcategories.querySelectorAll(".item");

console.log('Number of categories:', allcategories2.length);

allcategories2.forEach(function (number, index) {
  console.log(`Category: ${allcategories2[index].querySelector("h2").textContent} \nElements: ${allcategories2[index].querySelectorAll("li").length} `);
});