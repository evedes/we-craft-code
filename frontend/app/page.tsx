import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-12">
      <Image
        src="/logo_and_text.png"
        alt="we craft code"
        height={250}
        width={340}
      />
      <Link
        href="https://discord.gg/Z87c4twuaX"
        prefetch={false}
        role="button"
        className="font-semibold bg-red-700 hover:bg-red-600 text-gray-200 hover:text-gray-100 px-4 py-2 rounded-md cursor-pointer"
      >
        Join our Discord Channel
      </Link>
      <div className="text-xl text-gray-100 w-[600px] text-center">
        We are a small group of people who leverage learning and programming
        through motivation, mentoring and craftsmanship.
      </div>
      <a
        href="mailto:wecraftcode@gmail.com"
        className="hover:underline font-semibold text-red-700 hover:text-red-600"
      >
        wecraftcode@gmail.com
      </a>
    </div>
  );
}
