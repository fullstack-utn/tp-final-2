import { useState } from "react";
// chakra-ui
import { Box, Image, Link } from "@chakra-ui/react";
// images
import MailIcon from "../../assets/icons/mail.png";

export default function Header() {
  const [email] = useState("devnicolasg@mail.com");
  return (
    <Box
      as="header"
      position={{ base: "absolute", md: "relative" }}
      top={{ base: "0" }}
      zIndex={{ base: "6" }}
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      height="10vh"
      width={{ base: "100vw", md: "100%" }}
      padding="25px"
      marginTop={{ base: "0", md: "20px" }}
      borderBottom="1px solid #c6c6c6"
    >
      <Image height="25px" src={MailIcon} alt="" />
      <Link
        textDecoration="none"
        color={{ base: "white", md: "#9d9c9c" }}
        padding="0 22px"
        fontSize={{ base: "16px", sm: "22px" }}
        transition="0.5s all"
        _hover={{ color: "#494949" }}
        href={`mailto:${email}`}
        target="_blank"
      >
        {email}
      </Link>
    </Box>
  );
}
