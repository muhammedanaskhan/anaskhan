import '../styles/globals.css'
import Head from 'next/head'
import dynamic from 'next/dynamic'

function MyApp({ Component, pageProps }) {
  const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
  });

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,shrink-to-fit=no"
        />
        <meta name="Anas" content="Frontend Developer" />
        <meta name="Anas" content="Frontend Developer" />
        <meta name="Anas" content="Frontend Developer" />
        <title>Muhammed Anas Khan</title>
      </Head>
      <AnimatedCursor
        innerSize={10}
        outerSize={12}
        color='0, 191, 255'
        outerAlpha={0.4}
        innerScale={1.1}
        outerScale={4}
      />
      <Component {...pageProps} />
    </>)
}

export default MyApp
