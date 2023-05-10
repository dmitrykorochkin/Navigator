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

// slider
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 70,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets"
  },
  autoplay: {
    delay: 3000
  },
  // breakpoints: {
  //   1920: {
  //     slidesPerView: 3
  //   },
  //   320: {
  //     slidesPerView: 1
  //   }
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

//accordion

let accordion = document.querySelector(".answerblock__items");
let tab = document.querySelectorAll(".answerblock__item");
let answer = document.querySelectorAll(".answerblock__item-text");
let plus = document.querySelectorAll(".answerblock__icon");
let close = document.querySelectorAll(".answerblock__icon-close");
let title = document.querySelectorAll(".answerblock__item-title ");

accordion.addEventListener("click", e => {
  const target = e.target.closest(".answerblock__item");

  if (target) {
    tab.forEach((item, index) => {
      if (item === target && target.classList.toggle("active")) {
        answer[index].classList.add("active");
        title[index].classList.add("active-item");
        tab[index].classList.add("answerblock__item-active");
        plus[index].style.display = "none";
        close[index].style.display = "block";
      } else {
        answer[index].classList.remove("active");
        title[index].classList.remove("active-item");
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

// tabs 4 режима

const itemTop = document.querySelectorAll(".tabs__item");
const imgBlock = document.querySelectorAll(".tabs__container");

itemTop.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    imgBlock.forEach(i => {
      i.classList.remove("active");
    });
    imgBlock[index].classList.add("active");
  });
});

// tabs интерфейс

const itemIntLeft = document.querySelectorAll(".interface__item");
const imgIntBlock = document.querySelectorAll(".interface__img");

itemIntLeft.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    imgIntBlock.forEach(i => {
      i.classList.remove("active");
    });
    imgIntBlock[index].classList.add("active");
  });
});

// alert

const alertTabs = document.querySelectorAll(".alert__tab");
const alertImgBlock = document.querySelectorAll(".alert__animation");

alertTabs.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    alertImgBlock.forEach(item => {
      item.classList.remove("active");
    });
    alertImgBlock[index].classList.add("active");
  });
});

//hover доставка и ответы

const itemHover = document.querySelectorAll(".answer__pay");
const sectionHover = document.querySelectorAll(".section__hover");

itemHover.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    sectionHover.forEach(item => {
      item.classList.remove("active");
    });
    sectionHover[index].classList.add("active");
  });
});

// переключатель checkbox

const toggleCheckbox = document.querySelector('input[type="checkbox"]');
const briefly = document.querySelector(".charachterisitc__wrapper");
const detail = document.querySelector(".elevanth__tabl-wrapper");
const brieflyActive = document.querySelector(".characteristic__briefly");
const detailActive = document.querySelector(".characteristic__detail");

toggleCheckbox.addEventListener("change", () => {
  if (toggleCheckbox.checked) {
    brieflyActive.classList.remove("_active");
    detailActive.classList.add("_active");
    briefly.style.display = "none";
    detail.style.display = "block";
  } else {
    brieflyActive.classList.add("_active");
    detailActive.classList.remove("_active");
    briefly.style.display = "block";
    detail.style.display = "none";
  }
});

// бургер меню

const navbarMenu = document.querySelector(".navbar");
const buttonBurger = document.querySelector(".header__burger");
const buttonBurgerClose = document.querySelector(".header__burger-close");

buttonBurger.addEventListener("click", () => {
  navbarMenu.classList.add("navbar__visible");
  buttonBurger.style.display = "none";
  buttonBurgerClose.style.display = "block";
});

buttonBurgerClose.addEventListener("click", () => {
  navbarMenu.classList.remove("navbar__visible");
  buttonBurger.style.display = "block";
  buttonBurgerClose.style.display = "none";
});

// загрузка страниц при скролле

let page = 1;
let perPage = 8;

function loadMoreData() {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "load_data.php", true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      //добавляем новые данные в контейнер
      document.getElementById("data-container").innerHTML += xhr.responseText;

      page++;
    }
  };
  xhr.send("page=" + page + "&perPage" + perPage);
}
window.onscroll = function() {
  // Вычисляем высоту страницы и расстояние до конца страницы
  var scrollTop =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
  var windowHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  var documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  var bottomOffset = documentHeight - (scrollTop + windowHeight);

  // Если расстояние до конца страницы меньше 100 пикселей, загружаем новые данные
  if (bottomOffset < 100) {
    loadMoreData();
  }
};

// == Custom cursor ==========--
// const cursor = document.querySelector(".coursor");

// document.addEventListener("mousemove", function(e) {
//   cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
// });

// document.addEventListener("mouseover", function(e) {
//   if (e.target.closest("button, a")) {
//     cursor.classList.add("_over");
//   }
// });

// document.addEventListener("mouseout", function(e) {
//   if (e.target.closest("button, a")) {
//     cursor.classList.remove("_over");
//   }
// });

// document.addEventListener("mousedown", function(e) {
//   if (e.target.closest("button, a")) {
//     cursor.classList.add("click");
//     cursor.classList.remove("_over");
//     setTimeout(function() {
//       cursor.classList.remove("click");
//       cursor.classList.add("_over");
//     }, 500);
//   }
// });

// const cursor = document.querySelector(".coursor");
// let cursorSize = 20;

// document.addEventListener("mousemove", function(e) {
//   // Если курсор над элементом типа "button" или "a", то увеличиваем его размер на 10px
//   if (e.target.closest("button, a")) {
//     cursor.style.width = (cursorSize + 10) + "px";
//     cursor.style.height = (cursorSize + 10) + "px";
//   } else {
//     cursor.style.width = cursorSize + "px";
//     cursor.style.height = cursorSize + "px";
//   }

//   cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
// });

