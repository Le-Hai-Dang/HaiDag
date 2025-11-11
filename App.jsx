import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container, Box, Typography } from '@mui/material';
import CustomDialog from './CustomDialog';
import './CustomDialog.css';

// Tạo theme tùy chỉnh
const theme = createTheme({
  palette: {
    primary: {
      main: '#7c3aed',
      light: '#a78bfa',
      dark: '#6d28d9',
    },
    secondary: {
      main: '#c4b5fd',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          {/* Header */}
          <Box textAlign="center">
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              Custom Dialog Demo
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ mb: 4 }}
            >
              Dialog tùy chỉnh với thiết kế hiện đại màu trắng tím
            </Typography>
          </Box>

          {/* Demo Component */}
          <Box
            sx={{
              padding: 6,
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f5ff 100%)',
              borderRadius: 4,
              boxShadow: '0 8px 32px rgba(124, 58, 237, 0.12)',
              border: '1px solid #e9d5ff',
            }}
          >
            <CustomDialog />
          </Box>

          {/* Features */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 3,
              width: '100%',
              mt: 4,
            }}
          >
            {[
              {
                title: '🎨 Thiết kế đẹp',
                desc: 'Gradient trắng tím hiện đại',
              },
              {
                title: '🌊 Animation mượt',
                desc: 'Transitions và effects đẹp mắt',
              },
              {
                title: '📱 Responsive',
                desc: 'Hoạt động trên mọi thiết bị',
              },
              {
                title: '♿ Accessible',
                desc: 'Hỗ trợ keyboard & screen readers',
              },
            ].map((feature, index) => (
              <Box
                key={index}
                sx={{
                  padding: 3,
                  background: '#ffffff',
                  borderRadius: 3,
                  border: '2px solid #e9d5ff',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(124, 58, 237, 0.15)',
                    borderColor: '#c4b5fd',
                  },
                }}
              >
                <Typography variant="h6" fontWeight={700} mb={1}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;

