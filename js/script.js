const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registrolink = document.querySelector('.registro-link');
const btnLoginpopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registrolink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});
loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});
btnLoginpopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});