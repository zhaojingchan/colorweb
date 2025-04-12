document.addEventListener('DOMContentLoaded', function() {
    const colorDisplay = document.getElementById('colorDisplay');
    const colorButtons = document.querySelectorAll('.color-btn');
    const customColorInput = document.getElementById('customColor');
    const applyColorButton = document.getElementById('applyColor');
    
    // Default color
    let currentColor = '#f44336';
    colorDisplay.style.backgroundColor = currentColor;
    
    // Apply color to both the display and the body background (with lighter shade)
    function applyColor(color) {
        currentColor = color;
        colorDisplay.style.backgroundColor = color;
        
        // Create a lighter version of the color for the body background
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        
        // Mix with white to create lighter shade (90% white, 10% color)
        const lightR = Math.round(r * 0.1 + 255 * 0.9);
        const lightG = Math.round(g * 0.1 + 255 * 0.9);
        const lightB = Math.round(b * 0.1 + 255 * 0.9);
        
        const lightColor = `rgb(${lightR}, ${lightG}, ${lightB})`;
        document.body.style.backgroundColor = lightColor;
        
        // Update custom color input
        customColorInput.value = color;
    }
    
    // Handle color button clicks
    colorButtons.forEach(button => {
        // Set initial button colors from data attribute
        const btnColor = button.getAttribute('data-color');
        button.style.backgroundColor = btnColor;
        
        // Add click handler
        button.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            applyColor(color);
        });
    });
    
    // Handle custom color application
    applyColorButton.addEventListener('click', function() {
        applyColor(customColorInput.value);
    });
    
    // Apply color when custom color input changes
    customColorInput.addEventListener('input', function() {
        customColorInput.style.backgroundColor = this.value;
    });
}); 