// document.addEventListener("mouseleave", function(e) {
//   if (e.target.closest("button, a")) {
//     cursorSize -= 10;
//   }

//   cursor.style.width = cursorSize + "px";
//   cursor.style.height = cursorSize + "px";
// });

// document.addEventListener("mousedown", function(e) {
//   if (e.target.closest("button, a")) {
//     cursor.classList.add("click");
//     cursor.classList.remove("_over");

//     // Увеличиваем размер курсора на 10px при клике
//     cursorSize += 10;
//     cursor.style.width = cursorSize + "px";
//     cursor.style.height = cursorSize + "px";

//     setTimeout(function() {
//       cursor.classList.remove("click");
//       cursor.classList.add("_over");

//       // Возвращаем размер курсора к начальному значению после клика
//       cursorSize -= 10;
//       cursor.style.width = cursorSize + "px";
//       cursor.style.height = cursorSize + "px";
//     }, 500);
//   }
// });

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function(e) {
  cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

document.addEventListener("mouseover", function(e) {
  if (e.target.closest("button, a")) {
    cursor.classList.add("_over");
  }
});

document.addEventListener("mouseout", function(e) {
  if (e.target.closest("button, a")) {
    cursor.classList.remove("_over");
  }
});

document.addEventListener("mousedown", function(e) {
  if (e.target.closest("button, a")) {
    cursor.classList.add("click");
    cursor.classList.remove("_over");
    setTimeout(function() {
      cursor.classList.remove("click");
      cursor.classList.add("_over");
    }, 500);
  }
});

/* Modal */
const modalOpen = document.querySelectorAll(".modal-open");
const modalOverlay = document.querySelector(".modal__overlay");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");

function openModal() {
  modalOverlay.style.display = "block";
  modal.style.display = "block";
  document.body.classList.add("modal-open"); // Добавляем класс к body
}

function closeModal() {
  modalOverlay.style.display = "none";
  modal.style.display = "none";
  document.body.classList.remove("modal-open"); // Удаляем класс у body
}

modalOpen.forEach(function(item) {
  item.addEventListener("click", function(event) {
    event.preventDefault(); // Отменяем стандартное действие при клике на ссылку
    openModal();
  });
});

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

// ===============================================================================
// ======================    MODAL OFFER    ======================================
// ===============================================================================

const modalOfferOpen = () => {
  const buttonOffer = document.querySelectorAll(".button__offer");
  const modalOffer = document.querySelector(".offer");
  const backClose = document.querySelector(".offer__link");

  // Функция для открытия модального окна
  function openModal() {
    modalOffer.style.display = "block";
  }

  // Функция для закрытия модального окна
  function closeModal() {
    modalOffer.style.display = "none";
  }

  // Обработчик клика по кнопке открытия модального окна
  buttonOffer.forEach(button => {
    button.addEventListener("click", openModal);
  });

  // Обработчик клика по кнопке закрытия модального окна
  backClose.addEventListener("click", closeModal);

  // Обработчик клика по затемненной области, чтобы закрыть модальное окно
  modalOffer.addEventListener("click", event => {
    if (event.target === modalOffer) {
      closeModal();
    }
  });
  // Обработчик нажатия клавиши Esc, чтобы закрыть модальное окно
  document.addEventListener("keydown", event => {
    if (event.code === "Escape" && modalOffer.style.display === "block") {
      closeModal();
    }
  });
};
modalOfferOpen();

// ===============================================================================
// ======================    MODAL ADDITIONAL   ==================================
// ===============================================================================

const modalAdditional = () => {
  const openModalAdditionals = document.querySelectorAll(".additional__link");
  const closeModalAdditionals = document.querySelectorAll(".modal__additional-closest");
  const modalAdditional = document.querySelector(".modal__additional-wrapper");

  // Открывает модальное окно
  function openModal() {
    modalAdditional.style.display = "block";
    document.addEventListener("keydown", closeModalOnEscape);
    modalAdditional.addEventListener("click", closeModalOnOutsideClick);
  }

  // Закрывает модальное окно
  function closeModal() {
    modalAdditional.style.display = "none";
    document.removeEventListener("keydown", closeModalOnEscape);
    modalAdditional.removeEventListener("click", closeModalOnOutsideClick);
  }

  // Закрывает модальное окно при нажатии клавиши Escape
  function closeModalOnEscape(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }

  // Закрывает модальное окно при клике на область вне модального окна
  function closeModalOnOutsideClick(event) {
    if (!event.target.closest(".modal__additional")) {
      closeModal();
    }
  }

  // Добавляет обработчик клика на каждую ссылку для открытия модального окна
  openModalAdditionals.forEach(link => {
    link.addEventListener("click", openModal);
  });

  // Добавляет обработчик клика на каждую кнопку закрытия модального окна
  closeModalAdditionals.forEach(button => {
    button.addEventListener("click", closeModal);
  });
};

modalAdditional();


// ===============================================================================
// ======================    MODAL ADAPTER   =====================================
// ===============================================================================

const modalAdapter = () => {
  const modalAdapterOpen = document.querySelector(".adapter__left-scheme");
  const modalAdapterClose = document.querySelector(".modal__adapter-close");
  const modalAdapterOverlay = document.querySelector(".modal__adapter-wrap");



function openModal() {
  modalAdapterOverlay.style.display = "block";
}

function closeModal() {
  modalAdapterOverlay.style.display = "none";
}

modalAdapterOpen.addEventListener("click", openModal);

modalAdapterClose.addEventListener("click", closeModal);

modalAdapterOverlay.addEventListener("click", function(event) {
  if (event.target === modalAdapterOverlay) {
    closeModal();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
}

modalAdapter();

// ==========================================================================
// ====================   Плавный скролл по якорям  =========================
// ==========================================================================

document.querySelectorAll("a.scroll").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


