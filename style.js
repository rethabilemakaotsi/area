function validateInput(value) {
    
    return !isNaN(value) && value >= 0;
}


function calculateTriangleArea(base, height) {
    return 0.5 * base * height;
}


function displayResult(area) {
    
    document.getElementById('result').textContent = `Result: ${area} square units`;
}


function calculateArea() {
    
    const baseInput = document.getElementById('baseInput').value;
    const heightInput = document.getElementById('heightInput').value;


    if (!validateInput(baseInput) || !validateInput(heightInput)) {
        alert('Invalid input. Please enter valid non-negative numbers.');
        return; 
    }
    const area = calculateTriangleArea(parseFloat(baseInput), parseFloat(heightInput));


    displayResult(area.toFixed(2));
}
