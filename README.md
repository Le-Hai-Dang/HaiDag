# Custom Dialog Component - HaiDag

Dialog tùy chỉnh hiện đại với thiết kế màu trắng tím, sử dụng Material-UI.

## ✨ Tính năng

- 🎨 **Thiết kế hiện đại**: Gradient trắng tím đẹp mắt
- 🌊 **Animation mượt mà**: Slide up transition và hover effects
- 📱 **Responsive**: Hoạt động tốt trên mọi kích thước màn hình
- ♿ **Accessibility**: Hỗ trợ đầy đủ keyboard navigation và screen readers
- 🎯 **User-friendly**: Form validation và UX tối ưu

## 🚀 Cài đặt

### 1. Cài đặt dependencies

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

hoặc sử dụng yarn:

```bash
yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material
```

### 2. Import component

```jsx
import CustomDialog from './CustomDialog';
```

### 3. Sử dụng trong ứng dụng

```jsx
function App() {
  return (
    <div className="App">
      <CustomDialog />
    </div>
  );
}
```

## 🎨 Màu sắc

- **Primary Purple**: `#7c3aed`
- **Light Purple**: `#a78bfa`
- **Ultra Light Purple**: `#c4b5fd`
- **Background**: `#ffffff` to `#f8f5ff`
- **Text**: `#64748b`

## 📦 Cấu trúc Form

Dialog bao gồm các trường sau:

1. **Tên dự án** (required) - TextField với search functionality
2. **Chính thức** - Checkbox
3. **Tên tuyến** (required) - TextField
4. **Mã tuyến** - TextField
5. **Số km** - Number input
6. **Mô tả** - Multi-line TextField

## 🎯 Tùy chỉnh

### Thay đổi màu sắc

Sửa các giá trị trong `StyledDialog`, `StyledDialogTitle`, và `StyledButton`:

```jsx
background: 'linear-gradient(135deg, #YourColor1 0%, #YourColor2 100%)',
```

### Thêm fields mới

Thêm state mới trong `formData`:

```jsx
const [formData, setFormData] = useState({
  // ... existing fields
  newField: '',
});
```

Thêm TextField mới:

```jsx
<StyledTextField
  fullWidth
  label="Your Label"
  placeholder="Your placeholder"
  value={formData.newField}
  onChange={handleChange('newField')}
/>
```

## 🔥 Các hiệu ứng đặc biệt

- **Slide Up Animation**: Dialog xuất hiện từ dưới lên
- **Hover Effects**: Buttons và inputs có hover state đẹp mắt
- **Focus States**: Ring màu tím khi focus vào inputs
- **Backdrop Blur**: Background mờ với blur effect
- **Box Shadow**: Shadow gradient theo màu tím

## 📱 Screenshots Preview

Dialog sẽ có:
- Header gradient tím với icon và close button
- Form fields với rounded corners và hover states
- Action buttons với gradient background
- Smooth transitions và animations

## 🛠️ Tech Stack

- React 18+
- Material-UI (MUI) v5
- Emotion (styled components)
- Material Icons

## 📝 License

MIT License - Free to use and modify

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Hãy tạo pull request hoặc mở issue.

---

**Developed with 💜 for HaiDag Project**

