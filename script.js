

document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.getElementById('dynamicText');
    const changeTextBtn = document.getElementById('changeTextBtn');
    const toggleElementBtn = document.getElementById('toggleElementBtn');
    const elementContainer = document.getElementById('elementContainer');
    let isElementVisible = false;

    // Change text content and style
    changeTextBtn.addEventListener('click', () => {
        dynamicText.textContent = 'Text changed dynamically!';
        dynamicText.style.color = '#ff4500';
        dynamicText.style.fontSize = '20px';
    });

    // Add or remove element
    toggleElementBtn.addEventListener('click', () => {
        if (isElementVisible) {
            elementContainer.innerHTML = '';
            isElementVisible = false;
            toggleElementBtn.textContent = 'Add Element';
        } else {
            const newElement = document.createElement('div');
            newElement.className = 'new-element';
            newElement.textContent = 'This is a dynamically added element!';
            elementContainer.appendChild(newElement);
            isElementVisible = true;
            toggleElementBtn.textContent = 'Remove Element';
        }
    });
});