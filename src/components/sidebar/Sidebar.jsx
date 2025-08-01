import React, { useState, useCallback } from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Toolbar,
  IconButton,
  Box,
  Divider,
  useMediaQuery
} from '@mui/material';
import {
  Home,
  CheckCircleOutline,
  Inbox,
  People,
  Inventory2,
  ShoppingCart,
  LocalOffer,
  ExpandLess,
  ExpandMore,
  Menu as MenuIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

import companyLogo from '../../assets/companyLogo.png';

// -------- MENU DATA ----------
const menu = [
  { label: 'Home', icon: <Home /> },
  { label: 'My Tasks', icon: <CheckCircleOutline /> },
  { label: 'Inbox', icon: <Inbox /> },
  { label: 'Customer', icon: <People />, children: [] },
  {
    label: 'Inventory',
    icon: <Inventory2 />,
    children: [
      { label: 'Overview' },
      { label: 'Product Search' },
      {
        label: 'All Products',
        children: [
          { label: 'New Product' },
          { label: 'Existing Product' }
        ]
      }
    ]
  },
  { label: 'Follow ups', icon: <CheckCircleOutline /> },
  { label: 'Orders', icon: <ShoppingCart /> },
  { label: 'Products', icon: <Inventory2 /> },
  { label: 'Users', icon: <People /> },
  { label: 'Leads', icon: <People /> },
  { label: 'Pricelist', icon: <LocalOffer /> }
];

// -------- STYLES -------------
const SIDEBAR_WIDTH = 180;

// Company logo
const Logo = () => (
  <Box sx={{
    py: 2.5,
    textAlign: 'center',
    letterSpacing: 1,
    mb: 1,
    width: '100%',
    bgcolor: 'transparent'
  }}>
    <img
      src={companyLogo}
      alt="Company Logo"
      style={{ maxWidth: '140px', height: 'auto', userSelect: 'none' }}
      draggable={false}
    />
  </Box>
);

// Recursive menu rendering
function RecursiveMenu({ items, depth = 0, expanded, toggle, isMobile, closeDrawer }) {
  return items.map((item, idx) => {
    const key = item.key ?? `${depth}-${idx}`;
    const hasChildren = Array.isArray(item.children) && item.children.length > 0;
    const open = expanded[key] || false;

    return (
      <React.Fragment key={key}>
        <ListItemButton
          onClick={() => {
            if (hasChildren) {
              toggle(key);
            } else if (isMobile) {
              closeDrawer();
            }
          }}
          sx={{
            position: 'relative',
            pl: 2.5 + depth * 2.5,
            mb: 0.5,
            minHeight: 36,
            borderRadius: 2,
            bgcolor: open ? "#232856" : "transparent",
            '&:hover': { bgcolor: '#232856' },
            color: '#FFF',
            fontFamily: '"Open Sans", Arial, sans-serif',
            fontSize: 12,
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          {item.icon && (
            <ListItemIcon
              sx={{
                color: '#FFF',
                minWidth: 32,
                mr: 1,
                width: '17.333px',
                height: '15.167px',
                flexShrink: 0,
                '& svg': {
                  width: '17.333px',
                  height: '15.167px',
                }
              }}
            >
              {item.icon}
            </ListItemIcon>
          )}
          <ListItemText
            primary={item.label}
            primaryTypographyProps={{
              sx: {
                color: '#FFF',
                fontFamily: '"Open Sans", Arial, sans-serif',
                fontWeight: 400,
                fontSize: 12,
                lineHeight: 1.25,
                fontStyle: 'normal'
              }
            }}
          />
          {hasChildren &&
            (open ? <ExpandLess sx={{ color: '#b4b8d5', fontSize: '1rem' }} /> : <ExpandMore sx={{ color: '#b4b8d5', fontSize: '1rem' }} />)}
        </ListItemButton>
        {hasChildren && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List disablePadding dense>
              {item.children.map((c, i) => (
                <RecursiveMenu
                  key={`${key}-${i}`}
                  items={[
                    {
                      ...c,
                      key: `${key}-${i}`,
                      parentLabel: item.label
                    }
                  ]}
                  depth={depth + 1}
                  expanded={expanded}
                  toggle={toggle}
                  isMobile={isMobile}
                  closeDrawer={closeDrawer}
                />
              ))}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    );
  });
}

export default function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [expanded, setExpanded] = useState({});
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggle = useCallback(
    key => setExpanded(prev => ({ ...prev, [key]: !prev[key] })),
    []
  );

  const handleDrawerToggle = () => {
    console.log('Hamburger clicked, current state:', mobileOpen); // Debug log
    setMobileOpen(prev => !prev);
  };

  const closeDrawer = () => {
    console.log('Closing drawer'); // Debug log
    setMobileOpen(false);
  };

  console.log('isMobile:', isMobile, 'mobileOpen:', mobileOpen); // Debug log

  return (
    <>
      {/* Hamburger Menu Button - Always visible on mobile */}
      {isMobile && (
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            position: 'fixed',
            top: 5,
            left: 16,
            zIndex: 9999, // Very high z-index
            bgcolor: '#23284b',
            color: '#fff',
            '&:hover': { bgcolor: '#282c49' },
            width: 48,
            height: 48,
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            width: SIDEBAR_WIDTH,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: SIDEBAR_WIDTH,
              boxSizing: 'border-box',
              background: '#0A0C1B',
              color: '#FFF',
              borderRight: 'none',
              height: '100vh',
              overflowY: 'auto',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' }
            }
          }}
        >
          <Toolbar sx={{ minHeight: 48, px: 0 }}>
            <Logo />
          </Toolbar>
          <Box sx={{
            flexGrow: 1,
            overflowY: 'auto',
            height: '100%',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' }
          }}>
            <List dense disablePadding sx={{ py: 1 }}>
              <RecursiveMenu
                items={menu}
                expanded={expanded}
                toggle={toggle}
                isMobile={false}
                closeDrawer={closeDrawer}
              />
            </List>
          </Box>
          <Divider sx={{ bgcolor: '#232856' }} />
        </Drawer>
      )}

      {/* Mobile Sidebar */}
      {isMobile && (
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={closeDrawer}
          sx={{
            '& .MuiDrawer-paper': {
              width: SIDEBAR_WIDTH,
              boxSizing: 'border-box',
              background: '#0A0C1B',
              color: '#FFF',
              borderRight: 'none',
              height: '100vh',
              overflowY: 'auto',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' }
            },
            '& .MuiBackdrop-root': {
              backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }
          }}
          ModalProps={{
            keepMounted: true,
            disablePortal: false
          }}
        >
          {/* Close button in mobile */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1 }}>
            <Logo />
            <IconButton onClick={closeDrawer} sx={{ color: '#fff' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          
          <Box sx={{
            flexGrow: 1,
            overflowY: 'auto',
            height: '100%',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' }
          }}>
            <List dense disablePadding sx={{ py: 1 }}>
              <RecursiveMenu
                items={menu}
                expanded={expanded}
                toggle={toggle}
                isMobile={true}
                closeDrawer={closeDrawer}
              />
            </List>
          </Box>
          <Divider sx={{ bgcolor: '#232856' }} />
        </Drawer>
      )}
    </>
  );
}
