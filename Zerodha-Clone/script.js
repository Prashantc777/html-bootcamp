
document.querySelectorAll('.bio-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const bio = button.nextElementSibling;
        if (bio.style.display === 'none' || bio.style.display === '') {
            bio.style.display = 'block';
            button.innerHTML = 'Bio &#9650;';
        } else {
            bio.style.display = 'none';
            button.innerHTML = 'Bio &#9660;';
        }
    }
);