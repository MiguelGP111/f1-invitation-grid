
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Film } from 'lucide-react';

const F1VideoSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-transparent to-f1-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <Film className="w-8 h-8 text-f1-red" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-f1-red to-yellow-500 bg-clip-text text-transparent">
              EXPERIENCIA CINEMATOGRÁFICA
            </h2>
            <Play className="w-8 h-8 text-f1-red racing-pulse" />
          </div>
          <p className="text-xl text-f1-silver max-w-3xl mx-auto">
            Sumérgete en el mundo de la Fórmula 1 como nunca antes. Una película que captura 
            la velocidad, la emoción y la pasión de este increíble deporte.
          </p>
        </div>

        <Card className="f1-card border-f1-red/30 overflow-hidden animate-zoom-in">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl text-f1-white">
              Tráiler Oficial - Experiencia F1
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-f1-black/50">
              <iframe
                src="https://www.youtube.com/embed/lNFGZaMqWa8"
                title="F1 Movie Experience"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-f1-red racing-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 racing-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 rounded-full bg-green-500 racing-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-f1-silver text-lg">
                🏁 <span className="text-f1-red font-semibold">ACCESO EXCLUSIVO</span> 🏁
              </p>
              <p className="text-sm text-f1-silver/70 mt-2">
                Contenido premium disponible solo para invitados VIP
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Racing stats decoration */}
        <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
          <div className="text-center p-4 bg-f1-black/30 rounded-lg border border-f1-red/20">
            <div className="text-2xl font-bold text-f1-red">350</div>
            <div className="text-sm text-f1-silver">KM/H</div>
          </div>
          <div className="text-center p-4 bg-f1-black/30 rounded-lg border border-yellow-500/20">
            <div className="text-2xl font-bold text-yellow-500">23</div>
            <div className="text-sm text-f1-silver">CARRERAS</div>
          </div>
          <div className="text-center p-4 bg-f1-black/30 rounded-lg border border-green-500/20">
            <div className="text-2xl font-bold text-green-500">20</div>
            <div className="text-sm text-f1-silver">PILOTOS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default F1VideoSection;
