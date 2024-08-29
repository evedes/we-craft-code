import type {NextPage} from "next";
import {FullSection, JoinDiscord, NextSection, Stack} from "../components";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex justify-center items-center py-6">
      <div className="lg:hidden">
        <Image
          src="/images/logo.png"
          width={80}
          height={80}
          alt="wecraftcode"
        />
      </div>
      <div className="hidden lg:block">
        <Image
          src="/images/logo.png"
          width={250}
          height={250}
          alt="wecraftcode"
        />
      </div>
    </div>
  );
};

const About: NextPage = () => {
  return (
    <main className="text-center lg:text-3xl">
      <FullSection id="one">
        <Stack>
          <Logo />
          <div className="text-center">
            Though we&apos;re not strict about which bootcamp you should do, we
            recommend{" "}
          </div>
          <div className="lg:text-4xl">
            <a
              href="https://freecodecamp.org"
              className="text-red-600 hover:text-red-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              freeCodeCamp
            </a>
          </div>
          <div className="text-xl lg:text-5xl font-bold">
            It simply works, and it&apos;s free, as in freedom!
          </div>
          <div className="flex justify-center">
            <NextSection href="two" />
          </div>
        </Stack>
      </FullSection>
      <FullSection id="two">
        <Stack>
          <Logo />
          <div>
            <div>
              We believe that becoming a developer is much more than the
              technical skill.
            </div>
            <div>
              We encourage you to share your projects and raise your doubts.
            </div>
          </div>
          <div className="text-2xl lg:text-6xl font-bold">
            Together we&apos;re stronger, we grow stronger!
          </div>
          <div className="text-red-500">
            We grow what companies are looking for...
          </div>
          <div className="text-4xl lg:text-6xl text-red-600 font-bold">
            HUMAN BEINGS
          </div>
          <div>
            People that are able to communicate, to gather individuals, with
            empathy and kindness.
          </div>
          <div className="flex justify-center">
            <NextSection href="three" />
          </div>
        </Stack>
      </FullSection>
      <FullSection id="three">
        <Stack>
          <Logo />
          <div>
            As a worldwide community, you&apos;ll always have people online, to
            exchange, discuss or grow ideas with you.
          </div>
          <div className="text-red-500">
            You can even learn techniques such as:
          </div>
          <div className="text-2xl lg:text-5xl font-bold text-red-600">
            pair-programming, rubber-ducking, code review
          </div>
          <div className="lg:text-6xl">
            All these are encouraged practices by top-tier companies.
          </div>
          <div className="flex justify-center">
            <NextSection href="four" />
          </div>
        </Stack>
      </FullSection>
      <FullSection id="four">
        <Stack>
          <Logo />
          <div>
            <div>We have no color, no race, no sex.</div>
            <div>We practice</div>
          </div>
          <div className="text-red-600 text-2xl lg:text-6xl font-bold">
            INCLUSIVITY
          </div>
          <div>We welcome</div>
          <div className="text-red-600 text-2xl lg:text-6xl font-bold">
            DIVERSITY
          </div>
          <div className="lg:text-5xl">
            You&apos;ll be able to use your colleagues slipstream to grow
            faster, and land your first job in the industry.
          </div>
          <div className="text-red-600 text-2xl lg:text-6xl font-bold">
            100% FREE
          </div>
          <div className="py-4 sm:m-auto lg:py-12">
            <JoinDiscord />
          </div>
        </Stack>
      </FullSection>
    </main>
  );
};

export default About;
