
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

    // For THeme button
    const toggleBtn=document.querySelector('.themeBtn');

    if(localStorage.getItem('theme')=='dark'){
        document.body.classList.add('dark');
        toggleBtn.textContent='☀️'
    }
    toggleBtn.addEventListener('click',()=>{
        document.body.classList.toggle('dark');

        if(document.body.classList.contains('dark')){
            localStorage.setItem('theme','dark');
            toggleBtn.textContent="☀️";
        }else{
            localStorage.setItem('theme', 'light');
            toggleBtn.textContent = "🌙";
        }
    });
});