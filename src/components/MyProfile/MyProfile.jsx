// chakra-ui
import { Box, Image, Link, Text, Divider } from "@chakra-ui/react";
// images
import ArrowIcon from "../../assets/icons/arrow.png";
import Profile from "../../assets/profile.jpg";
import Github from "../../assets/icons/github.png";
import Linkedin from "../../assets/icons/linkedin.png";
import Instagram from "../../assets/icons/instagram.png";
import { useState } from "react";

export default function MyProfile() {
  const [name] = useState("NICO");
  const [socials] = useState([
    {
      id: 1,
      url: "https://github.com/ag171980",
      tag: "@ag171980",
      img: Github,
    },
    {
      id: 2,
      url: "https://www.linkedin.com/in/alexis-gutierrez-784612282/",
      tag: "@nicolas",
      img: Linkedin,
    },
    {
      id: 3,
      url: "https://github.com/ag171980",
      tag: "@devnicolas19",
      img: Instagram,
    },
  ]);

  return (
    <Box
      as="section"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent={{ base: "flex-start", md: "center" }}
      alignItems="center"
      minHeight="80vh"
      color={{ base: "white", md: "black" }}
      position={{ base: "relative", md: "unset" }}
      height={{ base: "100%", md: "auto" }}
      width={{ base: "100vw", lg: "auto" }}
    >
      <Box
        display={{ base: "flex", md: "unset" }}
        flexDirection={{ base: "column", md: "unset" }}
        justifyContent={{ base: "flex-end", md: "unset" }}
        position={{ base: "absolute", md: "relative" }}
        top={{ base: "unset", sm: "50%", md: "0" }}
        bottom={{ base: "15%", sm: "unset" }}
        zIndex={{ base: "5", md: "0" }}
        margin={{ md: "0", lg: "0 20px" }}
        width={{ base: "90vw", md: "50%", lg: "600px" }}
      >
        <Text
          as="h1"
          fontSize={{ base: "50px", md: "75px" }}
          fontWeight="normal"
          textTransform="uppercase"
          lineHeight={{ base: "60px", md: "90px" }}
          margin="0 20px"
        >
          HOLA, <br />
          SOY {name}
        </Text>
        <Text
          as="p"
          fontSize="21px"
          color={{ base: "white", md: "#9d9c9c" }}
          padding="45px 0 15px"
          margin="0 20px"
        >
          “Una persona a la que le gusta programar”
        </Text>
        <Divider
          backgroundColor="#c6c6c6"
          height={{ base: "0", sm: "1px" }}
          border="none"
          margin="0 20px"
        />
        <Link
          href="#my-works"
          width="280px"
          margin={{ base: "35px auto", md: "35px 20px", lg: "35px 0" }}
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          fontSize="21px"
          padding="10px 15px 10px 25px"
          backgroundColor="white"
          outline="none"
          border="2px solid black"
          borderRadius="40px"
          textDecoration="none"
          color="black"
          transition="0.5s all"
          _hover={{
            cursor: "pointer",
            backgroundColor: "black",
            color: "white",
          }}
        >
          VER TRABAJOS{" "}
          <Image
            src={ArrowIcon}
            alt=""
            height="45px"
            backgroundColor="black"
            padding="10px"
            borderRadius="50%"
            marginLeft="15px"
          />
        </Link>
      </Box>

      <Box
        margin={{ md: "0", lg: "0 20px" }}
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="600px"
        minHeight={{ base: "100vh", md: "600px" }}
        width={{ base: "auto", md: "50%", lg: "600px" }}
        _after={{
          content: "''",
          position: { base: "absolute", md: "unset" },
          top: { base: "0", md: "unset" },
          height: { base: "100vh", md: "0" },
          width: { base: "100vw", md: "0" },
          backgroundColor: { base: "rgba(0,0,0,0.5)", md: "transparent" },
          zIndex: "3",
        }}
      >
        <Image
          src={Profile}
          alt=""
          height={{ base: "100vh", md: "535px" }}
          width={{ base: "100vw", md: "405px" }}
          maxWidth={{ base: "100vw", md: "405px" }}
          objectFit="cover"
          border={{ base: "none", md: "10px solid white" }}
          borderTopLeftRadius="1000px"
          borderTopRightRadius="1000px"
          position="absolute"
          zIndex="2"
        />
        <Box
          height="535px"
          width="405px"
          position="absolute"
          left={{ md: "35px", lg: "75px" }}
          top="50px"
          zIndex="1"
          borderTopLeftRadius="1000px"
          borderTopRightRadius="1000px"
          backgroundColor="#e3dafe"
          display={{ base: "none", md: "flex" }}
        ></Box>{" "}
        <Box
          position="absolute"
          borderRadius="50%"
          zIndex="3"
          backgroundColor="#ffbcc4"
          left={{ md: "20px", lg: "70px" }}
          top={{ md: "40px", lg: "30px" }}
          height="105px"
          width="105px"
          display={{ base: "none", md: "flex" }}
        ></Box>
        <Box
          position="absolute"
          borderRadius="50%"
          zIndex="3"
          backgroundColor="#38ffbc"
          left={{ md: "-25px", lg: "25px" }}
          bottom={{ md: "70px", lg: "50px" }}
          height="70px"
          width="70px"
          display={{ base: "none", md: "flex" }}
        ></Box>
        <Box
          position="absolute"
          borderRadius="50%"
          zIndex="3"
          backgroundColor="#ffebb9"
          right={{ md: "40px", lg: "60px" }}
          top="60px"
          height="60px"
          width="60px"
          display={{ base: "none", md: "flex" }}
        ></Box>
        <Box
          position="absolute"
          borderRadius="50%"
          zIndex="3"
          backgroundColor="#a8c4e9"
          right={{ md: "35px", lg: "65px" }}
          top="130px"
          height="27px"
          width="27px"
          display={{ base: "none", md: "flex" }}
        ></Box>
        <Box
          position="absolute"
          borderRadius="50%"
          zIndex="3"
          backgroundColor="#ffbcc4"
          right={{ md: "100px", lg: "150px" }}
          bottom="-5px"
          height="27px"
          width="27px"
          display={{ base: "none", md: "flex" }}
        ></Box>
        <Box
          width={{ base: "100vw", md: "auto" }}
          display="flex"
          flexDirection={{ base: "row", md: "column" }}
          justifyContent={{ base: "space-evenly", md: "center" }}
          alignItems={{ md: "flex-end", lg: "flex-start" }}
          position="absolute"
          right={{ base: "50%", md: "45px", lg: "-55px" }}
          bottom={{ base: "70px", sm: "55px" }}
          zIndex="4"
          transform={{ base: "translateX(50%)", md: "none" }}
        >
          {socials.map((social, key) => (
            <Link
              key={key}
              href={social.url}
              target="_blank"
              backgroundColor="#e3dafe"
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              padding="15px"
              borderRadius="50px"
              margin={{ base: "0", md: "7px 0" }}
              textDecoration="none"
              transition="0.5s all"
              _hover={{ backgroundColor: "#ab90ff", textDecoration: "none" }}
            >
              <Box
                border="none"
                height="40px"
                width="40px"
                backgroundColor="white"
                padding="20px"
                borderRadius="50%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  src={social.img}
                  alt=""
                  height="20px"
                  width="20px"
                  maxWidth="20px !important"
                />
              </Box>
              <Text
                as="h3"
                fontWeight="normal"
                fontSize="18px"
                padding="0 10px"
                marginLeft="10px"
                color="black"
                transition="0.5s all"
                display={{ base: "none", sm: "unset" }}
              >
                {social.tag}
              </Text>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
