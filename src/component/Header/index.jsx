import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Avatar,
  Tooltip,
  Divider,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";

import AppbarLink from "./AppbarLink";

const CustomTypographyH6 = styled("h6")(({ theme }) => ({
  margin: "0px ",
  fontWeight: 700,
  color: "rgb(51, 51, 51)",
  textDecoration: "none",
  fontSize: 30,
}));

const CustomTypographyP = styled("p")(({ theme }) => ({
  margin: "0px",
  // fontFamily: "monospace",
  fontWeight: 700,
  // letterSpacing: ".3rem",
  color: "rgb(51, 51, 51)",
  textDecoration: "none",
  fontSize: 9,
}));

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  padding: 10,
  backgroundColor: "white",
  color: "#000",
  boxShadow: "none",
  borderBottom: "1px solid #ccc",
}));

const CustomDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
}));

const Header = () => {
  return (
    <>
      <CustomAppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <CustomDiv>
              <CustomTypographyH6
                // variant="h6"
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
              >
                APEUni
              </CustomTypographyH6>
              <Divider
                sx={{
                  width: "100%",
                  border: "1px solid #000",
                  // borderColor: "black",
                }}
              />
              <CustomTypographyP
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
              >
                The Best PTE Education
              </CustomTypographyP>
            </CustomDiv>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <CustomTypographyH6
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              APEUni
            </CustomTypographyH6>
            <AppbarLink />

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </CustomAppBar>
    </>
  );
};

export default Header;
