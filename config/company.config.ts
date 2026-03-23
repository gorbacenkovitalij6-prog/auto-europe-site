// Конфигурация компании
// Для создания клона для другой компании - просто измените данные в этом файле

export const companyConfig = {
  // Основная информация
  name: "ООО ЛТС",
  slogan: "Пригон автомобилей",
  category: "Автосалон, пригон автомобилей",

  // Контакты
  phone: "+7 (939) 322-37-04",
  phoneLink: "+79393223704",
  email: "ooo.lts@autorambler.ru",
  website: "transavtopskov.ru",

  // Адрес
  address: {
    full: "180006, Псковская область, г. Псков, ул. Леона Поземского, д. 125, офис 1",
    city: "Псков",
    region: "Псковская область",
    street: "ул. Леона Поземского, д. 125, офис 1",
    zipCode: "180006"
  },

  // Координаты на карте
  coordinates: {
    latitude: 57.843463,
    longitude: 28.308124,
    zoom: 17.13
  },

  // Рейтинг
  rating: {
    score: 4.8,
    totalReviews: 38,
    totalRatings: 78
  },

  // Логотип
  logo: {
    url: "/logoo.jpg",
    alt: "ООО ЛТС"
  },

  // График работы
  workingHours: {
    monday: "09:00 - 18:00",
    tuesday: "09:00 - 18:00",
    wednesday: "09:00 - 18:00",
    thursday: "09:00 - 18:00",
    friday: "09:00 - 18:00",
    saturday: "10:00 - 16:00",
    sunday: "Выходной"
  },

  // Дополнительные настройки
  settings: {
    showWhatsApp: false,
    showTelegram: false,
    telegramUsername: "",
    whatsappNumber: ""
  }
};

// Экспорт типа для TypeScript
export type CompanyConfig = typeof companyConfig;
