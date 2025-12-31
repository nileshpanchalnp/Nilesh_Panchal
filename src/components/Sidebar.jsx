import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  X,
  User,
  Briefcase,
  FileText,
  FileCode,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

const menuItems = [
  { name: "About Me", href: "/", icon: User },
  { name: "Portfolio", href: "/portfolio", icon: Briefcase },
  { name: "Resume", href: "/resume", icon: FileText },
  { name: "Certificate", href: "/Certificate", icon: FileCode },
  { name: "Contact", href: "/contact", icon: Phone },
];

export default function Sidebar({ open, setOpen }) {
  const location = useLocation();

  return (
    <div
      className={`lg:block bg-gray-900  fixed inset-y-0 left-0 z-50 w-64  shadow-lg transform transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="flex flex-col h-full bg-gray-800  text-white">
        <div className="flex items-center justify-between flex-shrink-0 px-4 py-4">
          <span className="text-2xl font-semibold text-60px ms-3">
            Nilesh Panchal
          </span>
          <button onClick={() => setOpen(false)} className="lg:hidden">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <nav className="px-2 py-4 ">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-4 py-2 mt-2  text-white rounded-lg hover:bg-purple-800  ${
                  location.pathname === item.href
                    ? "bg-purple-800 bg-opacity-30"
                    : ""
                }`}
                onClick={() => setOpen(false)}
              >
                <item.icon className="h-6 w-6 mr-3" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex justify-center space-x-4 pb-4 pe-5 ">
          <Facebook className="h-5 w-5 text-white" />
          <Instagram className="h-5 w-5 text-white" />
          <Twitter className="h-5 w-5 text-white" />
          <Linkedin className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  );
}
