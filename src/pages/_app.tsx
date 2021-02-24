import '../styles/global.css'

import { ChallengesContext, ChallengesProvider } from '../Contexts/ChallengeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
