// Pilih semua elemen dengan kelas 'filter-btn' (button filter)
const filterButtons = document.querySelectorAll('.filter-btn');

// Pilih semua elemen konten yang akan difilter
const filterItems = document.querySelectorAll('.container[data-category]');

// Pilih elemen yang tidak ingin difilter (contoh: h1 tertentu)
const nonFilterItem = document.querySelector('.no-filter');

// Tambahkan event listener untuk setiap tombol filter
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Dapatkan kategori dari tombol yang diklik
        const category = button.getAttribute('data-filter');

        // Filter konten berdasarkan kategori
        filterItems.forEach(item => {
            if (category === 'All' || item.getAttribute('data-category') === category) {
                item.style.display = 'flex'; // Tampilkan elemen sesuai kategori
            } else {
                item.style.display = 'none'; // Sembunyikan elemen lain
            }
        });

        // Pastikan elemen yang tidak ingin difilter tetap terlihat
        if (nonFilterItem) {
            nonFilterItem.style.display = ''; // Reset display untuk elemen yang tidak difilter
        }

        // Update kelas tombol yang sedang aktif
        filterButtons.forEach(btn => btn.classList.remove('font-bold', 'underline'));
        button.classList.add('font-bold', 'underline');
    });
});
