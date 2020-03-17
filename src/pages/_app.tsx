import { AppProps } from 'next/app'
import 'minireset.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps}/>
)

export default MyApp