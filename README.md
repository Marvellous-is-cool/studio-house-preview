# StudioHouse Web Project Documentation

## Project Structure

```
studios/
├── index.html      # Main HTML file
├── styles.css      # Core styles and Tailwind fallbacks
├── script.js       # JavaScript functionality
└── src/
    ├── logo.png    # Logo image
    └── hamburger.png # Menu icon
```

## Typography System

### Font Families

- **Courier**: Primary font for body text
  - `font-courier: ["Courier Regular", "Courier", "monospace"]`
- **Arial**: Used for headers and emphasis
  - `font-arial: ["Arial", "sans-serif"]`

### Font Sizes

- **Quote Text**: 12pt
  - Used in testimonials and citations
  - Class: `text-quote`
- **Body Text**: 10pt
  - Used for main content and navigation
  - Class: `text-body`
- **Stars**: 54pt
  - Used for decorative elements
  - Class: `text-stars`
- **Headers**: 14pt
  - Used for section titles
  - Class: `text-header`

### Color Scheme

- **Blues**
  - Primary: `#2563eb` (blue-800)
  - Secondary: `#3b82f6` (blue-600)
- **Red**: `#dc2626` (red-600)
  - Used for accents and stars
- **Black**: `#000000`
  - Used for main text
- **White**: `#ffffff`
  - Used for backgrounds

## File Management

### HTML (index.html)

- Contains the main structure
- Sections are clearly commented
- Uses semantic HTML5 elements

### CSS (styles.css)

- Organized by components
- Contains Tailwind fallbacks
- Media queries for responsive design
- Mobile-first approach

### JavaScript (script.js)

- Handles dynamic functionality
- Manages Tailwind loading
- Controls navigation and interactions

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1921px

## Performance Considerations

1. **Tailwind Loading**

   - Fallback styles ensure content display
   - Automatic detection and switching

2. **Image Optimization**

   - Use WebP format when possible
   - Implement lazy loading

3. **Caching Strategy**
   ```html
   <meta
     http-equiv="Cache-Control"
     content="no-cache, no-store, must-revalidate"
   />
   ```

## Maintenance

### Regular Updates

1. Check for Tailwind CSS updates
2. Update content in index.html
3. Test responsive layouts
4. Verify all links and contacts
