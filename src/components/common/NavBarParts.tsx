"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const apps = [
  { name: "Home", path: "/" },
  { name: "Works", path: "/work" },
  { name: "Users", path: "/user" },
  { name: "Events", path: "/event" },
  { name: "稟議", path: "/approval" },
  { name: "手続き", path: "/account" },
  { name: "Settings", path: "/setting" },
];
export const NavBarAppLinks = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      {apps.map((a) => (
        <NavBarAppLink
          key={a.name}
          isCurrentPage={
            a.path === "/"
              ? a.path === pathname
              : pathname.indexOf(a.path) === 0
          }
          appName={a.name}
          path={a.path}
        />
      ))}
    </>
  );
};
type NavBarAppLinkProps = {
  isCurrentPage: boolean;
  appName: string;
  path: string;
};
const NavBarAppLink = ({
  isCurrentPage,
  appName,
  path,
}: NavBarAppLinkProps) => {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={
        (isCurrentPage || isHover ? "text-white" : "text-gray-400") +
        " mt-5 cursor-pointer"
      }
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => router.push(path)}
    >
      {appName}
      {isCurrentPage || isHover ? (
        <div className="border-b-4 border-sky-400 rounded-full"></div>
      ) : (
        ""
      )}
    </div>
  );
};
