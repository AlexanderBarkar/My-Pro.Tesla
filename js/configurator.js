const basePrice = 50000;

const options = {
    color: {
        white: 0,
        black: 0,
        blue: 1000,
        red: 1500
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
        full: 7000
    },
    performance: {
        no: 0,
        yes: 10000
    }
};

const imageUrls = {
    'blue-20-black-standard-no': 'img/cars/model-y-blue-20-black-standard-no.jpg',
    'blue-20-black-standard-yes': 'img/cars/model-y-blue-20-black-standard-perf.jpg',
    'blue-20-white-standard-no': 'img/cars/model-y-blue-20-white-standard-no.jpg',
    'blue-20-white-standard-yes': 'img/cars/model-y-blue-20-white-standard-perf.jpg',
    'red-20-black-full-no': 'img/cars/model-y-red-20-black-fsd-no.jpg',
    'red-20-black-full-yes': 'img/cars/model-y-red-20-black-fsd-perf.jpg',
    default: 'https://digitalassets.tesla.com/tesla-resources/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-NA.jpg'
};

document.addEventListener('DOMContentLoaded', () => {
    updateConfig();
});

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

    carImage.src = imageUrls[imageKey] || imageUrls.default;
}

window.updateConfig = updateConfig;
