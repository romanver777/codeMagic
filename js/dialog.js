// перетаскивание окна персонажа
(function() {

    const setup = document.querySelector('.setup');
    const setupUserPic = setup.querySelector('.setup-user-pic');

    setupUserPic.addEventListener('mousedown', (event) => {

        event.preventDefault();

        let startCoords = {
            x: event.clientX,
            y: event.clientY
        };

        let onMouseMove = (moveEvent) => {

            moveEvent.preventDefault();

            let shift = {
                x: startCoords.x - moveEvent.clientX,
                y: startCoords.y - moveEvent.clientY
            };

            startCoords = {
                x: moveEvent.clientX,
                y: moveEvent.clientY
            };

            setup.style.left = `${setup.offsetLeft - shift.x}px`;
            setup.style.top = `${setup.offsetTop - shift.y}px`;
        };
        let onMouseUp = (upEvent) => {

            upEvent.preventDefault();

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

    });
})();