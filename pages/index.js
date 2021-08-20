import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          &#x1F44B; Hola, soy Sebastián. Emprendedor serial. Desarrollador Front
          End. Papá. Y hago desaparecer el vino. &#x1F377;
        </p>
        <p>
          Este es mi blog. Podés ver mis trabajos o contactarme en mi{' '}
          <a href="https://sebasimarro.com"> portfolio.</a>
        </p>
      </section>
    </Layout>
  );
}
