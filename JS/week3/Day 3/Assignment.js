async function fetchAndDisplay(urls) {
    // Create a container element to display the results
    const resultsContainer = document.createElement('div');
    document.body.appendChild(resultsContainer);

    // Function to display fetched data
    const displayContent = (data) => {
        const item = document.createElement('div');
        item.style.border = '1px solid #ddd';
        item.style.margin = '10px';
        item.style.padding = '10px';
        item.innerHTML = `
            <p><strong>Title:</strong> ${data.title}</p>
            <p><strong>Completed:</strong> ${data.completed}</p>
        `;
        resultsContainer.appendChild(item);
    };

    // Function to display error
    const displayError = (error) => {
        const item = document.createElement('div');
        item.style.border = '1px solid #f00';
        item.style.margin = '10px';
        item.style.padding = '10px';
        item.innerHTML = `<p style="color: red;"><strong>Error:</strong> ${error.message}</p>`;
        resultsContainer.appendChild(item);
    };

    for (const url of urls) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            displayContent(data);
        } catch (error) {
            displayError(error);
        }
    }
}

// Example usage
const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
];

fetchAndDisplay(urls);