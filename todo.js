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
		switch (prompt("What would you like to do?")) {
			case "add":
				input = prompt("Enter item to be added: \n");
				//If no input, re-prompt
				if (input.split(" ").join("") === "") {
					getInput();
				}
				list.push(input); // Add input to end of list array
				alert("Updated List:\n-" + list.join("\n-"));
				break;
			case "list":
				displayList();
				break;
			case "remove":
				let item = prompt(
					"-" + list.join("\n-") + "\nEnter item to be deleted: \n"
				);
				if (list.indexOf(item) === -1) {
					console.log("It worked");
					alert("List item does not exist.");
					break;
				}
				list.splice(list.indexOf(item), 1);
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
