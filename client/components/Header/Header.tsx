import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <ul className="flex justify-center gap-16 p-4 border-b border-cyan-300 mb-4">
      <li>
        <Link href={"/"}>Entry Form</Link>
      </li>
      <li>
        <Link href={"/history"}>History</Link>
      </li>
    </ul>
  );
};

export default Header;
