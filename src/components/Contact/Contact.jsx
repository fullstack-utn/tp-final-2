// chakra-ui
import { Box, Image, Link, Text } from "@chakra-ui/react";
// images
import ArrowIcon from "../../assets/icons/arrow.png";
import Part1 from "../../assets/contact/part1.png";
import Part2 from "../../assets/contact/part2.png";
import Part3 from "../../assets/contact/part3.png";
import Part4 from "../../assets/contact/part4.png";
import Part5 from "../../assets/contact/part5.png";
import Part6 from "../../assets/contact/part6.png";

export default function Contact() {
  return (
    <Box
      as="section"
      height={{ base: "120px", sm: "170px", md: "230px" }}
      position="relative"
    >
      <Box
        backgroundColor="#f3f7ff"
        border="10px solid white"
        width={{ base: "90%", lg: "65%" }}
        margin="0 auto"
        padding={{ base: "45px 0 0", sm: "75px 0 25px" }}
        borderRadius="35px"
        boxShadow="1px 1px 5px -1px rgba(0,0,0,0.17)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="-200px"
        left="50%"
        transform="translateX(-50%)"
        zIndex="9"
      >
        <Text
          as="h2"
          fontSize={{ base: "28px", sm: "35px", md: "45px", lg: "55px" }}
          textAlign="center"
          fontWeight="500"
        >
          Contame que idea de proyecto <Text as="br" />
          tenés en la mente
        </Text>
        <Link
          href="mailto:devnicolasg@gmail.com?subject=[Trabajar juntos]"
          width={{ base: "210px", md: "220px", lg: "280px" }}
          margin=" 35px auto"
          display=" flex"
          justifyContent=" space-around"
          alignItems=" center"
          fontSize={{ base: "15px", md: "17px", lg: "21px" }}
          padding=" 10px 15px 10px 25px"
          backgroundColor=" white"
          outline=" none"
          border=" 2px solid black"
          borderRadius=" 40px"
          textDecoration=" none"
          color=" black"
          transition=" 0.5s all"
          _hover={{
            cursor: "pointer",
            backgroundColor: "black",
            color: "white",
          }}
        >
          CONTACTAME{" "}
          <Image
            src={ArrowIcon}
            alt=""
            height={{ base: "40px", lg: "45px" }}
            backgroundColor=" black"
            padding=" 10px"
            borderRadius=" 50%"
            transform=" rotate(-90deg)"
          />
        </Link>
        <Box>
          <Image
            src={Part1}
            alt=""
            width={{ base: "70px", sm: "100px", md: "unset" }}
            position="absolute"
            zIndex="-1"
            top="30px"
            right={{ base: "10px", sm: "70px" }}
          />
          <Image
            src={Part2}
            alt=""
            width={{ base: "60px", md: "unset" }}
            position="absolute"
            zIndex="-1"
            top={{ base: "150px", sm: "120px" }}
            left={{ base: "20px", sm: "50px" }}
          />
          <Image
            src={Part3}
            alt=""
            width={{ base: "40px", md: "unset" }}
            position="absolute"
            zIndex="-1"
            top="30px"
            left={{ base: "70px", sm: "210px" }}
          />
          <Image
            src={Part4}
            alt=""
            width={{ base: "50px", md: "unset" }}
            position="absolute"
            zIndex="-1"
            bottom="120px"
            right={{ base: "100px", sm: "250px" }}
          />
          <Image
            src={Part5}
            alt=""
            width={{ base: "50px", md: "unset" }}
            position="absolute"
            zIndex="-1"
            bottom={{ base: "10px", sm: "40px" }}
            left={{ base: "50%", md: "360px" }}
            transform={{ base: "translateX(-50%)", md: "none" }}
          />
          <Image
            src={Part6}
            alt=""
            width={{ base: "50px", md: "unset" }}
            position="absolute"
            zIndex="-1"
            bottom="40px"
            right={{ base: "50px", sm: "150px" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
