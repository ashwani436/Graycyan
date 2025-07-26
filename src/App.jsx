import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { CssBaseline, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Sidebar from "./components/sidebar/Sidebar"
import Topbar from "./components/Topbar";
import InventoryContent from "./components/InventoryContent";
// import InventoryCardsComponent from "./components/ProductTracking";
import ProductTrackingDetails from "./components/TrackingDetailItem";
import ProductDimensionPower from "./components/ProductDimensionPower";
import ProductMetadataAttributes from "./components/ProductMetadataAttributes";
import ProductAlternates from "./components/ProductAlternates";
import ProductFinancials from "./components/ProductFinancials";
import ProductVehiclesTable from "./components/ProductVehiclesTable";

const drawerWidth = 20;

// Wrapper that adjusts margin for permanent sidebar on larger screens
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: 0,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up("sm")]: {
      marginLeft: open ? drawerWidth : 0,
    },
  })
);

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Sidebar */}
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} />

      {/* Topbar */}
      <Topbar handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} />

      {/* Main content */}
      <Main open={true}>
        <Toolbar />
        <InventoryContent />
        <ProductTrackingDetails />
        <ProductDimensionPower />
      <ProductMetadataAttributes />
      {/* <ProductAlternates /> */}
      <ProductFinancials />
      <ProductVehiclesTable/>
      </Main>
    </Box>
  );
}
