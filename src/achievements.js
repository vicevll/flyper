const ACHIEVEMENTS = {
    // === PRIMEROS PASOS ===
    first_flight: {
        id: 'first_flight',
        name: 'Primer Despegue',
        description: 'Completa tu primer vuelo',
        icon: '🛫',
        category: 'basics',
        target: 1,
        unit: 'vuelos',
        getValue: (stats) => stats.totalFlights,
        condition: (stats) => stats.totalFlights >= 1
    },
    first_save: {
        id: 'first_save',
        name: 'Planificador',
        description: 'Guarda tu primer itinerario en el Hangar',
        icon: '📋',
        category: 'basics',
        target: 1,
        unit: 'guardados',
        getValue: (stats) => stats.savedItineraries,
        condition: (stats) => stats.savedItineraries >= 1
    },
    first_share: {
        id: 'first_share',
        name: 'Generoso',
        description: 'Comparte un plan via link',
        icon: '🔗',
        category: 'basics',
        target: 1,
        unit: 'compartidos',
        getValue: (stats) => stats.sharedPlans,
        condition: (stats) => stats.sharedPlans >= 1
    },

    // === TIEMPO ACUMULADO ===
    one_hour: {
        id: 'one_hour',
        name: 'Aprendiz',
        description: 'Acumula 1 hora de vuelo',
        icon: '⏱️',
        category: 'time',
        target: 60,
        unit: 'min',
        getValue: (stats) => stats.totalFlightTime,
        condition: (stats) => stats.totalFlightTime >= 60
    },
    ten_hours: {
        id: 'ten_hours',
        name: 'Piloto Privado',
        description: 'Acumula 10 horas de vuelo',
        icon: '🎖️',
        category: 'time',
        target: 600,
        unit: 'min',
        getValue: (stats) => stats.totalFlightTime,
        condition: (stats) => stats.totalFlightTime >= 600
    },
    fifty_hours: {
        id: 'fifty_hours',
        name: 'Piloto Comercial',
        description: 'Acumula 50 horas de vuelo',
        icon: '✈️',
        category: 'time',
        target: 3000,
        unit: 'min',
        getValue: (stats) => stats.totalFlightTime,
        condition: (stats) => stats.totalFlightTime >= 3000
    },
    hundred_hours: {
        id: 'hundred_hours',
        name: 'Capitán',
        description: 'Acumula 100 horas de vuelo',
        icon: '👨‍✈️',
        category: 'time',
        target: 6000,
        unit: 'min',
        getValue: (stats) => stats.totalFlightTime,
        condition: (stats) => stats.totalFlightTime >= 6000
    },

    // === RACHAS ===
    streak_3: {
        id: 'streak_3',
        name: 'Consistente',
        description: '3 días seguidos volando',
        icon: '🔥',
        category: 'streak',
        target: 3,
        unit: 'días',
        getValue: (stats) => stats.longestStreak,
        condition: (stats) => stats.longestStreak >= 3
    },
    streak_7: {
        id: 'streak_7',
        name: 'Dedicado',
        description: '7 días seguidos volando',
        icon: '🔥🔥',
        category: 'streak',
        target: 7,
        unit: 'días',
        getValue: (stats) => stats.longestStreak,
        condition: (stats) => stats.longestStreak >= 7
    },
    streak_30: {
        id: 'streak_30',
        name: 'Imparable',
        description: '30 días seguidos volando',
        icon: '🔥🔥🔥',
        category: 'streak',
        target: 30,
        unit: 'días',
        getValue: (stats) => stats.longestStreak,
        condition: (stats) => stats.longestStreak >= 30
    },

    // === EXPLORACIÓN ===
    airports_5: {
        id: 'airports_5',
        name: 'Turista',
        description: 'Visita 5 aeropuertos diferentes',
        icon: '🗺️',
        category: 'exploration',
        target: 5,
        unit: 'aptos',
        getValue: (stats) => stats.airportsVisited.length,
        condition: (stats) => stats.airportsVisited.length >= 5
    },
    airports_15: {
        id: 'airports_15',
        name: 'Viajero',
        description: 'Visita 15 aeropuertos diferentes',
        icon: '🌍',
        category: 'exploration',
        target: 15,
        unit: 'aptos',
        getValue: (stats) => stats.airportsVisited.length,
        condition: (stats) => stats.airportsVisited.length >= 15
    },
    airports_50: {
        id: 'airports_50',
        name: 'Trotamundos',
        description: 'Visita 50 aeropuertos diferentes',
        icon: '🌏',
        category: 'exploration',
        target: 50,
        unit: 'aptos',
        getValue: (stats) => stats.airportsVisited.length,
        condition: (stats) => stats.airportsVisited.length >= 50
    },

    // === PRODUCTIVIDAD ===
    perfect_flight: {
        id: 'perfect_flight',
        name: 'Perfeccionista',
        description: 'Completa todas las tareas de un vuelo',
        icon: '💯',
        category: 'productivity',
        target: 1,
        unit: 'vuelos perfectos',
        getValue: (stats) => stats.perfectFlights,
        condition: (stats) => stats.perfectFlights >= 1
    },
    marathon: {
        id: 'marathon',
        name: 'Maratonista',
        description: 'Completa un vuelo de 4+ horas',
        icon: '🏃',
        category: 'productivity',
        target: 240,
        unit: 'min (récord)',
        getValue: (stats) => stats.longestSingleFlight,
        condition: (stats) => stats.longestSingleFlight >= 240
    },
    no_pause: {
        id: 'no_pause',
        name: 'Sin Escalas',
        description: 'Completa un vuelo sin usar pausas',
        icon: '⚡',
        category: 'productivity',
        target: 1,
        unit: 'vuelos sin pausa',
        getValue: (stats) => stats.flightsWithoutPause,
        condition: (stats) => stats.flightsWithoutPause >= 1
    },

    // === HORARIOS ===
    early_bird: {
        id: 'early_bird',
        name: 'Madrugador',
        description: 'Completa un vuelo antes de las 6am',
        icon: '🌅',
        category: 'schedule',
        target: 1,
        unit: 'vuelo < 6am',
        getValue: (stats) => (stats.flightsByHour && Object.keys(stats.flightsByHour).some(h => parseInt(h) < 6)) ? 1 : 0,
        condition: (stats) => stats.flightsByHour && Object.keys(stats.flightsByHour).some(h => parseInt(h) < 6)
    },
    night_owl: {
        id: 'night_owl',
        name: 'Noctámbulo',
        description: 'Completa un vuelo después de medianoche',
        icon: '🦉',
        category: 'schedule',
        target: 1,
        unit: 'vuelo > 00am',
        getValue: (stats) => (stats.flightsByHour && (stats.flightsByHour['0'] || stats.flightsByHour['1'] || stats.flightsByHour['2'])) ? 1 : 0,
        condition: (stats) => stats.flightsByHour && (stats.flightsByHour['0'] || stats.flightsByHour['1'] || stats.flightsByHour['2'])
    }
};

const ACHIEVEMENT_CATEGORIES = {
    basics: { name: 'Primeros Pasos', icon: '🎯' },
    time: { name: 'Tiempo de Vuelo', icon: '⏱️' },
    streak: { name: 'Rachas', icon: '🔥' },
    exploration: { name: 'Exploración', icon: '🌍' },
    productivity: { name: 'Productividad', icon: '💪' },
    schedule: { name: 'Horarios', icon: '🕐' }
};