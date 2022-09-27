import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import { signIn, signOut, useSession } from 'next-auth/client'

import ThemeSwitcher from './ThemeSwitcher'

function Navbar() {
  const [session, loading] = useSession()

  console.log('SESSION', session)
  console.log('LOADING', loading)

  return (
    <nav className={styles.header}>
      <h1 className={styles.logo}>
        <a href='/'>IFSS</a>
      </h1>
      <ul className={styles.nav}>
        {!loading && !session && (
          <li>
            <Link href='/api/auth/signin'>
              <a
                onClick={(e) => {
                  e.preventDefault()
                  signIn('github')
                }}
              >
                Sign In
              </a>
            </Link>
          </li>
        )}
        {session && (
          <>
            <li>
              <ThemeSwitcher />
            </li>
            <li>
              <Link href='/dashboard'>
                <a>Dashboard</a>
              </Link>
            </li>
            <li>
              <Link href='/api/auth/signout'>
                <a
                  onClick={(e) => {
                    e.preventDefault()
                    signOut()
                  }}
                >
                  Sign Out
                </a>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
