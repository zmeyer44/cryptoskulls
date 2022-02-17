import Head from "next/head";
import Image from "next/image";
import Layout from "../layout";
import Button from "../components/Button";

export default function Home() {
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
      </Head>
      <Layout>
        <div className="flex grow w-full max-w-8xl pt-32 pb-24 relative flex-col md:flex-row mx-auto md:justify-center">
          <div className="flex flex-col justify-center px-5 md:px-4 md:max-w-lg lg:mr-6">
            <h3 className="text-accent font-crush tracking-wide text-[1.35em] mb-4 sm:text-[2em] sm:mb-9">
              We Dig The Skulls
            </h3>
            <h1 className="font-pixel uppercase text-center -ml-16 md:ml-0 leading-[1.1em] text-[4rem] sm:text-[6em]">
              Crypto <span className="ml-20 md:ml-0">Skulls</span>
            </h1>
            <div className="flex justify-center md:justify-end mt-6 lg:mt-10 space-x-5">
              <Button
                label="openSea"
                type="anchor"
                href="https://opensea.io/collection/cryptoskulls"
              />
              <Button
                label="Discord"
                secondary
                type="anchor"
                href="https://discord.gg/cryptoskulls"
              />
            </div>
          </div>
          <div className="flex grow mt-4 md:mt-0 justify-center md:max-w-xl">
            <div className="relative w-full md:w-[400px] min-h-[300px]">
              {/* <Image
                src="/assets/images/skull.png"
                layout="fill"
                objectFit="contain"
              /> */}
              <div className="glitch glitch--style-2 w-44 h-44">
                <div className="glitch__img"></div>
                <div className="glitch__img"></div>
                <div className="glitch__img"></div>
                <div className="glitch__img"></div>
                <div className="glitch__img"></div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0">
            <div className="relative w-40 h-40">
              <Image
                src="/assets/images/pixels1red.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="absolute top-0 right-0">
            <div className="relative w-40 h-40">
              <Image
                src="/assets/images/pixels3red.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className="bg-dark w-full flex justify-center">
          <div className="flex max-w-8xl flex-col py-16 px-4">
            <h1 className="font-crush text-white text-[3em] text-center">
              Welcome to Skull Nation
            </h1>
            <h1 className="font-pixel text-white text-[2em] mt-5 text-center">
              More Coming Soon...
            </h1>
          </div>
        </div>
      </Layout>
    </>
  );
}
