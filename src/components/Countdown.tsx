import { useState, useEffect, useContext } from 'react';
import { CountdownContext } from '../Contexts/CountdownContext';
import Styles from '../styles/components/Countdown.module.css';



export function Countdown() {

    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        StartCountdown,
        ResetCountdown,
    } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');



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