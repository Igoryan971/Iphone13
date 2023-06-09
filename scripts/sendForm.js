const sendForm = () => {
  const btnOpenModal = document.querySelector(".card-details__button_delivery");
  const cardDetailsTitle = document.querySelector(".card-details__title");
  const modal = document.querySelector(".modal");
  const modalTitle = document.querySelector(".modal__title");
  const modalClose = document.querySelector(".modal__close");
  const modalForm = modal.querySelector("form");

  btnOpenModal.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.textContent = cardDetailsTitle.textContent;
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const sendMessage = {};

    const labels = modal.querySelectorAll(".modal__label");
    labels.forEach((label) => {
      const span = label.querySelector("span");
      const input = label.querySelector("input");
      sendMessage[span.textContent] = input.value;
    });
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(sendMessage),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      console.log("Отправлено");
      modalForm.reset();
      modal.style.display = "none";
    });
  });
};
sendForm();
