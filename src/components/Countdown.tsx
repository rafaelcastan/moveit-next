import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallengeContext';
import Styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function StartCountdown() {
        setIsActive(true);
    }

    function ResetCountdown() {
        setIsActive(false);
        clearTimeout(countdownTimeout);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

    return (
        <div>
            <div className={Styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={Styles.CountdownButton}>
                    Ciclo encerrado
                </button>
            ) : (
                    <>
                        {
                            isActive ? (
                                <button
                                    type="button"
                                    className={`${Styles.CountdownButton} ${Styles.CountdownButtonActive}`}
                                    onClick={ResetCountdown}>
                                    Abandonar ciclo
                                </button>
                            ) : (
                                    <button
                                        type="button"
                                        className={Styles.CountdownButton}
                                        onClick={StartCountdown}>
                                        Iniciar um ciclo
                                    </button>
                                )
                        }
                    </>
                )
            }




        </div >

    );
}