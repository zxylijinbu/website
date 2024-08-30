const toggleButton = document.querySelector('.toggle-drawer');
        const drawer = document.querySelector('.drawer');

        toggleButton.addEventListener('click', () => {
            drawer.classList.toggle('open');
        });

        const drawerLinks = document.querySelectorAll('.drawer a');
        drawerLinks.forEach(link => {
            link.addEventListener('click', () => {
                drawer.classList.remove('open'); // 点击后收回抽屉
            });
        });