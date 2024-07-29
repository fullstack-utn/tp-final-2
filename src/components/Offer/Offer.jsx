import { useState } from "react";
// chakra-ui
import { Box, Image, Text, Icon } from "@chakra-ui/react";
// react-icons
import { BsJoystick } from "react-icons/bs";
// images
import ImgOffer from "../../assets/offer.png";

export default function Offer() {
  const [myOffers] = useState([
    {
      id: 1,
      name: "Diseño UI/UX",
      description:
        "Experiencia en la realización de una web en base al cliente y sus necesidades.",
    },
    {
      id: 2,
      name: "DESARROLLO WEB",
      description:
        " Experiencia en completar sitios web e-commerce, blogs y landing pages.",
    },
    {
      id: 3,
      name: "COMPROMISO",
      description: "Hasta no terminar la web, mi trabajo no termina.",
    },
  ]);

  return (
    <Box
      as="section"
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={{ base: "80px 0 150px", md: "80px 0 230px" }}
      backgroundColor="#f3f7ff"
    >
      <Box
        height="55px"
        position="absolute"
        top="-70px"
        left="50%"
        transform="translateX(-50%)"
        backgroundColor="#f3f7ff"
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        padding="35px 40px"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Icon as={BsJoystick} margin="0 5px" />
        <Text as="h2" fontWeight="normal" margin="0 10px" fontSize="20px">
          OFERTA
        </Text>
      </Box>
      <Image
        src={ImgOffer}
        alt=""
        display={{ base: "none", lg: "flex" }}
        position="absolute"
        right="120px"
        top="45%"
        transform="translateY(-50%)"
      />
      <Text
        as="h2"
        padding="0 0 40px"
        fontSize={{ base: "28px", sm: "35px", md: "40px", lg: "55px" }}
        fontWeight="500"
      >
        ¿Que ofrezco?
      </Text>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        justifyContent="center"
        alignItems="center"
        width={{ base: "100vw", lg: "auto" }}
        gridRowGap={{ base: "80px", lg: "120px" }}
        gridColumnGap={{ base: "0px", md: "20px", lg: "40px" }}
        padding="60px 0"
        position="relative"
        right={{ base: "0", lg: "150px" }}
      >
        {myOffers.map((offer) => (
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent={{ sm: "center", lg: "unset" }}
            margin={{ base: "0 auto" }}
            width={{ base: "85vw", md: "350px", lg: "420px" }}
          >
            <Box>
              <Text
                as="p"
                fontSize="27px"
                backgroundColor="#e1e1ff"
                padding="20px 25px"
                border="10px solid white"
              >
                {offer.id}
              </Text>
            </Box>
            <Box margin="0 25px">
              <Text
                as="h3"
                fontWeight="500"
                fontSize={{ base: "17px", lg: "unset" }}
              >
                {offer.name}
              </Text>
              <Text
                as="p"
                padding="10px 0"
                fontSize={{ base: "15px", lg: "20px" }}
                color="#9c9b9c"
              >
                {offer.description}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
