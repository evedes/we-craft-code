export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col gap-4 justify-center items-center flex-1">
        <div className="text-lg">wecraftcode.org</div>
        <a
          href="https://discord.gg/Z87c4twuaX"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-sm font-bold bg-red-600 hover:bg-red-500 text-gray-200 hover:text-gray-100 px-4 py-2 rounded-md cursor-pointer">
            Join our Discord Channel
          </div>
        </a>
      </div>
      <div className="h-20 flex justify-center items-center">
        2023 © wecraftcode.org
      </div>
    </div>
  );
}
