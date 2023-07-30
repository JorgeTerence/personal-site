"use client";

import { Menu } from "@headlessui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between py-3 px-5 bg-choco-base text-white sticky">
      <Link className="text-xl flex items-baseline gap-2" href="/">
        <span className="text-2xl">🌼</span>
        Jorge Terence
      </Link>
      <ul className="flex gap-4">
        <Item>About</Item>
        <Item>Experience</Item>
        <Item>Contacts</Item>
        <Item>
          <Menu>
            <Menu.Button id="btn-other">Other</Menu.Button>
            <Menu.Items>
              <ul className="absolute rounded-lg right-0 top-full p-3 w-max">
                <Menu.Item>
                  <li>
                    <Link href="/">Poetry</Link>
                  </li>
                </Menu.Item>
                <Menu.Item>
                  <li>
                    <Link href="/">Languages</Link>
                  </li>
                </Menu.Item>
                <Menu.Item>
                  <li>
                    <Link href="/">Anime & Books</Link>
                  </li>
                </Menu.Item>
                <Menu.Item>
                  <li>
                    <Link href="/">Secret</Link>
                  </li>
                </Menu.Item>
              </ul>
            </Menu.Items>
          </Menu>
        </Item>
      </ul>
    </nav>
  );
}

function Item({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative hover:bg-choco-milk hover:shadow-sm cursor-pointer transition-colors px-3 py-1 rounded-lg border border-choco-dark">
      {children}
    </li>
  );
}
