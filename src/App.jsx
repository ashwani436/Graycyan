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
import pioneer from './assets/pioneer.png';
// import handsfree from './assets/handsfree.png';
import scanlock from './assets/scanlock.png';

const drawerWidth = 20;

const alternates = [
  { name: "Dual", img: pioneer },
  { name: "Hands free", img: scanlock },
  { name: "Scanlock", img: pioneer },
  { name: "Single", img: scanlock },
  { name: "Core-R", img: pioneer },
  { name: "Core-S", img: scanlock },
  { name: "Summit", img: pioneer },
  { name: "Surface Mount", img: scanlock },
  { name: "L10", img: pioneer }
];


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
      

      {/* Main content */}
      <Main open={true}>
        <Topbar handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} />
        <Toolbar />
        <InventoryContent />
        <ProductTrackingDetails />
        <ProductMetadataAttributes />
        <ProductDimensionPower />
     
      <ProductFinancials />
      <ProductFinancials />
      <ProductVehiclesTable/>
       <ProductAlternates alternates={alternates} title={`Product Alternates`}/>
        <ProductAlternates alternates={alternates.slice(0,4)} title={`Product Accessories`}/>
      </Main>
    </Box>
  );
}
