
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Quote } from 'lucide-react';

const MaxVerstappenMessage = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-f1-black via-blue-900/20 to-f1-black">
      <div className="max-w-4xl mx-auto">
        <Card className="f1-card border-blue-500/50 relative overflow-hidden animate-zoom-in">
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
            <Trophy className="w-full h-full text-yellow-500" />
          </div>
          
          <CardContent className="p-8 md:p-12 relative">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center border-2 border-yellow-500">
                  <span className="text-2xl font-bold text-white">MV</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Max Verstappen</h3>
                <p className="text-blue-400 font-semibold">Campeón Mundial de F1</p>
                <p className="text-f1-silver text-sm">Red Bull Racing</p>
              </div>
            </div>

            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-f1-red/50" />
              <blockquote className="text-lg md:text-xl text-f1-white leading-relaxed pl-6 italic">
                "¡Hola campeón! Te invito a vivir una experiencia única que combina la adrenalina 
                de la Fórmula 1 con el arte cinematográfico. Esta película captura la esencia de 
                nuestro deporte: la velocidad, la pasión, la dedicación y esos momentos que nos 
                definen como pilotos. 
                <br /><br />
                Cada vuelta, cada adelantamiento, cada victoria... todo está aquí. Prepárate para 
                sentir la emoción desde la primera fila. ¡Que disfrutes de esta experiencia 
                exclusiva tanto como yo disfruto cada carrera!"
              </blockquote>
              <Quote className="absolute -bottom-2 -right-2 w-8 h-8 text-f1-red/50 rotate-180" />
            </div>

            <div className="mt-8 pt-6 border-t border-f1-red/30">
              <div className="flex items-center justify-between">
                <div className="text-f1-silver">
                  <p className="text-sm">Con los mejores deseos,</p>
                  <p className="text-f1-red font-bold text-lg">Max Verstappen #1</p>
                </div>
                <div className="flex space-x-2">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  <Trophy className="w-6 h-6 text-yellow-500" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MaxVerstappenMessage;
