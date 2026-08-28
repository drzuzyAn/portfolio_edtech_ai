import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Анна Зинченко — методист и педагогический дизайнер',
  description: 'Проектирую понятные образовательные продукты на стыке методологии, дизайна и нейросетей.',
  metadataBase: new URL('https://anna-ai-learning-design.drzuzya.chatgpt.site'),
  openGraph: {
    title: 'Создаю обучение, которое работает',
    description: 'Методист × Педагогический дизайнер × AI',
    images: [{ url: 'https://anna-ai-learning-design.drzuzya.chatgpt.site/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Создаю обучение, которое работает',
    description: 'Методист × Педагогический дизайнер × AI',
    images: ['https://anna-ai-learning-design.drzuzya.chatgpt.site/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
