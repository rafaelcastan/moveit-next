import { ST } from 'next/dist/next-server/lib/utils';
import { useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallengeContext';
import { CountdownContext } from '../Contexts/CountdownContext';
import Styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { ResetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completeChallenge();
        ResetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        ResetCountdown();
    }

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
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={Styles.challengeSuccededButton}
                            onClick={handleChallengeSucceeded}
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