import { motion } from 'motion/react';
import { ElementParticles } from '../components/ElementParticles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Sparkles, Headphones, Zap, MessageSquare, Radio, Moon, Calendar, BookOpen, Bell, X, ExternalLink } from 'lucide-react';

interface ClubSection {
  id: string;
  name: string;
  icon: any;
  gradient: string;
  path: string;
}

const clubSections: ClubSection[] = [
  {
    id: 'schedule',
    name: 'Расписание',
    icon: Calendar,
    gradient: 'from-amber-500/20 via-yellow-400/20 to-orange-500/20',
    path: '/schedule',
  },
  {
    id: 'energy-laws',
    name: 'Энергетические законы',
    icon: Sparkles,
    gradient: 'from-purple-500/20 via-violet-500/20 to-purple-600/20',
    path: '/energy-laws',
  },
  {
    id: 'broadcasts',
    name: 'Эфиры',
    icon: Radio,
    gradient: 'from-fuchsia-500/20 via-purple-400/20 to-pink-500/20',
    path: '/broadcasts',
  },
  {
    id: 'podcasts',
    name: 'Подкасты',
    icon: Headphones,
    gradient: 'from-pink-500/20 via-rose-400/20 to-purple-500/20',
    path: '/podcasts',
  },
  {
    id: 'intensives',
    name: 'Интенсивы',
    icon: Zap,
    gradient: 'from-emerald-500/20 via-teal-400/20 to-cyan-500/20',
    path: '/intensives',
  },
  {
    id: 'reviews',
    name: 'Разборы',
    icon: MessageSquare,
    gradient: 'from-blue-500/20 via-indigo-400/20 to-violet-500/20',
    path: '/reviews',
  },
  {
    id: 'meditations',
    name: 'Медитации',
    icon: Moon,
    gradient: 'from-violet-500/20 via-purple-500/20 to-indigo-600/20',
    path: '/meditations',
  },
  {
    id: 'materials',
    name: 'Полезные материалы',
    icon: BookOpen,
    gradient: 'from-green-500/20 via-lime-400/20 to-emerald-500/20',
    path: '/materials',
  },
];

interface Gift {
  id: string;
  title: string;
  description: string;
  details?: string;
  maxCount: number | null; // null = unlimited
  gradient: string;
}

const gifts: Gift[] = [
  {
    id: 'karta-zhelaniy',
    title: '🎁 Каникулы со смыслом',
    description: 'Доступ к интенсиву «Карта желаний» в подарок',
    details: 'Который пройдет 6 января',
    maxCount: 3,
    gradient: 'from-purple-500/20 via-fuchsia-400/15 to-pink-500/20'
  },
  {
    id: 'session-discount',
    title: '✨ Личная сессия -50%',
    description: '12 500 рублей вместо 25 000 рублей',
    details: 'Действует до 30.01',
    maxCount: null,
    gradient: 'from-amber-500/20 via-yellow-400/15 to-orange-500/20'
  },
  {
    id: 'audio-scanning',
    title: '🎤 Сканирование вашего запроса',
    description: 'Ответ в личном аудио-сообщении',
    details: '',
    maxCount: null,
    gradient: 'from-cyan-500/20 via-teal-400/15 to-blue-500/20'
  },
  {
    id: 'certificate-5000',
    title: '🎟️ Сертификат на 5000 рублей',
    description: 'На любую услугу',
    details: '',
    maxCount: 2,
    gradient: 'from-pink-500/20 via-rose-400/15 to-fuchsia-500/20'
  },
  {
    id: 'subscription-discount',
    title: '💎 Доступ к подписке «Масштаб Души»',
    description: 'За 2500 рублей вместо 5000 рублей',
    details: 'На 1 месяц',
    maxCount: null,
    gradient: 'from-violet-500/20 via-purple-400/15 to-indigo-500/20'
  },
  {
    id: 'subscription-free',
    title: '🌟 Доступ к подписке «Масштаб Души»',
    description: 'На 1 месяц бесплатно',
    details: '',
    maxCount: 3,
    gradient: 'from-emerald-500/20 via-green-400/15 to-teal-500/20'
  }
];

// Old messages kept for reference, not used anymore
interface Message {
  id: number;
  title: string;
  text: string;
  category: string;
}

