// Configuração das galerias
// Você pode especificar manualmente as imagens ou deixar vazio para carregamento automático
const galleryConfig = {
    retratos: {
        folder: 'images/retratos/',
        containerId: 'retratosGallery',
        images: [] // Deixe vazio [] para carregamento automático, ou especifique: ['foto1.jpg', 'foto2.jpg']
    },
    paisagens: {
        folder: 'images/paisagens/',
        containerId: 'paisagensGallery',
        images: [] // Deixe vazio [] para carregamento automático, ou especifique: ['foto1.jpg', 'foto2.jpg']
    },
    eventos: {
        folder: 'images/eventos/',
        containerId: 'eventosGallery',
        images: [] // Deixe vazio [] para carregamento automático, ou especifique: ['foto1.jpg', 'foto2.jpg']
    }
};

// Função para carregar imagens de uma pasta
async function loadGalleryImages(folderPath, containerId, manualImages = []) {
    const container = document.getElementById(containerId);
    if (!container) return;

    try {
        const images = [];
        
        // Se houver lista manual de imagens, usar ela
        if (manualImages && manualImages.length > 0) {
            for (let i = 0; i < manualImages.length; i++) {
                const imageName = manualImages[i];
                const imagePath = folderPath + imageName;
                
                const img = new Image();
                await new Promise((resolve) => {
                    img.onload = () => {
                        images.push({
                            src: imagePath,
                            alt: imageName.replace(/\.[^/.]+$/, '') // Remove extensão para alt
                        });
                        resolve();
                    };
                    img.onerror = () => {
                        console.warn(`Imagem não encontrada: ${imagePath}`);
                        resolve();
                    };
                    img.src = imagePath;
                });
            }
        } else {
            // Carregamento automático: tentar imagens numeradas
            const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
            let imageIndex = 1;
            let loadedCount = 0;
            const maxAttempts = 50;

            const tryLoadImage = (index) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    const baseName = `img${index.toString().padStart(2, '0')}`;
                    
                    let extensionIndex = 0;
                    const tryExtension = () => {
                        if (extensionIndex >= imageExtensions.length) {
                            resolve(null);
                            return;
                        }
                        
                        const extension = imageExtensions[extensionIndex];
                        img.src = folderPath + baseName + extension;
                        
                        img.onload = () => {
                            resolve({
                                src: img.src,
                                alt: `Imagem ${index}`
                            });
                        };
                        
                        img.onerror = () => {
                            extensionIndex++;
                            tryExtension();
                        };
                    };
                    
                    tryExtension();
                });
            };

            while (imageIndex <= maxAttempts && loadedCount < 20) {
                const image = await tryLoadImage(imageIndex);
                if (image) {
                    images.push(image);
                    loadedCount++;
                } else if (loadedCount > 0) {
                    break;
                }
                imageIndex++;
            }
        }
        
        // Renderizar imagens carregadas
        if (images.length > 0) {
            renderGallery(container, images);
        } else {
            container.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Adicione fotos na pasta ' + folderPath + '<br><small>Ou especifique manualmente no arquivo app.js</small></p>';
        }

    } catch (error) {
        console.error('Erro ao carregar galeria:', error);
        container.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Erro ao carregar imagens</p>';
    }
}

