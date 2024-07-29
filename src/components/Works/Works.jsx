// chakra-ui
import { Box, Image, Link, Text, Icon } from "@chakra-ui/react";
// react-icons
import { BsFillPencilFill } from "react-icons/bs";
// images
import ArrowIcon from "../../assets/icons/arrow.png";
import Photo0 from "../../assets/photo0.png";
import Photo1 from "../../assets/photo1.png";
import Photo2 from "../../assets/photo2.png";
import Photo3 from "../../assets/photo3.png";

export default function Works() {
  return (
    <Box
      as="section"
      id="my-works"
      backgroundColor="#f3f7ff"
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={{ base: "10px 0 50px", sm: "40px 0" }}
    >
      <Box
        height="55px"
        position="absolute"
        top={{ base: "-40px", md: "-70px" }}
        left={{ base: "50%", md: "320px" }}
        transform={{ base: "translateX(-50%)", md: "none" }}
        zIndex="10"
        backgroundColor="#f3f7ff"
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        padding={{ base: "15px 20px", md: "35px 40px" }}
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Icon as={BsFillPencilFill} />

        <Text
          as="h2"
          fontWeight="normal"
          margin="0 10px"
          overflow={{ base: "hidden", md: "unset" }}
          whiteSpace={{ base: "nowrap", md: "unset" }}
          textOverflow={{ base: "ellipsis", md: "unset" }}
          fontSize={{ base: "20px", md: "24px" }}
        >
          MIS TRABAJOS
        </Text>
      </Box>

      <Box
        width={{ base: "90%", md: "unset" }}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        padding="50px 0"
        borderBottom="2px solid #d5d5d5"
      >
        <Box
          display="flex"
          flexDirection={{ base: "column-reverse", md: "row" }}
          justifyContent="center"
          alignItems={{ base: "center", md: "flex-end" }}
          width={{ base: "90%", sm: "80%", md: "auto" }}
        >
          <Box
            width={{ base: "100%", md: "unset" }}
            display="flex"
            flexDirection={{ base: "row", md: "column" }}
            justifyContent={{ base: "space-evenly", md: "center" }}
            alignItems="center"
          >
            <Image
              src={Photo1}
              alt=""
              border="10px solid white"
              margin="10px 0"
              maxWidth={{ base: "100px", lg: "147px" }}
              width={{ base: "100px", lg: "147px" }}
              maxHeight={{ base: "120px", md: "121px" }}
              height={{ base: "120px", md: "121px" }}
              boxShadow="1px 1px 5px -1px rgba(0,0,0,0.17)"
            />
            <Image
              src={Photo2}
              alt=""
              border="10px solid white"
              margin="10px 0"
              maxWidth={{ base: "100px", lg: "147px" }}
              width={{ base: "100px", lg: "147px" }}
              maxHeight={{ base: "120px", md: "121px" }}
              height={{ base: "120px", md: "121px" }}
              boxShadow="1px 1px 5px -1px rgba(0,0,0,0.17)"
            />
            <Image
              src={Photo3}
              alt=""
              border="10px solid white"
              margin="10px 0"
              maxWidth={{ base: "100px", lg: "147px" }}
              width={{ base: "100px", lg: "147px" }}
              maxHeight={{ base: "120px", md: "121px" }}
              height={{ base: "120px", md: "121px" }}
              boxShadow="1px 1px 5px -1px rgba(0,0,0,0.17)"
            />
          </Box>
          <Box margin={{ base: "0", sm: "0 30px", lg: "0 100px" }}>
            <Image
              src={Photo0}
              alt=""
              width={{ base: "350px", lg: "470px" }}
              maxWidth={{ base: "350px", lg: "470px" }}
              height={{ base: "420px", lg: "555px" }}
              maxHeight={{ base: "420px", lg: "555px" }}
              borderTopLeftRadius="1000px"
              borderTopRightRadius="1000px"
              border="10px solid white"
            />
          </Box>
        </Box>

        <Box
          width={{ base: "90%", sm: "80%", md: "350px", lg: "400px" }}
          display="flex"
          flexDirection="column"
        >
          <Text
            as="h3"
            fontWeight="500"
            color="#9e9eff"
            fontSize={{ base: "30px", lg: "35px" }}
            margin="0"
            padding="0"
            lineHeight="27px"
          >
            Sistema
          </Text>
          <Text
            as="h2"
            fontWeight="500"
            fontSize={{ base: "40px", lg: "50px" }}
            padding="5px 0 20px"
            borderBottom="2px solid #d5d5d5"
          >
            Cotytel
          </Text>
          <Text
            as="p"
            color="#929292"
            fontSize={{ base: "17px", lg: "20px" }}
            padding="25px 0"
            lineHeight={{ base: "20px", lg: "25px" }}
          >
            Cotytel es un sistema personalizado para unas chicas que buscaban
            administrar su negocio. En resumen, buscaban guardar, editar y
            administrar registros sobre su trabajo.
            <br />
            <br />
            Anteriormente lo hacian en un Excel y 3 computadoras, lo que
            dificultaba tener la misma información en todas las computadoras.
            Ahora, pueden trabajar tranquilos sabiendo que siempre tendran la
            misma información y pueden visualizarlo en su computadora y celular
            en caso de necesitarlo.
          </Text>
          <Link
            href="#my-works"
            width={{ base: "170px", sm: "200px", lg: "240px" }}
            margin="35px 0 0"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            fontSize={{ base: "16px", sm: "18px", lg: "21px" }}
            padding={{ base: "8px 15px", lg: "10px 15px 10px 25px" }}
            backgroundColor="white"
            outline="none"
            border="2px solid black"
            borderRadius="40px"
            textDecoration="none"
            color="black"
            alignSelf="flex-end"
            transition="0.5s all"
            _hover={{
              cursor: "pointer",
              textDecoration: "none",
              backgroundColor: "black",
              color: "white",
            }}
          >
            VER DETALLE{" "}
            <Image
              src={ArrowIcon}
              alt=""
              height={{ base: "35px", sm: "45px" }}
              backgroundColor="black"
              padding="10px"
              borderRadius="50%"
              marginLeft="15px"
              transform="rotate(-90deg)"
            />
          </Link>
        </Box>
      </Box>
      <Link
        href="https://github.com/ag171980?tab=repositories"
        target="_blank"
        width={{ base: "80%", lg: "720px" }}
        position="relative"
        top="40px"
        left={{ base: "50%", lg: "340px" }}
        transform={{ base: "translateX(-50%)", lg: "none" }}
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        fontSize={{ base: "16px", sm: "21px" }}
        padding="10px 15px 10px 25px"
        margin="0 0 60px"
        backgroundColor="white"
        outline="none"
        border="2px solid black"
        borderRadius="40px"
        textDecoration="none"
        color="black"
        alignSelf="flex-start"
        transition="0.5s all"
        _hover={{ cursor: "pointer", backgroundColor: "black", color: "white" }}
      >
        VER TODOS LOS TRABAJOS
      </Link>
    </Box>
  );
}
