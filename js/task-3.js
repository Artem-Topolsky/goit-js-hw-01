// function getElementWidth(content, padding, border) {
//     const contentWidth = Number.parseFloat(content); 
//     const paddingWidth = Number.parseFloat(padding); 
//     const borderWidth = Number.parseFloat(border);  
//     const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;
//     return totalWidth;
// } 

function getElementWidth(content, padding, border) {
    return parseFloat(content) + 2 * parseFloat(padding) + 2 * parseFloat(border);
} 