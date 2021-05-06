const searchDB = async (event) => {
    event.preventDefault();

    const query = document.querySelector('#search').value.trim();

    if (query) {
        console.log(query);

        const response = await fetch('/results/' + query, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response);
        if (response.ok) {
            window.location.href = '/results/' + query;
            alert('Success!');
        } else {
            alert('Failed to get.');
        }
    }
}

document
    .querySelector('.search-form')
    .addEventListener('submit', searchDB);