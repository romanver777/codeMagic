// загрузка данных с сервера и сохранение формы
(function () {

    const url = 'https://js.dump.academy/code-and-magick/data';
    const saveUrl = 'https://js.dump.academy/code-and-magick';

    window.load = (onSuccess, onError) => {

        const xhr = new XMLHttpRequest();

        xhr.responseType = 'json';
        xhr.timeout = 10000;

        xhr.onload = () => {
            if (xhr.status == 200) {
                onSuccess(xhr.response);
            } else {
                onError(`Что-то пошло не так: ошибка ${xhr.status} ${xhr.statusText}`);
            }
        };
        xhr.onerror = () => alert('Произошла ошибка соединения');
        xhr.ontimeout = () => alert(`Превышено время ожидания ${this.timeout}мс`);

        xhr.open('GET', url);
        xhr.send();
    };

    window.save = (data, onSuccess, onError) => {

        const xhr = new XMLHttpRequest();

        xhr.responseType = 'json';
        xhr.timeout = 10000;

        xhr.onload = () => {
            if (xhr.status == 200) {
                onSuccess(xhr.response);
            } else {
                onError(`Что-то пошло не так: ошибка ${xhr.status} ${xhr.statusText}`);
            }
        };
        xhr.onerror = () => alert('Произошла ошибка соединения');
        xhr.ontimeout = () => alert(`Превышено время ожидания ${this.timeout}мс`);

        xhr.open('POST', saveUrl);
        xhr.send(data);
    };
})();