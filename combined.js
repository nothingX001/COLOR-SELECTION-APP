
// Function to handle color changes
function handleColorChange() {
    var colorInput = document.getElementById("colorInput");
    var colorDisplay = document.getElementById("colorDisplay");
    colorDisplay.style.backgroundColor = colorInput.value;
    colorDisplay.textContent = 'YOUR COLOR: ' + colorInput.value;
}

// Setting up the HTML for Color Selection
document.addEventListener('DOMContentLoaded', function() {
    var root = document.getElementById('root');
    root.innerHTML = '<div class="color-selection-container">' +
                     '<h1>COLOR SELECTION</h1>' +
                     '<label>CLICK HERE TO SELECT A COLOR:</label>' +
                     '<input id="colorInput" type="color" value="#FFFFFF" onchange="handleColorChange()">' +
                     '<div id="colorDisplay" class="color-display">YOUR COLOR: #FFFFFF</div>' +
                     '</div>';
});
