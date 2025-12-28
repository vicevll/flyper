const airports = [
    // --- SUDAMÉRICA ---
    // Chile
    { code: 'SCL', city: 'Santiago', country: 'Chile', lat: -33.393, lon: -70.793 },
    { code: 'ANF', city: 'Antofagasta', country: 'Chile', lat: -23.444, lon: -70.445 },
    { code: 'CCP', city: 'Concepción', country: 'Chile', lat: -36.772, lon: -73.063 },
    { code: 'PMC', city: 'Puerto Montt', country: 'Chile', lat: -41.434, lon: -73.097 },
    { code: 'IQQ', city: 'Iquique', country: 'Chile', lat: -20.535, lon: -70.181 },
    { code: 'PUQ', city: 'Punta Arenas', country: 'Chile', lat: -53.002, lon: -70.855 },
    // Brasil
    { code: 'GRU', city: 'São Paulo', country: 'Brasil', lat: -23.435, lon: -46.473 },
    { code: 'CGH', city: 'São Paulo', country: 'Brasil', lat: -23.626, lon: -46.656 },
    { code: 'BSB', city: 'Brasilia', country: 'Brasil', lat: -15.869, lon: -47.920 },
    { code: 'GIG', city: 'Río de Janeiro', country: 'Brasil', lat: -22.809, lon: -43.250 },
    { code: 'VCP', city: 'Campinas', country: 'Brasil', lat: -23.007, lon: -47.134 },
    // Perú
    { code: 'LIM', city: 'Lima', country: 'Perú', lat: -12.022, lon: -77.114 },
    { code: 'CUZ', city: 'Cusco', country: 'Perú', lat: -13.535, lon: -71.938 },
    { code: 'AQP', city: 'Arequipa', country: 'Perú', lat: -16.341, lon: -71.566 },
    { code: 'IQT', city: 'Iquitos', country: 'Perú', lat: -3.784, lon: -73.309 },
    { code: 'PIU', city: 'Piura', country: 'Perú', lat: -5.206, lon: -80.616 },
    // Argentina
    { code: 'EZE', city: 'Buenos Aires', country: 'Argentina', lat: -34.815, lon: -58.535 },
    { code: 'AEP', city: 'Buenos Aires', country: 'Argentina', lat: -34.559, lon: -58.415 },
    { code: 'COR', city: 'Córdoba', country: 'Argentina', lat: -31.323, lon: -64.208 },
    { code: 'MDZ', city: 'Mendoza', country: 'Argentina', lat: -32.831, lon: -68.793 },
    { code: 'BRC', city: 'Bariloche', country: 'Argentina', lat: -41.151, lon: -71.157 },
    // Otros Sudamérica
    { code: 'BOG', city: 'Bogotá', country: 'Colombia', lat: 4.701, lon: -74.146 },
    { code: 'MDE', city: 'Medellín', country: 'Colombia', lat: 6.164, lon: -75.423 },
    { code: 'MVD', city: 'Montevideo', country: 'Uruguay', lat: -34.838, lon: -56.028 },
    { code: 'UIO', city: 'Quito', country: 'Ecuador', lat: -0.222, lon: -78.509 },

    // --- NORTEAMÉRICA ---
    { code: 'MEX', city: 'C. de México', country: 'México', lat: 19.436, lon: -99.072 },
    { code: 'CUN', city: 'Cancún', country: 'México', lat: 21.036, lon: -86.877 },
    { code: 'JFK', city: 'Nueva York', country: 'USA', lat: 40.641, lon: -73.778 },
    { code: 'LAX', city: 'Los Ángeles', country: 'USA', lat: 33.941, lon: -118.408 },
    { code: 'MIA', city: 'Miami', country: 'USA', lat: 25.793, lon: -80.290 },
    { code: 'ORD', city: 'Chicago', country: 'USA', lat: 41.974, lon: -87.907 },
    { code: 'ATL', city: 'Atlanta', country: 'USA', lat: 33.640, lon: -84.427 },
    { code: 'YYZ', city: 'Toronto', country: 'Canadá', lat: 43.677, lon: -79.624 },
    { code: 'YVR', city: 'Vancouver', country: 'Canadá', lat: 49.194, lon: -123.177 },

    // --- EUROPA ---
    { code: 'MAD', city: 'Madrid', country: 'España', lat: 40.498, lon: -3.567 },
    { code: 'BCN', city: 'Barcelona', country: 'España', lat: 41.297, lon: 2.083 },
    { code: 'CDG', city: 'París', country: 'Francia', lat: 49.009, lon: 2.547 },
    { code: 'LHR', city: 'Londres', country: 'Reino Unido', lat: 51.470, lon: -0.454 },
    { code: 'BER', city: 'Berlín', country: 'Alemania', lat: 52.366, lon: 13.503 },
    { code: 'FCO', city: 'Roma', country: 'Italia', lat: 41.800, lon: 12.238 },
    { code: 'FRA', city: 'Frankfurt', country: 'Alemania', lat: 50.033, lon: 8.570 },
    { code: 'AMS', city: 'Ámsterdam', country: 'Países Bajos', lat: 52.310, lon: 4.768 },
    { code: 'IST', city: 'Estambul', country: 'Turquía', lat: 41.275, lon: 28.751 },

    // --- ASIA / OCEANÍA ---
    { code: 'HND', city: 'Tokio', country: 'Japón', lat: 35.549, lon: 139.779 },
    { code: 'ICN', city: 'Seúl', country: 'Corea del Sur', lat: 37.460, lon: 126.440 },
    { code: 'BKK', city: 'Bangkok', country: 'Tailandia', lat: 13.756, lon: 100.501 },
    { code: 'SIN', city: 'Singapur', country: 'Singapur', lat: 1.364, lon: 103.991 },
    { code: 'HKG', city: 'Hong Kong', country: 'Hong Kong', lat: 22.308, lon: 113.918 },
    { code: 'DXB', city: 'Dubái', country: 'EAU', lat: 25.204, lon: 55.270 },
    { code: 'SYD', city: 'Sídney', country: 'Australia', lat: -33.868, lon: 151.209 },
    { code: 'AKL', city: 'Auckland', country: 'N. Zelanda', lat: -37.008, lon: 174.791 }
];
