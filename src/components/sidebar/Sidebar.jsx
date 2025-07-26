import React, { useState, useCallback } from "react";
import {
  Drawer, List, ListItemButton, ListItemIcon, ListItemText, Collapse,
  Toolbar, Typography, Box, useMediaQuery, IconButton, Divider
} from "@mui/material";
import {
  Home, CheckCircleOutline, Inbox, People, Inventory2, ExpandLess, ExpandMore,
  ShoppingCart, LocalOffer, Menu as MenuIcon
} from "@mui/icons-material";
import { useTheme, styled } from "@mui/material/styles";

// Sidebar structure with indexes that match the "Inventory" menu position
const menu = [
  { label: "Home", icon: <Home /> },
  { label: "My Tasks", icon: <CheckCircleOutline /> },
  { label: "Inbox", icon: <Inbox /> },
  { label: "Customer", icon: <People />, children: [] },
  {
    label: "Inventory",
    icon: <Inventory2 />,
    children: [
      { label: "Overview" },
      { label: "Product Search" },
      {
        label: "All Products",
        children: [
          { label: "New Product" },
          { label: "Existing Product" }
        ]
      }
    ]
  },
  { label: "Follow ups", icon: <CheckCircleOutline /> },
  { label: "Orders", icon: <ShoppingCart /> },
  { label: "Products", icon: <Inventory2 /> },
  { label: "Users", icon: <People /> },
  { label: "Leads", icon: <People /> },
  { label: "Pricelist", icon: <LocalOffer /> }
];

const drawerWidth = 260;

