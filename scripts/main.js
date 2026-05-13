 import { initMenu} from './menu.js'
 import './model-3d.js'

 // Transformamos a função em assíncrona para poder usar o 'await'
async function carregarComponente(id, caminho) {
    try {
        const response = await fetch(caminho);
        if (!response.ok) throw new Error(`Erro ao carregar: ${caminho}`);
        
        const html = await response.text();
        const elemento = document.getElementById(id);
        
        if (elemento) {
            elemento.innerHTML = html;
            return true; // Indica que o componente foi carregado com sucesso
        }
    } catch (err) {
        console.error(err);
        return false;
    }
}

// Criamos uma função de inicialização para controlar o fluxo
async function iniciarApp() {
    // 1. Carregamos o header primeiro e esperamos (await) ele terminar
    const headerCarregado = await carregarComponente('header-placeholder', './components/header.html');
    
    // 2. Só inicializamos o menu se o header foi carregado com sucesso
    if (headerCarregado) {
        initMenu();
    }

    // 3. Carregamos o restante
    await carregarComponente('hero-placeholder', './components/hero.html');
}

// Inicia a aplicação
iniciarApp();


