
import React from 'react';
import { Card } from '@/components/ui/card';

const F1Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      title: "Monoplaza en Acción",
      description: "La velocidad pura en cada curva"
    },
    {
      url: "https://images.unsplash.com/photo-1583900985737-6d0495555783?w=800&h=600&fit=crop",
      title: "Circuito Nocturno",
      description: "Las luces que iluminan la pasión"
    },
    {
      url: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=800&h=600&fit=crop",
      title: "Piloto en Concentración",
      description: "La mente de un campeón"
    },
    {
      url: "https://images.unsplash.com/photo-1610894847515-3a0b9a41415e?w=800&h=600&fit=crop",
      title: "Paddock F1",
      description: "Detrás de las cámaras"
    },
    {
      url: "https://images.unsplash.com/photo-1552057426-c4d555ad9ba4?w=800&h=600&fit=crop",
      title: "Victoria y Gloria",
      description: "El momento de la victoria"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-f1-red to-yellow-500 bg-clip-text text-transparent">
            GALERÍA EXCLUSIVA
          </h2>
          <p className="text-xl text-f1-silver max-w-2xl mx-auto">
            Imágenes que capturan la esencia de la velocidad y la pasión de la Fórmula 1
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden bg-f1-black/80 border-f1-red/30 hover:border-f1-red transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-f1-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                  <p className="text-f1-silver text-sm">{image.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default F1Gallery;
