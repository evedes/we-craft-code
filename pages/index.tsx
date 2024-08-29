import type {NextPage} from "next";
import Head from "next/head";
import {JoinDiscord, FullSection, SocialNetworks, Stack} from "../components";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>wecraftcode.org</title>
        <meta
          name="description"
          content="We are a small group of people who leverage learning and programming through motivation, mentoring, and craftsmanship.
"
        />
        <link rel="icon" href="/favicon/favicon-16x16.png" />
      </Head>
      <FullSection id="main">
        <div className="w-3/4 lg:w-1/3">
          <Image
            src="/images/logo_and_text.png"
            height={500}
            width={680}
            alt="wecraftcode"
            layout='responsive'
          />
        </div>
        <Stack className="text-center">
          <div className="py-4 lg:text-4xl lg:max-w-[800px]">
            We are a small group of people who leverage learning and programming
            through motivation, mentoring, and craftsmanship.
          </div>
          <SocialNetworks />
          <Link href="/about" passHref>
            <div className="text-red-500 hover:text-red-400 lg:text-3xl underline cursor-pointer">
              About Us
            </div>
          </Link>
          <div className="sm:m-auto">
            <JoinDiscord />
          </div>
          <div>
            <div>&copy; 2022</div>
            <div>With ❤️, from the WeCraftCode Team</div>
          </div>
        </Stack>
      </FullSection>
    </div>
  );
};

export default Home;
