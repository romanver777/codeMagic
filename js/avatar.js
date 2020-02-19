// добавление аватара
(function () {

    const types = ['gif', 'jpg', 'jpeg', 'png'];
    const fileInput = document.querySelector('.upload input[type= file]');
    const preview = document.querySelector('.setup-user-pic');
    const setupOpen = document.querySelector('.setup-open-icon');

    fileInput.addEventListener('change', () => {

        let file = fileInput.files[0];
        let fileName = file.name.toLowerCase();

        let match = types.some((el) => {

            return fileName.endsWith(el);
        });

        if (match) {
            let reader = new FileReader();

            reader.addEventListener('load', () => {

                preview.src = setupOpen.src = reader.result;
            });
            reader.readAsDataURL(file);
        }
    });
})();