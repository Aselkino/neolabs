const $menu = document.getElementById('menu');
    const $menuItems = document.querySelectorAll('.menu-item');

    //находим активный таб
    let $currentActive = document.querySelector('active');

    function changeTab(event) {
        const $menuItem = event.target;

        // Если мы кликнули по родителю, то ничего не делаем
        if ($menuItem.id === 'menu') {return}
        
        // Если мы кликнули по активному табу, то ничего не делаем
        if ($menuItem === $currentActive) {return}

        // Удаляем подсвечивание
        $currentActive.classList.remove('active');

        // Обновляем активный текущий таб
        $currentActive = $menuItem;


        $menuItems.forEach(item => item.classList.remove('active'));
        $menuItem.classList.add('active');      //classList - spec.object!
    }

    $menu.addEventListener('click', changeTab);