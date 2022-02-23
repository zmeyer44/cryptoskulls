import Head from "next/head";
import Image from "next/image";
import Layout from "../layout";
import Button from "../components/Button";

export default function Learning() {
  return (
    <>
      <Head>
        <title>Crypto Skulls | Learning</title>
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
      </Head>
      <Layout>
        <div className="bg-white w-full flex flex-col justify-center relative grow">
          <div className="flex max-w-8xl flex-col py-16 px-4 self-stretch w-full items-center mt-10 mb-16">
            <h1 className="font-crush text-black text-[3em] lg:text-[4em] text-center tracking-wide mb-3 sm:mb-5">
              Coming Soon!
            </h1>
          </div>

          <div className="absolute bottom-0 left-0">
            <div className="relative w-40 h-40">
              <Image
                src="/assets/images/pixels1red.png"
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
          </div>
          <div className="absolute top-0 right-0">
            <div className="relative w-40 h-40">
              <Image
                src="/assets/images/pixels3red.png"
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}