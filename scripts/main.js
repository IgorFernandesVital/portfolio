 // Importa a biblioteca do CDN da Google
 function carregarComponente(id, caminho) {
        fetch(caminho)
            .then(response => {
                if (!response.ok) throw new Error(`Erro ao carregar: ${caminho}`);
                return response.text();
            })
            .then(html => {
                document.getElementById(id).innerHTML = html;
            })
            .catch(err => console.error(err));
    }

    carregarComponente('header-placeholder','./components/header.html')
    carregarComponente('hero-placeholder','./components/hero.html')


import './model-3d.js'