const passHandler = async (event) => {
    event.preventDefault();

    const password = document.querySelector('#new-pass').value.trim();
    const confPass = document.querySelector('#confirm-pass').value.trim();

    if (password && confPass) {
        if (password === confPass) {
            const response = await fetch('/api/users/password', {
                method: 'PUT',
                body: JSON.stringify({ password, confPass }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                alert('Password successfully updated!');
                document.location.replace('/');
            } else {
                alert('Failed to update password.');
            }
        } else {
            alert('The passwords entered must match!');
        }
    }
};

document
    .querySelector('.password-form')
    .addEventListener('submit', passHandler);