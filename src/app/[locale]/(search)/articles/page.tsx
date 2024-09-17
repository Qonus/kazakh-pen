import ArticlesPage from "@/components/Article/ArticlesPageComponent/ArticlesPage";
import { getMessages } from "@/lib/i18n";
import { NextIntlClientProvider } from "next-intl";

interface Params {
  locale: string;
}

export default async function Page({ params }: { params: Params }) {
  const { locale } = params;
  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ArticlesPage locale={locale} messages={messages} />
    </NextIntlClientProvider>
  );
}
