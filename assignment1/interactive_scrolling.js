const imagesCat = [
    'scrolling/adorable.gif',
    'scrolling/cute-cats.gif',
    'scrolling/cute.gif',
    'scrolling/flying-cat.gif'
  ];

  function addCats() {
    const container = document.getElementById('containerCat');
    if (window.scrollY > 0) {
        for (let i = 0; i < 10; i++) {
        const cat = document.createElement('img');
        cat.src = imagesCat[Math.floor(Math.random() * imagesCat.length)];
        cat.style.position = 'absolute';
        cat.style.left = `${Math.random() * 100}%`;
        cat.style.top = `${Math.random() * 100}%`;
        cat.style.height = '60px';
        cat.style.zIndex = '-1';
        cat.style.opacity = '0.8';
        container.appendChild(cat);
        }

        setTimeout(() => {
            container.innerHTML = '';
        }, 3000);
    }
  }


window.addEventListener('load', addCats);
window.addEventListener('scroll', addCats);
