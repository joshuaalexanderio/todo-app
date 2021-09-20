function displayList(list) {
  if (list.length === 0) {
    alert("Your list is empty :)");
    getInput();
  }
  alert("-" + list.join("\n-"));
}
// Add list item
function addItem(list, listItem) {
  // If no input, re-prompt
  if (listItem === "") {
    getInput();
  }
  // Add input to end of list array
  list.push(listItem);
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

function getInput() {
  let list = [];
  let input = "";
  do {
    let input = prompt("What would you like to do?");
    let command = input.split(" ")[0];
    let listItem = input.split(" ").splice(1).join(" ");
    switch (command) {
      case "add":
        addItem(list, listItem);
        break;
      case "remove":
        // If item does not exist, break
        if (list.indexOf(listItem) === -1) {
          alert("List item does not exist.");
          break;
        }
        removeItem(list, listItem);
        break;
      case "list":
        displayList(list);
        break;
      case "sort":
        sort(list);
        break;
      case "quit":
        return;
      default:
        alert("Invalid Usage: Please use valid single command arugment.");
    }
  } while (input !== "quit");
}
