const btnModal = document.querySelector(".btn-modal");
const modal = document.querySelector(".modal-overlay");
const btnExit = document.querySelector(".btn-exit");

btnModal.addEventListener("click", function () {
    modal.classList.add("open-modal");
});

btnExit.addEventListener("click", function () {
    modal.classList.remove("open-modal");
});