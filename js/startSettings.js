
const fireballSize = 22;
const wizardSpeed = 3;
const wizardWidth = 70;

const getWizardHeight = (wizardWidth) => 1.337 * wizardWidth;
const getfireballSpeed = (left) => (left ? 5 : 2);

function getWizardX(width) {
  return width / 2 - wizardWidth / 2;
}

function getWizardY(height) {
  return (height - getWizardHeight(wizardWidth)) * (2 / 3);
}
