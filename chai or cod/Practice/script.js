// const heading = document.getElementById("heading");
// heading.innerHTML = "<h2>Change code on VS</h2>";
// // console.log(heading.id);
// // console.log(heading.className);
// // console.log(heading.attributes);
// // console.log(heading.getAttribute("style"));
// heading.setAttribute("style", "background-color: red;");
// heading.style.color = "blue";
// heading.innerText = "This is innerText";
// heading.style.fontSize = "40px";
// heading.textContent = "This is text-content";

// const box1 = Array.from(document.querySelectorAll(".box1"));
// box1.map((item) => (item.style.color = "white"));

// box1.forEach((item) => (item.style.backgroundColor = "blue"));

// const box2 = document.querySelectorAll(".box2");
// box2.forEach((l) => {
//   l.style.backgroundColor = "green";
//   l.style.margin = "0px";
// });
//----------------------------------------------------
const parent = document.querySelector(".parent");
// console.log(parent);
// console.log(parent.children);
// for (let i = 0; i < parent.children.length; i++) {
//   console.log(parent.children[i].innerHTML);
// }
//--------------------------------------------------
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);
//------------------------------------------------
const child1 = document.querySelector(".child");
// console.log(child1);
// console.log(child1.parentElement);
// console.log(child1.nextElementSibling);
// console.log(child1.previousElementSibling);
// console.log(parent.childNodes);

// const div = document.createElement("div");
// console.log(div);
// div.innerHTML = "This is div tag creation";
// const tt = document.createTextNode("This is TExt Node.");
// div.appendChild(tt);
// div.style.color = "red";
// div.className = "js";
// div.id = "js1";
// div.setAttribute("title", "this is title");

// document.body.appendChild(div);

//----------------------------------------------

addLanguage = (langName) => {
  const li = document.createElement("li");
  li.innerHTML = `${langName}`;
  document.querySelector(".language").appendChild(li);
};

addLanguage("Python");
addLanguage("C++");

function addOptLang(langName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector("ul").appendChild(li);
}
addOptLang("Java");

const secondLang = document.querySelector("li:nth-child(2)");
secondLang.innerHTML = "c";
const newli = document.createElement("li");
newli.appendChild(document.createTextNode("C#"));
secondLang.replaceWith(newli);

const lastLang = document.querySelector("li:last-child");
lastLang.remove();
