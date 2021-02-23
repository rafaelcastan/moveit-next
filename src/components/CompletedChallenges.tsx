import Styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChalenges() {
    return (
        <div className={Styles.CompletedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>5</span>
        </div>
    );
}