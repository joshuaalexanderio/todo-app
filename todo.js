var input = "";
var list = [];
function displayList() {
	if (list.length === 0) {
		alert("Your list is empty :)");
		getInput();
	}
	alert("-" + list.join("\n-"));
}

// sort list using bubble sort
function sort(list) {
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
	do {
		input = prompt("What would you like to do?");
		let command = input.split(" ")[0];
		let listItem = input.split(" ")[1];
		switch (command) {
			case "add":
				//If no input, re-prompt
				if (listItem === "") {
					getInput();
				}
				list.push(listItem); // Add input to end of list array
				alert("Updated List:\n-" + list.join("\n-"));
				break;
			case "remove":
				if (list.indexOf(listItem) === -1) {
					alert("List item does not exist.");
					break;
				}
				list.splice(list.indexOf(listItem), 1);
				break;
			case "list":
				displayList();
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
