const menuButton = document.querySelector('.menu-button'); // seleciona o botão do menu
const navList = document.querySelector('.nav-list'); // seleciona a lista de navegação

// abre e fecha o menu ao clicar no ícone
menuButton.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// fecha o menu ao clicar em um link
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});