import Head from 'next/head';
import ReactDatGui from '../components/ReactDatGui';

const Page = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      html {
        width: 100%;
        height: 100%;
      }
      body {
        margin: 0 20px;
        background-color: #f3eee8;
        color: #53504d;
        font: 14px/22px Arial, sans-serif;
      }
    `}</style>
    <ReactDatGui />
  </>
);

export default Page;