const messages: Message[] = [
  // Блок 1: Внутренни�� ресурс
  {
    id: 1,
    title: 'Маяк',
    text: 'Свет виден лучше всего в темноте. Твоя главная сила сейчас — не в борьбе со штормом, а в умении стоять неподвижно и светить тем, что ты уже знаешь. На что ты можешь опереться прямо сейчас?',
    category: 'Внутренний ресурс'
  },
  {
    id: 2,
    title: 'Ключ',
    text: 'Ты стоишь перед дверью и ждешь, когда она откроется. Но посмотри на свою ладонь. Ключ всегда был у тебя. Это твой прошлый опыт, который ты обесцениваешь. Используй его.',
    category: 'Внутренний ресурс'
  },
  {
    id: 3,
    title: 'Корни',
    text: 'Чтобы крона коснулась неба, корни должны обнять землю. Твоя устойчивость — в принятии реальности такой, какая она есть. Перестань сопротивляться ветру, стань крепче в основании.',
    category: 'Внутренний ресурс'
  },
  {
    id: 4,
    title: 'Зеркало',
    text: 'Тот, кого ты ищешь ��овне — наставника, спасителя, партнера — уже смотрит на тебя из отражения. Дай себе то признание, которое ты ждешь от мира.',
    category: 'Внутренний ресурс'
  },
  {
    id: 5,
    title: 'Тишина',
    text: 'Ответ не приходит в шуме мыслей. Ответ приходит в паузе между ними. Остановись. Выключи внешний шум. Самый тихий голос внутри тебя говорит правду.',
    category: 'Внутренний ресурс'
  },
  {
    id: 6,
    title: 'Источнк',
    text: 'Ты пытаешься наполнить чашку из пересохшего колодца. Вернись к источнику. Что наполняет тебя энергией, когда никто не видит? Сделай глоток для себя, прежде чем поить других.',
    category: 'Внутренний ресурс'
  },
  {
    id: 7,
    title: 'Алмаз',
    text: 'Давление, которое ты испытываешь сейчас — это не наказание. Это среда, в которой уголь превращается в алмаз. Ты не ломаешься, ты кристаллизуешься. Какую грань ты шлифуешь прямо сейчас?',
    category: 'Внутренний ресурс'
  },
  // Блок 2: Вектор движения
  {
    id: 8,
    title: 'Компас',
    text: 'Карты нет, и это нормально. Но у тебя есть компас — твой интерес и твое любопытство. Куда указывает стрелка твоего "хочу", если убрать страх "надо"? Иди туда.',
    category: 'Вектор движения'
  },
  {
    id: 9,
    title: 'Воздушный шар',
    text: 'Чтобы набрать высоту, нужно сбросить балласт. Ты знаешь, что именно тянет тебя вниз. Это старая привычка, изжившая себя цель или чужое ожидание. Отвяжи мешок. Взлетай.',
    category: 'Вектор движения'
  },
  {
    id: 10,
    title: 'Первый шаг',
    text: '��ы хочешь увидеть всю лестницу целиком, прежде чем начать подъем. Но туман рассеивается только в движении. Сделай один шаг. Просто один. Следующая ступенька появится.',
    category: 'Вектор движения'
  },
  {
    id: 11,
    title: 'Мост',
    text: 'Страх — это просто мост между тем, кто ты сейчас, и тем, кем ты можешь стать. Не строй дом на мосту. Проходи по нему. Что ждет на том берегу?',
    category: 'Вектор движения'
  },
  {
    id: 12,
    title: 'Река',
    text: 'Перестань грести против течения. Иногда самая сильная стратегия — это расслабиться и позволить потоку вынести тебя туда, где ты нужен. Доверься процессу.',
    category: 'Вектор движения'
  },
  {
    id: 13,
    title: 'Фокус',
    text: 'Где твое внимание — там твоя энергия. Ты поливаешь сорняки сомнений или цветы возможностей? Выбери одну главную цель и смотри только на нее следующие 24 часа.',
    category: 'Вектор движения'
  },
  {
    id: 14,
    title: 'Чистый лист',
    text: 'Прошлое не определяет будущее. Прямо сейчас, в эту секунду, ты держишь перо. Ты можешь продолжить старую главу или начать новую с красной строки. Что ты напишешь?',
    category: 'Вектор движения'
  },
  // Блок 3: Мудрость момента
  {
    id: 15,
    title: 'Лабиринт',
    text: 'Тебе кажется, что ты ходишь по кругу. Но если посмтть сверху, это спираль. Ты на новом уровне, просто пейзаж похож. Ты уже мудрее, чем был на прошлом витке. Продолжай идти.',
    category: 'Мудрость момента'
  },
  {
    id: 16,
    title: 'Пазл',
    text: 'Тебе не хватает одной детали, и ты тревожишься. Но картина сложится в нужное время. То, что кажется хаосом сейчас, завтра станет идеальным узором. Потерпи.',
    category: 'Мудрость момента'
  },
  {
    id: 17,
    title: 'Дверь',
    text: 'Если дверь не открывается, сколько бы ты ни стучал — значит, это не твоя дверь. Или сейчас не твое время. Отойди на шаг назад. Посмотри по сторонам. Видишь открытое окно?',
    category: 'Мудрость момента'
  },
  {
    id: 18,
    title: 'Урожай',
    text: 'Нельзя тянуть росток за верхушку, чтобы он рос быстрее. Всему свой сезон. Сейчас время сеять или время жать? Если сеять — не жди плодов завтра. Если жать — не бойся результата.',
    category: 'Мудрость момента'
  },
  {
    id: 19,
    title: 'Границы',
    text: 'Твое "Нет" другим — это громкое "Да" самому себе. Очерти свои границы не стенами, а светом. Что ты больше не готов пускать в свю жизнь в 2026 году?',
    category: 'Мудрость момента'
  },
  {
    id: 20,
    title: 'Игра',
    text: 'Ты слишком серьезен. Жизнь — это не экзамен, это игровая площадка. Если бы ты знал, что проиграть невозможно, как бы ты сыграл эту партию? Добавь легкости.',
    category: 'Мудрость момента'
  },
  {
    id: 21,
    title: 'Звезда',
    text: 'Самые смелые мечты даются нам вместе с силами на их осуществление. Если ты можешь это предс��авить, значит, у тебя уже есть потенциал это создать. Поверь в свою масштабность.',
    category: 'Мудрость момента'
  }
];

