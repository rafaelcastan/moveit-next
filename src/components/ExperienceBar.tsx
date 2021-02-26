import { useContext, useEffect } from 'react';
import { ChallengesContext } from '../Contexts/ChallengeContext';
import Styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel, isLevelUpModalOpen } = useContext(ChallengesContext);


    let percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;


    return (
        <header className={Styles.experienceBar}>
            <span>0 xp</span>
            {isLevelUpModalOpen ? (
                <div>
                    <div style={{
                        width: `100%`,
                        transition: '2s left ease-in',
                    }} />
                    <span className={Styles.currentExperience} style={{
                        left: `100%`,
                        transition: '2s left linear'
                    }}>
                        Max!
                </span>
                </div>
            ) : (
                    <div>
                        <div style={{
                            width: `${percentToNextLevel}%`,
                            transition: '3s width linear'
                        }} />

                        <span className={Styles.currentExperience} style={{
                            left: `${percentToNextLevel}%`,
                            transition: '3s left linear'
                        }}>
                            {currentExperience} xp
                </span>
                    </div>
                )}
            <span>{!isLevelUpModalOpen ? `${experienceToNextLevel} xp` : "level Up!"} </span>

        </header>
    );
}