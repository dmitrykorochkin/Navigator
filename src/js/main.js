AOS.init();

// slider
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 70,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets"
  },
  // autoplay: {
  //   delay: 3000
  // },
    breakpoints: {
      768: {
        slidesPerView: 3
      }
  },
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
    alertTabs.forEach(item => {
      item.classList.remove("active-tab");
    });
    item.classList.add("active-tab");

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

// const formSite = () => {
//   const forms = document.querySelectorAll(".form__element");
//   const inputMask = new Inputmask("+7 (999) 999-99-99");

//   forms.forEach(form => {
//     const telSelector = form.querySelector('input[type="tel"]');

//     inputMask.mask(telSelector);

//     new window.JustValidate(".form__element", {
//       rules: {
//         tel: {
//           required: true,
//           function: () => {
//             const phone = telSelector.inputmask.unmaskedvalue();
//             return Number(phone) && phone.length === 10;
//           }
//         }
//       },
//       submitHandler: function(thisForm) {
//         let formData = new FormData(thisForm);
//         let xhr = new XMLHttpRequest();

//         xhr.onreadystatechange = function() {
//           if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//               console.log("Отправлено");
//             }
//           }
//         };
//         xhr.open("POST", "mail.php", true);
//         xhr.send(formData);

//         thisForm.reset();
//       }
//     });
//   });
// };

// formSite();

const forms = () => {
  const form = document.querySelectorAll(".form__element");
  const input = document.querySelectorAll("input");

  const message = {
    loading: "Загрузка...",
    success: "Спасибо, с вами скоро свяжутся!",
    failure: "Что-то пошло не так..."
  };

  const postData = async (url, data) => {
    document.querySelector(".status").textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data
    });

    return await res.text();
  };

  const clearInputs = () => {
    input.forEach(item => {
      item.value = "";
    });
  };

  form.forEach(item => {
    item.addEventListener("submit", e => {
      e.preventDefault();

      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.appendChild(statusMessage);

      const formData = new FormData(item);
      postData("../server.php", formData)
        .then(res => {
          console.log(res);
          statusMessage.textContent = message.success;
          debugger;
        })
        .catch(() => (statusMessage.textContent = message.failure))
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });
};
forms();

const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelectorAll(closeSelector);

    trigger.forEach(item => {
      item.addEventListener("click", e => {
        if (e.target) {
          e.preventDefault();
        }

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
      });
    });
    close.forEach(item => {
      item.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "";
      });
    });

    modal.addEventListener("click", e => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  }
  const callBtn = document.querySelector(".header__button");
  const callModal = document.querySelector(".modal__call-wrapper");
  const callModalClose = document.querySelector(
    ".modal__call-wrapper .popup-close"
  );

  bindModal(
    ".header__button",
    ".modal__call-wrapper",
    ".modal__call-wrapper .popup-close"
  );
  bindModal(
    ".additional__link",
    ".modal__additional-wrapper",
    ".modal__additional-wrapper .popup-close"
  );
  bindModal(
    ".adapter__left-scheme",
    ".modal__adapter-wrap",
    ".modal__adapter-wrap .popup-close"
  );
  bindModal(".button__offer", ".offer", ".offer .popup-close");
  bindModal(
    ".purchase__button",
    ".modal__thanks-wrapper",
    ".modal__thanks-wrapper .popup-close"
  );
  bindModal(".certificate__one", ".modal", ".modal .popup-close");
};

modals();
