# Project Images Setup Guide

## Adding Your Project Images

To complete the new project card design, you need to add the following images to your `public/assets/images/` folder:

### Required Images:

1. **Skill Forge Project:**
   - `internship1.png` - Default image for Skill Forge
   - `internship2.png` - Hover image for Skill Forge

2. **E-commerce Project:**
   - `ecommerce-women.png` - Default image for E-commerce
   - `ecommerce-kids.png` - Hover image for E-commerce

3. **ISSATSo Management Project:**
   - `issat1.png` - Default image for ISSATSo Management
   - `issat2.png` - Hover image for ISSATSo Management

### Image Specifications:

- **Size:** Recommended 400x300px or similar aspect ratio
- **Format:** PNG or JPG
- **Content:** Screenshots of your projects, mockups, or relevant visuals
- **Quality:** High resolution for crisp display

### How to Update:

1. Add your images to `public/assets/images/`
2. Update the import statements in `src/data.jsx`:
   ```javascript
   import internship1 from '/assets/images/internship1.png';
   import internship2 from '/assets/images/internship2.png';
   // ... etc
   ```

### Current Status:

The website is currently using placeholder images (`projet9.png` and `projet10.png`) so it won't break. Once you add your actual project images, simply update the import paths in `src/data.jsx`.

### Design Features:

✅ **Responsive Design** - Works on all devices
✅ **Hover Effects** - Images change on hover
✅ **Technology Tags** - Shows tech stack for each project
✅ **Action Buttons** - Code and Demo links
✅ **Modern Styling** - Clean, professional appearance
✅ **Smooth Animations** - Enhanced user experience

