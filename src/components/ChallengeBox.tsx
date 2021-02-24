import { ST } from 'next/dist/next-server/lib/utils';
import { useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallengeContext';
import Styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

    return (
        <div className={Styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={Styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={Styles.challengeFailedButton}
                            onClick={resetChallenge}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={Styles.challengeSuccededButton}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                    <div className={Styles.challengeNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                     Avance de level completando desafios
                        </p>

                    </div>
                )}

        </div>
    )
}