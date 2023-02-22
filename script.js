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
