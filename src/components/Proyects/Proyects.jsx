import React, { useContext, useState } from "react";
import { Flex, Text, Grid, useMediaQuery, Button } from "@chakra-ui/react";
import { LanguageContext } from "../../context/LanguageContext";
import HenryAsk from "./Proyects/HenryAsk";
import DogsApp from "./Proyects/DogsApp";
import OnDrive from "./Proyects/OnDrive";
import ProductosAI from "./Proyects/ProductosAI";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

function Proyects() {
  const { texts } = useContext(LanguageContext);
  const smallerThan1468 = useMediaQuery("(max-width: 1468px)");
  const [active, setActive] = useState({ experience: "Henry Ask", id: 1 });
  const experiencies = ["Productos AI", "Henry Ask", "On Drive", "Dogs App"];
  const showActive = () => {
    switch (active.experience) {
      case "Productos AI":
        return <ProductosAI />;
      case "Henry Ask":
        return <HenryAsk />;
      case "On Drive":
        return <OnDrive />;
      case "Dogs App":
        return <DogsApp />;
    }
    return;
  };

  const next = () => {
    setActive((prev) => {
      const idFromNextExperience = (prev.id + 1) % experiencies.length;
      return {
        experience: experiencies[idFromNextExperience],
        id: idFromNextExperience,
      };
    });
  };

  const prev = () => {
    setActive((prev) => {
      // 0 Productos AI
      // -4 Productos Ai, (-4 + 4) % 4 = 0
      let idFromPrevExperience =
        prev.id - 1 < 0
          ? (prev.id - 1 + 4) % experiencies.length
          : (prev.id - 1) % experiencies.length;
      return {
        experience: experiencies[idFromPrevExperience],
        id: idFromPrevExperience,
      };
    });
  };
  return (
    <Flex
      id="proyects"
      as="section"
      flexDir="column"
      justify={"center"}
      align="center"
      gap={5}
      w="100%"
      minH={"100vh"}
      pt="80px"
      backgroundColor={"#233554"}
      color={"white"}
      pb="80px"
    >
      <Flex
        borderBottom={"1px solid #00fff7"}
        pb={2}
        w={{ base: "95%", lg: "50%" }}
        justify={"center"}
      >
        <Text fontSize={"24px"} marginLeft={7}>
          {texts.proyects}💡
        </Text>
      </Flex>
      <Flex
        justify={"center"}
        align={"center"}
        gap={5}
        display={{ base: "flex", md: "none" }}
      >
        <Flex
          justify={"center"}
          align="center"
          background={"white"}
          borderRadius={"50px"}
          border="1px solid #00fff7"
          zIndex="100"
          cursor={"pointer"}
          onClick={prev}
        >
          <MdOutlineKeyboardArrowLeft
            stroke="#FFFFFF"
            fill="#000000"
            size={"30px"}
          />
        </Flex>
        <Text fontWeight={500}>{active.experience}</Text>
        <Flex
          justify={"center"}
          align="center"
          background={"white"}
          borderRadius={"50px"}
          border="1px solid #00fff7"
          zIndex="100"
          cursor={"pointer"}
          onClick={next}
        >
          <MdOutlineKeyboardArrowRight
            stroke="#FFFFFF"
            fill="#000000"
            size={"30px"}
          />
        </Flex>
      </Flex>
      <Flex
        w={{ base: "95%", lg: "50%" }}
        color={"white"}
        flexDir={{ base: "column", md: "row" }}
        position={"relative"}
      >
        <Flex flexDir={"column"} display={{ base: "none", md: "flex" }}>
          {experiencies.map((i, id) => (
            <Button
              key={id}
              padding={"10px"}
              margin={"2px"}
              borderRadius={"3px 3px 1px 1px"}
              backgroundColor={active.experience === i ? "#2b4066" : "#233554"}
              sx={{ outline: "none !important" }}
              _hover={{ backgroundColor: "#2b4066" }}
              borderLeft={active.experience === i ? "3px solid #00fff7" : ""}
              onClick={() => setActive({ experience: i, id })}
              w={"115px"}
            >
              {i}
            </Button>
          ))}
        </Flex>
        <Flex marginLeft={{ base: 0, md: 10 }}>{showActive()}</Flex>
      </Flex>
    </Flex>
  );
}

export default Proyects;
