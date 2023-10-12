
fetch('ab.json')
    .then(response => response.json())
    .then(data => {
        const result = data.data.filter(checkAge);
        console.log(result);
    })
    .catch(error => {
        console.error('Error loading JSON:', error);
    });

function checkAge(person) {
    return person.age >= 30;
}
