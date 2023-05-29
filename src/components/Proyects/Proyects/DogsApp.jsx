import React, { useContext } from "react";
import {
  Flex,
  Text,
  Image,
  Link,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { LanguageContext } from "../../../context/LanguageContext";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import CustomSlider from "./CustomSlider/CustomSlider";
import ProyectSkill from "./ProyectSkill/ProyectSkill";

function DogsApp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { texts } = useContext(LanguageContext);
  return (
    <>
      <Flex
        flexDir={"column"}
        gap={2}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
      >
        <Text textAlign={"left"} fontSize={"xl"} fontWeight={500}>
        {texts.experienceDogsAppTitle}
        </Text>
        <Text textAlign={"left"}>{texts.experienceDogsAppDate}</Text>
        <Text textAlign={"left"}>
        {texts.experienceDogsAppDetail1}
        </Text>
        <Text textAlign={"left"}>
        {texts.experienceDogsAppDetail2}
        </Text>
        <Text textAlign={"left"}>
        {texts.experienceDogsAppDetail3}
        </Text>
        <Button
          textColor={"#00fff7"}
          background="#233554"
          border="1px solid #00fff7"
          _hover={{ background: "#00fff7", color: "white" }}
          onClick={onOpen}
          mt={2}
        >
          {texts.experienceButton}
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
            Dogs App
          </ModalHeader>
          <ModalCloseButton _hover={{ color: "#00fff7" }} />
          <ModalBody paddingInline="0" pt="20px">
            <CustomSlider
              sliderData={[
                "/Proyects/DogsApp/LandingPage.png",
                "/Proyects/DogsApp/Home.png",
                "/Proyects/DogsApp/Detail.png",
                "/Proyects/DogsApp/Form.png",
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
                <ProyectSkill skill={"Node.js"} />
                <ProyectSkill skill={"Express"} />
                <ProyectSkill skill={"Sequelize"} />
                <ProyectSkill skill={"PostgreSQL"} />
              </Flex>
              <Text textAlign={"left"}>{texts.modalDogsApp}</Text>
              <Flex
                align={"center"}
                justify="center"
                gap={{ base: 5, md: 10 }}
                w="100%"
                mt={5}
                fontSize={{ base: "16px", md: "20px" }}
              >
                <Link
                  href="https://github.com/NachoPasser/PI-Dogs"
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
                  href="https://pi-dogs-ignaciopasserini.vercel.app/"
                  isExternal
                  _hover={{ textDecoration: "none" }}
                >
                  <Flex
                    align={"center"}
                    justify="center"
                    className="hover"
                    gap={1}
                  >
                    <BiLinkExternal
                      size={30}
                      stroke="currentColor"
                      fill="currentColor"
                    />
                    <Text>{texts.proyectsDemo}</Text>
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

export default DogsApp;
