import { useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallengeContext';
import Styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChalenges() {
    const { challengesCompleted } = useContext(ChallengesContext);
    return (
        <div className={Styles.CompletedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}