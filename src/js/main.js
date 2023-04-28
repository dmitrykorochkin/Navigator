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
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30
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

toggleCheckbox.addEventListener("change", () => {
  if (toggleCheckbox.checked) {
    briefly.style.display = "none";
    detail.style.display = "block";
  } else {
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
