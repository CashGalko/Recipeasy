// WORK IN PROGRESS
// const findSaved = async (event) => {
//     event.preventDefault();
//     console.log("clicked");

//     const response = await fetch('/api/recipe/', {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' },
//     });
//     console.log(response);
//     if (response.ok) {
//         alert('Success!');
//     } else {
//         alert('Failed to obtain save data.');
//     }

// }

const renderTarget = async (event) => {
    event.preventDefault();
    console.log("clicked");

    let id = document.querySelector('#list').children().id;

    if (id) {
        const response = await fetch('/api/recipe/' + id, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response);
        if (response.ok) {
            alert('Success!');
        } else {
            alert('Failed to obtain save data.');
        }
    }
}

findSaved();

document
    .querySelectorAll('#list')
    .addEventListener('click', renderTarget)

document
    .getElementById('#remove')
    .addEventListener('click', removeSaved);