// Created a blank array to hold values
let array = [];

// Function to update the output paragraph with the array values
function update() {
    // Get the output paragraph element
    let output = document.getElementById('output');
    // Clear previous output
    output.innerHTML = '';
    // Use reduce to iterate over the array and display each item with its index
    array.reduce((index, item) => {
        // Append each item to the output with its index
        output.innerHTML += `${index + 1}. ${item}<br>`;
        // Increment the index
        return index + 1;
    }, 0);
}

// Function to add an item to the array
function addItem() {
    let inputText = document.getElementById('inputText').value;
    // Push the input value into the array
    array.push(inputText);
    update();
}

// Function to remove the last item from the array
function removeItem() {
    // Check if the array is empty
    if (array.length === 0) {
        alert('The array is empty');
        return;
    }
    // remove the last item from the array
    array.pop();
    update();
}

// Function to add an item to the beginning of the array
function addItemToStart() {
    let inputText = document.getElementById('inputText').value;
    // Add the input value to the beginning of the array
    array.unshift(inputText);
    update();
}

// Function to remove an item from the beginning of the array
function removeItemFromStart() {
    // Remove the first item from the array
    array.shift();
    // Update the output to display the updated array
    update();
}

function arrMap() {
    const inputText = document.getElementById("inputText").value;
    const updatedArray = array.map(item => inputText + item);
    array = updatedArray;
    update();
}


