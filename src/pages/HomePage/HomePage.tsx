import { Grid, GridItem, Image } from "@chakra-ui/react";
import { StatisticsList, Greeting } from "../../components";
import homeImg from "../../assets/img/home.png";

const HomePage = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6} pb={6}>
      <GridItem
        colSpan={{ base: 5, lg: 3 }}
        display="flex"
        flexDirection={"column"}
        bgColor={"blackAlpha.100"}
        borderRadius={"30px"}
        px={"64px"}
        py={"98px"}
      >
        <Greeting />
      </GridItem>

      <GridItem
        colSpan={{ base: 5, lg: 2 }}
        display="flex"
        flexDirection={"column"}
        justifyContent={"end"}
        alignItems={"center"}
        bgColor={"pink.100"}
        borderRadius={"20px"}
        px={"30px"}
      >
        <Image src={homeImg} alt="homeImg" />
      </GridItem>

      <GridItem
        colSpan={{ base: 5, lg: 5 }}
        display="flex"
        borderRadius={"30px"}
        border={"3px dashed orange"}
        py={"40px"}
        px={{ base: 0, md: "64px" }}
      >
        <StatisticsList />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
