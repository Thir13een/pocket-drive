"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Aurora from "@/components/Aurora";
import React, { useState } from "react";
import UserIcon from "@/components/icons/DashboardIcons";
import "./dashboard.css";
import "./navbar.css";

const sidebarLinks = [
  { name: "My Drive", href: "/drive" },
  { name: "Shared", href: "/drive/shared" },
  { name: "Starred", href: "/drive/starred" },
  { name: "Trash", href: "/drive/trash" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("/drive");

  return (
    <div className="dashboard">
      {/* Aurora Background */}
      <div className="aurora-background">
        <Aurora
          colorStops={["#3B82F6", "#8B5CF6", "#EC4899"]}
          blend={0.6}
          amplitude={1.5}
          speed={0.5}
        />
      </div>

      {/* Navbar */}
      <nav className="navbar">
        {/* Left - Logo */}
        <div className="navbar-logo">
          <Link href="/">
            <h2 className="text-xl font-semibold">PocketDrive</h2>
          </Link>
        </div>

        {/* Center - Navigation */}
        <div className="nav-link-text navbar-center">
          <button className="upload-btn bg-indigo-500 text-white font-medium rounded-full hover:bg-indigo-400 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
              />
            </svg>
          </button>

          {/* Nav Links */}
          <div className="nav-links">
            {sidebarLinks.map((link) => {
              const isActive = activeLink === link.href;

              return (
                <button
                  key={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {link.name}
                  {isActive && <span className="glow-dot" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right - User */}
        <div className="navbar-user">
          <button className="user-btn">
            <UserIcon className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">{children}</main>
    </div>
  );
}
