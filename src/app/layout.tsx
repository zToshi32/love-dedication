import type { Metadata } from "next";
import "./globals.css";
import YouTubeMusic from '../components/YouTubeMusic';

export const metadata: Metadata = {
  title: "Toshi & Naayita 💕",
  description: "Una dedicatoria especial llena de amor",
};

// Deterministic particle positions to avoid hydration issues
const particlePositions = [
  { left: '10%', delay: 0, duration: 8 },
  { left: '20%', delay: 1.5, duration: 9 },
  { left: '30%', delay: 3, duration: 10 },
  { left: '40%', delay: 4.5, duration: 8.5 },
  { left: '50%', delay: 6, duration: 11 },
  { left: '60%', delay: 2, duration: 9.5 },
  { left: '70%', delay: 7, duration: 10.5 },
  { left: '80%', delay: 1, duration: 8.8 },
  { left: '90%', delay: 5, duration: 9.2 },
  { left: '15%', delay: 3.5, duration: 10.8 },
  { left: '25%', delay: 0.5, duration: 9.8 },
  { left: '35%', delay: 6.5, duration: 8.3 },
  { left: '45%', delay: 2.5, duration: 11.2 },
  { left: '55%', delay: 4, duration: 9.7 },
  { left: '65%', delay: 7.5, duration: 10.1 },
  { left: '75%', delay: 1.8, duration: 8.9 },
  { left: '85%', delay: 5.5, duration: 9.4 },
  { left: '95%', delay: 3.2, duration: 10.6 },
  { left: '5%', delay: 6.8, duration: 8.7 },
  { left: '12%', delay: 2.8, duration: 9.9 },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen overflow-x-hidden">
        {/* Background Image with Blur Effect */}
        <div
          className="fixed inset-0 z-0"
          style={{
  backgroundImage: 'url("/images/tochifondo.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  filter: 'blur(3px)',
}}

        />

        {/* Overlay for better text readability */}
        <div className="fixed inset-0 z-[1] bg-black/30" />

        {/* Romantic gradient overlay */}
        <div className="fixed inset-0 z-[2] romantic-gradient" />

        {/* Floating particles */}
        <div className="particles z-[3]">
          {particlePositions.map((particle, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: particle.left,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10">
          {children}
        </div>
        {/* Background Music */}
        <YouTubeMusic  />
        
        {/* Main content */}
      </body>
    </html>
  );
}
