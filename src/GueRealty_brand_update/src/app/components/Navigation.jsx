"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import BrandLogo from './BrandLogo';

const navItems = [
  { label: 'Home',       href: '/' },
  { label: 'About',      href: '/about' },
  { label: 'Services',   href: '/services' },
  { label: 'Properties', href: '/properties' },
  { label: 'Contact',    href: '/contact' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const drawer = (
    <Box sx={{
      width: 280,
      height: '100%',
      background: 'linear-gradient(160deg, #0F1A3A 0%, #1A2B5E 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Mobile header */}
      <Box sx={{
        p: 3,
        borderBottom: '1px solid rgba(255,255,255,0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Red–green gradient bar top */}
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3,
          background: 'linear-gradient(90deg, #CC2020 0%, #1A7A3C 60%, transparent 100%)' }} />
        <BrandLogo variant="mobile" />
        <IconButton onClick={() => setMobileOpen(false)} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ flex: 1, pt: 2 }}>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            component={Link}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            sx={{
              cursor: 'pointer',
              mx: 2,
              borderRadius: 2,
              mb: 0.5,
              backgroundColor: pathname === item.href ? 'rgba(26,122,60,0.25)' : 'transparent',
              borderLeft: pathname === item.href ? '3px solid #1A7A3C' : '3px solid transparent',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.08)',
                transform: 'translateX(4px)',
              },
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{ fontWeight: 600, fontSize: '1rem' }}
            />
          </ListItem>
        ))}
      </List>

      <Box sx={{ p: 3, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
        <Button
          fullWidth
          component={Link}
          href="/contact"
          onClick={() => setMobileOpen(false)}
          variant="contained"
          sx={{
            py: 1.5,
            fontSize: '0.95rem',
            fontWeight: 700,
            borderRadius: 2,
            background: 'linear-gradient(135deg, #1A7A3C 0%, #22A050 100%)',
            '&:hover': { background: 'linear-gradient(135deg, #125A2C 0%, #1A7A3C 100%)' },
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? 'rgba(15,26,58,0.97)' : '#0F1A3A',
          backdropFilter: 'blur(20px)',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.35)' : 'none',
          transition: 'all 0.3s ease',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          // Brand gradient underline
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, #CC2020 0%, #1A7A3C 55%, transparent 100%)',
          },
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ px: { xs: 1, sm: 2 }, py: { xs: 0.5, sm: 1 }, minHeight: { xs: 64, sm: 72 } }}>
            <BrandLogo />
            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop nav */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 0.5, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: pathname === item.href ? '#22A050' : 'rgba(255,255,255,0.85)',
                    fontWeight: pathname === item.href ? 700 : 500,
                    fontSize: '0.9rem',
                    px: 2,
                    py: 1.25,
                    borderRadius: 2,
                    textTransform: 'none',
                    position: 'relative',
                    transition: 'all 0.2s ease',
                    '&:hover': { color: 'white', backgroundColor: 'rgba(255,255,255,0.08)', transform: 'translateY(-1px)' },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 4,
                      left: '50%',
                      width: pathname === item.href ? '70%' : 0,
                      height: '2px',
                      backgroundColor: '#1A7A3C',
                      borderRadius: '2px',
                      transition: 'all 0.25s ease',
                      transform: 'translateX(-50%)',
                    },
                    '&:hover::after': { width: '70%' },
                  }}
                >
                  {item.label}
                </Button>
              ))}

              <Button
                component={Link}
                href="/contact"
                variant="contained"
                color="secondary"
                sx={{ ml: 2, px: 3, py: 1.25, fontSize: '0.875rem', borderRadius: 2 }}
              >
                Get in Touch
              </Button>
            </Box>

            {/* Mobile menu */}
            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{
                display: { xs: 'flex', lg: 'none' },
                ml: 1,
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'white',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', lg: 'none' }, '& .MuiDrawer-paper': { width: 280 } }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