// Hide vertical scrollbar always
const DrawerPaper = styled('div')({
  background: "#101629",
  width: drawerWidth,
  color: "#fff",
  boxSizing: "border-box",
  borderRight: "none",
  height: '100vh',
  overflowY: 'auto',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

// Logo
const companyLogo = (
  <Box sx={{ py: 2.5, textAlign: "center" }}>
    <Typography
      variant="h6"
      sx={{
        fontFamily: "cursive, 'Open Sans', Arial, sans-serif",
        fontWeight: 700,
        color: "#fff",
        fontSize: "15.6px",
        lineHeight: 1,
        ml: '10px',
        userSelect: "none",
        textShadow: "0 1px 0 #282c49",
      }}
    >
      COMPANY LOGO
    </Typography>
  </Box>
);

// Render "Inventory" branch with solid blue vertical line for ONLY its direct submenu
function InventoryMenu({ item, expanded, onToggle, subActive }) {
  const keyPath = "4"; // Inventory index at root
  const isOpen = expanded[keyPath];

  const handleMainClick = useCallback(() => {
    onToggle(keyPath);
  }, [onToggle, keyPath]);

  const handleSubClick = useCallback((submenuKey) => {
    onToggle(submenuKey);
  }, [onToggle]);

  return (
    <Box sx={{ position: "relative" }}>
      <ListItemButton
        onClick={handleMainClick}
        disableRipple={false}
        sx={{
          minHeight: 48, // Increased for better mobile touch
          borderRadius: 2,
          pl: 2.5,
          mb: 0.5,
          background: isOpen ? "#232856" : "transparent",
          "&:hover": {
            background: "#232856"
          },
          // Mobile touch optimizations
          touchAction: 'manipulation',
          userSelect: 'none',
          WebkitTapHighlightColor: 'transparent',
          cursor: 'pointer'
        }}
        selected={isOpen}
      >
        <ListItemIcon sx={{ color: "#fff", minWidth: 32, mr: 1 }}>{item.icon}</ListItemIcon>
        <ListItemText
          primary={item.label}
          primaryTypographyProps={{
            sx: {
              fontFamily: "'Open Sans', Arial, sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: 1,
              letterSpacing: 0,
              color: "#fff"
            }
          }}
        />
        {isOpen ? <ExpandLess sx={{ color: "#b4b8d5" }} /> : <ExpandMore sx={{ color: "#b4b8d5" }} />}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <Box sx={{
          position: "relative",
          pl: 0, pr: 0,
          "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 15,
            width: "4px",
            borderRadius: "2px",
            background: "#434ddb",
            zIndex: 0,
          }
        }}>
          <List disablePadding dense>
            {item.children.map((sub, idx) => {
              const submenuKey = `${keyPath}-${idx}`;
              const isSubOpen = expanded[submenuKey];

              return (
                <Box key={submenuKey} sx={{ position: "relative", zIndex: 1 }}>
                  <ListItemButton
                    onClick={() => {
                      if (sub.children) {
                        handleSubClick(submenuKey);
                      }
                    }}
                    disableRipple={false}
                    sx={{
                      minHeight: 44, // Increased for better mobile touch
                      mb: 0.5,
                      pl: 5.5,
                      pr: 2,
                      borderRadius: 2,
                      background: subActive === sub.label ? "#232856" : "transparent",
                      "&:hover": { background: "#191d34" },
                      touchAction: 'manipulation',
                      userSelect: 'none',
                      WebkitTapHighlightColor: 'transparent',
                      cursor: 'pointer'
                    }}
                    selected={subActive === sub.label}
                  >
                    <ListItemText
                      primary={sub.label}
                      primaryTypographyProps={{
                        sx: {
                          fontFamily: "'Open Sans', Arial, sans-serif",
                          fontWeight: 400,
                          fontSize: "12px",
                          lineHeight: 1,
                          letterSpacing: 0,
                          color: "#fff"
                        }
                      }}
                    />
                    {sub.children &&
                      (isSubOpen ? <ExpandLess sx={{ color: "#b4b8d5" }} /> : <ExpandMore sx={{ color: "#b4b8d5" }} />)}
                  </ListItemButton>
                  {sub.children && (
                    <Collapse in={isSubOpen} timeout="auto" unmountOnExit>
                      <List disablePadding dense>
                        {sub.children.map((grand, i) => (
                          <ListItemButton
                            key={`${submenuKey}-${i}`}
                            disableRipple={false}
                            sx={{
                              minHeight: 40,
                              pl: 8.5,
                              pr: 2,
                              borderRadius: 2,
                              background: grand.label === "Existing Product" ? "#232856" : "transparent",
                              "&:hover": { background: "#191d34" },
                              touchAction: 'manipulation',
                              userSelect: 'none',
                              WebkitTapHighlightColor: 'transparent',
                              cursor: 'pointer'
                            }}
                            selected={grand.label === "Existing Product"}
                          >
                            <ListItemText
                              primary={grand.label}
                              primaryTypographyProps={{
                                sx: {
                                  fontFamily: "'Open Sans', Arial, sans-serif",
                                  fontWeight: 400,
                                  fontSize: "12px",
                                  lineHeight: 1,
                                  letterSpacing: 0,
                                  color: "#fff"
                                }
                              }}
                            />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </Box>
              );
            })}
          </List>
        </Box>
      </Collapse>
    </Box>
  );
}

// Normal menu renderer (no line)
function NormalMenu({ item, idx, expanded, onToggle }) {
  const keyPath = `${idx}`;
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;
  const isOpen = expanded[keyPath];
  
  const handleClick = useCallback(() => {
    if (hasChildren) {
      onToggle(keyPath);
    }
  }, [hasChildren, onToggle, keyPath]);

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        disableRipple={false}
        sx={{
          minHeight: 48, // Increased for better mobile touch
          borderRadius: 2, 
          pl: 2.5,
          background: isOpen ? "#232856" : "transparent",
          mb: 0.5,
          "&:hover": { background: "#191d34" },
          touchAction: 'manipulation',
          userSelect: 'none',
          WebkitTapHighlightColor: 'transparent',
          cursor: 'pointer'
        }}
        selected={isOpen}
      >
        {item.icon && <ListItemIcon sx={{ color: "#fff", minWidth: 32, mr: 1 }}>{item.icon}</ListItemIcon>}
        <ListItemText
          primary={item.label}
          primaryTypographyProps={{
            sx: {
              fontFamily: "'Open Sans', Arial, sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: 1,
              letterSpacing: 0,
              color: "#fff"
            }
          }}
        />
        {hasChildren &&
          (isOpen ? <ExpandLess sx={{ color: "#b4b8d5" }} /> : <ExpandMore sx={{ color: "#b4b8d5" }} />)}
      </ListItemButton>
      {hasChildren && item.label !== "Inventory" && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List disablePadding dense>
            {(item.children || []).map((sub, i) => (
              <ListItemButton
                key={`${keyPath}-${i}`}
                disableRipple={false}
                sx={{
                  minHeight: 40,
                  borderRadius: 2,
                  pl: 5.5, 
                  pr: 2,
                  background: "transparent",
                  "&:hover": { background: "#191d34" },
                  touchAction: 'manipulation',
                  userSelect: 'none',
                  WebkitTapHighlightColor: 'transparent',
                  cursor: 'pointer'
                }}
              >
                <ListItemText
                  primary={sub.label}
                  primaryTypographyProps={{
                    sx: {
                      fontFamily: "'Open Sans', Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: "12px",
                      lineHeight: 1,
                      letterSpacing: 0,
                      color: "#fff"
                    }
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
}

export default function Sidebar() {
  // Start with Inventory closed to test opening
  const [expanded, setExpanded] = useState({});
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleToggle = useCallback((key) => {
    setExpanded((prev) => {
      const newState = { ...prev, [key]: !prev[key] };
      console.log('Toggle:', key, 'New state:', newState); // Debug log
      return newState;
    });
  }, []);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [mobileOpen]);

  // Which Inventory submenu is "active" (simulate selection, could use state/route)
  const activeSubmenu = "Existing Product";

  return (
    <>
      {isMobile && (
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            position: "fixed", 
            top: 12, 
            left: 12, 
            zIndex: theme.zIndex.drawer + 2,
            color: "#fff", 
            background: "#23284b", 
            "&:hover": { background: "#282c49" },
            width: 48,
            height: 48
          }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ 
          component: DrawerPaper,
          sx: {
            // Remove any conflicting styles
            '& .MuiList-root': {
              paddingTop: 0,
              paddingBottom: 0
            },
            // Ensure proper touch handling
            touchAction: 'manipulation'
          }
        }}
        ModalProps={{ 
          keepMounted: true,
          // Add proper backdrop handling
          BackdropProps: {
            sx: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }}
        sx={{
          width: isMobile ? 0 : drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
      >
        <Toolbar sx={{ minHeight: 48, px: 0 }}>{companyLogo}</Toolbar>
        <Box sx={{ 
          flexGrow: 1, 
          overflow: "auto",
          // Ensure scrolling works on mobile
          WebkitOverflowScrolling: 'touch'
        }}>
          <List dense disablePadding sx={{ py: 1 }}>
            {menu.map((item, idx) =>
              idx === 4 ? (
                <InventoryMenu
                  key={`inventory-${item.label}`}
                  item={item}
                  expanded={expanded}
                  onToggle={handleToggle}
                  subActive={activeSubmenu}
                />
              ) : (
                <NormalMenu
                  key={`menu-${idx}-${item.label}`}
                  item={item}
                  idx={idx}
                  expanded={expanded}
                  onToggle={handleToggle}
                />
              )
            )}
          </List>
        </Box>
        <Divider sx={{ background: "#232856" }} />
      </Drawer>
    </>
  );
}
