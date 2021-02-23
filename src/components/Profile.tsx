import Styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={Styles.profileContainer}>
            <img src="https://github.com/rafaelcastan.png" alt="Rafael Castanheira" />
            <div>
                <strong>Rafael Castanheira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}