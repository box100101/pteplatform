import React from "react";
import { Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Button } from "antd";

import homeBanner from "../../asset/img/home-banner.png";

const CustomBannerDiv = styled("div")(({ theme }) => ({
  padding: "30px 0px",
  backgroundColor: "#e7fffc",
  //   height: "40vh",
}));

const CustomTypographyH6 = styled("h6")(({ theme }) => ({
  margin: "0px ",
  fontWeight: 500,
  color: "rgb(51, 51, 51)",
  textDecoration: "none",
  fontSize: 50,
}));

const CustomTypographyH3 = styled("h3")(({ theme }) => ({
  margin: "0px ",
  fontWeight: 400,
  color: "rgba(0,0,0,.65)",
  fontSize: 20,
}));

const CustomBannerImage = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Banner = () => {
  return (
    <CustomBannerDiv>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={7}>
            <CustomTypographyH6>
              Practice PTE with AI Scorings
            </CustomTypographyH6>
            <CustomTypographyH6>For FREE</CustomTypographyH6>
            <CustomTypographyH3>
              Join 100,000 PTE test takers to practice.
            </CustomTypographyH3>
            <Button type="primary">Practice Now</Button>
          </Grid>
          <CustomBannerImage item md={5}>
            <img src={homeBanner} alt="home-banner-img" />
          </CustomBannerImage>
        </Grid>
      </Container>
    </CustomBannerDiv>
  );
};

export default Banner;
