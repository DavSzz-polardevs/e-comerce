document.addEventListener('DOMContentLoaded', () => {
    // Form validation for registration
    const registerForm = document.querySelector('#register form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                alert('Silakan masukkan format email yang valid.');
                e.preventDefault();
                return;
            }

            if (password.length < 8) {
                alert('Kata sandi harus minimal 8 karakter.');
                e.preventDefault();
                return;
            }

            alert('Pendaftaran berhasil!');
        });
    }

    // Buy Now button functionality
    const buyButtons = document.querySelectorAll('.card .btn-submit');
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.parentElement.querySelector('h3').innerText;
            alert(`${productName} telah ditambahkan ke keranjang!`);
        });
    });
});
