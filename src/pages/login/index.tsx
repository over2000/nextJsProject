import { GoOctoface } from 'react-icons/go'
import styles from './styles.module.scss'

const loginPage = () => (
  <div className={styles.container}>
    <button type="button">
      <GoOctoface />
      Login
    </button>
  </div>
)

export default loginPage
