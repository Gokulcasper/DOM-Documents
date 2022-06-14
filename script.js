console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = "DOM Document";
console.log(document.head);
console.dir(document.head);
console.log(document.body);
console.log(document);
console.dir(document);

let myDoc = document;
document.body.children[0].children[0].innerText =
  "Learn HTML DOM in JAVASCRIPT";

console.log(window.find("HTML DOM"));
