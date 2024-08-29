import {FaGithub, FaDiscord, FaReddit, FaTwitter} from "react-icons/fa";

export const SocialNetworks = () => {
  return (
    <div className="flex justify-center gap-6">
      <a
        className="inline-block align-middle text-2xl"
        href="https://github.com/we-craft-code"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 hover:text-gray-100 text-gray-300 transition duration-300 ease-in-out" />
      </a>
      <a
        className="inline-block align-middle text-2xl"
        href="https://discord.gg/Z87c4twuaX"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDiscord className="w-6 h-6 sm:w-8 sm:h-8 hover:text-gray-100 text-gray-300 transition duration-300 ease-in-out" />
      </a>
      <a
        className="inline-block align-middle text-2xl"
        href="https://www.reddit.com/r/wecraftcode/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaReddit className="w-6 h-6 sm:w-8 sm:h-8 hover:text-gray-100 text-gray-300 transition duration-300 ease-in-out" />
      </a>
      <a
        className="inline-block align-middle text-2xl"
        href="https://twitter.com/we_craft_code"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className="w-6 h-6 sm:w-8 sm:h-8 hover:text-gray-100 text-gray-300 transition duration-300 ease-in-out" />
      </a>
    </div>
  );
};
