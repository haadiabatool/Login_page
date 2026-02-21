
document.addEventListener("DOMContentLoaded", function () {
    const loginCard = document.querySelector('.formForSignIn');
    const signupCard = document.querySelector('.formForSignUp');
    const showSignup = document.getElementById('showSignUp');
    const showLogin = document.getElementById('showLogin');

    showSignup.addEventListener('click', function (e) {
        e.preventDefault();

        loginCard.classList.toggle('hidden');
        signupCard.classList.toggle('hidden');
    });

    showLogin.addEventListener('click', function (e) {
        e.preventDefault();
        signupCard.classList.toggle('hidden');
        loginCard.classList.toggle('hidden');
    });
});