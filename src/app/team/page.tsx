'use client';

import { Button } from '@/components/ui/button';
import { Send, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Дмитрий Стебельков',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces'
    },
    {
      name: 'Андрей Олейник',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces'
    },
    {
      name: 'Карташов Алексей',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces'
    },
    {
      name: 'Андрейцева Яна',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces'
    },
    {
      name: 'Сечин Давид',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces'
    },
    {
      name: 'Андрей Мальков',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces'
    },
    {
      name: 'Марьенков Аркадий',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces'
    },
    {
      name: 'Романов Руслан',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=faces'
    },
    {
      name: 'Иванов Сергей',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=faces'
    },
    {
      name: 'Петров Александр',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop&crop=faces'
    },
    {
      name: 'Смирнов Михаил',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&crop=faces'
    },
    {
      name: 'Козлова Елена',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#BF360C] px-6 py-3">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex flex-col items-start">
              <div className="text-2xl font-bold text-white leading-none">ОРЕОН</div>
              <div className="text-[8px] font-semibold text-white tracking-[0.15em] uppercase mt-0.5">
                Авто из Европы
              </div>
            </div>
          </Link>

          <nav className="flex items-center gap-5 text-white text-sm">
            <Link href="/" className="hover:text-yellow-300 transition-colors">
              Главная
            </Link>
            <Link href="/about" className="hover:text-yellow-300 transition-colors">
              О нас
            </Link>
            <Link href="/team" className="text-yellow-300 font-medium">
              Команда
            </Link>
            <Link href="/reviews" className="hover:text-yellow-300 transition-colors">
              Отзывы
            </Link>
            <Link href="/catalog" className="hover:text-yellow-300 transition-colors">
              Каталог
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://t.me/OreonAuto"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#0088cc] rounded-full flex items-center justify-center hover:bg-[#0077b3] transition-colors"
              title="Наш Telegram канал"
            >
              <Send className="w-5 h-5 text-white" />
            </a>
            <a
              href="tel:+79991234567"
              className="flex items-center gap-2 bg-white text-[#BF360C] hover:bg-gray-100 px-4 py-2 rounded-full font-medium shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">+7 (999) 123-45-67</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Diagonal Stripes */}
      <section className="relative bg-[#BF360C] overflow-hidden">
        {/* Diagonal Stripes Pattern */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-full flex">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 h-full bg-[#D84315] transform skew-x-[-20deg] origin-top-left"
                style={{
                  width: '80px',
                  marginLeft: i % 2 === 0 ? '40px' : '0px',
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 px-8 py-8">
          <div className="max-w-screen-2xl mx-auto">
            <h1 className="text-5xl font-bold text-white">КОМАНДА</h1>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-12 px-8 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] text-center">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#BF360C] text-white">
        <div className="max-w-screen-2xl mx-auto px-8 py-6">
          {/* Top section with logo and navigation */}
          <div className="flex items-center justify-between pb-6 border-b border-white/20">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex flex-col items-start">
                <div className="text-2xl font-bold text-white leading-none">ОРЕОН</div>
                <div className="text-[8px] font-semibold text-white tracking-[0.15em] uppercase mt-0.5">
                  Авто из Европы
                </div>
              </div>
            </Link>

            <nav className="flex items-center gap-6 text-sm">
              <Link href="/" className="hover:text-yellow-300 transition-colors">
                Главная
              </Link>
              <Link href="/about" className="hover:text-yellow-300 transition-colors">
                О нас
              </Link>
              <Link href="/team" className="text-yellow-300 font-medium">
                Команда
              </Link>
              <Link href="/reviews" className="hover:text-yellow-300 transition-colors">
                Отзывы
              </Link>
              <Link href="/catalog" className="hover:text-yellow-300 transition-colors">
                Каталог
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://t.me/OreonAuto"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0088cc] rounded-full flex items-center justify-center hover:bg-[#0077b3] transition-colors"
                title="Наш Telegram канал"
              >
                <Send className="w-5 h-5 text-white" />
              </a>
              <a
                href="tel:+79991234567"
                className="flex items-center gap-2 bg-white text-[#BF360C] hover:bg-gray-100 px-4 py-2 rounded-full font-medium shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-semibold">+7 (999) 123-45-67</span>
              </a>
            </div>
          </div>

          {/* Bottom section with contact info */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
            <div>
              <h3 className="font-bold mb-2 text-white/60 text-xs">Адрес</h3>
              <p className="text-xs">
                160019, Вологодская область,<br />
                г. Вологда, ул. Ленинградская, д. 18
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2 text-white/60 text-xs">Телефон</h3>
              <a href="tel:+74951780646" className="text-xs hover:text-yellow-300 transition-colors">
                +7 (495) 178-06-46
              </a>
            </div>

            <div>
              <h3 className="font-bold mb-2 text-white/60 text-xs">Электронная почта</h3>
              <a href="mailto:oreon.ooo@internet.ru" className="text-xs hover:text-yellow-300 transition-colors">
                oreon.ooo@internet.ru
              </a>
            </div>

            <div>
              <h3 className="font-bold mb-2 text-white/60 text-xs">Реквизиты</h3>
              <div className="text-xs space-y-1">
                <p>ОГРН 1133525021310</p>
                <p>ИНН 3525313619</p>
                <p>КПП 352501001</p>
                <p>ОКПО 10571608</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 pt-4 border-t border-white/20 text-center">
            <p className="text-xs text-white/60">
              Все права защищены © 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
