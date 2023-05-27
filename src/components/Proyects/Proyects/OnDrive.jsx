import {
  Flex,
  Text,
  Image,
  Box,
  Grid,
  Link,
  Button,
  useMediaQuery,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";
import { FaGithub } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import CustomSlider from "./CustomSlider/CustomSlider";
import ProyectSkill from "./ProyectSkill/ProyectSkill";

function OnDrive() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { texts } = useContext(LanguageContext);
  const [largerThan756px] = useMediaQuery("(min-width: 756px)");
  return (
    <>
      <Flex
        flexDir={"column"}
        gap={2}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
      >
        <Text textAlign={"left"} fontSize={"xl"} fontWeight={500}>
          On Drive - Desarrollador Full Stack (académico)
        </Text>
        <Text textAlign={"left"}>Jul 2022 - Ago 2022</Text>
        <Text></Text>
        <Text textAlign={"left"}>
          En este proyecto, lideré el desarrollo y gestioné las tareas del
          equipo utilizando herramientas como Trello y Discord.
        </Text>
        <Text textAlign={"left"}>
          Participe en el diseño de la base de datos y desarrollo del servidor
          con rutas para la creación, actualización y obtención de datos, tales
          como viajes y usuarios usando Node.js, Express.js y Sequelize.
        </Text>
        <Text textAlign={"left"}>
          También trabajé en la autenticación y autorización de usuarios,
          utilizando JWT. Implementé medidas de seguridad para proteger ciertas
          rutas de acuerdo al rol del usuario (visitante, pasajero, conductor o
          administrador).
        </Text>
        <Text textAlign={"left"}>
          Por último, integré diferentes funcionalidades en la interfaz de
          usuario utilizando JavaScript, React, Redux y CSS.
        </Text>
        <Button
          textColor={"#00fff7"}
          background="#233554"
          border="1px solid #00fff7"
          _hover={{ background: "#00fff7", color: "white" }}
          onClick={onOpen}
          mt={2}
        >
          Ver más detalle
        </Button>
      </Flex>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent
          w={"100%"}
          h="fit-content"
          maxW={"1200px"}
          marginInline={{ base: 2, sm: 5 }}
        >
          <ModalHeader position={"relative"} top={2}>
            On Drive
          </ModalHeader>
          <ModalCloseButton _hover={{ color: "#00fff7" }} />
          <ModalBody paddingInline="0" pt="20px">
            <CustomSlider
              sliderData={[
                "/Proyects/OnDrive/LandingPage.png",
                "/Proyects/OnDrive/Login.png",
                "/Proyects/OnDrive/Home.png",
                "/Proyects/OnDrive/Profile.png",
                "/Proyects/OnDrive/Admin.png",
              ]}
              flexSize={[1.9875, 1.9854, 1.9875, 1, 9917]}
              isOpen={isOpen}
            />
            <Flex
              marginInline={"20px"}
              align="flex-start"
              justify={"center"}
              flexDir="column"
            >
              <Flex
                mt={2}
                gap={2}
                mb={2}
                align="center"
                justify={"flex-start"}
                flexWrap="wrap"
              >
                <ProyectSkill skill={"CSS modules"} />
                <ProyectSkill skill={"React"} />
                <ProyectSkill skill={"Redux"} />
                <ProyectSkill skill={"Bootstrap"} />
                <ProyectSkill skill={"Node.js"} />
                <ProyectSkill skill={"Express"} />
                <ProyectSkill skill={"Sequelize"} />
                <ProyectSkill skill={"PostgreSQL"} />
                <ProyectSkill skill={"JWT"} />
                <ProyectSkill skill={"Bcrypt"} />
                <ProyectSkill skill={"MercadoPago API"} />
              </Flex>
              <Text textAlign={"left"} mb={2}>
                {texts.modalOnDriveP1}
              </Text>
              <Text textAlign={"left"} mb={2}>
                {texts.modalOnDriveP2}
              </Text>
              <Text textAlign={"left"}>{texts.modalOnDriveP3}</Text>
              <Flex
                align={"center"}
                justify="center"
                gap={{ base: 5, md: 10 }}
                w="100%"
                mt={5}
                fontSize={{ base: "16px", md: "20px" }}
              >
                <Link
                  href="https://github.com/NachoPasser/OnDrive"
                  isExternal
                  _hover={{ textDecoration: "none" }}
                >
                  <Flex
                    align={"center"}
                    justify="center"
                    className="hover"
                    gap={1}
                  >
                    <FaGithub
                      size={30}
                      stroke="currentColor"
                      fill="currentColor"
                    />
                    <Text>{texts.proyectsCode}</Text>
                  </Flex>
                </Link>
                <Link
                  href="https://www.youtube.com/watch?v=8JYQKiN6lv4"
                  isExternal
                  _hover={{ textDecoration: "none" }}
                >
                  <Flex
                    align={"center"}
                    justify="center"
                    className="hover"
                    gap={1}
                  >
                    <AiOutlineYoutube
                      size={30}
                      stroke="currentColor"
                      fill="currentColor"
                    />
                    <Text>{texts.proyectsVideo}</Text>
                  </Flex>
                </Link>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default OnDrive;
