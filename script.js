// 2. У нас есть массив ["hand", "leg", "head", "finger", "eye"] вывести элементы массива в виде списка.
let bodyParts = ["hand", "leg", "head", "finger", "eye"];
let list = document.createElement("ul");
document.body.prepend(list);
for (let i = 0; i < bodyParts.length; i++) {
  let listItem = document.createElement("li");
  listItem.textContent = bodyParts[i];
  list.style.listStyleType = "none";
  listItem.style.fontSize = "20px";
  listItem.style.textTransform = "uppercase";
  listItem.style.padding = "10px";
  listItem.style.borderBottom = "solid 2px blue";
  list.style.width = "100px";
  list.append(listItem);
}

// 3. У нас есть массив ["hi", "hello", "bonjour"] вывести элементы массива в виде кнопок.
let button = ["hi", "hello", "bonjour"];
let btn1 = document.createElement("button");
btn1.className = "button-style";
btn1.textContent = button[0];
document.body.append(btn1);

let btn2 = document.createElement("button");
btn2.textContent = button[1];
document.body.append(btn2);
btn2.className = "button-style";

let btn3 = document.createElement("button");
btn3.textContent = button[2];
document.body.append(btn3);
btn3.className = "button-style";
