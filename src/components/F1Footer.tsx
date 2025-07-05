
import React from 'react';
import { Trophy, Heart, Flag } from 'lucide-react';

interface F1FooterProps {
  guestName: string;
  guestEmail: string;
}

const F1Footer: React.FC<F1FooterProps> = ({ guestName, guestEmail }) => {
  const hostName = "Carlos Racing Team"; // Nombre del anfitrión

  return (
    <footer className="py-12 px-4 bg-gradient-to-t from-f1-black to-transparent border-t border-f1-red/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <Flag className="w-6 h-6 text-f1-red" />
            <Trophy className="w-8 h-8 text-yellow-500" />
            <Flag className="w-6 h-6 text-f1-red" />
          </div>
          <h3 className="text-2xl font-bold text-f1-white mb-2">
            EXPERIENCIA EXCLUSIVA F1
          </h3>
          <p className="text-f1-silver">
            Una invitación especial para vivir la adrenalina de la Fórmula 1
          </p>
        </div>

        {/* Guest and Host information */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-f1-black/40 p-6 rounded-lg border border-f1-red/20">
            <h4 className="text-lg font-semibold text-f1-red mb-2">Anfitrión</h4>
            <p className="text-f1-white font-bold text-xl">{hostName}</p>
            <p className="text-f1-silver text-sm">Organizador de la experiencia</p>
          </div>
          
          <div className="bg-f1-black/40 p-6 rounded-lg border border-yellow-500/20">
            <h4 className="text-lg font-semibold text-yellow-500 mb-2">Invitado VIP</h4>
            <p className="text-f1-white font-bold text-xl">{guestName}</p>
            <p className="text-f1-silver text-sm">{guestEmail}</p>
          </div>
        </div>

        {/* Racing divider */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="h-px bg-gradient-to-r from-transparent to-f1-red w-16"></div>
          <Heart className="w-5 h-5 text-f1-red racing-pulse" />
          <div className="h-px bg-gradient-to-r from-f1-red to-transparent w-16"></div>
        </div>

        <div className="text-f1-silver text-sm">
          <p className="mb-2">
            © 2024 F1 VIP Experience. Contenido exclusivo para invitados seleccionados.
          </p>
          <p className="text-xs opacity-70">
            "La velocidad es mi pasión, la victoria mi destino" - Espíritu F1
          </p>
        </div>

        {/* Checkered flag pattern */}
        <div className="mt-8 h-4 checkered-bg opacity-20 rounded"></div>
      </div>
    </footer>
  );
};

export default F1Footer;
