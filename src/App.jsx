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
// import ProductDimensionPower from "./components/ProductDimensionPower";
// import ProductMetadataAttributes from "./components/ProductMetadataAttributes";
import ProductAlternates from "./components/ProductAlternates";
import ProductFinancials from "./components/ProductFinancials";
import ProductVehiclesTable from "./components/ProductVehiclesTable";
import pioneer from './assets/pioneer.png';
// import handsfree from './assets/handsfree.png';
import scanlock from './assets/scanlock.png';
import ProductAssetManagement from "./components/ProductAsset";
import ProductMetadataAttributes from "./components/productMetaData/ProductMetadataAttributes";
import ProductBasePropertiesCard from "./components/productBaseProperty/ProductBasePropertiesCard";
import ProductDimensionPower from "./components/productDimensionPower/ProductDimensionPower";
import ProductOptions from "./components/productoptions/ProductOptions";

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

 const items = [
    { label: "Height", value: "31.75 cm" },
    { label: "Width", value: "52 cm" },
    { label: "Depth", value: "19.5 cm" },
    { label: "Weight", value: "63 kg" },
    { label: "Voltage", value: "12 V" },
    { label: "Power Rating", value: "300 W" },
  ];

  const productFinancialData= [
  {
    "label": "Material Cost",
    "value": "$175.23"
  },
  {
    "label": "Labor Cost",
    "value": "$291.46"
  },
  {
    "label": "Process Cost",
    "value": "$66.21"
  },
  {
    "label": "Misc. Cost",
    "value": "$15.49"
  },
  {
    "label": "Last Price",
    "value": "$1,875.23"
  }
]



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
        {/* <InventoryContent /> */}
        <ProductBasePropertiesCard />
        <ProductTrackingDetails />
         <ProductMetadataAttributes/>
        {/* <ProductDimensionPower /> */}
        <ProductDimensionPower items={items} title={`Product Dimension and Power`}/>
         <ProductDimensionPower items={productFinancialData} title={`Product Financials`}/>

      <ProductVehiclesTable/>
       <ProductAlternates alternates={alternates} title={`Product Alternates`}/>
        <ProductAlternates alternates={alternates.slice(0,4)} title={`Product Accessories`}/>
        <ProductOptions/>
        <ProductAssetManagement/>
      </Main>
      
    </Box>
  );
}
