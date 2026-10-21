const cars = [
    {
        brand: 'Porsche',
        model: '911 Carrera',
        year: 2023,
        km: 1500,
        price: 'R$ 950.000',
        image: 'assets/porsche.png',
        type: 'Sport'
    },
    {
        brand: 'BMW',
        model: 'X5 M50i',
        year: 2024,
        km: 0,
        price: 'R$ 680.000',
        image: 'assets/bmw_x5.png',
        type: 'SUV'
    },
    {
        brand: 'Tesla',
        model: 'Model S Plaid',
        year: 2022,
        km: 5000,
        price: 'R$ 820.000',
        image: 'assets/tesla_s.png',
        type: 'Sedan'
    },
    {
        brand: 'Audi',
        model: 'RS6 Avant',
        year: 2021,
        km: 12000,
        price: 'R$ 1.100.000',
        image: 'assets/porsche.png', // Reusing generated image
        type: 'Sport'
    },
    {
        brand: 'Mercedes',
        model: 'GLE 63S',
        year: 2023,
        km: 2500,
        price: 'R$ 890.000',
        image: 'assets/bmw_x5.png', // Reusing generated image
        type: 'SUV'
    },
    {
        brand: 'Ferrari',
        model: 'F8 Tributo',
        year: 2020,
        km: 4500,
        price: 'R$ 3.500.000',
        image: 'assets/tesla_s.png', // Reusing generated image
        type: 'Sport'
    }
];

function renderCars(filteredCars) {
    const carGrid = document.getElementById('car-grid');
    carGrid.innerHTML = '';

    if (filteredCars.length === 0) {
        carGrid.innerHTML = '<p class="no-results">Nenhum carro encontrado com esses filtros.</p>';
        return;
    }

    filteredCars.forEach(car => {
        const card = document.createElement('div');
        card.className = 'car-card';
        card.innerHTML = `
            <div class="car-image">
                <img src="${car.image}" alt="${car.brand} ${car.model}">
            </div>
            <div class="car-info">
                <h3>${car.brand} ${car.model}</h3>
                <p class="car-details">${car.year} | ${car.km} km</p>
                <div class="car-footer">
                    <span class="car-price">${car.price}</span>
                    <button class="btn-details">Detalhes</button>
                </div>
            </div>
        `;
        carGrid.appendChild(card);
    });
}

function filterCars() {
    const brandFilter = document.getElementById('filter-brand').value.toLowerCase();
    const modelFilter = document.getElementById('filter-model').value.toLowerCase();
    const yearFilter = document.getElementById('filter-year').value;
    const kmFilter = document.getElementById('filter-km').value;

    const filtered = cars.filter(car => {
        const matchBrand = car.brand.toLowerCase().includes(brandFilter);
        const matchModel = car.model.toLowerCase().includes(modelFilter);
        const matchYear = yearFilter === '' || car.year >= parseInt(yearFilter);
        const matchKm = kmFilter === '' || car.km <= parseInt(kmFilter);

        return matchBrand && matchModel && matchYear && matchKm;
    });

    renderCars(filtered);
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderCars(cars);

    // Add listeners with debouncing or just input for live feel
    document.getElementById('filter-brand').addEventListener('input', filterCars);
    document.getElementById('filter-model').addEventListener('input', filterCars);
    document.getElementById('filter-year').addEventListener('change', filterCars);
    document.getElementById('filter-km').addEventListener('input', filterCars);
});
