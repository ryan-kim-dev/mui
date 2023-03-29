import type { AppProps } from 'next/app';
import { light, dark } from '@component/styles/vars.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // TODO: 추후 테마 변경 조건 지정하여 테마 변경
    <div className={false ? light : dark}>
      <Component {...pageProps} />
    </div>
  );
}