interface NewsItem {
  id: string;
  title: string;
  text: string;
  date: string;
  icon: any;
  gradient: string;
  path: string;
}

const newsItems: NewsItem[] = [
  {
    id: 'news-2',
    title: 'Энергетические законы',
    text: 'Откроется с 3 января 2026',
    date: '3 января',
    icon: Sparkles,
    gradient: 'from-violet-500/30 via-purple-400/20 to-indigo-500/30',
    path: '/energy-laws',
  },
  {
    id: 'news-3',
    title: 'Интенсив',
    text: 'Техники работы над собой',
    date: '9 января',
    icon: Zap,
    gradient: 'from-cyan-500/30 via-teal-400/20 to-cyan-500/30',
    path: '/intensives',
  },
];

export default function ClubHome() {
  const navigate = useNavigate();
  const [activeElement, setActiveElement] = useState<'water' | 'air' | 'earth' | 'fire'>('water');
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isDrawingMessage, setIsDrawingMessage] = useState(false);

  // Get gift count from localStorage
  const getGiftCount = (giftId: string): number => {
    const count = localStorage.getItem(`gift_count_${giftId}`);
    return count ? parseInt(count, 10) : 0;
  };

  // Increment gift count in localStorage
  const incrementGiftCount = (giftId: string): void => {
    const currentCount = getGiftCount(giftId);
    localStorage.setItem(`gift_count_${giftId}`, (currentCount + 1).toString());
  };

  // Check if gift can be drawn
  const canDrawGift = (gift: Gift): boolean => {
    if (gift.maxCount === null) return true; // unlimited
    return getGiftCount(gift.id) < gift.maxCount;
  };

  const drawGift = () => {
    setIsDrawing(true);
    setTimeout(() => {
      // Filter available gifts
      const availableGifts = gifts.filter(canDrawGift);
      
      if (availableGifts.length === 0) {
        // All limited gifts have been drawn, pick from unlimited ones
        const unlimitedGifts = gifts.filter(g => g.maxCount === null);
        const randomIndex = Math.floor(Math.random() * unlimitedGifts.length);
        const selectedGift = unlimitedGifts[randomIndex];
        setSelectedGift(selectedGift);
      } else {
        // Pick a random gift from available ones
        const randomIndex = Math.floor(Math.random() * availableGifts.length);
        const selectedGift = availableGifts[randomIndex];
        
        // Increment count
        incrementGiftCount(selectedGift.id);
        
        setSelectedGift(selectedGift);
      }
      
      setIsDrawing(false);
    }, 600);
  };

  const closeGift = () => {
    setSelectedGift(null);
  };

  const drawMessage = () => {
    setIsDrawingMessage(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      setSelectedMessage(messages[randomIndex]);
      setIsDrawingMessage(false);
    }, 600);
  };

  const closeMessage = () => {
    setSelectedMessage(null);
  };

  useEffect(() => {
    const elements: Array<'water' | 'air' | 'earth' | 'fire'> = ['water', 'air', 'earth', 'fire'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % elements.length;
      setActiveElement(elements[currentIndex]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#2E5C8A] via-[#4A90E2] to-[#5B9BD5]">
      {/* Animated grid pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
        animate={{
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Dynamic gradient overlay with accent colors */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(139,92,246,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(236,72,153,0.2) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(6,182,212,0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 80% 20%, rgba(34,211,238,0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(167,139,250,0.2) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(244,114,182,0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 50%, rgba(236,72,153,0.2) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(139,92,246,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(6,182,212,0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 20% 30%, rgba(139,92,246,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(236,72,153,0.2) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(6,182,212,0.2) 0%, transparent 60%)',
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Geometric floating shapes with vibrant colors */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(139,92,246,0.4), rgba(167,139,250,0.3))',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/4 right-20 w-96 h-96"
        style={{
          background: 'linear-gradient(135deg, rgba(236,72,153,0.3), rgba(244,114,182,0.25))',
          filter: 'blur(60px)',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.4, 1],
          rotate: [0, -90, 0],
          borderRadius: [
            '30% 70% 70% 30% / 30% 30% 70% 70%',
            '70% 30% 30% 70% / 70% 70% 30% 30%',
            '30% 70% 70% 30% / 30% 30% 70% 70%',
          ]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-20 left-1/4 w-[450px] h-[450px]"
        style={{
          background: 'linear-gradient(135deg, rgba(6,182,212,0.35), rgba(34,211,238,0.25))',
          filter: 'blur(50px)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 120, 240, 360],
          borderRadius: [
            '60% 40% 30% 70% / 60% 30% 70% 40%',
            '40% 60% 70% 30% / 40% 70% 30% 60%',
            '60% 40% 30% 70% / 60% 30% 70% 40%',
          ]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Additional colorful blobs */}
      <motion.div
        className="absolute top-1/3 left-1/2 w-80 h-80"
        style={{
          background: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(251,191,36,0.15))',
          filter: 'blur(55px)',
          borderRadius: '50% 50% 30% 70% / 40% 60% 30% 50%',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 70, 0],
          scale: [1, 1.25, 1],
          rotate: [0, -180, -360],
          borderRadius: [
            '50% 50% 30% 70% / 40% 60% 30% 50%',
            '30% 70% 50% 50% / 60% 40% 50% 30%',
            '50% 50% 30% 70% / 40% 60% 30% 50%',
          ]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Glowing particles with colors */}
      <motion.div
        className="absolute top-40 right-1/4 w-3 h-3 rounded-full bg-purple-300/70"
        animate={{
          y: [0, -100, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-pink-300/60"
        animate={{
          y: [0, 80, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-cyan-300/50"
        animate={{
          x: [0, 60, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
      <motion.div
        className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-amber-300/60"
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Subtle animated particles */}
      <ElementParticles element={activeElement} count={12} />

      {/* News Feed - Horizontal scrollable announcements */}
      <div className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 backdrop-blur-xl bg-white/5">
        <div className="overflow-x-auto scrollbar-hide py-2 sm:py-3">
          <div className="flex gap-2 sm:gap-3 px-3 sm:px-4" style={{ width: 'max-content' }}>
            {newsItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  if (item.path.startsWith('http')) {
                    window.open(item.path, '_blank');
                  } else {
                    navigate(item.path);
                  }
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-shrink-0 w-64 sm:w-72 md:w-80 p-2 sm:p-3 rounded-xl sm:rounded-2xl
                  backdrop-blur-xl bg-gradient-to-br ${item.gradient}
                  border border-white/30 shadow-lg
                  cursor-pointer transition-all duration-300
                  hover:border-white/50 hover:shadow-xl`}
              >
                <div className="flex items-start gap-2 h-full">
                  <div className="flex-1 w-full flex flex-col">
                    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 mb-2 self-center">
                      <p className="text-[9px] sm:text-xs text-white font-medium">
                        {item.date}
                      </p>
                    </div>
                    <h3 className="font-light text-white mb-1 text-xs sm:text-sm md:text-base leading-snug text-center" style={{ fontWeight: 300 }}>
                      {item.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-white/80 font-light leading-relaxed text-center">
                      {item.text}
                    </p>
                  </div>
                  <div className="w-5 h-5 flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-48 sm:pt-52 md:pt-56 lg:pt-60 pb-12 sm:pb-16 md:pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-24"
        >
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 text-white tracking-tight px-4" 
            style={{ fontWeight: 100 }}
          >
            Масштаб Души
            {/* Decorative line under title */}
            <motion.div
              className="absolute -bottom-2 sm:-bottom-3 left-1/2 -translate-x-1/2 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-white to-transparent"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '80%', opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
            
            {/* Glowing orbs around title */}
            <motion.div
              className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-white/30 blur-md"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-3 h-3 sm:w-6 sm:h-6 rounded-full bg-white/40 blur-md"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.h1>
        </motion.div>

        {/* New Year Promo Banner - Карта желаний 2026 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-12 flex justify-center px-4"
        >
          <motion.a
            href="http://ekaterinabeloborodova.com/karta2026"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden rounded-3xl w-full max-w-3xl backdrop-blur-xl shadow-2xl border-2 border-white/50 hover:border-white/80 transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,215,0,0.25) 20%, rgba(220,38,38,0.2) 40%, rgba(139,92,246,0.2) 60%, rgba(34,197,94,0.2) 80%, rgba(255,255,255,0.95) 100%)',
            }}
          >
            {/* Animated rainbow gradient background */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,215,0,0.25) 20%, rgba(220,38,38,0.2) 40%, rgba(139,92,246,0.2) 60%, rgba(34,197,94,0.2) 80%, rgba(255,255,255,0.95) 100%)',
                  'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(34,197,94,0.2) 20%, rgba(255,215,0,0.25) 40%, rgba(220,38,38,0.2) 60%, rgba(139,92,246,0.2) 80%, rgba(255,255,255,0.95) 100%)',
                  'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(139,92,246,0.2) 20%, rgba(34,197,94,0.2) 40%, rgba(255,215,0,0.25) 60%, rgba(220,38,38,0.2) 80%, rgba(255,255,255,0.95) 100%)',
                  'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,215,0,0.25) 20%, rgba(220,38,38,0.2) 40%, rgba(139,92,246,0.2) 60%, rgba(34,197,94,0.2) 80%, rgba(255,255,255,0.95) 100%)',
                ]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Glowing particles */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: 'radial-gradient(circle at 20% 50%, rgba(255,215,0,0.4) 0%, transparent 30%), radial-gradient(circle at 80% 50%, rgba(220,38,38,0.3) 0%, transparent 30%), radial-gradient(circle at 50% 80%, rgba(139,92,246,0.3) 0%, transparent 30%)',
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.9) 50%, transparent 100%)',
              }}
            />

            <div className="relative z-10 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
              {/* Icon with glow */}
              <motion.div
                animate={{
                  rotate: [0, -5, 5, -5, 5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="flex-shrink-0"
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 rounded-full blur-xl"
                    style={{
                      background: 'radial-gradient(circle, rgba(255,215,0,0.6) 0%, rgba(220,38,38,0.4) 50%, transparent 70%)',
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="relative text-6xl sm:text-7xl">
                    ✨🎄
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center sm:text-left">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3
                    bg-gradient-to-r from-red-500/20 via-amber-500/20 to-green-500/20
                    border border-white/40 backdrop-blur-sm"
                >
                  <span className="text-xs sm:text-sm font-medium text-[#1D1D1B]">
                    🎁 Новогодний интенсив • 6 января
                  </span>
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-2 text-[#1D1D1B]" style={{ fontWeight: 300 }}>
                  Карта желаний 2026
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base lg:text-lg text-[#1D1D1B]/80 font-light mb-4">
                  Создай план на 2026 год и закрепи через визуальный якорь
                </p>

                {/* CTA */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                    bg-gradient-to-r from-purple-600 to-pink-600
                    text-white font-medium shadow-lg
                    transition-all duration-300"
                >
                  <span className="text-sm sm:text-base">Узнать подробнее</span>
                  <motion.span
                    animate={{
                      x: [0, 4, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-4 right-4 text-2xl sm:text-3xl"
                animate={{
                  rotate: [0, 10, -10, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                🎁
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 text-xl sm:text-2xl"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 0.5
                }}
              >
                ⭐
              </motion.div>
            </div>

            {/* Bottom accent line */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-2"
              style={{
                background: 'linear-gradient(90deg, #FFD700 0%, #DC2626 25%, #8B5CF6 50%, #22C55E 75%, #FFD700 100%)',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 0%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.a>
        </motion.div>

        {/* Draw Gift Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-12 flex justify-center"
        >
          <motion.button
            onClick={drawGift}
            disabled={isDrawing}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden rounded-full px-8 py-4 sm:px-10 sm:py-5 text-left backdrop-blur-xl shadow-2xl border-2 border-white/40 hover:border-white/70 transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,215,0,0.2) 30%, rgba(220,38,38,0.15) 60%, rgba(34,197,94,0.15) 100%)',
            }}
          >
            {/* Animated gradient background - New Year colors */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,215,0,0.2) 30%, rgba(220,38,38,0.15) 60%, rgba(34,197,94,0.15) 100%)',
                  'linear-gradient(135deg, rgba(34,197,94,0.15) 0%, rgba(255,255,255,0.95) 30%, rgba(255,215,0,0.2) 60%, rgba(220,38,38,0.15) 100%)',
                  'linear-gradient(135deg, rgba(220,38,38,0.15) 0%, rgba(34,197,94,0.15) 30%, rgba(255,255,255,0.95) 60%, rgba(255,215,0,0.2) 100%)',
                  'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,215,0,0.2) 30%, rgba(220,38,38,0.15) 60%, rgba(34,197,94,0.15) 100%)',
                ]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Sparkle particles */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background: 'radial-gradient(circle at 30% 50%, rgba(255,215,0,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(220,38,38,0.3) 0%, transparent 50%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.9) 50%, transparent 100%)',
              }}
            />

            <div className="relative z-10 flex items-center gap-3 sm:gap-4">
              <motion.div
                animate={isDrawing ? { rotate: 360 } : { rotate: [0, -10, 10, -10, 10, 0] }}
                transition={isDrawing ? { duration: 0.6, ease: "easeInOut" } : { duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500" strokeWidth={1.5} style={{ filter: 'drop-shadow(0 0 8px rgba(245,158,11,0.6))' }} />
              </motion.div>
              <span className="text-lg sm:text-xl text-[#1D1D1B]" style={{ fontWeight: 300 }}>
                {isDrawing ? '🎁 Выбираю подарок...' : '🎁 Получить подарок'}
              </span>
            </div>
          </motion.button>
        </motion.div>

        {/* Draw Message Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-12 flex justify-center"
        >
          <motion.button
            onClick={drawMessage}
            disabled={isDrawingMessage}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden rounded-full px-8 py-4 sm:px-10 sm:py-5 text-left backdrop-blur-xl shadow-2xl border-2 border-white/40 hover:border-white/70 transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(216,236,250,0.85) 50%, rgba(139,92,246,0.15) 100%)',
            }}
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(216,236,250,0.85) 50%, rgba(139,92,246,0.15) 100%)',
                  'linear-gradient(135deg, rgba(216,236,250,0.90) 0%, rgba(167,139,250,0.12) 50%, rgba(255,255,255,0.95) 100%)',
                  'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(216,236,250,0.85) 50%, rgba(139,92,246,0.15) 100%)',
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
              }}
            />

            <div className="relative z-10 flex items-center gap-3 sm:gap-4">
              <motion.div
                animate={isDrawingMessage ? { rotate: 360 } : {}}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-[#ACC6EF]" strokeWidth={1.5} style={{ filter: 'drop-shadow(0 0 8px rgba(172,198,239,0.5))' }} />
              </motion.div>
              <span className="text-lg sm:text-xl text-[#1D1D1B]" style={{ fontWeight: 300 }}>
                {isDrawingMessage ? 'Вытягиваю...' : 'Вытянуть послание'}
              </span>
            </div>
          </motion.button>
        </motion.div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {clubSections.map((section, index) => {
            const Icon = section.icon;
            // Define color variations for each card (matching SphereCard style)
            const colorVariants = [
              { from: 'rgba(139,92,246,0.15)', via: 'rgba(167,139,250,0.1)', glow: 'rgba(139,92,246,0.3)' }, // Purple
              { from: 'rgba(236,72,153,0.15)', via: 'rgba(244,114,182,0.1)', glow: 'rgba(236,72,153,0.3)' }, // Pink
              { from: 'rgba(6,182,212,0.15)', via: 'rgba(34,211,238,0.1)', glow: 'rgba(6,182,212,0.3)' }, // Cyan
              { from: 'rgba(245,158,11,0.15)', via: 'rgba(251,191,36,0.1)', glow: 'rgba(245,158,11,0.3)' }, // Amber
              { from: 'rgba(34,211,238,0.15)', via: 'rgba(6,182,212,0.1)', glow: 'rgba(34,211,238,0.3)' }, // Light cyan
              { from: 'rgba(167,139,250,0.15)', via: 'rgba(139,92,246,0.1)', glow: 'rgba(167,139,250,0.3)' }, // Light purple
              { from: 'rgba(139,92,246,0.15)', via: 'rgba(167,139,250,0.1)', glow: 'rgba(139,92,246,0.3)' }, // Purple
              { from: 'rgba(34,211,238,0.15)', via: 'rgba(6,182,212,0.1)', glow: 'rgba(34,211,238,0.3)' }, // Light cyan
            ];
            const colors = colorVariants[index % colorVariants.length];

            return (
              <motion.button
                key={section.id}
                onClick={() => navigate(section.path)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * index,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                }}
                whileTap={{ scale: 0.97 }}
                className="group relative overflow-hidden rounded-3xl p-8 sm:p-10 text-left backdrop-blur-xl shadow-lg hover:shadow-[0_20px_80px_rgba(172,198,239,0.4)] border-2 border-white/30 hover:border-white/60 transition-all duration-500"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(216,236,250,0.8) 50%, ${colors.from} 100%)`,
                }}
              >
                {/* Animated gradient background with accent color */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(216,236,250,0.8) 50%, ${colors.from} 100%)`,
                      `linear-gradient(135deg, rgba(216,236,250,0.85) 0%, ${colors.via} 50%, rgba(255,255,255,0.95) 100%)`,
                      `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(216,236,250,0.8) 50%, ${colors.from} 100%)`,
                    ]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Glow effect on hover with accent color */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${colors.glow}, transparent 70%)`,
                    filter: 'blur(30px)',
                  }}
                />

                {/* Animated orb effect with accent color */}
                <motion.div
                  className="absolute w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100"
                  style={{
                    background: colors.glow,
                    top: '20%',
                    left: '10%'
                  }}
                  animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Border glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: `inset 0 0 80px ${colors.glow}, 0 0 60px ${colors.glow}`,
                  }}
                />

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  animate={{
                    background: [
                      'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
                      'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
                    ],
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon container */}
                  <motion.div 
                    className="mb-6 inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20
                      rounded-2xl bg-white/40 backdrop-blur-sm
                      border border-white/40
                      shadow-lg"
                    whileHover={{ 
                      rotate: [0, -8, 8, 0],
                      scale: 1.15,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#ACC6EF]" strokeWidth={1.5} style={{ filter: 'drop-shadow(0 0 8px rgba(172,198,239,0.5))' }} />
                  </motion.div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl mb-3 text-[#1D1D1B] tracking-tight" style={{ fontWeight: 300 }}>
                    {section.name}
                  </h2>
                </div>

                {/* Gradient accent line with animation */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#ACC6EF] via-[#D8ECFA] to-[#ACC6EF]"
                  initial={{ scaleX: 0, opacity: 0.5 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.button>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 sm:mt-24 text-center"
        >
          <p className="text-sm text-white/70 font-light">
            Выберите раздел для начала
          </p>
        </motion.div>
      </div>

      {/* Gift Modal */}
      {selectedGift && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-[#2E5C8A]/60"
          onClick={closeGift}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full rounded-3xl backdrop-blur-xl shadow-2xl border-2 border-white/40 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,240,220,0.95) 50%, rgba(220,38,38,0.15) 100%)',
            }}
          >
            {/* Animated gradient background - New Year theme */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,240,220,0.95) 50%, rgba(220,38,38,0.15) 100%)',
                  'linear-gradient(135deg, rgba(255,240,220,0.95) 0%, rgba(34,197,94,0.15) 50%, rgba(255,255,255,0.98) 100%)',
                  'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,215,0,0.2) 50%, rgba(220,38,38,0.15) 100%)',
                  'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,240,220,0.95) 50%, rgba(220,38,38,0.15) 100%)',
                ]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Glowing orbs - golden and red */}
            <motion.div
              className="absolute w-64 h-64 rounded-full blur-3xl"
              style={{
                background: 'rgba(255,215,0,0.3)',
                top: '-10%',
                right: '-10%'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute w-48 h-48 rounded-full blur-3xl"
              style={{
                background: 'rgba(220,38,38,0.25)',
                bottom: '-5%',
                left: '-5%'
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />

            {/* Close button */}
            <motion.button
              onClick={closeGift}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-white/40 shadow-lg hover:bg-white transition-colors duration-300"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#1D1D1B]" strokeWidth={1.5} />
            </motion.button>

            {/* Content */}
            <div className="relative z-10 p-8 sm:p-12">
              {/* Gift Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", duration: 0.6 }}
                className="flex justify-center mb-6"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, -10, 10, -10, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                  className="text-6xl sm:text-7xl"
                >
                  🎁
                </motion.div>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-3xl mb-4 text-[#1D1D1B] text-center"
                style={{ fontWeight: 300 }}
              >
                {selectedGift.title}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-[#1D1D1B]/90 leading-relaxed font-light text-center mb-3"
              >
                {selectedGift.description}
              </motion.p>

              {/* Details */}
              {selectedGift.details && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-base text-[#1D1D1B]/70 font-light text-center mb-8"
                >
                  {selectedGift.details}
                </motion.p>
              )}

              {/* Decorative sparkles */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex justify-center gap-3 mb-8"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-6 h-6 text-amber-500" strokeWidth={1.5} />
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, -180, -360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <Sparkles className="w-8 h-8 text-red-500" strokeWidth={1.5} />
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <Sparkles className="w-6 h-6 text-green-500" strokeWidth={1.5} />
                </motion.div>
              </motion.div>

              {/* Screenshot instruction */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-center"
              >
                <p className="text-sm sm:text-base text-[#1D1D1B]/80 font-light mb-4">
                  Сделай скриншот своей карточки и
                </p>
                
                {/* Telegram button */}
                <motion.a
                  href="https://t.me/beloborodova_job"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                    bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600
                    text-white font-medium shadow-lg hover:shadow-xl
                    transition-all duration-300"
                >
                  <span>Отправь мне в сообщения!</span>
                  <ExternalLink className="w-4 h-4" strokeWidth={2} />
                </motion.a>
              </motion.div>

              {/* Decorative bottom line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-8 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Message Modal */}
      {selectedMessage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-[#2E5C8A]/60"
          onClick={closeMessage}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full rounded-3xl backdrop-blur-xl shadow-2xl border-2 border-white/40 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(216,236,250,0.95) 50%, rgba(167,139,250,0.2) 100%)',
            }}
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(216,236,250,0.95) 50%, rgba(167,139,250,0.2) 100%)',
                  'linear-gradient(135deg, rgba(216,236,250,0.95) 0%, rgba(236,72,153,0.15) 50%, rgba(255,255,255,0.98) 100%)',
                  'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(216,236,250,0.95) 50%, rgba(6,182,212,0.2) 100%)',
                  'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(216,236,250,0.95) 50%, rgba(167,139,250,0.2) 100%)',
                ]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Glowing orb */}
            <motion.div
              className="absolute w-64 h-64 rounded-full blur-3xl"
              style={{
                background: 'rgba(139,92,246,0.2)',
                top: '-10%',
                right: '-10%'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Close button */}
            <motion.button
              onClick={closeMessage}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-white/40 shadow-lg hover:bg-white transition-colors duration-300"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#1D1D1B]" strokeWidth={1.5} />
            </motion.button>

            {/* Content */}
            <div className="relative z-10 p-8 sm:p-12">
              {/* Message Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", duration: 0.6 }}
                className="flex justify-center mb-6"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, -10, 10, -10, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                  className="text-6xl sm:text-7xl"
                >
                  📬
                </motion.div>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-3xl mb-4 text-[#1D1D1B] text-center"
                style={{ fontWeight: 300 }}
              >
                {selectedMessage.title}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-[#1D1D1B]/90 leading-relaxed font-light text-center mb-3"
              >
                {selectedMessage.text}
              </motion.p>

              {/* Category */}
              {selectedMessage.category && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-base text-[#1D1D1B]/70 font-light text-center mb-8"
                >
                  {selectedMessage.category}
                </motion.p>
              )}

              {/* Decorative sparkle */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8 flex justify-center"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Sparkles className="w-8 h-8 text-[#ACC6EF]" strokeWidth={1.5} style={{ filter: 'drop-shadow(0 0 10px rgba(172,198,239,0.6))' }} />
                </motion.div>
              </motion.div>

              {/* Decorative bottom line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-6 h-2 bg-gradient-to-r from-[#ACC6EF] via-[#D8ECFA] to-[#ACC6EF]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}