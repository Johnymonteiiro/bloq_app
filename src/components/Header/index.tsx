/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Link from 'next/link';
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <Link href='/'>
          <a>
            <img src="/logo.svg" alt="logo" />
          </a>
        </Link>
      </header>
    </>
  );
}
