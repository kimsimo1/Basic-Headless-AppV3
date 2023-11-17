import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home }) {
  return (
  <div>
    <Head>
      <title>Basic Next.js App</title>
    </Head>
    <header>
    <nav>
      <a href="https://www.santarosa.edu">SRJC CS55.13</a>
    </nav>
    </header>
    <main>
      {children}
    </main>
    {!home && (
      <Link legacyBehavior href="/">
      <a class="btn btn-primary mt-3">♥ Back to home</a>
    </Link>
    )

      
    }
    <footer>
    <p>Welcome to WordPress!</p>
    </footer>
  </div>
  );
}


