// Цены
const basePrice = 50000;

const options = {
    color: {
        white: 0,
        blue: 1000,
        red: 1500
    },
    wheels: {
        '19': 50,
        '20': 2000
    },
    interior: {
        black: 0,
        white: 1000
    },
    autopilot: {
        standard: 0,
        full: 7000
    },
    performance: {
        no: 0,
        yes: 10000
    }
};

// Картинки
const imageUrls = {
    'blue-20-black-standard-no': 'img/cars/model-y-blue-20-black-standard-no.jpg',
    'blue-20-black-standard-yes': 'img/cars/model-y-blue-20-black-standard-perf.jpg',
    'blue-20-white-standard-no': 'img/cars/model-y-blue-20-white-standard-no.jpg',
    'blue-20-white-standard-yes': 'img/cars/model-y-blue-20-white-standard-perf.jpg',

    'red-20-black-full-no': 'img/cars/model-y-red-20-black-fsd-no.jpg',
    'red-20-black-full-yes': 'img/cars/model-y-red-20-black-fsd-perf.jpg',

    // Добавляй сюда остальные комбинации по необходимости...

    'default': 'https://digitalassets.tesla.com/tesla-resources/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-NA.jpg'
};

// Язык
let currentLanguage = 'ru';

// Запускаем при загрузке
document.addEventListener('DOMContentLoaded', () => {
    updateConfig();
});

// Основная функция
function updateConfig() {
    const selectedColor = document.getElementById('color').value;
    const selectedWheels = document.getElementById('wheels').value;
    const selectedInterior = document.getElementById('interior').value;
    const selectedAutopilot = document.getElementById('autopilot').value;
    const selectedPerformance = document.getElementById('performance').value;

    let currentPrice = basePrice;
    currentPrice += options.color[selectedColor];
    currentPrice += options.wheels[selectedWheels];
    currentPrice += options.interior[selectedInterior];
    currentPrice += options.autopilot[selectedAutopilot];
    currentPrice += options.performance[selectedPerformance];

    document.getElementById('finalPrice').textContent = currentPrice.toLocaleString(
        currentLanguage === 'ru' ? 'ru-RU' : 'en-US',
        {
            style: 'currency',
            currency: 'USD'
        }
    );

    const imageKey = `${selectedColor}-${selectedWheels}-${selectedInterior}-${selectedAutopilot}-${selectedPerformance}`;
    const carImage = document.getElementById('carImage');

    if (imageUrls[imageKey]) {
        carImage.src = imageUrls[imageKey];
    } else {
        carImage.src = imageUrls['default'];
    }
}

// Делаем доступным из HTML (onchange)
window.updateConfig = updateConfig;