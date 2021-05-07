const searchDB = async (event) => {
    event.preventDefault();

    const query = document.querySelector('#search').value.trim();

    window.location.href = '/search/' + query;
}

document
    .querySelector('.search-form')
    .addEventListener('submit', searchDB);