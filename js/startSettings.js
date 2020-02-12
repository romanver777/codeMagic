(function() {

    window.fireballSize = 22;
    window.wizardSpeed = 3;
    window.wizardWidth = 70;

    window.getWizardHeight = (wizardWidth) => 1.337 * wizardWidth;
    window.getfireballSpeed = (left) => (left ? 5 : 2);

    window.getWizardX = (width) => {
        return width / 2 - wizardWidth / 2;
    };

    window.getWizardY = (height) => {
        return (height - getWizardHeight(wizardWidth)) * (2 / 3);
    };
})();