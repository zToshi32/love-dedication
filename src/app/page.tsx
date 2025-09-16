"use client";

import { useEffect, useState } from "react";

const romanticImages = [
  "https://i.imgur.com/MlKNB97.jpeg",
  "https://i.imgur.com/of7B4SF.jpeg",
  "https://i.imgur.com/z32bN1G.jpeg",
  "https://i.imgur.com/73dCQ4e.jpeg",
  "https://i.imgur.com/mNMHnsH.jpeg",
  "https://i.imgur.com/V0hAu6Y.jpeg",
  "https://i.imgur.com/3WtZuIj.jpeg",
  "https://i.imgur.com/1wYQxFt.jpeg",
  "https://i.imgur.com/N1ah1g6.jpeg",
  "https://i.imgur.com/YopAvrp.jpeg",
];

const dedicationMessages = [
  {
    title: "Tu Corazón",
    message: "Como siempre suelo decirte, tienes un gran corazón y eres una mujer maravillosa, no solo porque lo fuiste conmigo, sino porque me he dado cuenta de que lo eres con todas las personas a tu alrededor. Sé que darías hasta la vida por ellas.",
    icon: "💕"
  },
  {
    title: "Tu Luz",
    message: "Eres la luz que transformó mi mundo desde el instante en que llegaste. Siempre has iluminado mi camino, guiándome hacia mi bienestar.",
    icon: "✨"
  },
  {
    title: "Mi Universo Entero",
    message: "En tus ojos encuentro galaxias enteras, agradecido a ti por haberme tenido dentro de tu corazón por todo este tiempo.",
    icon: "🌙"
  },
  {
    title: "Mi Alma Gemela",
    message: "Contigo he encontrado mi otra mitad, la persona que siempre pedí en toda mi vida. Ahora me siento orgulloso de tenerte aquí a mi lado, la persona con la que quiero compartir mi vida entera.",
    icon: "💫"
  }
];

const loveQuotes = [
  "Contigo, cada momento es perfecto",
  "Tu amor es mi lugar favorito",
  "Eres mi sueño hecho realidad",
  "Mi corazón es tuyo para siempre",
  "Eres la razón de mi sonrisa",
];

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % loveQuotes.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="glass-rose rounded-3xl p-8 md:p-12 neon-border floating">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white neon-text mb-6">
              Para Ti, Mi Corazóncito de Melón
            </h1>
            <p className="text-lg md:text-xl text-pink-100 mb-8 leading-relaxed">
              Esta página es mi corazón convertido en código, cada línea escrita con amor,
              cada detalle pensado en ti. Eres mi inspiración, mi motivación y mi razón de ser un gran programador como lo solías decirlo.
            </p>
            <div className="text-2xl md:text-3xl text-pink-200 font-medium transition-all duration-1000 ease-in-out">
              {loveQuotes[currentQuote]}
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Scroll Gallery Section */}
      <section className="py-20">
        <div className="text-center mb-16">
          <div className="glass-pink rounded-2xl p-6 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white neon-text mb-1">
              Una pequeña Galeria de Fotos del Amor de mi Vida 💗
            </h2>
          </div>
        </div>

        {/* Infinite Scroll Gallery */}
        <div className="overflow-hidden py-8">
          <div className="flex space-x-6 infinite-scroll">
            {/* First set of images */}
            {romanticImages.map((image, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-80 h-60 glass rounded-xl overflow-hidden neon-border hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={image}
                  alt={`Romantic image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {romanticImages.map((image, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-80 h-60 glass rounded-xl overflow-hidden neon-border hover:scale-105 transition-transform duration-100"
              >
                <img
                  src={image}
                  alt={`Romantic image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedication Messages */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="glass-rose rounded-2xl p-6 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white neon-text mb-4">
                Algunas de muchas razones por la cual estoy contigo
              </h2>
              <p className="text-pink-100">
                Palabras que nacen del corazón para llegar al tuyo
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dedicationMessages.map((item, index) => (
              <div
                key={index}
                className="glass-pink rounded-2xl p-6 hover:glass-rose transition-all duration-300 floating"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div className="text-4xl mb-4 text-center">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white neon-text mb-4 text-center">
                  {item.title}
                </h3>
                <p className="text-pink-100 leading-relaxed text-center">
                  {item.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-rose rounded-3xl p-8 md:p-12 neon-border pulse-slow">
            <h2 className="text-3xl md:text-5xl font-bold text-white neon-text mb-6">
              Te Amo Infinitamente Hoy Mañana y Siempre
            </h2>
            <p className="text-lg md:text-xl text-pink-100 mb-8 leading-relaxed">
              Esta página la hice hace mucho tiempo, pero nunca te la entregué. Pasaba noches enteras intentando terminarla, pero cada vez solo encontraba más problemas. Aún falta mucho por hacer, pero estas páginas las creé con mucho amor, mientras también mejoraba mi léxico de programación. Sé que cometí muchos errores estúpidos, de los cuales me arrepiento profundamente. Por esas razones, estoy a punto de perder a la mujer que más amo en esta vida. Pedirte perdón una vez más tal vez no solucione nada, pero quiero recordarte todos los buenos momentos que pasamos, lo felices que fuimos, a pesar de los obstáculos que nos pusieron en el camino.
              Una vez más, te pido perdón por todo lo malo que hice. Tal vez este sea un 'hasta nunca', pero quiero que sepas que no cambies absolutamente nada de ti. Eres perfecta tal y como eres, una mujer excepcional en todos los sentidos. Créeme, tienes a los hombres a tus pies por lo increíble que eres, además de lo hermosa que eres por dentro y por fuera.
              Tengo mucho miedo de perderte y lamento haberte causado inseguridades. Tal vez alejarme sea una forma de sanar para ti, no lo sé, pero me siento muy inseguro de seguir intentándolo y seguirte hiriendo. Solo tenía miedo de romper esta relación, por eso no te conté la verdad en su momento. Ojalá algún día me perdones
            </p>
            <div className="text-6xl">💕</div>
            <p className="text-pink-200 mt-4 text-lg">
              Con todo mi amor, para toda la vida
            </p>
          </div>
        </div>
      </section>

      {/* Hearts floating animation - only render on client */}
      {mounted && (
        <div className="fixed inset-0 pointer-events-none z-[4]">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-pink-300 text-2xl animate-bounce opacity-20"
              style={{
                left: `${10 + (i * 10)}%`,
                top: `${20 + (i * 8)}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              💕
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
