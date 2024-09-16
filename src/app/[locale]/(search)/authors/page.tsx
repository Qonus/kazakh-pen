import AuthorsPage from '@/components/AuthorsPageComponent/AuthorsPage';
import { getMessages } from '@/lib/i18n';

export async function generateStaticParams() {
  return [
    { locale: 'kz' },
    { locale: 'ru' },
  ];
}

interface Params {
  locale: string;
}

export default async function Page({ params }: { params: Params }) {
  const { locale } = params;
  const messages = await getMessages(locale);

  return (
    <AuthorsPage 
      locale={locale} 
      messages={messages} 
    />
  );
}