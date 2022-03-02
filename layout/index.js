import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Crypto Skulls</title>
        <meta name="description" content="Welcome to Skull Nation" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/discovr-98d5c.appspot.com/o/images%2Fcryptoskullpreview.png?alt=media&token=e557a2c9-296c-4594-8fbf-4cbed695bbb4"
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/discovr-98d5c.appspot.com/o/images%2Fcryptoskullpreview.png?alt=media&token=e557a2c9-296c-4594-8fbf-4cbed695bbb4"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <div className="w-full min-h-screen bg-white flex flex-col">
        <Header />
        <main className="pt-[72px] flex grow justify-center flex-col">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
