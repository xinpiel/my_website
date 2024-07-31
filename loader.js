// JavaScript source code
function loadContent() {
    const screenWidth = window.innerWidth;
    let htmlFile;

    if (screenWidth >= 768) {
        // Load desktop content
        htmlFile = 'index-desktop.html';
    } else {
        // Load mobile content
        htmlFile = 'index-mobile.html';
    }

    // Fetch and replace the current document's content with the new HTML
    fetch(htmlFile)
        .then(response => response.text())
        .then(data => {
            document.open();
            document.write(data);
            document.close();
        })
        .catch(error => console.error(`Error loading content:`, error));
}

// Load the appropriate content when the page loads
window.addEventListener('load', loadContent);

// Reload the appropriate content when the window is resized
window.addEventListener('resize', loadContent);
