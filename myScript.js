function validateForm(event) {
    event.preventDefault();
    const nameRegex = /^[A-Za-z]+$/;
    const matriculationRegex = /^[0-9]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const name = document.getElementById('name').value;
    const middleInitial = document.getElementById('middle-initial').value;
    const lastName = document.getElementById('last-name').value;
    const matriculation = document.getElementById('matriculation').value;
    const email = document.getElementById('email').value;

    if (!nameRegex.test(name) || !nameRegex.test(middleInitial) || !nameRegex.test(lastName)) {
        alert('Name fields can only contain alphabetic characters.');
        return;
    }

    if (!matriculationRegex.test(matriculation)) {
        alert('Matriculation can only contain digits.');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
}