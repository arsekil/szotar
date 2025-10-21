import szotar from '../api/szotar';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/About.module.css';

export default function About() {

    const router = useRouter();

    const handleHome = () => {
        router.push(`/`);
    };
    
    const handleIdorend = () => {
        router.push(`/idorend/${szotar[0].halan}`);
    };
    
    const handleABC = () => {
        router.push(`/abc/a`);
    };
    
    const handleCollection = () => {
        router.push(`/collection/collection`);
    };

    return (
        <>
        <Head>
            <title>Értelmetlenező Szótár Prodzsekt</title>
            <meta name="description" content="Értelmetlenező Szótár Prodzsekt" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon16.png" />
        </Head>
        <div className={styles.entryContainerNevek}>
                <div className={styles.entryContainerMenuHome} onClick={handleHome}>Főoldal</div>
                <div className={styles.entryContainerMenuIdorend} onClick={handleIdorend}>Időrend</div>
                <div className={styles.entryContainerMenuABC} onClick={handleABC}>ABC</div>
                <div className={styles.entryContainerMenuCollection} onClick={handleCollection}>Szógyűjtő</div>
        </div>
        <div className={styles.container}>
            <div className={styles.title}><h1>Rólunk</h1></div>
            <div className={styles.content}>
                    This website is part of the Értelmetlenező Szótár Prodzsekt (Nonsense Dictionary Project), which aims to collect and present a variety of nonsensical words and phrases. Our goal is to explore the playful side of language and provide a platform for creativity and imagination.
                    <br /><br />
                    The project is maintained by a dedicated team of language enthusiasts who believe in the power of words to inspire and entertain. We welcome contributions from anyone interested in adding to our collection of nonsensical terms.
                    <br /><br />
                    If you have any questions, suggestions, or would like to contribute, please feel free to reach out to us through <Link href="https://poet.hu" target="_blank">Poet.hu</Link>.
                    <br /><br />
                    Thank you for visiting the Értelmetlenező Szótár Prodzsekt!
            </div>
        </div>
        </>
    )

}