// react
import { useState } from "react";
// chakra-ui
import { Box, Image, Link } from "@chakra-ui/react";
// images
import EmailIcon from "../../assets/icons/mail.png";
export default function Footer() {
  const [email] = useState("devnicolasg@gmail.com");
  return (
    <Box
      as="footer"
      height="10vh"
      padding="25px"
      marginTop="20px"
      borderTop="1px solid #c6c6c6"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Image src={EmailIcon} alt="" height="25px" />
      <Link
        href={`mailto:${email}`}
        target="_blank"
        textDecoration="none"
        color="#9d9c9c"
        padding="0 22px"
        fontSize={{ base: "16px", md: "22px" }}
        transition="0.5s all"
        _hover={{ color: "#494949" }}
      >
        {email}
      </Link>
    </Box>
  );
}
