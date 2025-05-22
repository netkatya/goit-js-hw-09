//   Оголоси поза будь-якими функціями об’єкт formData з полями email та message, які спочатку мають
// порожні рядки як значення: { email: "", message: "" }.

// Використовуй метод делегування для відстеження змін у формі через подію input. Зберігай 
// актуальні дані з полів email та message у formData та записуй цей об’єкт у локальне сховище. 
// Використовуй ключ "feedback-form-state" для зберігання даних у сховищі.
// При завантаженні сторінки перевір, чи є дані у локальному сховищі. Якщо так, 
// використовуй їх для заповнення форми та об'єкта formData. Якщо ні, залиш поля форми порожніми.
// Перед відправленням форми переконайся, що обидва поля форми заповнені. 
// Якщо будь-яке з полів (властивостей об’єкта formData) порожнє, показуй 
// сповіщення з текстом «Fill please all fields». Якщо всі поля заповнені, 
// виведи у консоль об’єкт formData з актуальними значеннями, очисти локальне 
// сховище, об’єкт formData і поля форми.
const formData = {
    email: "",
    message: ""
  };

  const form = document.querySelector(".feedback-form");
  const STORAGE_KEY = 'feedback-form-state';

form.addEventListener("input", event => {
  const { name, value } = event.target;
  formData[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
})

document.addEventListener("DOMContentLoaded", () => {
  const storageData = localStorage.getItem(STORAGE_KEY);
  if (storageData) {
    const parsedData = JSON.parse(storageData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;
  }

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
})

form.addEventListener("submit", event => {
  event.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  formData.email = "";
  formData.message = "";
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
})