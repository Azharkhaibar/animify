"use client";
import React from "react";
import { Box, Flex, Link, IconButton, Input, Container, Image } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

type NavbarPropsSet = {
  logoSrc: string;
  logoAlt: string;
  menuItems: { name: string; href: string }[];
  searchPlaceholder?: string;
  onSearch?: (value: string) => void;
  icons: { icon: React.ElementType; label: string; onClick: () => void }[];
};

export const Navbar: React.FC<NavbarPropsSet> = ({ logoSrc, logoAlt, menuItems, searchPlaceholder = "Search...", onSearch, icons }) => {
  const [SearchDataValue, setSearchDataValue] = React.useState("");

  const handleSetDataValue = () => {
    if (onSearch) {
      onSearch(SearchDataValue);
    }
  };

  return (
    <Box bg="black" boxShadow="lg" py={4}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <Flex align="center">
            <Image src={logoSrc} alt={logoAlt} boxSize="40px" />
          </Flex>

          {/* Menu Items */}
          <Flex align="center" flex="1" ml={8} color="white">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href} mx={4} fontWeight="bold" fontSize="lg" color="white" _hover={{ color: "gray.400" }}>
                {item.name}
              </Link>
            ))}
          </Flex>

          {/* Search Bar */}
          <Flex align="center" maxW="300px" color="white">
            <Input placeholder={searchPlaceholder} variant="filled" bg="gray.800" borderRadius="md" _placeholder={{ color: "gray.500" }} value={SearchDataValue} onChange={(e) => setSearchDataValue(e.target.value)} color="white" />
            <IconButton aria-label="Search database" icon={<FaSearch />} ml={2} borderRadius="md" variant="solid" colorScheme="whiteAlpha" onClick={handleSetDataValue} />
          </Flex>

          {/* Icons */}
          <Flex align="center" ml={8}>
            {icons.map((iconItem, index) => (
              <IconButton key={index} aria-label={iconItem.label} icon={<iconItem.icon />} variant="ghost" color="white" _hover={{ color: "gray.400" }} onClick={iconItem.onClick} ml={index === 0 ? 0 : 4} />
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
