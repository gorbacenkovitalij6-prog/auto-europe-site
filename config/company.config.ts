// Конфигурация компании
// Для создания клона для другой компании - просто измените данные в этом файле

export const companyConfig = {
  // Основная информация
  name: "ООО \"СД-Сервис\"",
  slogan: "Пригон автомобилей",
  category: "Автосалон, пригон автомобилей",

  // Контакты
  phone: "+7(938)359-10-91",
  phoneLink: "+79383591091",
  email: "ooo.lts@autorambler.ru",
  website: "transavtopskov.ru",

  // Адрес
  address: {
    full: "214012, Смоленская область, г Смоленск, Ново-Московская ул, д. 2/8, офис 305",
    city: "Смоленск",
    region: "Смоленская область",
    street: "Ново-Московская ул, д. 2/8, офис 305",
    zipCode: "214012"
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
    alt: "ООО \"СД-Сервис\""
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
