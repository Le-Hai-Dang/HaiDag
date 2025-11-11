import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Typography,
  Box,
  Checkbox,
  FormControlLabel,
  Slide,
  styled,
  alpha
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// Transition animation
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Styled components
const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '24px',
    padding: '8px',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8f5ff 100%)',
    boxShadow: '0 24px 48px rgba(124, 58, 237, 0.12)',
    minWidth: '500px',
    maxWidth: '600px',
    overflow: 'visible',
  },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px 32px 16px',
  background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
  borderRadius: '16px 16px 0 0',
  color: '#ffffff',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #7c3aed 0%, #a78bfa 50%, #c4b5fd 100%)',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: '20px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#faf9ff',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#a78bfa',
      },
    },
    '&.Mui-focused': {
      backgroundColor: '#ffffff',
      boxShadow: `0 0 0 4px ${alpha('#7c3aed', 0.1)}`,
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#7c3aed',
        borderWidth: '2px',
      },
    },
  },
  '& .MuiInputLabel-root': {
    color: '#64748b',
    fontWeight: 500,
    '&.Mui-focused': {
      color: '#7c3aed',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '14px 16px',
  },
}));

const StyledButton = styled(Button)(({ theme, variant }) => ({
  borderRadius: '12px',
  padding: '12px 32px',
  fontSize: '15px',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: 'none',
  transition: 'all 0.3s ease',
  ...(variant === 'contained' && {
    background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
    color: '#ffffff',
    '&:hover': {
      background: 'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)',
      boxShadow: '0 8px 24px rgba(124, 58, 237, 0.3)',
      transform: 'translateY(-2px)',
    },
  }),
  ...(variant === 'outlined' && {
    border: '2px solid #e9d5ff',
    color: '#7c3aed',
    backgroundColor: '#ffffff',
    '&:hover': {
      border: '2px solid #c4b5fd',
      backgroundColor: '#faf5ff',
      transform: 'translateY(-2px)',
    },
  }),
}));

const StyledCheckbox = styled(FormControlLabel)(({ theme }) => ({
  marginTop: '8px',
  '& .MuiCheckbox-root': {
    color: '#c4b5fd',
    '&.Mui-checked': {
      color: '#7c3aed',
    },
  },
  '& .MuiTypography-root': {
    fontSize: '14px',
    color: '#64748b',
    fontWeight: 500,
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '48px',
  height: '48px',
  borderRadius: '12px',
  background: 'rgba(255, 255, 255, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '12px',
}));

function CustomDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    projectName: '',
    routeName: '',
    routeCode: '',
    kilometers: '',
    description: '',
    isOfficial: false,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    });
  };

  const handleCreate = () => {
    console.log('Form Data:', formData);
    // Xử lý tạo mới ở đây
    handleClose();
  };

  return (
    <>
      {/* Button để mở dialog */}
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
        sx={{
          background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
          color: '#ffffff',
          borderRadius: '12px',
          padding: '12px 24px',
          fontSize: '15px',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)',
            boxShadow: '0 8px 24px rgba(124, 58, 237, 0.4)',
            transform: 'translateY(-2px)',
          },
        }}
      >
        Tạo tuyến mới
      </Button>

      {/* Custom Dialog */}
      <StyledDialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        transitionDuration={400}
      >
        <StyledDialogTitle>
          <Box display="flex" alignItems="center">
            <IconWrapper>
              <CheckCircleOutlineIcon sx={{ fontSize: 28, color: '#ffffff' }} />
            </IconWrapper>
            <Box>
              <Typography variant="h5" fontWeight="700" color="inherit">
                Tạo tuyến mới
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5 }}>
                Điền thông tin để tạo tuyến mới
              </Typography>
            </Box>
          </Box>
          <IconButton
            onClick={handleClose}
            sx={{
              color: '#ffffff',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                transform: 'rotate(90deg)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <CloseIcon />
          </IconButton>
        </StyledDialogTitle>

        <DialogContent sx={{ padding: '32px', backgroundColor: '#ffffff' }}>
          {/* Tên dự án */}
          <StyledTextField
            autoFocus
            required
            fullWidth
            label="Tên dự án"
            placeholder="Tìm kiếm ..."
            variant="outlined"
            value={formData.projectName}
            onChange={handleChange('projectName')}
          />

          {/* Checkbox chính thức */}
          <StyledCheckbox
            control={
              <Checkbox
                checked={formData.isOfficial}
                onChange={handleChange('isOfficial')}
              />
            }
            label="Chính thức"
          />

          {/* Tên tuyến */}
          <StyledTextField
            required
            fullWidth
            label="Tên tuyến"
            placeholder="Điền Tên tuyến"
            variant="outlined"
            value={formData.routeName}
            onChange={handleChange('routeName')}
          />

          {/* Mã tuyến */}
          <StyledTextField
            fullWidth
            label="Mã tuyến"
            placeholder="Điền Mã tuyến"
            variant="outlined"
            value={formData.routeCode}
            onChange={handleChange('routeCode')}
          />

          {/* Số km */}
          <StyledTextField
            fullWidth
            label="Số km"
            placeholder="Điền số km"
            variant="outlined"
            type="number"
            value={formData.kilometers}
            onChange={handleChange('kilometers')}
          />

          {/* Mô tả */}
          <StyledTextField
            fullWidth
            label="Mô tả"
            placeholder="Điền mô tả tuyến"
            variant="outlined"
            multiline
            rows={3}
            value={formData.description}
            onChange={handleChange('description')}
            sx={{ marginBottom: 0 }}
          />
        </DialogContent>

        <DialogActions
          sx={{
            padding: '16px 32px 24px',
            gap: '12px',
            backgroundColor: '#faf9ff',
            borderRadius: '0 0 16px 16px',
          }}
        >
          <StyledButton variant="outlined" onClick={handleClose} fullWidth>
            Quay lại
          </StyledButton>
          <StyledButton variant="contained" onClick={handleCreate} fullWidth>
            Tạo mới
          </StyledButton>
        </DialogActions>
      </StyledDialog>
    </>
  );
}

export default CustomDialog;

