// js/configurator.js

const basePrice = 50000; // Базовая цена Model Y в у.е.

const options = {
    color: {
        white: 0,
        black: 1000,
        blue: 1500,
        red: 2000
    },
    wheels: {
        '19': 0,
        '20': 2000
    },
    interior: {
        black: 0,
        white: 1000
    },
    autopilot: {
        standard: 0,
        full: 10000
    },
    performance: { // Новая опция
        none: 0,
        yes: 8000
    }
};

// Объект с путями к изображениям
// Вам нужно создать папку img/cars/ и положить туда эти изображения!
// Пример именования: model-y-[цвет]-[диски]-[салон]-[автопилот]-[перформанс].jpg
// Или упростить, если у вас не так много комбинаций
const imageUrls = {
    // Белый цвет
    'white-19-black-standard-none': 'img/cars/model-y-white-19-black-standard-no.jpg',
    'white-19-black-standard-yes': 'img/cars/model-y-white-19-black-standard-perf.jpg',
    'white-19-black-full-none': 'img/cars/model-y-white-19-black-fsd-no.jpg',
    'white-19-black-full-yes': 'img/cars/model-y-white-19-black-fsd-perf.jpg',

    'white-19-white-standard-none': 'img/cars/model-y-white-19-white-standard-no.jpg',
    'white-19-white-standard-yes': 'img/cars/model-y-white-19-white-standard-perf.jpg',
    'white-19-white-full-none': 'img/cars/model-y-white-19-white-fsd-no.jpg',
    'white-19-white-full-yes': 'img/cars/model-y-white-19-white-fsd-perf.jpg',
    
    'white-20-black-standard-none': 'img/cars/model-y-white-20-black-standard-no.jpg',
    'white-20-black-standard-yes': 'img/cars/model-y-white-20-black-standard-perf.jpg',
    'white-20-black-full-none': 'img/cars/model-y-white-20-black-fsd-no.jpg',
    'white-20-black-full-yes': 'img/cars/model-y-white-20-black-fsd-perf.jpg',

    'white-20-white-standard-none': 'img/cars/model-y-white-20-white-standard-no.jpg',
    'white-20-white-standard-yes': 'img/cars/model-y-white-20-white-standard-perf.jpg',
    'white-20-white-full-none': 'img/cars/model-y-white-20-white-fsd-no.jpg',
    'white-20-white-full-yes': 'img/cars/model-y-white-20-white-fsd-perf.jpg',

    // Черный цвет
    'black-19-black-standard-none': 'img/cars/model-y-black-19-black-standard-no.jpg',
    'black-19-black-standard-yes': 'img/cars/model-y-black-19-black-standard-perf.jpg',
    'black-19-black-full-none': 'img/cars/model-y-black-19-black-fsd-no.jpg',
    'black-19-black-full-yes': 'img/cars/model-y-black-19-black-fsd-perf.jpg',

    'black-19-white-standard-none': 'img/cars/model-y-black-19-white-standard-no.jpg',
    'black-19-white-standard-yes': 'img/cars/model-y-black-19-white-standard-perf.jpg',
    'black-19-white-full-none': 'img/cars/model-y-black-19-white-fsd-no.jpg',
    'black-19-white-full-yes': 'img/cars/model-y-black-19-white-fsd-perf.jpg',
    
    'black-20-black-standard-none': 'img/cars/model-y-black-20-black-standard-no.jpg',
    'black-20-black-standard-yes': 'img/cars/model-y-black-20-black-standard-perf.jpg',
    'black-20-black-full-none': 'img/cars/model-y-black-20-black-fsd-no.jpg',
    'black-20-black-full-yes': 'img/cars/model-y-black-20-black-fsd-perf.jpg',

    'black-20-white-standard-none': 'img/cars/model-y-black-20-white-standard-no.jpg',
    'black-20-white-standard-yes': 'img/cars/model-y-black-20-white-standard-perf.jpg',
    'black-20-white-full-none': 'img/cars/model-y-black-20-white-fsd-no.jpg',
    'black-20-white-full-yes': 'img/cars/model-y-black-20-white-fsd-perf.jpg',

    // Синий цвет (нужны аналогичные изображения)
    'blue-19-black-standard-none': 'img/cars/model-y-blue-19-black-standard-no.jpg',
    'blue-19-black-standard-yes': 'img/cars/model-y-blue-19-black-standard-perf.jpg',
    'blue-19-black-full-none': 'img/cars/model-y-blue-19-black-fsd-no.jpg',
    'blue-19-black-full-yes': 'img/cars/model-y-blue-19-black-fsd-perf.jpg',

    'blue-19-white-standard-none': 'img/cars/model-y-blue-19-white-standard-no.jpg',
    'blue-19-white-standard-yes': 'img/cars/model-y-blue-19-white-standard-perf.jpg',
    'blue-19-white-full-none': 'img/cars/model-y-blue-19-white-fsd-no.jpg',
    'blue-19-white-full-yes': 'img/cars/model-y-blue-19-white-fsd-perf.jpg',
    
    'blue-20-black-standard-none': 'img/cars/model-y-blue-20-black-standard-no.jpg',
    'blue-20-black-standard-yes': 'img/cars/model-y-blue-20-black-standard-perf.jpg',
    'blue-20-black-full-none': 'img/cars/model-y-blue-20-black-fsd-no.jpg',
    'blue-20-black-full-yes': 'img/cars/model-y-blue-20-black-fsd-perf.jpg',

    'blue-20-white-standard-none': 'img/cars/model-y-blue-20-white-standard-no.jpg',
    'blue-20-white-standard-yes': 'img/cars/model-y-blue-20-white-standard-perf.jpg',
    'blue-20-white-full-none': 'img/cars/model-y-blue-20-white-fsd-no.jpg',
    'blue-20-white-full-yes': 'img/cars/model-y-blue-20-white-fsd-perf.jpg',

    // Красный цвет (нужны аналогичные изображения)
    'red-19-black-standard-none': 'img/cars/model-y-red-19-black-standard-no.jpg',
    'red-19-black-standard-yes': 'img/cars/model-y-red-19-black-standard-perf.jpg',
    'red-19-black-full-none': 'img/cars/model-y-red-19-black-fsd-no.jpg',
    'red-19-black-full-yes': 'img/cars/model-y-red-19-black-fsd-perf.jpg',

    'red-19-white-standard-none': 'img/cars/model-y-red-19-white-standard-no.jpg',
    'red-19-white-standard-yes': 'img/cars/model-y-red-19-white-standard-perf.jpg',
    'red-19-white-full-none': 'img/cars/model-y-red-19-white-fsd-no.jpg',
    'red-19-white-full-yes': 'img/cars/model-y-red-19-white-fsd-perf.jpg',
    
    'red-20-black-standard-none': 'img/cars/model-y-red-20-black-standard-no.jpg',
    'red-20-black-standard-yes': 'img/cars/model-y-red-20-black-standard-perf.jpg',
    'red-20-black-full-none': 'img/cars/model-y-red-20-black-fsd-no.jpg',
    'red-20-black-full-yes': 'img/cars/model-y-red-20-black-fsd-perf.jpg',

    'red-20-white-standard-none': 'img/cars/model-y-red-20-white-standard-no.jpg',
    'red-20-white-standard-yes': 'img/cars/model-y-red-20-white-standard-perf.jpg',
    'red-20-white-full-none': 'img/cars/model-y-red-20-white-fsd-no.jpg',
    'red-20-white-full-yes': 'img/cars/model-y-red-20-white-fsd-perf.jpg',

    // Дефолтное изображение, если комбинации нет или изображение не найдено
    'default': 'https://digitalassets.tesla.com/tesla-resources/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-NA.jpg' 
};

