import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export default function Index() {
  const donationPackages = [
    {
      name: "Новичок",
      price: "100₽",
      items: ["Базовый кит", "Привилегия [Новичок]", "10 алмазов"],
      color: "bg-gray-100 border-gray-300"
    },
    {
      name: "Воин",
      price: "300₽", 
      items: ["Улучшенный кит", "Привилегия [Воин]", "50 алмазов", "Доступ к /fly"],
      color: "bg-primary/10 border-primary"
    },
    {
      name: "Легенда",
      price: "500₽",
      items: ["Премиум кит", "Привилегия [Легенда]", "100 алмазов", "Все команды", "Личный дом"],
      color: "bg-minecraft-gold/20 border-minecraft-gold"
    }
  ]

  const teamMembers = [
    {
      name: "GhostAdmin",
      role: "Основатель",
      avatar: "👑",
      description: "Создатель сервера, следит за порядком"
    },
    {
      name: "BusterMod",
      role: "Модератор",
      avatar: "⚔️",
      description: "Помогает игрокам и борется с нарушителями"
    },
    {
      name: "SkyHelper",
      role: "Помощник",
      avatar: "🛠️",
      description: "Консультирует новых игроков"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-minecraft-stone/20 to-minecraft-brown/10">
      {/* Navigation */}
      <nav className="bg-minecraft-black/90 backdrop-blur-sm border-b-2 border-minecraft-green">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-minecraft-green">
                GHOSTBUSTERSHY
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-minecraft-green transition-colors">Главная</a>
              <a href="#donate" className="text-white hover:text-minecraft-green transition-colors">Донат</a>
              <a href="#team" className="text-white hover:text-minecraft-green transition-colors">Команда</a>
              <a href="#info" className="text-white hover:text-minecraft-green transition-colors">Информация</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 text-center">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-minecraft-black mb-4 drop-shadow-lg">
              GHOSTBUSTERSHY
            </h1>
            <p className="text-xl text-minecraft-brown mb-8">
              Minecraft сервер версии 1.20.10 • Выживание • PvP • Мини-игры
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <Badge className="bg-minecraft-green text-minecraft-black px-4 py-2 text-lg">
                Онлайн: 47/100
              </Badge>
              <Badge className="bg-minecraft-gold text-minecraft-black px-4 py-2 text-lg">
                Версия: 1.20.10
              </Badge>
            </div>
            <Button 
              size="lg" 
              className="bg-minecraft-green hover:bg-minecraft-green/90 text-minecraft-black font-bold px-8 py-4 text-lg"
            >
              <Icon name="Play" className="mr-2" />
              Подключиться: play.ghostbustershy.ru
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-16 bg-minecraft-stone/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-minecraft-black mb-12">
            💎 Поддержка сервера
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {donationPackages.map((pkg, index) => (
              <Card key={index} className={`${pkg.color} border-2 hover:scale-105 transition-transform`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-minecraft-black">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-minecraft-green">
                    {pkg.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <Icon name="Check" className="text-minecraft-green mr-2 flex-shrink-0" size={16} />
                        <span className="text-minecraft-black">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-minecraft-green hover:bg-minecraft-green/90 text-minecraft-black font-bold"
                  >
                    <Icon name="CreditCard" className="mr-2" size={16} />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-minecraft-black mb-12">
            👥 Наша команда
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-2 border-minecraft-brown hover:border-minecraft-green transition-colors">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{member.avatar}</div>
                  <CardTitle className="text-xl text-minecraft-black">
                    {member.name}
                  </CardTitle>
                  <Badge className="bg-minecraft-brown text-white">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-minecraft-black text-center">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="py-16 bg-minecraft-stone/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-minecraft-black mb-12">
            📋 Информация о сервере
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-minecraft-green">
              <CardHeader>
                <CardTitle className="flex items-center text-minecraft-black">
                  <Icon name="Server" className="mr-2 text-minecraft-green" />
                  Особенности сервера
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Icon name="Zap" className="text-minecraft-gold mr-2" size={16} />
                    <span>Выживание без лагов</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Sword" className="text-minecraft-gold mr-2" size={16} />
                    <span>PvP арены и турниры</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Home" className="text-minecraft-gold mr-2" size={16} />
                    <span>Система домов и территорий</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Users" className="text-minecraft-gold mr-2" size={16} />
                    <span>Активное сообщество</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-minecraft-brown">
              <CardHeader>
                <CardTitle className="flex items-center text-minecraft-black">
                  <Icon name="MessageSquare" className="mr-2 text-minecraft-brown" />
                  Контакты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="Globe" className="text-minecraft-green mr-3" size={20} />
                    <span>Discord: discord.gg/ghostbustershy</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Send" className="text-minecraft-green mr-3" size={20} />
                    <span>Telegram: @ghostbustershy</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" className="text-minecraft-green mr-3" size={20} />
                    <span>Email: admin@ghostbustershy.ru</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-minecraft-black text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="text-minecraft-green text-2xl font-bold mb-4">
            GHOSTBUSTERSHY
          </div>
          <p className="text-gray-400">
            © 2024 GhostbushtersHY Server. Все права защищены.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Minecraft является торговой маркой Mojang Studios
          </p>
        </div>
      </footer>
    </div>
  )
}