import React, { useState, useContext } from "react";
import { Flex, Text, Grid } from "@chakra-ui/react";
import { HiCode } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoServerOutline } from "react-icons/io5";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import Skill from "./Skill/Skill";
import { LanguageContext } from "../../context/LanguageContext";
import "./Skills.css";
const create = (name) => {
  return {
    name,
    img: `/Skills/${name.toLowerCase()}.png`,
  };
};

function Skills() {
  const { texts } = useContext(LanguageContext);
  const [hidden, setHidden] = useState({
    backendSkills: "none",
    frontendSkills: "none",
    devSkills: "none",
    orgSkills: "none",
  });
  const [skills, setSkills] = useState({
    frontendSkills: [
      create("HTML"),
      create("CSS"),
      create("JavaScript"),
      create("React"),
      create("Redux"),
      create("ChakraUI"),
      create("Tailwind CSS"),
    ],
    backendSkills: [
      create("NodeJS"),
      create("Express"),
      create("MongoDB"),
      create("Mongoose"),
      create("PostgreSQL"),
      create("Sequelize"),
      create("JWT"),
      create("Firebase"),
      create("AWS Lambda"),
      create("AWS DynamoDB"),
      create("AWS S3"),
    ],
    orgSkills: [
      create("Slack"),
      create("Trello"),
      create("Discord"),
      create("Scrum"),
    ],
    devSkills: [
      create("Git"),
      create("GitHub"),
      create("Postman"),
      create("Figma"),
    ],
  });

  const changeVisibilitySkill = (skills) => {
    let newState = {
      backendSkills: "none",
      frontendSkills: "none",
      devSkills: "none",
      orgSkills: "none",
    };
    newState[skills] = hidden[skills] === "none" ? "grid" : "none";
    setHidden(newState);
  };

  return (
    <Flex
      id="skills"
      as="section"
      flexDir="column"
      justify={"center"}
      align="center"
      gap={5}
      w="100%"
      minH={"100vh"}
      marginTop={10}
      marginBottom={20}
    >
      <Text fontSize={"24px"}>{texts.navbarSkills} 🛠️</Text>
      {/* Tecnologias */}
      <Flex
        flexDir={"column"}
        w="85%"
        maxW={"880px"}
        gap={5}
        borderTop={"1px solid #00fff7"}
        pt={10}
      >
        <Text
          textAlign={"left"}
          fontSize="20px"
          textDecor={"underline"}
          textDecorationColor="#00fff7"
        >
          {texts.skillsTechnologies}
        </Text>
        <Flex
          gap={5}
          alignItems={"center"}
          justifyContent="space-between"
          _hover={{ color: "#00fff7", cursor: "pointer" }}
          onClick={() => changeVisibilitySkill("backendSkills")}
        >
          <IoServerOutline size={30} stroke="#00fff7" fill="#00fff7" />
          <Text fontSize={"20px"} fontWeight={600} w="100%" textAlign={"left"}>
            {texts.skillsBackend}
          </Text>
          <IoIosArrowDown
            size={25}
            stroke="#00fff7"
            fill="#00fff7"
            className={hidden.backendSkills !== "none" ? "open" : ""}
            style={{ transitionDuration: "500ms" }}
          />
        </Flex>
        <Grid
          display={hidden.backendSkills}
          gridTemplateColumns={{
            base: "repeat(auto-fill, minmax(290px, 1fr))",
            sm: "repeat(auto-fill, minmax(220px, 1fr))",
            md: "repeat(auto-fill, minmax(290px, 1fr))",
          }}
          rowGap={5}
          w={"100%"}
          columnGap={0}
        >
          {skills.backendSkills.map((skill, i) => (
            <Skill key={i} name={skill.name} src={skill.img} />
          ))}
        </Grid>
        <Flex
          gap={5}
          alignItems={"center"}
          justifyContent="space-between"
          _hover={{ color: "#00fff7", cursor: "pointer" }}
          onClick={() => changeVisibilitySkill("frontendSkills")}
        >
          <HiCode size={30} stroke="#00fff7" fill="#00fff7" />
          <Text fontSize={"20px"} fontWeight={600} w="100%" textAlign={"left"}>
            {texts.skillsFrontend}
          </Text>
          <IoIosArrowDown
            size={25}
            stroke="#00fff7"
            fill="#00fff7"
            className={hidden.frontendSkills !== "none" ? "open" : ""}
            style={{ transitionDuration: "500ms" }}
          />
        </Flex>
        <Grid
          display={hidden.frontendSkills}
          gridTemplateColumns={"repeat(auto-fill, minmax(290px, 1fr))"}
          rowGap={5}
          w={"100%"}
          columnGap={0}
        >
          {skills.frontendSkills.map((skill, i) => (
            <Skill key={i} name={skill.name} src={skill.img} />
          ))}
        </Grid>
      </Flex>
      {/* Herramientas de desarrollo */}
      <Flex flexDir={"column"} w="85%" maxW={"880px"} gap={5}>
        <Text
          textAlign={"left"}
          fontSize="20px"
          textDecor={"underline"}
          textDecorationColor="#00fff7"
        >
          {texts.skillsTools}
        </Text>
        <Flex
          gap={5}
          alignItems={"center"}
          justifyContent="space-between"
          _hover={{ color: "#00fff7", cursor: "pointer" }}
          onClick={() => changeVisibilitySkill("devSkills")}
        >
          <FaLaptopCode size={30} stroke="#00fff7" fill="#00fff7" />
          <Text fontSize={"20px"} fontWeight={600} w="100%" textAlign={"left"}>
            {texts.skillsTechnologies}
          </Text>
          <IoIosArrowDown
            size={25}
            stroke="#00fff7"
            fill="#00fff7"
            className={hidden.devSkills !== "none" ? "open" : ""}
            style={{ transitionDuration: "500ms" }}
          />
        </Flex>
        <Grid
          display={hidden.devSkills}
          gridTemplateColumns={"repeat(auto-fill, minmax(290px, 1fr))"}
          rowGap={5}
          w={"100%"}
          columnGap={0}
        >
          {skills.devSkills.map((skill, i) => (
            <Skill key={i} name={skill.name} src={skill.img} />
          ))}
        </Grid>
        <Flex
          gap={5}
          alignItems={"center"}
          justifyContent="space-between"
          _hover={{ color: "#00fff7", cursor: "pointer" }}
          onClick={() => changeVisibilitySkill("orgSkills")}
        >
          <BsJournalBookmarkFill size={30} stroke="#00fff7" fill="#00fff7" />
          <Text fontSize={"20px"} fontWeight={600} w="100%" textAlign={"left"}>
            {texts.skillsOrg}
          </Text>
          <IoIosArrowDown
            size={25}
            stroke="#00fff7"
            fill="#00fff7"
            className={hidden.orgSkills !== "none" ? "open" : ""}
            style={{ transitionDuration: "500ms" }}
          />
        </Flex>
        <Grid
          display={hidden.orgSkills}
          gridTemplateColumns={"repeat(auto-fill, minmax(290px, 1fr))"}
          rowGap={5}
          w={"100%"}
          columnGap={0}
        >
          {skills.orgSkills.map((skill, i) => (
            <Skill key={i} name={skill.name} src={skill.img} />
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
}

export default Skills;
