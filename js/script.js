// js/script.js

const translations = {
  ru: {
      // Мета-теги и заголовки страниц
      pageTitleHome: "Tesla Model Y — Главная",
      metaDescriptionHome: "Официальный сайт Tesla Model Y. Безопасный, быстрый и универсальный электрокроссовер. Заказать и настроить Tesla Model Y.",
      pageTitleConfigurator: "Tesla Model Y — Конфигуратор",
      metaDescriptionConfigurator: "Настройте свою Tesla Model Y: выберите цвет, диски, салон и другие опции, чтобы создать автомобиль вашей мечты.",
      pageTitleOrder: "Tesla Model Y — Заказ",
      metaDescriptionOrder: "Оформите заказ на Tesla Model Y онлайн. Быстрая и удобная форма для вашего нового электромобиля.",
      pageTitleReviews: "Tesla Model Y — Отзывы",
      metaDescriptionReviews: "Читайте отзывы реальных владельцев Tesla Model Y и оставляйте свои впечатления. Узнайте, что говорят о Model Y.",
      pageTitleContact: "Tesla Model Y — Контакты",
      metaDescriptionContact: "Свяжитесь с нами по вопросам Tesla Model Y. Телефон, email, адрес, социальные сети.",

      // Навигация
      navHome: "Главная",
      navConfigurator: "Конфигуратор",
      navOrder: "Заказ",
      navReviews: "Отзывы",
      navContact: "Контакты",

      // Главная страница (index.html)
      heroTitle: "Model Y",
      heroDescription: "Безопасный, быстрый и универсальный электрокроссовер для любых приключений. Ощутите будущее вождения уже сегодня.",
      orderNowBtn: "Заказать сейчас",
      customizeBtn: "Настроить",

      rangeValue: "330 миль",
      rangeText: "Запас хода (прибл.)",
      accelerationValue: "0–60 за 4.8 с",
      accelerationText: "Разгон",
      driveType: "AWD",
      driveTypeText: "Полный привод",
      cargoSpaceValue: "76 куб. футов",
      cargoSpaceText: "Объём багажника",

      videoReviewTitle: "Видеообзор Model Y",
      // Новый текст для главной страницы
      performanceTitle: "Производительность",
      performanceDescription: "Model Y обеспечивает мгновенный крутящий момент и исключительную производительность, обеспечивая захватывающее вождение.",
      safetyTitle: "Безопасность",
      safetyDescription: "Model Y имеет высший рейтинг безопасности, разработанный для защиты пассажиров со всех сторон благодаря своей жесткой конструкции и передовым системам безопасности.",
      interiorTitle: "Интерьер",
      interiorDescription: "Панорамная стеклянная крыша и минималистичный дизайн интерьера создают ощущение простора и открытости, позволяя каждому наслаждаться поездкой.",
      chargingTitle: "Зарядка",
      chargingDescription: "Заряжайте свою Model Y дома или в обширной сети Supercharger Tesla. Никогда не беспокойтесь о запасе хода.",
      
      // Конфигуратор (configurator.html)
      configuratorTitle: "Настройте свою Model Y",
      colorOption: "Цвет",
      wheelsOption: "Диски",
      interiorOption: "Салон",
      autopilotOption: "Автопилот",
      performanceOption: "Пакет Performance", // Новая опция
      pricePrefix: "Цена:",
      orderConfigBtn: "Заказать выбранную комплектацию",
      colorWhite: "Белый (Стандарт)",
      colorBlack: "Черный",
      colorBlue: "Синий",
      colorRed: "Красный",
      wheels19: "19\" Gemini (Стандарт)",
      wheels20: "20\" Induction",
      interiorBlack: "Черный (Стандарт)",
      interiorWhite: "Белый",
      autopilotStandard: "Стандартный",
      autopilotFull: "Полный (FSD)",
      performanceNone: "Нет",
      performanceYes: "Да",

      // Заказ (order.html)
      orderFormTitle: "Оформить заказ",
      formNameLabel: "Имя:",
      formNamePlaceholder: "Ваше имя",
      formEmailLabel: "Email:",
      formEmailPlaceholder: "Ваш email",
      formPhoneLabel: "Телефон:",
      formPhonePlaceholder: "+7 (___) ___-__-__",
      submitOrderBtn: "Отправить заказ",
      orderSuccess: "Ваш заказ успешно отправлен! Мы свяжемся с вами в ближайшее время.",
      orderErrorFillAll: "Пожалуйста, заполните все поля!",
      orderErrorEmail: "Пожалуйста, введите корректный Email!",
      orderErrorPhone: "Пожалуйста, введите корректный номер телефона в формате +7 (XXX) XXX-XX-XX!",

      // Отзывы (reviews.html)
      reviewsTitle: "Отзывы владельцев",
      review1Quote: "Model Y — это идеальный семейный электромобиль. Удобный, быстрый и безопасный. Просторный салон и большой багажник делают её идеальной для долгих поездок. Я очень довольна своей покупкой!",
      review1Author: "— Анна, Москва",
      review2Quote: "После года использования ни разу не пожалел. Заряд держится отлично, автопилот — топ. Это машина, которая действительно меняет представление о вождении. Каждый день за рулём приносит удовольствие.",
      review2Author: "— Игорь, Санкт-Петербург",
      review3Quote: "Потрясающий дизайн и передовые технологии. Model Y превзошла все мои ожидания. Она не просто автомобиль, это гаджет на колёсах, который постоянно обновляется и становится лучше.",
      review3Author: "— Елена, Новосибирск",

      // Контакты (contact.html)
      contactTitle: "Свяжитесь с нами",
      contactAddress: "Наш адрес: ",
      contactAddressValue: "ул. Тесла, 1, Одесса, Украина",
      contactPhone: "Телефон: ",
      contactPhoneValue: "+380 (96) 915-77-41",
      contactEmail: "Email: ",
      contactEmailValue: "info@tesla.ua",
      followUs: "Следуйте за нами в социальных сетях:",

      // Футер
      footerRights: "© 2025 Tesla, Inc. Все права защищены."
  },
  uk: {
      // Мета-теги и заголовки страниц
      pageTitleHome: "Tesla Model Y — Головна",
      metaDescriptionHome: "Офіційний сайт Tesla Model Y. Безпечний, швидкий та універсальний електрокросовер. Замовити та налаштувати Tesla Model Y.",
      pageTitleConfigurator: "Tesla Model Y — Конфігуратор",
      metaDescriptionConfigurator: "Налаштуйте свою Tesla Model Y: оберіть колір, диски, салон та інші опції, щоб створити автомобіль вашої мрії.",
      pageTitleOrder: "Tesla Model Y — Замовлення",
      metaDescriptionOrder: "Оформіть замовлення на Tesla Model Y онлайн. Швидка та зручна форма для вашого нового електромобіля.",
      pageTitleReviews: "Tesla Model Y — Відгуки",
      metaDescriptionReviews: "Читайте відгуки реальних власників Tesla Model Y та залишайте свої враження. Дізнайтеся, що кажуть про Model Y.",
      pageTitleContact: "Tesla Model Y — Контакти",
      metaDescriptionContact: "Зв'яжіться з нами щодо Tesla Model Y. Телефон, email, адреса, соціальні мережі.",

      // Навигация
      navHome: "Головна",
      navConfigurator: "Конфігуратор",
      navOrder: "Замовлення",
      navReviews: "Відгуки",
      navContact: "Контакти",

      // Главная страница (index.html)
      heroTitle: "Модель Y",
      heroDescription: "Безпечний, швидкий та універсальний електрокросовер для будь-яких пригод. Відчуйте майбутнє водіння вже сьогодні.",
      orderNowBtn: "Замовити зараз",
      customizeBtn: "Налаштувати",

      rangeValue: "530 км",
      rangeText: "Запас ходу (прибл.)",
      accelerationValue: "0–100 за 4.8 с",
      accelerationText: "Розгін",
      driveType: "AWD",
      driveTypeText: "Повний привід",
      cargoSpaceValue: "2158 л",
      cargoSpaceText: "Об'єм багажника",

      videoReviewTitle: "Відеоогляд Model Y",
      // Новый текст для главной страницы
      performanceTitle: "Продуктивність",
      performanceDescription: "Model Y забезпечує миттєвий крутний момент та виняткову продуктивність, забезпечуючи захоплююче водіння.",
      safetyTitle: "Безпека",
      safetyDescription: "Model Y має найвищий рейтинг безпеки, розроблений для захисту пасажирів з усіх боків завдяки своїй жорсткій конструкції та передовим системам безпеки.",
      interiorTitle: "Інтер'єр",
      interiorDescription: "Панорамний скляний дах та мінімалістичний дизайн інтер'єру створюють відчуття простору та відкритості, дозволяючи кожному насолоджуватися поїздкою.",
      chargingTitle: "Зарядка",
      chargingDescription: "Заряджайте свою Model Y вдома або в розгалуженій мережі Supercharger Tesla. Ніколи не турбуйтеся про запас ходу.",

      // Конфигуратор (configurator.html)
      configuratorTitle: "Налаштуйте свою Модель Y",
      colorOption: "Колір",
      wheelsOption: "Диски",
      interiorOption: "Салон",
      autopilotOption: "Автопілот",
      performanceOption: "Пакет Performance",
      pricePrefix: "Ціна:",
      orderConfigBtn: "Замовити обрану комплектацію",
      colorWhite: "Білий (Стандарт)",
      colorBlack: "Чорний",
      colorBlue: "Синій",
      colorRed: "Червоний",
      wheels19: "19\" Gemini (Стандарт)",
      wheels20: "20\" Induction",
      interiorBlack: "Чорний (Стандарт)",
      interiorWhite: "Білий",
      autopilotStandard: "Стандартний",
      autopilotFull: "Повний (FSD)",
      performanceNone: "Ні",
      performanceYes: "Так",

      // Заказ (order.html)
      orderFormTitle: "Оформити замовлення",
      formNameLabel: "Ім'я:",
      formNamePlaceholder: "Ваше ім'я",
      formEmailLabel: "Email:",
      formEmailPlaceholder: "Ваш email",
      formPhoneLabel: "Телефон:",
      formPhonePlaceholder: "+380 (___) ___-__-__",
      submitOrderBtn: "Надіслати замовлення",
      orderSuccess: "Ваше замовлення успішно надіслано! Ми зв'яжемося з вами найближчим часом.",
      orderErrorFillAll: "Будь ласка, заповніть усі поля!",
      orderErrorEmail: "Будь ласка, введіть коректний Email!",
      orderErrorPhone: "Будь ласка, введіть коректний номер телефону у форматі +380 (XXX) XXX-XX-XX!",

      // Отзывы (reviews.html)
      reviewsTitle: "Відгуки власників",
      review1Quote: "Model Y — це ідеальний сімейний електромобіль. Зручний, швидкий та безпечний. Просторий салон і великий багажник роблять її ідеальною для довгих поїздок. Я дуже задоволена своєю покупкою!",
      review1Author: "— Анна, Київ",
      review2Quote: "Після року використання жодного разу не пошкодував. Заряд тримається відмінно, автопілот — топ. Це машина, яка дійсно змінює уявлення про водіння. Кожен день за кермом приносить задоволення.",
      review2Author: "— Ігор, Львів",
      review3Quote: "Надзвичайний дизайн та передові технології. Model Y перевершила всі мої очікування. Вона не просто автомобіль, це гаджет на колесах, який постійно оновлюється та стає кращим.",
      review3Author: "— Олена, Дніпро",

      // Контакты (contact.html)
      contactTitle: "Зв'яжіться з нами",
      contactAddress: "Наша адреса: ",
      contactAddressValue: "вул. Тесла, 1, Одеса, Україна",
      contactPhone: "Телефон: ",
      contactPhoneValue: "+380 (96) 915-77-41",
      contactEmail: "Email: ",
      contactEmailValue: "info@tesla.ua",
      followUs: "Слідкуйте за нами в соціальних мережах:",

      // Футер
      footerRights: "© 2025 Tesla, Inc. Усі права захищені."
  },
  en: {
      // Мета-теги и заголовки страниц
      pageTitleHome: "Tesla Model Y — Home",
      metaDescriptionHome: "Official Tesla Model Y website. Safe, fast, and versatile electric crossover. Order and configure your Tesla Model Y.",
      pageTitleConfigurator: "Tesla Model Y — Configurator",
      metaDescriptionConfigurator: "Configure your Tesla Model Y: choose color, wheels, interior, and other options to create your dream car.",
      pageTitleOrder: "Tesla Model Y — Order",
      metaDescriptionOrder: "Place your order for Tesla Model Y online. A fast and convenient form for your new electric vehicle.",
      pageTitleReviews: "Tesla Model Y — Reviews",
      metaDescriptionReviews: "Read reviews from real Tesla Model Y owners and share your experience. Find out what people are saying about the Model Y.",
      pageTitleContact: "Tesla Model Y — Contact",
      metaDescriptionContact: "Contact us for Tesla Model Y inquiries. Phone, email, address, social media.",

      // Навигация
      navHome: "Home",
      navConfigurator: "Configurator",
      navOrder: "Order",
      navReviews: "Reviews",
      navContact: "Contact",

      // Главная страница (index.html)
      heroTitle: "Model Y",
      heroDescription: "Safe, fast, and versatile electric crossover for any adventure. Experience the future of driving today.",
      orderNowBtn: "Order Now",
      customizeBtn: "Customize",

      rangeValue: "330 miles",
      rangeText: "Range (est.)",
      accelerationValue: "0–60 in 4.8 s",
      accelerationText: "Acceleration",
      driveType: "AWD",
      driveTypeText: "All-Wheel Drive",
      cargoSpaceValue: "76 cu ft",
      cargoSpaceText: "Cargo Space",

      videoReviewTitle: "Model Y Video Review",
      // Новый текст для главной страницы
      performanceTitle: "Performance",
      performanceDescription: "Model Y delivers instant torque and exceptional performance, providing an exhilarating driving experience.",
      safetyTitle: "Safety",
      safetyDescription: "Model Y boasts a top safety rating, designed to protect occupants from every angle with its rigid structure and advanced safety systems.",
      interiorTitle: "Interior",
      interiorDescription: "The panoramic glass roof and minimalist interior design create a spacious and open feel, allowing everyone to enjoy the ride.",
      chargingTitle: "Charging",
      chargingDescription: "Charge your Model Y at home or at Tesla's extensive Supercharger network. Never worry about range anxiety.",

      // Конфигуратор (configurator.html)
      configuratorTitle: "Configure Your Model Y",
      colorOption: "Color",
      wheelsOption: "Wheels",
      interiorOption: "Interior",
      autopilotOption: "Autopilot",
      performanceOption: "Performance Package",
      pricePrefix: "Price:",
      orderConfigBtn: "Order Your Configuration",
      colorWhite: "White (Standard)",
      colorBlack: "Black",
      colorBlue: "Blue",
      colorRed: "Red",
      wheels19: "19\" Gemini (Standard)",
      wheels20: "20\" Induction",
      interiorBlack: "Black (Standard)",
      interiorWhite: "White",
      autopilotStandard: "Standard",
      autopilotFull: "Full Self-Driving (FSD)",
      performanceNone: "No",
      performanceYes: "Yes",

      // Заказ (order.html)
      orderFormTitle: "Place Your Order",
      formNameLabel: "Name:",
      formNamePlaceholder: "Your Name",
      formEmailLabel: "Email:",
      formEmailPlaceholder: "Your Email",
      formPhoneLabel: "Phone:",
      formPhonePlaceholder: "+1 (___) ___-__-____",
      submitOrderBtn: "Submit Order",
      orderSuccess: "Your order has been placed successfully! We will contact you shortly.",
      orderErrorFillAll: "Please fill in all fields!",
      orderErrorEmail: "Please enter a valid Email!",
      orderErrorPhone: "Please enter a valid phone number in the format +1 (XXX) XXX-XXXX!",

      // Отзывы (reviews.html)
      reviewsTitle: "Owner Reviews",
      review1Quote: "The Model Y is the perfect family EV. Comfortable, fast, and safe. The spacious interior and large trunk make it ideal for long trips. I'm extremely satisfied with my purchase!",
      review1Author: "— Anna, New York",
      review2Quote: "After a year of ownership, I have no regrets. The charge holds great, autopilot is top-notch. This car truly redefines the driving experience. Every day behind the wheel is a pleasure.",
      review2Author: "— Igor, Los Angeles",
      review3Quote: "Stunning design and cutting-edge technology. The Model Y exceeded all my expectations. It's not just a car, it's a gadget on wheels that constantly updates and gets better.",
      review3Author: "— Elena, San Francisco",

      // Контакты (contact.html)
      contactTitle: "Contact Us",
      contactAddress: "Our Address: ",
      contactAddressValue: "Tesla St, 1, Odesa, Ukraine", // Оставил этот адрес, чтобы было единообразно, но в реале должен быть актуальный
      contactPhone: "Phone: ",
      contactPhoneValue: "+380 (96) 915-77-41",
      contactEmail: "Email: ",
      contactEmailValue: "info@tesla.ua",
      followUs: "Follow us on social media:",

      // Футер
      footerRights: "© 2025 Tesla, Inc. All rights reserved."
  }
};

