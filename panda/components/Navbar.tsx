import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.nav}>
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {/* Icon or text for menu toggle */}
            Menu
          </button>
          <div className={`${styles.navLinks} ${isOpen ? 'block' : 'hidden'}`}>
            <Link href="/" passHref>
              <span className="cursor-pointer text-white hover:underline">Home</span>
            </Link>
            <Link href="/about" passHref>
              <span className="cursor-pointer text-white hover:underline">About</span>
            </Link>
          </div>
        </nav>
    )
}

export default Navbar;
