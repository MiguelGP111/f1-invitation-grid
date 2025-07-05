
import React, { useState } from 'react';
import AuthForm from '@/components/AuthForm';
import F1Gallery from '@/components/F1Gallery';
import MaxVerstappenMessage from '@/components/MaxVerstappenMessage';
import F1VideoSection from '@/components/F1VideoSection';
import F1Footer from '@/components/F1Footer';
import { Button } from '@/components/ui/button';
import { LogOut, Zap, Trophy, Flag } from 'lucide-react';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [guestEmail, setGuestEmail] = useState('');
  const [guestName, setGuestName] = useState('');

  const handleLogin = (email: string, name: string) => {
    setGuestEmail(email);
    setGuestName(name);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setGuestEmail('');
    setGuestName('');
  };

  if (!isAuthenticated) {
    return <AuthForm onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-f1-black via-gray-900 to-f1-black text-white relative overflow-x-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 opacity-5">
        <div className="checkered-bg w-full h-full"></div>
      </div>
      
      {/* Speed lines animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-f1-red to-transparent w-full opacity-30"
            style={{
              top: `${30 + i * 20}%`,
              animationDelay: `${i * 1}s`,
              animation: 'speed-lines 3s ease-in-out infinite'
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Trophy className="w-8 h-8 text-yellow-500 racing-pulse" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-f1-red to-yellow-500 bg-clip-text text-transparent">
              F1 VIP EXPERIENCE
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-f1-silver">Bienvenido,</p>
              <p className="font-semibold text-f1-white">{guestName}</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="border-f1-red/50 text-f1-red hover:bg-f1-red hover:text-white transition-colors"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Salir
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <Flag className="w-12 h-12 text-f1-red racing-pulse" />
            <Zap className="w-16 h-16 text-yellow-500" />
            <Flag className="w-12 h-12 text-f1-red racing-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-f1-red via-yellow-500 to-f1-red bg-clip-text text-transparent animate-fade-in-up">
            FÓRMULA 1
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-f1-white animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            EXPERIENCIA CINEMATOGRÁFICA EXCLUSIVA
          </h2>
          
          <p className="text-xl md:text-2xl text-f1-silver mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Vive la adrenalina, la velocidad y la pasión de la Fórmula 1 como nunca antes. 
            Una invitación especial para descubrir los secretos del deporte más emocionante del mundo.
          </p>

          {/* Racing stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-f1-black/40 p-4 rounded-lg border border-f1-red/30">
              <div className="text-2xl font-bold text-f1-red">350+</div>
              <div className="text-xs text-f1-silver uppercase tracking-wide">KM/H</div>
            </div>
            <div className="bg-f1-black/40 p-4 rounded-lg border border-yellow-500/30">
              <div className="text-2xl font-bold text-yellow-500">23</div>
              <div className="text-xs text-f1-silver uppercase tracking-wide">Carreras</div>
            </div>
            <div className="bg-f1-black/40 p-4 rounded-lg border border-green-500/30">
              <div className="text-2xl font-bold text-green-500">20</div>
              <div className="text-xs text-f1-silver uppercase tracking-wide">Pilotos</div>
            </div>
            <div className="bg-f1-black/40 p-4 rounded-lg border border-blue-500/30">
              <div className="text-2xl font-bold text-blue-500">10</div>
              <div className="text-xs text-f1-silver uppercase tracking-wide">Equipos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative z-10">
        <F1Gallery />
        <MaxVerstappenMessage />
        <F1VideoSection />
        <F1Footer guestName={guestName} guestEmail={guestEmail} />
      </div>
    </div>
  );
};

export default Index;
