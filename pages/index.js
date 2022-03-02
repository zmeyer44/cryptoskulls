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
        <div className="bg-dark w-full flex flex-col justify-center">
          <div className="flex max-w-8xl flex-col py-16 px-4 w-full items-center">
            <h1 className="font-crush text-white text-[3em] text-center tracking-wide">
              Welcome to Skull Nation
            </h1>
            <div className="w-full my-2 sm:mt-4 lg:mt-6 lg:mb-4 relative h-[200px] lg:h-[230px]">
              <Image
                src="/assets/images/skulllords.png"
                layout="fill"
                objectFit="contain"
                alt="Skull Lords"
              />
            </div>
            <div className="flex justify-center max-w-lg w-full">
              <p className="text-slate-300 text-center font-mono text-md md:text-lg">
                Skull Nation is lead by 10 Skull Lords, each are hand drawn and
                extremly rare with a uniquness index of 1.
              </p>
            </div>
          </div>
          <div className="flex max-w-8xl flex-col py-16 px-4 items-center max-w-2xl lg:max-w-3xl mx-auto">
            <h1 className="font-crush text-white text-[3em] text-center mb-6 tracking-wide">
              Why We&apos;re <span className="text-red-700">Skullish</span>
            </h1>
            <div className="flex flex-col justify-center w-full space-y-5 px-3">
              <div className="flex flex-col space-y-1">
                <h4 className="font-crush text-xl sm:text-2xl text-white tracking-wide">
                  Full Comercial Rights
                </h4>
                <p className="font-mono text-sm text-slate-300">
                  CryptoSkulls owners have full commercial rights to the art in
                  their owned wallets.
                </p>
              </div>
              <div className="flex flex-col space-y-1">
                <h4 className="font-crush text-xl sm:text-2xl text-white tracking-wide">
                  Merchandising, Derivatives, and Commercial use
                </h4>
                <p className="font-mono text-sm text-slate-300">
                  There are no monetary limits on earnings on merchandise,
                  derivatives or other commercial uses.
                </p>
              </div>
              <div className="flex flex-col space-y-1">
                <h4 className="font-crush text-xl sm:text-2xl text-white tracking-wide">
                  Copyright Transfer
                </h4>
                <p className="font-mono text-sm text-slate-300">
                  It is our opinion that a blockchain transaction satisfies the
                  legal requirement for copyright transfer. So copyright
                  ownership of each individual image is adjudicated by the
                  Ethereum/Polygon address for which the non-fungible token
                  (NFT) of that image is assigned. Upon transfer or sale of the
                  NFT to a new owner, the previous owner gives up all claims to
                  the copyright.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
