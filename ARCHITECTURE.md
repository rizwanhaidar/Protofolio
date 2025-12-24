# Code Structure & Organization

## Architecture Overview

This Astro portfolio follows best practices for maintainability, scalability, and performance.

### Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.astro
│   ├── Hero.astro
│   ├── LogoMarquee.astro
│   ├── CaseStudiesSection.astro
│   ├── SkillsSection.astro
│   ├── ExperienceSection.astro
│   ├── ServicesSection.astro
│   ├── EducationSection.astro
│   └── ContactSection.astro
├── data/               # Content data (TypeScript modules)
│   ├── caseStudies.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── services.ts
│   ├── education.ts
│   ├── contact.ts
│   └── logos.ts
├── layouts/            # Page layouts
│   └── BaseLayout.astro
├── pages/              # Routes (file-based routing)
│   └── index.astro
├── scripts/            # Client-side JavaScript
│   └── parallax.js
├── styles/             # Global styles
│   └── global.css
├── types/              # TypeScript type definitions
│   └── index.ts
└── config/             # Site configuration
    └── site.ts
```

## Design Principles

### 1. Separation of Concerns
- **Components**: UI presentation logic
- **Data**: Content separated from markup
- **Types**: TypeScript interfaces for type safety
- **Layouts**: Shared page structure
- **Config**: Site-wide constants

### 2. Component Architecture
Each section is a self-contained component with:
- Clear responsibility
- Proper semantic HTML
- Accessibility features (ARIA labels, semantic tags)
- Scoped functionality

### 3. Type Safety
All data structures have TypeScript interfaces in `src/types/index.ts`:
- `CaseStudy`
- `Skill`
- `Experience`
- `Service`
- `Education`
- `ContactLink`
- `Logo`

### 4. Content Management
Content is stored in `src/data/` as TypeScript modules:
- Easy to update without touching UI code
- Type-safe data structures
- Single source of truth
- Can be easily migrated to CMS later

### 5. Performance Optimizations
- Lazy loading for images
- Preconnect for font loading
- Passive event listeners
- requestAnimationFrame for smooth animations
- Respects `prefers-reduced-motion`
- Will-change for GPU acceleration

### 6. Accessibility
- Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`)
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Alternative text for images
- Proper heading hierarchy

### 7. SEO
- Meta tags (Open Graph, Twitter Card)
- Canonical URLs
- Structured data ready
- Semantic HTML
- Descriptive alt text
- Proper title hierarchy

## Component Guidelines

### Creating New Components

1. Place in `src/components/`
2. Use `.astro` extension
3. Add TypeScript types for props
4. Include accessibility features
5. Document with comments

Example:
```astro
---
interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<section aria-labelledby="section-title">
  <h2 id="section-title">{title}</h2>
  {description && <p>{description}</p>}
</section>
```

### Adding New Data

1. Define type in `src/types/index.ts`
2. Create data file in `src/data/`
3. Export typed array/object
4. Import in component

## CSS Guidelines

- Use Tailwind utility classes
- Define reusable components in `@layer components`
- CSS variables for theming
- Responsive design with Tailwind breakpoints
- Prefer utility classes over custom CSS

## JavaScript Guidelines

- Use TypeScript where possible
- Add JSDoc comments
- Handle errors gracefully
- Respect user preferences (reduced motion, etc.)
- Use modern ES6+ syntax
- Keep scripts modular and focused

## Maintenance

### Updating Content
1. Navigate to appropriate file in `src/data/`
2. Update array/object
3. Content automatically reflects on site

### Adding New Sections
1. Create data file in `src/data/`
2. Create component in `src/components/`
3. Import and add to `src/pages/index.astro`

### Styling Updates
1. Tailwind classes: modify in components
2. Global styles: update `src/styles/global.css`
3. Theme colors: update CSS variables in `:root`

## Testing Checklist

- [ ] Lighthouse score (Performance, Accessibility, Best Practices, SEO)
- [ ] Test on mobile devices
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Reduced motion preference
- [ ] Dark/light mode (if implemented)

## Performance Targets

- Lighthouse Performance: >90
- First Contentful Paint: <1.5s
- Time to Interactive: <3s
- Cumulative Layout Shift: <0.1

## Future Enhancements

Potential improvements to consider:
- [ ] Add CMS integration (e.g., Sanity, Contentful)
- [ ] Implement dark mode
- [ ] Add blog section
- [ ] Add project detail pages
- [ ] Implement analytics
- [ ] Add form validation
- [ ] Optimize images with Astro Image
- [ ] Add pagination for case studies
- [ ] Implement search functionality
- [ ] Add RSS feed
