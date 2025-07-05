
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Flag, Trophy, Zap } from 'lucide-react';

interface AuthFormProps {
  onLogin: (email: string, name: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onLogin }) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail && loginPassword) {
      onLogin(loginEmail, 'Invitado VIP');
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerName && registerEmail && registerPassword) {
      onLogin(registerEmail, registerName);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-f1-black via-gray-900 to-f1-red relative overflow-hidden">
      {/* Speed lines animation */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 h-0.5 w-20 bg-f1-red"
            style={{
              left: '-100px',
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="checkered-bg w-full h-full"></div>
      </div>

      <Card className="w-full max-w-md mx-4 f1-card border-f1-red/30 animate-zoom-in">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center items-center space-x-2">
            <Flag className="w-8 h-8 text-f1-red racing-pulse" />
            <Trophy className="w-10 h-10 text-yellow-500" />
            <Zap className="w-8 h-8 text-f1-red racing-pulse" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-f1-red to-yellow-500 bg-clip-text text-transparent">
            ACCESO EXCLUSIVO F1
          </CardTitle>
          <CardDescription className="text-f1-silver text-lg">
            Invitación privada para una experiencia única
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="login" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2 bg-f1-black/50">
              <TabsTrigger value="login" className="data-[state=active]:bg-f1-red data-[state=active]:text-white">
                Iniciar Sesión
              </TabsTrigger>
              <TabsTrigger value="register" className="data-[state=active]:bg-f1-red data-[state=active]:text-white">
                Registrarse
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-4">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-f1-white">Correo Electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="bg-f1-black/50 border-f1-silver/30 text-white placeholder:text-f1-silver/70"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-f1-white">Contraseña</Label>
                  <Input
                    id="password"
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="bg-f1-black/50 border-f1-silver/30 text-white placeholder:text-f1-silver/70"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-f1-red to-red-600 hover:from-red-600 hover:to-f1-red transition-all duration-300 text-white font-bold py-3 racing-pulse"
                >
                  ENTRAR A LA EXPERIENCIA F1
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="register" className="space-y-4">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-f1-white">Nombre Completo</Label>
                  <Input
                    id="name"
                    type="text"
                    value={registerName}
                    onChange={(e) => setRegisterName(e.target.value)}
                    className="bg-f1-black/50 border-f1-silver/30 text-white placeholder:text-f1-silver/70"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-email" className="text-f1-white">Correo Electrónico</Label>
                  <Input
                    id="register-email"
                    type="email"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    className="bg-f1-black/50 border-f1-silver/30 text-white placeholder:text-f1-silver/70"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password" className="text-f1-white">Contraseña</Label>
                  <Input
                    id="register-password"
                    type="password"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    className="bg-f1-black/50 border-f1-silver/30 text-white placeholder:text-f1-silver/70"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-f1-red to-red-600 hover:from-red-600 hover:to-f1-red transition-all duration-300 text-white font-bold py-3 racing-pulse"
                >
                  UNIRSE A LA ÉLITE F1
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthForm;
