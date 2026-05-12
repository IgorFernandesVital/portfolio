import 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js';

const montarModelo = (container) => {
    const mv = document.createElement('model-viewer');
    
    mv.src = './assets/img/myHead.gltf';
    mv.cameraControls = true;
    mv.autoRotate = true;
    mv.disableZoom = true;
    mv.cameraOrbit = "180deg 85deg ";
    mv.interpolationDecay = 150
    mv.style.width = '100%';
    mv.style.height = '100%';

    container.appendChild(mv);
    console.log("Sucesso: model inset!");

    // Reset ao soltar
    mv.addEventListener('pointerup', () => {
        setTimeout(() => { mv.cameraOrbit = "180deg 75deg"; }, 1500);
    });
};

const verificarDiv = setInterval(() => {
    const container = document.getElementById('lowPoly-3d');
    if (container) {
        montarModelo(container);
        clearInterval(verificarDiv); // Para de procurar quando achar
    }
}, 100);