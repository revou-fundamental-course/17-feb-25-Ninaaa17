document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman saat submit

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let interest = document.getElementById("interest").value;

    if (name === "" || email === "" || interest === "") {
        alert("Mohon isi semua bidang formulir!");
        return;
    }

    alert("Terima kasih! Kami akan menghubungi Anda segera.");
});
