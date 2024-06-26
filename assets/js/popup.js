// Get references to the buttons and modals
const conditionsButton = document.getElementById("conditions");
const characteristicsButton = document.getElementById("characteristics");
const applicationButton = document.getElementById("application");
const cycleOfOperationButton = document.getElementById("cycle-of-operation");

const conditionsModal = document.getElementById("conditions-modal");
const characteristicsModal = document.getElementById("characteristics-modal");
const applicationModal = document.getElementById("application-modal");
const cycleOfOperationModal = document.getElementById("cycle-of-operation-modal");

const closeConditionsModal = document.getElementById("close-conditions-modal");
const closeCharacteristicsModal = document.getElementById("close-characteristics-modal");
const closeApplicationModal = document.getElementById("close-application-modal");
const closeCycleOfOperationModal = document.getElementById("close-cycle-of-operation-modal");

// Function to display a modal
function showModal(modal) {
  modal.style.display = "block";
}

// Function to hide a modal
function hideModal(modal) {
  modal.style.display = "none";
}

// Event listeners for buttons
conditionsButton.addEventListener("click", () => {
  showModal(conditionsModal);
});

characteristicsButton.addEventListener("click", () => {
  showModal(characteristicsModal);
});

applicationButton.addEventListener("click", () => {
  showModal(applicationModal);
});

cycleOfOperationButton.addEventListener("click", () => {
  showModal(cycleOfOperationModal);
});

// Event listeners for close buttons
closeConditionsModal.addEventListener("click", () => {
  hideModal(conditionsModal);
});

closeCharacteristicsModal.addEventListener("click", () => {
  hideModal(characteristicsModal);
});

closeApplicationModal.addEventListener("click", () => {
  hideModal(applicationModal);
});

closeCycleOfOperationModal.addEventListener("click", () => {
  hideModal(cycleOfOperationModal);
});
