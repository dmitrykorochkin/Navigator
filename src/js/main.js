//form

const forms = document.querySelectorAll(".form__element");
const inputMask = new Inputmask("+7 (999) 999-99-99");

forms.forEach(form => {
  const telSelector = form.querySelector('input[type="tel"]');

  inputMask.mask(telSelector);

  new window.JustValidate(".form__element", {
    rules: {
      tel: {
        required: true,
        function: () => {
          const phone = telSelector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        }
      }
    },
    submitHandler: function(thisForm) {
      let formData = new FormData(thisForm);
      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log("Отправлено");
          }
        }
      };
      xhr.open("POST", "mail.php", true);
      xhr.send(formData);

      thisForm.reset();
    }
  });
});

//accordion

let accordion = document.querySelector(".answerblock__items");
let tab = document.querySelectorAll(".answerblock__item");
let answer = document.querySelectorAll(".answerblock__item-text");
let plus = document.querySelectorAll(".answerblock__icon");
let close = document.querySelectorAll(".answerblock__icon-close");

accordion.addEventListener("click", e => {
  const target = e.target.closest(".answerblock__item");

  if (target) {
    tab.forEach((item, index) => {
      if (item === target && target.classList.toggle("active")) {
        answer[index].classList.add("active");
        tab[index].classList.add("answerblock__item-active");
        plus[index].style.display = "none";
        close[index].style.display = "block";
      } else {
        answer[index].classList.remove("active");
        tab[index].classList.remove("answerblock__item-active");
        plus[index].style.display = "block";
        close[index].style.display = "none";
      }
    });
  }
});


// tabs 

const itemLeft = document.querySelectorAll(".shooting__video-item");
const img = document.querySelectorAll(".shooting__video-play");

itemLeft.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    img.forEach(i => {
      i.classList.remove("active");
    });
    img[index].classList.add("active");
  });
});


