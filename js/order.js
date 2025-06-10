// js/order.js
document.addEventListener('DOMContentLoaded', () => {
  const orderForm = document.getElementById('orderForm');

  if (orderForm) {
      orderForm.addEventListener('submit', function(event) {
          event.preventDefault(); // Предотвращаем стандартную отправку формы

          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const phone = document.getElementById('phone').value;

          // Простая валидация
          if (!name || !email || !phone) {
              alert(translations[currentLanguage].orderErrorFillAll);
              return;
          }

          if (!validateEmail(email)) {
              alert(translations[currentLanguage].orderErrorEmail);
              return;
          }

          // Валидация телефона в зависимости от текущего языка
          let phonePattern;
          if (currentLanguage === 'uk') {
              phonePattern = /^\+380\s?\(?\d{2}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;
          } else if (currentLanguage === 'en') {
              phonePattern = /^\+1\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{4}$/;
          } else { // 'ru' и по умолчанию
              phonePattern = /^\+7\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;
          }

          if (!phonePattern.test(phone)) {
              alert(translations[currentLanguage].orderErrorPhone);
              return;
          }

          // Отправка данных (пример, в реальном проекте будет AJAX-запрос)
          console.log('Отправка заказа:', { name, email, phone });
          alert(translations[currentLanguage].orderSuccess);

          // Сброс формы
          orderForm.reset();
      });
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}