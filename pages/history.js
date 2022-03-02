import Head from "next/head";
import Image from "next/image";
import Layout from "../layout";
import Button from "../components/Button";

export default function History() {
  return (
    <>
      <Head>
        <title>Crypto Skulls | History</title>
        <meta name="description" content="Learn the history of Skull Nation" />
      </Head>
      <Layout>
        <div className="bg-white w-full flex flex-col justify-center relative">
          <div className="flex max-w-8xl flex-col py-16 px-4 w-full items-center mt-10 mb-16">
            <h1 className="font-crush text-black text-[3em] lg:text-[4em] text-center tracking-wide mb-3 sm:mb-5">
              The History of the Skulls
            </h1>
            <div className="flex flex-col justify-center max-w-2xl w-full mt-2 md:mt-4 space-y-4 px-3">
              <p className="text-slate-700  font-mono text-md md:text-lg">
                Artist and Developer Alex Slayer created CryptoSkulls in May
                2019. This was the second 10,000 supply generative PFP project,
                following the groundbreaking 2017 project CryptoPunks. While
                CryptoPunks was launched as a ERC-720 token, CryptoSkulls was
                the first 10,000 supply PFP ERC-721 token.
              </p>
              <p className="text-slate-700 font-mono text-md md:text-lg">
                Each CryptoSkulls NFT has a varying array of traits, with some
                being rarer than others. This range of attributes is called a
                Uniqueness Index. On the Uniqueness Index, the smaller the
                value, the rarer it is.
              </p>
              <p className="text-slate-700 font-mono text-md md:text-lg">
                Beyond the general supply of CryptoSkulls, the project’s
                founding team also released 10 Skull Lords. These legendary-tier
                NFTs were hand-drawn, assigned names, and endowed with a
                Uniqueness Index of 1.
              </p>
              <p className="text-slate-700 font-mono text-md md:text-lg">
                It seems not all Skull Lords were created equal though, as most
                (#9, #24, #27, #36, #41, #43 and #70) display static pixel
                images, the art for CryptoSkull #19, CryptoSkull #20, and
                CryptoSkull #42 links to short, animated YouTube videos complete
                with music.
              </p>
              <p className="text-slate-700 font-mono text-md md:text-lg">
                Art and rarity aside, CryptoSkulls experienced a very slow
                start. Considering the NFT market had yet to reach even a
                fraction of the user numbers we’ve seen over the past year, a
                decent supply of the collection was actually minted and held
                within the official CryptoSkulls account itself. The
                collection’s final mint didn’t take place till Aug. 2019, a few
                months after the collection had launched and begun gaining a
                following.
              </p>
              <p className="text-slate-700 font-mono text-md md:text-lg">
                In October 2020, CryptoSkulls revealed plans to intertwine the
                project with a gamified experience called Gold of Skulls.
                Alongside the game announcement also came the news that each
                CryptoSkull NFT would be a playable token in Gold of Skulls —
                which was originally planned for release in winter of 2021.
              </p>
              <p className="text-slate-700 font-mono text-md md:text-lg">
                To support game development, 1,000 CryptoSkulls were even
                assigned the extra identifier of Game Token and said to have
                extra features in the forthcoming game. And while Gold of Skulls
                — which is billed as the “first game where the uniqueness of the
                collectible token will affect the uniqueness of the player” —
                has yet to be unveiled, the excitement surrounding the endeavor
                seems to have increased.
              </p>
              <p className="text-slate-700 font-mono text-md md:text-lg">
                In conjunction with the Gold of Skulls game announcement, the
                CryptoSkulls team also developed and launched a limited Gold of
                Skulls ($GSK) ERC-20 standard coin with a total supply of
                10,000,000. Currently, $GSK can still be purchased using
                ShibaSwap.
              </p>
              <p className="text-slate-700 font-mono text-md md:text-lg">
                As of now, $GSK is tradeable and can be used as a payment token
                to purchase CryptoSkulls NFTs from the official CryptoSkulls
                account on OpenSea. Future applications of $GSK include in-game
                rewards for the Gold of Skulls game, development grants, and
                more.
              </p>
              <p className="text-slate-700 font-mono text-md md:text-lg">
                Overall, CryptoSkulls outshines numerous legacy projects because
                it can arguably be considered the second-ever 10,000-supply PFP
                collection on the Ethereum blockchain after CryptoPunks.
                However, this accolade depends on one’s definition of a PFP
                project as there are a couple of 10,000-supply gaming
                collectible projects that precede it. In any case, the
                rediscovery of an OG project at such a low price point is always
                a cause for excitement in the space. This, paired with the fact
                that the project developers are still actively trading
                CryptoSkulls and developing Gold of Skulls, has helped trading
                volume explode in 2022.
              </p>
              <p className="text-slate-700 font-mono text-md md:text-lg">
                While some may have believed CryptoSkulls would see increased
                secondaries in the fall of 2021 as a spooky NFT to collect for
                Halloween, on Jan. 11, sales started to seriously heat up as a
                response to key figures including GaryVee, Steve Aoki, GMoney,
                FVCKRENDER, ThankYouX, Matt Medved, Leonidas and many more aping
                into the project.
              </p>
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
      </Layout>
    </>
  );
}
