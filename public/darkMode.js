const checkbox = document.querySelector('#darkmode');
const html = document.querySelector('html');

// Cek preferensi dark mode di localStorage saat halaman dimuat
if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
    checkbox.checked = true;  // Pastikan checkbox sesuai dengan status yang disimpan
}

// Event listener untuk toggle dark mode
checkbox.addEventListener('click', function () {
    if (checkbox.checked) {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');  // Simpan preferensi ke localStorage
    } else {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');  // Simpan preferensi ke localStorage
    }
});
