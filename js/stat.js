(function() {

    const canvasWidth = 700;
    const canvasHeight = 300;

    const cloudWidth = 420;
    const cloudHeight = 270;
    const cloudX = (canvasWidth - cloudWidth) / 2;
    const cloudY = (canvasHeight - cloudHeight) / 2;

    const centerOfCanvas = (cloudX + cloudWidth / 2);

    const shift = 10;

    const histWidth = 40;
    const histHeight = 150;

    function getMaxNumber(array) {
        let max = 0;

        for (let i = 0; i < array.length; i++) {
            if (max < array[i]) {
                max = array[i];
            }
        }

        return max;
    }

    window.renderStatistics = (ctx, names, times) => {
        // histogram window
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(cloudX + shift, cloudY + shift, cloudWidth, cloudHeight);

        ctx.fillStyle = 'white';
        ctx.fillRect(cloudX, cloudY, cloudWidth, cloudHeight);

        // histogram message
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.font = '20px PT Mono';
        ctx.textAlign = 'center';
        ctx.fillText('Ура, вы победили!', centerOfCanvas, (cloudY + shift * 2.5));

        ctx.font = '15px PT Mono';
        ctx.fillText('Список результатов:', centerOfCanvas, (cloudY + shift * 5.5));

        // histogram items
        let itemPosX = cloudX + (cloudWidth - (histWidth * 4 + shift * 2 * 3)) / 2;
        const itemPosY = canvasHeight - cloudY - histHeight - shift * 3;

        for (let i = 0; i < names.length; i++) {
            if (names[i] === 'Вы') {
                ctx.fillStyle = 'red';
            } else {
                ctx.fillStyle = 'blue';
            }

            const itemHeight = (times[i] * histHeight) / getMaxNumber(times);
            const timeSeconds = `${Math.floor(times[i] / 60)}s`;

            ctx.fillRect(itemPosX, (itemPosY + histHeight - itemHeight), histWidth, itemHeight);

            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.font = '13px PT Mono';
            ctx.textAlign = 'center';
            ctx.fillText(names[i], (itemPosX + histWidth / 2), (itemPosY + histHeight + shift * 1.5));
            ctx.fillText(timeSeconds, (itemPosX + histWidth / 2),
                (itemPosY + histHeight - itemHeight - shift * 0.5));

            itemPosX = itemPosX + histWidth + shift * 2;
        }
    };
})();