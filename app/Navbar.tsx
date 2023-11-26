"use client";

import { NextUIProvider } from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

const menuItems = [
  "ППЖ",
  "Экологический консалтинг",
  "Услуги",
  "Преимущество",
  "Клиеты",
  "Контакты",
];

function CustomNavbar() {
  return (
    <NextUIProvider>
      <div className="fixed m-auto top-5 left-0 right-0 bg-white w-fit p-3 rounded-lg flex gap-3">
        <div className="font-bold text-xl mt-[-3px]">Эко-Терра</div>
        <div className="flex gap-2">
          {menuItems.map((x) => (
            <div key={x}>{x}</div>
          ))}
        </div>
        {/**<a href="tel:+ 7 (800) 555-14-08" className="bg-green-400 rounded-xl p-2 text-white">+ 7 (800) 555-14-08</a> */}
        <a href="tel:+ 7 (800) 555-14-08" className="font-semibold">
          + 7 (800) 555-14-08
        </a>
      </div>
    </NextUIProvider>
  );
}

/**
 *
 */
export default CustomNavbar;
