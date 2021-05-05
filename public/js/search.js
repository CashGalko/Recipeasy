const searchDB = async (event) => {
    event.preventDefault();
    console.log("clicked");

    const query = document.querySelector('#search').value.trim();

    if (query) {
        const response = await fetch('/api/recipe/' + query, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response);
        if (response.ok) {
            
            alert('Success!');
        } else {
            alert('Failed to post.');
        }
    }
}

document
    .querySelector('.search-form')
    .addEventListener('submit', searchDB);