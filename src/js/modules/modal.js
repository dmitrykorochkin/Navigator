const modals = () => {
    function bindModal(trigger, modal, close) {
      trigger.addEventListener("click", e => {
        if (e.target) {
          e.preventDefault();
        }

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
      });
      close.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "";
      });
    }
    const callBtn = document.querySelector(".header__button");
    const callModal = document.querySelector(".modal__call");
    const callModalClose = document.querySelector(".modal__Call .popup-close");

    bindModal(callBtn, callModal, callModalClose);
}

export default modals;
