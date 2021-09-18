var input = "";
var list = [];
function displayList() {
	alert("-" + list.join("\n-"));
}

function getInput() {
	do {
		input = prompt("What would you like to do?");
		if (input.toLowerCase() === "add") {
			input = prompt("Enter item to be added: \n");
			list.push(input);
			alert("Updated List:\n-" + list.join("\n-"));
		} else if (input.toLowerCase() === "list") {
			displayList();
		} else if (input.toLowerCase() === "remove") {
			let item = prompt("-" + list.join("\n-") + "\nEnter item to be deleted: \n");
			list.splice(list.indexOf(item), 1);
		} else if (input.toLowerCase() === "sort") {
			// sort list using bubble sort algorithm
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
		} else {
			alert("Invalid Usage");
		}
	} while (input.toLowerCase() !== "quit");
}
