import { useContext } from 'react'
import { ChallengesContext } from '../Contexts/ChallengeContext'
import Styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={Styles.profileContainer}>
            <img src="https://github.com/rafaelcastan.png" alt="Rafael Castanheira" />
            <div>
                <strong>Rafael Castanheira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}