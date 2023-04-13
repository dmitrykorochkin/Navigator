//form

const forms = document.querySelectorAll('.form__element');
const inputMask = new Inputmask('+7 (999) 999-99-99');

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






















// const form_one = document.querySelector('.form__element');
// const form_two = document.querySelector('.form__element2');
// const form_three = document.querySelector('.form__element3');
// const form_four = document.querySelector('.form__element4');

// const telSelector = form_one.querySelector('input[type="tel"]');
// const telSelector2 = form_two.querySelector('input[type="tel"]');
// const telSelector3 = form_three.querySelector('input[type="tel"]');
// const telSelector4 = form_four.querySelector('input[type="tel"]');

// const inputMask = new Inputmask("+7 (999) 999-99-99");

// inputMask.mask(telSelector);
// inputMask.mask(telSelector2);
// inputMask.mask(telSelector3);
// inputMask.mask(telSelector4);

// new window.JustValidate(".form__element", {
//   rules: {
//     tel: {
//       required: true,
//       function: () => {
//         const phone = telSelector.inputmask.unmaskedvalue();
//         return Number(phone) && phone.length === 10;
//       }
//     }
//   },
//   submitHandler: function(thisForm) {
//     let formData = new FormData(thisForm);
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           console.log("Отправлено");
//         }
//       }
//     };
//     xhr.open("POST", "mail.php", true);
//     xhr.send(formData);

//     thisForm.reset();
//   }
// });

// new window.JustValidate(".form__element2", {
//   rules: {
//     tel: {
//       required: true,
//       function: () => {
//         const phone = telSelector2.inputmask.unmaskedvalue();
//         return Number(phone) && phone.length === 10;
//       }
//     }
//   },
//   submitHandler: function(thisForm) {
//     let formData = new FormData(thisForm);
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           console.log("Отправлено");
//         }
//       }
//     };
//     xhr.open("POST", "mail.php", true);
//     xhr.send(formData);

//     thisForm.reset();
//   }
// });

// new window.JustValidate(".form__element3", {
//   rules: {
//     tel: {
//       required: true,
//       function: () => {
//         const phone = telSelector2.inputmask.unmaskedvalue();
//         return Number(phone) && phone.length === 10;
//       }
//     }
//   },
//   submitHandler: function(thisForm) {
//     let formData = new FormData(thisForm);
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           console.log("Отправлено");
//         }
//       }
//     };
//     xhr.open("POST", "mail.php", true);
//     xhr.send(formData);

//     thisForm.reset();
//   }
// });

// new window.JustValidate(".form__element4", {
//   rules: {
//     tel: {
//       required: true,
//       function: () => {
//         const phone = telSelector2.inputmask.unmaskedvalue();
//         return Number(phone) && phone.length === 10;
//       }
//     }
//   },
//   submitHandler: function(thisForm) {
//     let formData = new FormData(thisForm);
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           console.log("Отправлено");
//         }
//       }
//     };
//     xhr.open("POST", "mail.php", true);
//     xhr.send(formData);

//     thisForm.reset();
//   }
// });




























// const forms = document.querySelectorAll(".form__element");
// const input = document.querySelectorAll("input");

// const message = {
//   loading: "Загрузка...",
//   success: "Спасибо мы с вами свяжемся",
//   failure: "Что то пошло не так..."
// };

// const postData = async (url, data) => {
//   document.querySelector('.status').textContent = message.loading
//   let result = await fetch(url, {
//     method: 'POST',
//     body: data
//   });

//   return await result.text()
// }

// const clearInputs = () => {
//   input.forEach(input => {
//     input.value = '';
//   })
// }

// forms.forEach(form => {
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let statusMessage = document.createElement("div");
//     statusMessage.classList.add('status');
//     form.appendChild(statusMessage);

//     const formData = new FormData(form);

//     postData('server.php', formData)
//     .then(result => {
//       console.log(result)
//       statusMessage.textContent = message.success;
//     })
//     .catch(() => statusMessage.textContent = message.failure)
//     .finally(() => {
//       clearInputs();
//       setTimeout(() => {
//         statusMessage.remove();
//       }, 5000);
//     })
//   });
// });