// Função para renderizar o carrossel com Glide
function renderGallery(container, images) {
    if (images.length === 0) return;
    
    // Limpar container
    container.innerHTML = '';
    
    // Criar ID único para este carrossel
    const carouselId = `glide-${Math.random().toString(36).substr(2, 9)}`;
    
    // Criar estrutura do Glide
    const glideContainer = document.createElement('div');
    glideContainer.className = 'glide';
    glideContainer.id = carouselId;
    
    const glideTrack = document.createElement('div');
    glideTrack.className = 'glide__track';
    glideTrack.setAttribute('data-glide-el', 'track');
    
    const glideSlides = document.createElement('ul');
    glideSlides.className = 'glide__slides';
    
    // Criar slides
    images.forEach((image, index) => {
        const slide = document.createElement('li');
        slide.className = 'glide__slide';
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.loading = index === 0 ? 'eager' : 'lazy';
        img.className = 'glide-image';
        
        // Lightbox ao clicar
        img.addEventListener('click', () => {
            openLightbox(image.src, images, index);
        });
        
        slide.appendChild(img);
        glideSlides.appendChild(slide);
    });
    
    glideTrack.appendChild(glideSlides);
    glideContainer.appendChild(glideTrack);
    
    // Botões de navegação
    const glideArrows = document.createElement('div');
    glideArrows.className = 'glide__arrows';
    glideArrows.setAttribute('data-glide-el', 'controls');
    
    const prevBtn = document.createElement('button');
    prevBtn.className = 'glide__arrow glide__arrow--left';
    prevBtn.setAttribute('data-glide-dir', '<');
    prevBtn.setAttribute('aria-label', 'Foto anterior');
    prevBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
    `;
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'glide__arrow glide__arrow--right';
    nextBtn.setAttribute('data-glide-dir', '>');
    nextBtn.setAttribute('aria-label', 'Próxima foto');
    nextBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
    `;
    
    glideArrows.appendChild(prevBtn);
    glideArrows.appendChild(nextBtn);
    glideContainer.appendChild(glideArrows);
    
    // Bullets (indicadores)
    const glideBullets = document.createElement('div');
    glideBullets.className = 'glide__bullets';
    glideBullets.setAttribute('data-glide-el', 'controls[nav]');
    
    images.forEach((_, index) => {
        const bullet = document.createElement('button');
        bullet.className = 'glide__bullet';
        bullet.setAttribute('data-glide-dir', `=${index}`);
        bullet.setAttribute('aria-label', `Ir para foto ${index + 1}`);
        glideBullets.appendChild(bullet);
    });
    
    glideContainer.appendChild(glideBullets);
    container.appendChild(glideContainer);
    
    // Inicializar Glide
    const glide = new Glide(`#${carouselId}`, {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        gap: 0,
        autoplay: false,
        hoverpause: true,
        keyboard: true,
        swipeThreshold: 50,
        dragThreshold: 50,
        animationDuration: 600,
        animationTimingFunc: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });
    
    glide.mount();
    
    // Armazenar referência do glide no container para possível uso futuro
    container.glideInstance = glide;
}


// Função para abrir lightbox
function openLightbox(src, images, currentIndex) {
    // Criar overlay do lightbox
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.95);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const img = document.createElement('img');
    img.src = src;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        background: none;
        border: none;
        color: white;
        font-size: 3rem;
        cursor: pointer;
        width: 50px;
        height: 50px;
        line-height: 50px;
    `;
    
    overlay.appendChild(img);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);
    
    // Animar entrada
    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 10);
    
    // Fechar lightbox
    const closeLightbox = () => {
        overlay.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 300);
    };
    
    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeLightbox();
        }
    });
    
    // Navegação com teclado
    document.addEventListener('keydown', function handleKeydown(e) {
        if (e.key === 'Escape') {
            closeLightbox();
            document.removeEventListener('keydown', handleKeydown);
        }
    });
}

// Menu Mobile Toggle
$(document).ready(function() {
    const menuToggle = $('#menuToggle');
    const navMenu = $('#navMenu');
    
    menuToggle.on('click', function() {
        $(this).toggleClass('active');
        navMenu.toggleClass('active');
    });
    
    // Fechar menu ao clicar em um link
    $('.nav-link').on('click', function() {
        if (window.innerWidth <= 768) {
            menuToggle.removeClass('active');
            navMenu.removeClass('active');
        }
    });
    
    // Fechar menu ao redimensionar para desktop
    $(window).on('resize', function() {
        if (window.innerWidth > 768) {
            menuToggle.removeClass('active');
            navMenu.removeClass('active');
        }
    });
});

// Smooth Scroll para links de navegação
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        const targetId = $(this).attr('href');
        const target = $(targetId);
        
        if (target.length) {
            // Calcular posição considerando o header fixo
            const headerHeight = $('.header').outerHeight();
            const targetPosition = target.offset().top - headerHeight;
            
            // Animação suave de scroll
            $('html, body').animate({
                scrollTop: targetPosition
            }, 800, 'swing');
        }
    });
});

// Animação de scroll (fade-in ao entrar na viewport)
$(document).ready(function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar seções
    $('.gallery-section, .about-section, .contact-section').each(function() {
        observer.observe(this);
    });
});

// Carregar todas as galerias quando o DOM estiver pronto
$(document).ready(function() {
    // Carregar galerias
    Object.keys(galleryConfig).forEach(key => {
        const config = galleryConfig[key];
        loadGalleryImages(config.folder, config.containerId, config.images);
    });
    
    // Adicionar animação inicial ao hero
    $('.hero-title, .hero-subtitle').addClass('fade-in');
});

