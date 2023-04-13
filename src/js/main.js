// form 

const formElement = document.querySelector(".form__elements");
const telSelector = document.querySelector('input[type="tel"]');
const inputMask = new InputMask = ('+7 (999) 999-99-99');
const button = document.querySelector(".button");
inputMask.mask(telSelector);

console.log(formElement)
console.log(telSelector)
console.log(inputMask)
console.log(button)

const validation = new JustValidate(".form-elements");

validation
.addField('#telephone', [
  {
    rule: 'required',
    value: true,
    errorMessage: 'Введите номер телефона!'
  },
  {
    rule: 'function',
    validator: function() {
      const phone = telSelector.inputMask.unmaskedvalue();
      return phone.length === 10;
    }
  }
])
.addField('#name', [
  {
    rule: 'minlength',
    value: 2,
    errorMessage: 'Количество символов меньше 2'
  },
  {
    rule: 'maxlength',
    value: 30,
    errorMessage: 'Количество символов больше 30!'
  }
])
  

  

