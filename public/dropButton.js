function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('hidden');
}

function selectCategory(element) {
    // Tutup dropdown setelah item diklik
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.add('hidden');

    // Jika Anda ingin menampilkan nama kategori yang dipilih di tombol
    const dropdownButton = document.getElementById('dropdownButton');
    dropdownButton.textContent = element.textContent.trim();
}
