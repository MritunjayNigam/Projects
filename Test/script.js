function openNav() {
    document.getElementById('sidebar').classList.add('active');
    document.getElementById('hamburger').style.display = 'none';
}

function closeNav() {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('hamburger').style.display = 'block';
}
