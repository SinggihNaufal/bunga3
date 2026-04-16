// Hapus class container agar animasi CSS berjalan
onload = () => {
  document.body.classList.remove("container");

  // Fungsi untuk memulai animasi ketikan
  function startTypingAnimation() {
    const wrapper = document.getElementById("typingWrapper");
    wrapper.classList.add("show"); // tampilkan dengan efek fade-in

    const text = "✨ Semangat ngerjain tugasnya! ✨";
    const typedTextSpan = document.getElementById("typed-text");
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        typedTextSpan.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // kecepatan ketik
      }
    }

    typeWriter();
  }

  // Tunggu hingga semua animasi bunga selesai (bunga mekar penuh)
  // Durasi total animasi terpanjang sekitar 4.5 detik (lihat animation delays)
  setTimeout(() => {
    startTypingAnimation();
  }, 4800); // 4.8 detik setelah halaman dimuat
};
