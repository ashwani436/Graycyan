import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Badge,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Language,
  HelpOutline,
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
  Home as HomeIcon,
} from "@mui/icons-material";

const SIDEBAR_WIDTH = 180; // Your sidebar width

export default function Topbar({
  darkMode = true,
  onToggleDarkMode,
  onMobileMenuToggle,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleProfileMenuClose = () => setAnchorEl(null);
  const [internalDarkMode, setInternalDarkMode] = useState(darkMode);

  const currentDarkMode = onToggleDarkMode ? darkMode : internalDarkMode;

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: `calc(100% - ${SIDEBAR_WIDTH}px)` },
        ml: { xs: 0, sm: `${SIDEBAR_WIDTH}px` },
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: theme.zIndex.drawer + 10,
      }}
    >
      {!isMobile && (
        <Box
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            zIndex: theme.zIndex.drawer + 15,
          }}
        >
          <Tooltip title="Search">
            <IconButton
              size="small"
              sx={{
                color: "#FFF",
                bgcolor: currentDarkMode ? "#3B3D49" : "rgba(245, 245, 245, 0.8)",
                backdropFilter: "blur(10px)",
                border: `1px solid ${
                  currentDarkMode
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0.1)"
                }`,
                "&:hover": {
                  color: currentDarkMode ? "#64ffda" : "#1976d2",
                  bgcolor: currentDarkMode
                    ? "rgba(15, 20, 32, 0.9)"
                    : "rgba(245, 245, 245, 0.9)",
                },
                ml: '20px',
                width: 30,
                height: 30,
              }}
            >
              <SearchIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Tooltip>
        </Box>
      )}

      {/* Main AppBar */}
      <AppBar
        elevation={0}
        position="static"
        sx={{
          background: currentDarkMode ? "#0f1420" : "#f5f5f5",
          minHeight: { xs: 56, sm: 48 },
          width: "100%",
          boxShadow: "none",
          borderBottom: `1px solid ${
            currentDarkMode ? "#1a1f2e" : "#e0e0e0"
          }`,
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 56, sm: 48 },
            px: { xs: 2, sm: 3 },
            width: "100%",
            justifyContent: { xs: "space-between", sm: "flex-end" },
            alignItems: "center",
            gap: { xs: 1, sm: 1.5 },
          }}
        >
          {/* Hamburger Menu button (mobile only) */}
          {isMobile && (
            <IconButton
              onClick={onMobileMenuToggle}
              sx={{
                color: currentDarkMode ? "#8892b0" : "#666",
                "&:hover": {
                  color: currentDarkMode ? "#64ffda" : "#1976d2",
                  backgroundColor: currentDarkMode
                    ? "rgba(100, 255, 218, 0.04)"
                    : "rgba(25, 118, 210, 0.04)",
                },
                width: 40,
                height: 40,
              }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Right side icons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 0.5, sm: 1.5 },
            }}
          >
            {/* Theme toggle */}
            <Tooltip
              title={
                currentDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
            >
              <IconButton
                size="small"
                sx={{
                  color: currentDarkMode ? "#8892b0" : "#666",
                  "&:hover": {
                    color: currentDarkMode ? "#64ffda" : "#1976d2",
                    backgroundColor: currentDarkMode
                      ? "rgba(100, 255, 218, 0.04)"
                      : "rgba(25, 118, 210, 0.04)",
                  },
                  width: { xs: 40, sm: 36 },
                  height: { xs: 40, sm: 36 },
                  transition: "all 0.3s ease",
                }}
              >
                {currentDarkMode ? (
                  <Brightness7 sx={{ fontSize: { xs: 20, sm: 18 } }} />
                ) : (
                  <Brightness4 sx={{ fontSize: { xs: 20, sm: 18 } }} />
                )}
              </IconButton>
            </Tooltip>

            {/* Notifications */}
            <Tooltip title="Notifications">
              <IconButton
                size="small"
                sx={{
                  color: currentDarkMode ? "#8892b0" : "#666",
                  "&:hover": {
                    color: currentDarkMode ? "#64ffda" : "#1976d2",
                    backgroundColor: currentDarkMode
                      ? "rgba(100, 255, 218, 0.04)"
                      : "rgba(25, 118, 210, 0.04)",
                  },
                  width: { xs: 40, sm: 36 },
                  height: { xs: 40, sm: 36 },
                }}
              >
                <Badge
                  badgeContent=" "
                  color="error"
                  variant="dot"
                  overlap="circular"
                  sx={{
                    "& .MuiBadge-dot": {
                      backgroundColor: "#ff5370",
                      width: { xs: 10, sm: 8 },
                      height: { xs: 10, sm: 8 },
                      borderRadius: "50%",
                    },
                  }}
                >
                  <NotificationsIcon sx={{ fontSize: { xs: 20, sm: 18 } }} />
                </Badge>
              </IconButton>
            </Tooltip>

            {/* Language - hidden on mobile */}
            {!isMobile && (
              <Tooltip title="Language">
                <IconButton
                  size="small"
                  sx={{
                    color: currentDarkMode ? "#8892b0" : "#666",
                    "&:hover": {
                      color: currentDarkMode ? "#64ffda" : "#1976d2",
                      backgroundColor: currentDarkMode
                        ? "rgba(100, 255, 218, 0.04)"
                        : "rgba(25, 118, 210, 0.04)",
                    },
                    width: 36,
                    height: 36,
                  }}
                >
                  <Language sx={{ fontSize: 18 }} />
                </IconButton>
              </Tooltip>
            )}

            {/* Help - hidden on mobile */}
            {!isMobile && (
              <Tooltip title="Help">
                <IconButton
                  size="small"
                  sx={{
                    color: currentDarkMode ? "#8892b0" : "#666",
                    "&:hover": {
                      color: currentDarkMode ? "#64ffda" : "#1976d2",
                      backgroundColor: currentDarkMode
                        ? "rgba(100, 255, 218, 0.04)"
                        : "rgba(25, 118, 210, 0.04)",
                    },
                    width: 36,
                    height: 36,
                  }}
                >
                  <HelpOutline sx={{ fontSize: 18 }} />
                </IconButton>
              </Tooltip>
            )}

            {/* User avatar */}
            <IconButton
              sx={{
                ml: { xs: 0.5, sm: 1 },
                p: 0,
                "&:hover": {
                  backgroundColor: currentDarkMode
                    ? "rgba(100, 255, 218, 0.04)"
                    : "rgba(25, 118, 210, 0.04)",
                },
              }}
              size="small"
              onClick={handleProfileMenuOpen}
            >
              <Avatar
                src="/assets/images/user-avatar.png"
                alt="Profile"
                sx={{
                  width: { xs: 36, sm: 32 },
                  height: { xs: 36, sm: 32 },
                  border: `2px solid ${
                    currentDarkMode ? "#64ffda" : "#1976d2"
                  }`,
                  bgcolor: currentDarkMode ? "#1a1f2e" : "#e3f2fd",
                  color: currentDarkMode ? "#64ffda" : "#1976d2",
                  fontSize: "14px",
                  fontWeight: 600,
                  userSelect: 'none',
                }}
              >
                U
              </Avatar>
            </IconButton>

            {/* Profile Menu */}
            <Menu
              id="profile-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleProfileMenuClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              PaperProps={{
                sx: {
                  mt: 1,
                  minWidth: 160,
                  bgcolor: currentDarkMode ? "#1a1f2e" : "#fff",
                  color: currentDarkMode ? "#ccd6f6" : "#333",
                  border: `1px solid ${
                    currentDarkMode ? "#233554" : "#e0e0e0"
                  }`,
                  borderRadius: 2,
                  "& .MuiMenuItem-root": {
                    fontSize: "14px",
                    fontFamily: "'Open Sans', Arial, sans-serif",
                    minHeight: { xs: 48, sm: 40 },
                    "&:hover": {
                      bgcolor: currentDarkMode ? "#233554" : "#f5f5f5",
                    },
                  },
                },
              }}
            >
              <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleProfileMenuClose}>Settings</MenuItem>
              <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Banner Section (Inventory + Breadcrumb) */}
      <Box
        sx={{
          background: "linear-gradient(180deg, #828FF0 15.15%, #1F244A 151.33%)",
          ml: { xs: 0, sm: 0 }, // Since the parent already does ml
          width: "100%",
          px: { xs: 2, sm: 4 },
          py: { xs: 2, sm: 1 },
          display: "flex",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {/* Home icon and content column */}
        <HomeIcon
          sx={{
            width: "40px",
            height: "35px",
            flexShrink: 0,
            color: "#808DED",
            mr: 2, 
          }}
        />

        <Box sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          minWidth: 0,
          marginLeft:'-5px'
        }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Open Sans', Arial, sans-serif",
              fontWeight: 700,
              fontSize: { xs: "16px", sm: "16px", md: "20px" },
              color: "#fafafa",
              letterSpacing: "0.5px",
              lineHeight: 1.2,
            }}
          >
            Inventory
          </Typography>

         {!isMobile && ( <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, flexWrap: "wrap" }}>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "'Open Sans', Arial, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "11px", sm: "12px" },
                color: "#ffffff",
                letterSpacing: 0,
                display: { xs: "none", sm: "block" },
              }}
            >
              All Products
            </Typography>

            <Typography sx={{ color: "#f8f8f8", fontWeight: 600, userSelect: "none" }}>
              &gt;
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontFamily: "'Open Sans', Arial, sans-serif",
                fontWeight: 600,
                fontSize: { xs: "11px", sm: "12px" },
                color: "#f5b221",
                letterSpacing: 0,
                display: { xs: "none", sm: "block" },
              }}
            >
              Surface Mount
            </Typography>
          </Box>
         )}
        </Box>
      </Box>
    </Box>
  );
}
