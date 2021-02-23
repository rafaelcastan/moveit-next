import { CompletedChalenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';

import Head from 'next/head'

import Styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={Styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar />

      <section>
        <div className="">
          <Profile />
          <CompletedChalenges />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}