document.addEventListener('DOMContentLoaded', () => {
    updateConfig(); // Инициализация цены и изображения при загрузке страницы
});

function updateConfig() {
    const selectedColor = document.getElementById('color').value;
    const selectedWheels = document.getElementById('wheels').value;
    const selectedInterior = document.getElementById('interior').value;
    const selectedAutopilot = document.getElementById('autopilot').value;
    const selectedPerformance = document.getElementById('performance').value; // Новая опция

    let currentPrice = basePrice;
    currentPrice += options.color[selectedColor];
    currentPrice += options.wheels[selectedWheels];
    currentPrice += options.interior[selectedInterior];
    currentPrice += options.autopilot[selectedAutopilot];
    currentPrice += options.performance[selectedPerformance]; // Добавляем стоимость Performance

    // Обновление цены
    document.getElementById('finalPrice').textContent = currentPrice.toLocaleString(currentLanguage + '-' + currentLanguage.toUpperCase()) + ' $';

    // Обновление изображения
    const carImage = document.getElementById('carImage');
    const imageKey = `${selectedColor}-${selectedWheels}-${selectedInterior}-${selectedAutopilot}-${selectedPerformance}`;
    
    // Проверяем, есть ли изображение для данной комбинации
    if (imageUrls[imageKey]) {
        carImage.src = imageUrls[imageKey];
    } else {
        // Если комбинации нет, используем дефолтное изображение и выводим предупреждение
        console.warn(`No image found for combination: ${imageKey}. Using default image.`);
        carImage.src = imageUrls['default'];
    }
}