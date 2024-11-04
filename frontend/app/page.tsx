import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-12">
      <div className="hidden sm:block">
        <Image
          src="/logo_and_text.png"
          alt="we craft code"
          height={250}
          width={340}
        />
      </div>
      <div className="block sm:hidden">
        <Image
          src="/logo_and_text.png"
          alt="we craft code"
          height={125}
          width={220}
        />
      </div>
      <Link
        href="https://discord.gg/Z87c4twuaX"
        prefetch={false}
        role="button"
        className="font-semibold bg-gray-900 hover:bg-gray-800 text-gray-200 hover:text-gray-100 px-4 py-2 rounded-md cursor-pointer"
      >
        Join our Discord Channel
      </Link>
      <div className="sm:text-xl text-gray-800 sm:w-[600px] text-center p-8">
        We are a small group of people who leverage learning and programming
        through motivation, mentoring and craftsmanship.
      </div>
      <a
        href="mailto:wecraftcode@gmail.com"
        className="hover:underline font-semibold text-red-600 hover:text-red-500"
      >
        wecraftcode@gmail.com
      </a>
    </div>
  );
}
