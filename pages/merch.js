import Head from "next/head";
import Image from "next/image";
import Layout from "../layout";
import Button from "../components/Button";

export default function Merch() {
  return (
    <>
      <Head>
        <title>Crypto Skulls | Merch</title>
        <meta name="description" content="Start looking SKULLISH" />
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
