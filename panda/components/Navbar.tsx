import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (e, href) => {
    e.preventDefault();
    const [path, hash] = href.split('#');
    if (path === router.pathname) {
      // Same page navigation
      document.getElementById(hash).scrollIntoView({ behavior: 'smooth' });
    } else {
      // Different page navigation
      router.push(href).then(() => {
        if (hash) {
          document.getElementById(hash).scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  };

  const navbarHeight = isOpen ? 'h-40' : 'h-16'; // Example heights, adjust as necessary

  return (
    <nav className={`${styles.nav} ${navbarHeight} bg-black text-white flex items-center justify-between`}>
      <button onClick={() => setIsOpen(!isOpen)} className="p-4">
        {/* Icon or text for menu toggle */}
        Menu
      </button>
      <div className={`${styles.navLinks} ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row items-center`}>
        <Link href="/" passHref>
          <span className="cursor-pointer hover:underline p-4">Home</span>
        </Link>
        <Link href="/about" passHref>
          <span className="cursor-pointer hover:underline p-4">About</span>
        </Link>
        <a href="/" onClick={(e) => handleNavigation(e, '/#projects')} className="cursor-pointer hover:underline p-4">
          Projects
        </a>
        <a href="/" onClick={(e) => handleNavigation(e, '/#internships')} className="cursor-pointer hover:underline p-4">
          Internships
        </a>

        <a href="/" onClick={(e) => handleNavigation(e, '/#contacts')} className="cursor-pointer hover:underline p-4">
          Contacts
        </a>

        <a href="/" onClick={(e) => handleNavigation(e, '/#aboutme')} className="cursor-pointer hover:underline p-4">
          About me
        </a>


      </div>
    </nav>
  );
};

export default Navbar;
