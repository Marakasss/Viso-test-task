import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <ul className="flex justify-center gap-16 p-4 bg-gray-800 text-gray-300 text-2xl border-b border-grey-800 mb-4">
      <li>
        <Link href={"/"}>Entry Form</Link>
      </li>
      <li>
        <Link href={"/summary"}>Summary</Link>
      </li>
    </ul>
  );
};

export default Header;
