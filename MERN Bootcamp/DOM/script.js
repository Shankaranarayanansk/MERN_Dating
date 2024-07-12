// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {

    // Select the main title and change its text content
    const mainTitle = document.getElementById('main-title');
    mainTitle.textContent = 'Dom Manipulation';

    // Add an event listener to the button to change the title text on click
    const changeTitleButton = document.getElementById('change-title-button');
    changeTitleButton.addEventListener('click', function() {
        mainTitle.textContent = 'Title Changed!';
    });

    // Select the form and add an event listener to handle form submission
    const itemForm = document.getElementById('item-form');
    itemForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get the value of the input field
        const newItemText = document.getElementById('item-input').value;

        // Create a new list item
        const newItem = document.createElement('li');
        newItem.textContent = newItemText;

        // Add the new item to the list
        const itemList = document.getElementById('item-list');
        itemList.appendChild(newItem);

        // Clear the input field
        document.getElementById('item-input').value = '';
    });

    // Add an event listener to the button to toggle the list visibility
    const toggleListButton = document.getElementById('toggle-list-button');
    toggleListButton.addEventListener('click', function() {
        const itemList = document.getElementById('item-list');
        itemList.classList.toggle('hidden');
    });

    // Create and append new elements to the dynamic content section
    const dynamicContent = document.getElementById('dynamic-content');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This paragraph was added dynamically.';

    // Create a new button that changes its own text when clicked
    const dynamicButton = document.createElement('button');
    dynamicButton.textContent = 'Click Me!';
    dynamicButton.addEventListener('click', function() {//the click is a event handler
        dynamicButton.textContent = 'Clicked!';
    });

    // Append the new elements to the dynamic content section
    dynamicContent.appendChild(newParagraph);
    dynamicContent.appendChild(dynamicButton);

    // Adding a highlight effect on items when clicked
    const itemList = document.getElementById('item-list');
    itemList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('highlight');
        }
    });

});
