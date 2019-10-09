console.log("This is working!!");

/*
    This code will only return the first section component
    even though there are three components with the same
    class
*/
const sectionEl = document.querySelector(".article__section");
console.log("sectionEl", sectionEl);

/*
    This code will only return the third section component
*/
const footerEl = document.querySelector(".article__footer");
console.log("footerEl", footerEl);

/*
    Get reference to the section with the class of `smallText`
    and remove that class. Then add a new class of `largeText`
*/
const smallTextEl = document.querySelector(".smallText");
console.log("Get reference to element with class smallText", smallTextEl);
debugger
smallTextEl.classList.remove("smallText")
console.log("Removed class smallText", smallTextEl);
debugger
smallTextEl.classList.add("largeText")
console.log("Added class largeText", smallTextEl);

/*
    This code will return all section components
*/
const sectionEl = document.querySelectorAll(".article__section");
console.log("sectionEl", sectionEl);

for(let i = 0; i < sectionEl.length; i++) {
  console.log(sectionEl[i]);
}
