import { useState } from "react";
// chakra-ui
import { Box, Text, Icon } from "@chakra-ui/react";
// react-icons
import { FaSuitcase } from "react-icons/fa";

export default function Experiences() {
  const [experiences] = useState([
    {
      id: 1,
      rol: "Fullstack Developer",
      company: "Tecno Accion S.A",
      period: "2022 - Act.",
      description:
        "Mis tareas se basan en realizar nuevos proyectos, mantenimiento y resolución de problemas. Tanto en el Frontend como Backend.",
    },
    {
      id: 2,
      rol: "Fullstack Developer",
      company: "Freelance",
      period: "2021 - Act.",
      description:
        "Realizar una recolección de datos para poder resolver el problema del cliente. Realizar el diseño, desarrollo, testeo y mantenimiento del sistema.",
    },
  ]);

  return (
    <Box
      as="section"
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="80px 0 130px"
    >
      <Box
        height="55px"
        width={{ base: "auto" }}
        position="absolute"
        top={{ base: "-55px", xl: "-70px" }}
        right={{ base: "50%", md: "110px", xl: "330px" }}
        zIndex={{ base: "10" }}
        backgroundColor="white"
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        padding={{ base: "10px 15px", xl: "25px 30px", "2xl": "35px 40px" }}
        transform={{ base: "translateX(50%)", md: "none" }}
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Icon as={FaSuitcase} margin="0 5px" />
        <Text
          as="h2"
          fontWeight="normal"
          margin="0 10px"
          fontSize={{ sm: "20px", "2xl": "24px" }}
        >
          EXPERIENCIAS
        </Text>
      </Box>
      <Text
        as="h2"
        padding="0 0 40px"
        fontSize={{ base: "28px", sm: "35px", lg: "45px", xl: "55px" }}
        fontWeight="500"
        borderBottom="1px solid #d5d5d5"
      >
        Mi experiencia laboral <Text as="br" />
        como profesional
      </Text>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        justifyContent="center"
        alignItems="center"
        gridRowGap="30px"
        gridColumnGap={{ md: "0px", lg: "50px" }}
        padding="50px 0 0"
        width={{ base: "100vw", lg: "auto" }}
      >
        {experiences.map((experience, key) => (
          <>
            <Box
              key={key}
              margin={{ base: "0 auto" }}
              width={{
                base: "80vw",
                sm: "70vw",
                md: "350px",
                lg: "500px",
                xl: "600px",
              }}
              borderBottom={{ base: "1px solid #d5d5d5", md: "none" }}
              padding={{ base: "20px 0 40px", md: "0" }}
            >
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                padding="0 0 15px"
              >
                <Icon as={FaSuitcase} color="#e1e1ff" fontSize="25px"></Icon>
                <Box margin={{ base: "0 5px 0 20px", sm: "0 20px" }}>
                  <Text
                    as="h3"
                    fontWeight="500"
                    fontSize={{ md: "17px", lg: "21px" }}
                  >
                    {experience.rol}
                  </Text>
                  <Text
                    as="p"
                    color="#8c8c8c"
                    fontSize={{ md: "16px", lg: "18px" }}
                    margin="5px 0"
                  >
                    {experience.company}
                  </Text>
                </Box>
                <Text
                  as="p"
                  color="#8c8c8c"
                  fontSize={{ md: "15px", lg: "21px" }}
                >
                  ● {experience.period}
                </Text>
              </Box>
              <Text
                as="p"
                fontSize={{ base: "17px", lg: "19px", xl: "22px" }}
                color="#8c8c8c"
              >
                {experience.description}
              </Text>
            </Box>
          </>
        ))}
        <Box
          height="1px"
          margin={{ base: "0 auto", lg: "0" }}
          width={{ base: "auto", md: "330px", lg: "480px", xl: "580px" }}
          backgroundColor="#d5d5d5"
        ></Box>
        <Box
          height="1px"
          margin={{ base: "0 auto", lg: "0" }}
          width={{ base: "auto", md: "330px", lg: "480px", xl: "580px" }}
          backgroundColor="#d5d5d5"
        ></Box>
      </Box>
    </Box>
  );
}
