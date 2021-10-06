//Deprecated
//
// function getInput() {
//   let list = [];
//   let input = "";
//   do {
//     let input = prompt("What would you like to do?");
//     let command = input.split(" ")[0]; // Isolate to-do item from input
//     let listItem = input.split(" ").splice(1).join(" "); // Isolate command from input
//     switch (command) {
//       case "add":
//         addItem(list, listItem);
//         break;
//       case "remove":
//         // If item does not exist, break
//         if (list.indexOf(listItem) === -1) {
//           alert("List item does not exist.");
//           break;
//         }
//         removeItem(list, listItem);
//         break;
//       case "list":
//         displayList(list);
//         break;
//       case "sort":
//         sort(list);
//         break;
//       case "quit":
//         return;
//       default:
//         alert("Invalid Usage: Please use valid single command arugment.");
//     }
//   } while (input !== "quit");
// }

// Display list if not empty
function displayList(list) {
  if (list.length === 0) {
    alert("Your list is empty :)");
    getInput();
  }
  alert("-" + list.join("\n-")); // Display list
}
// Add list item
function addItem(list, listItem) {
  // If no input, re-prompt
  if (listItem === "") {
    getInput();
  }
  list.push(listItem); // Add input to end of list array
  alert("Updated List:\n-" + list.join("\n-"));
}
// Remove list item
function removeItem(list, listItem) {
  list.splice(list.indexOf(listItem), 1);
}

// sort list using bubble sort
function sort(list, listItem) {
  var swapped = true;
  while (swapped === true) {
    swapped = false;
    for (let i = 0; i < list.length; i++) {
      if (list[i] > list[i + 1]) {
        swapped = true; // item was swapped this pass
        let temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = temp;
      }
    }
  }
}

var input = document.getElementById("todo-entry");

// Add to-do list item
function addTodo() {
  let node = document.createElement("li");
  node.className = "todo-item";
  let text = input.value;
  let textnode = document.createTextNode(text);
  let check = document.createElement("input");
  check.type = "checkbox";
  check.className = "square";
  node.appendChild(check);
  node.appendChild(textnode);
  document.getElementById("todoList").appendChild(node);
  console.log(`[${text}] added to list.`);

  // Remove to-do list item when checkbox clicked
  check.addEventListener("click", function (event) {
    console.log(check.parentElement);
    check.parentElement.remove();
  });
  // Remove to-do list item when text is clicked
  check.parentElement.addEventListener("click", function (event) {
    check.parentElement.remove();
  });
}

// Clear to-do item
function clearTodo() {
  let nodes = document.querySelectorAll(".todo-item");
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].remove();
  }
}
// Add list-item when enter key pressed
input.addEventListener("keydown", function (event) {
  console.log(event.key);
  console.log(event);
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("add").click();
  }
});
