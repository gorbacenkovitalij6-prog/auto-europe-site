import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ООО ЛТС — Яндекс Карты',
  description: 'ООО ЛТС, 180006, Псковская область, г. Псков, ул. Леона Поземского, д. 125, офис 1 — отзывы, фото, время работы, телефон и адрес на карте',
  icons: {
    icon: [
      { url: '/yandex-icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    shortcut: '/yandex-icon.svg',
    apple: '/apple-touch-icon.png',
  },
};

export default function MapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
