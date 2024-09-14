import styles from "./page.module.scss";
import Homepage from "@/components/HomepageComponent/Homepage";
import {unstable_setRequestLocale} from 'next-intl/server';

type Props = {
  params: {locale: string};
};

export default async function HomePage({params: {locale}}: Props) {
    unstable_setRequestLocale(locale);
  return (
    <Homepage />
  );
}
