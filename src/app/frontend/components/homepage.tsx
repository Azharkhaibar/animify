"use client"; // Add this at the top of the file

import React from "react";
import { Navbar } from "../layout/navbar"; // Path ke file Navbar Anda
import { FaSearch, FaHistory, FaSignInAlt } from "react-icons/fa";

export const Recommend: React.FC = () => {
  const menuItems = [
    { name: "Rekomendasi", href: "/rekomendasi" },
    { name: "KDrama", href: "/kdrama" },
    { name: "Anime", href: "/anime" },
    { name: "Film", href: "/film" },
  ];

  const icons = [
    { icon: FaHistory, label: "History", onClick: () => console.log("History clicked") },
    { icon: FaSignInAlt, label: "Login", onClick: () => console.log("Login clicked") },
  ];

  const handleSearch = (value: string) => {
    console.log("Searching for:", value);
  };

  return (
    <>
      <Navbar logoSrc="/src/asset/image/logo/Preview-removebg-preview.png" logoAlt="iQIYI" menuItems={menuItems} searchPlaceholder="Search movies, dramas..." onSearch={handleSearch} icons={icons} />
    </>
  );
};
