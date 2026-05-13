// Seleciona os elementos

export function initMenu() {
    console.log(" Carregando Menu")

    const menuToggle = document.getElementById('menu');
    const closeMenu = document.getElementById('close-menu');
    const navList = document.getElementById('nav-list');
    
  
if (!menuToggle || !navList || !closeMenu) return;

    // Abrir o menu
    menuToggle.addEventListener('click', () => {
        navList.classList.add('active');
    });

    // Fechar o menu ao clicar no X
    closeMenu.addEventListener('click', () => {
        navList.classList.remove('active');
    });

    // Opcional: Fechar ao clicar em qualquer link (melhora a UX)
    const links = navList.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });
}