let currentLanguage = localStorage.getItem('lang') || 'ru';

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('lang', lang);
  applyTranslations();
  updateActiveLanguageButton(lang);
}

function applyTranslations() {
  // Обновляем текст на всех элементах с data-key
  document.querySelectorAll('[data-key]').forEach(element => {
      const key = element.dataset.key;
      if (translations[currentLanguage] && translations[currentLanguage][key]) {
          if (element.tagName === 'TITLE') {
              element.textContent = translations[currentLanguage][key];
          } else if (element.tagName === 'META' && element.name === 'description') {
              element.setAttribute('content', translations[currentLanguage][key]);
          } else if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
              element.placeholder = translations[currentLanguage][key];
          } else if (element.tagName === 'OPTION') { // Для <option> в select
              // Если опция имеет data-key, обновить ее текст
              if (element.hasAttribute('data-key')) {
                  element.textContent = translations[currentLanguage][key];
              }
          }
          else {
              element.textContent = translations[currentLanguage][key];
          }
      }
  });

  // Отдельная обработка для <option> элементов в <select>, которые не имеют data-key, но текст которых должен меняться
  // Например, для тех, у кого data-key находится в translations, но не в самом HTML
  // Это будет работать лучше, если вы зададите data-key для каждого option в HTML
  // Но для примера, я добавил data-key в translations, чтобы показать, как можно сделать
  const colorSelect = document.getElementById('color');
  if (colorSelect) {
      colorSelect.querySelector('option[value="white"]').setAttribute('data-key', 'colorWhite');
      colorSelect.querySelector('option[value="black"]').setAttribute('data-key', 'colorBlack');
      colorSelect.querySelector('option[value="blue"]').setAttribute('data-key', 'colorBlue');
      colorSelect.querySelector('option[value="red"]').setAttribute('data-key', 'colorRed');
      applyTranslationsForSelectOptions(colorSelect);
  }
  const wheelsSelect = document.getElementById('wheels');
  if (wheelsSelect) {
      wheelsSelect.querySelector('option[value="19"]').setAttribute('data-key', 'wheels19');
      wheelsSelect.querySelector('option[value="20"]').setAttribute('data-key', 'wheels20');
      applyTranslationsForSelectOptions(wheelsSelect);
  }
  const interiorSelect = document.getElementById('interior');
  if (interiorSelect) {
      interiorSelect.querySelector('option[value="black"]').setAttribute('data-key', 'interiorBlack');
      interiorSelect.querySelector('option[value="white"]').setAttribute('data-key', 'interiorWhite');
      applyTranslationsForSelectOptions(interiorSelect);
  }
   const autopilotSelect = document.getElementById('autopilot');
  if (autopilotSelect) {
      autopilotSelect.querySelector('option[value="standard"]').setAttribute('data-key', 'autopilotStandard');
      autopilotSelect.querySelector('option[value="full"]').setAttribute('data-key', 'autopilotFull');
      applyTranslationsForSelectOptions(autopilotSelect);
  }
  const performanceSelect = document.getElementById('performance');
  if (performanceSelect) {
      performanceSelect.querySelector('option[value="no"]').setAttribute('data-key', 'performanceNone');
      performanceSelect.querySelector('option[value="yes"]').setAttribute('data-key', 'performanceYes');
      applyTranslationsForSelectOptions(performanceSelect);
  }
}

// Вспомогательная функция для обновления текста в <option>
function applyTranslationsForSelectOptions(selectElement) {
  selectElement.querySelectorAll('option').forEach(option => {
      const key = option.dataset.key;
      if (translations[currentLanguage] && translations[currentLanguage][key]) {
          option.textContent = translations[currentLanguage][key];
      }
  });
}


function updateActiveLanguageButton(activeLang) {
  const buttons = document.querySelectorAll('.language-switcher button');
  buttons.forEach(button => {
      const langCode = button.textContent.toLowerCase();
      if (langCode === activeLang) {
          button.classList.add('active-lang');
      } else {
          button.classList.remove('active-lang');
      }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  updateActiveLanguageButton(currentLanguage);

  // Обновляем активную ссылку в навигации на основе текущей страницы
  const currentPath = window.location.pathname.split('/').pop();
  document.querySelectorAll('nav a').forEach(link => {
      // Убираем потенциальные якоря или параметры запроса
      const linkPath = link.getAttribute('href').split('/').pop().split('?')[0].split('#')[0];
      
      if (linkPath === currentPath) {
          link.classList.add('active');
      } else {
          link.classList.remove('active');
      }
  });
});