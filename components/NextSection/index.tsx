import {FaChevronDown} from "react-icons/fa";
import Link from "next/link";

interface NextSectionProps {
  href: string;
}

export const NextSection = ({href}: NextSectionProps) => {
  return (
    <div className="animate-pulse py-6">
      <Link href={`#${href}`}>
        <a>
          <FaChevronDown className="w-12 h-12 sm:w-18 sm:h-18 hover:text-gray-100 text-gray-300 transition duration-300 ease-in-out cursor-pointer" />
        </a>
      </Link>
    </div>
  );
};
