# Sections Directory

This directory contains modularized sections of the Home page, broken down for better maintainability and reusability.

## Structure

Each section includes:
- **Component file** (`.tsx`) - React component logic
- **Styles file** (`.css`) - Section-specific styles
- **Common styles** (`sections.css`) - Shared section styles

## Available Sections

### HeroSection
- Main landing section with hero text and call-to-action
- Includes navigation options and scroll indicators
- Background image and overlay styling

### CTASection  
- Call-to-action section with journey steps
- Two-column layout with image and content
- Step-by-step process display

### TrainersSection
- Displays featured trainers using TrainerCard components
- Grid layout for trainer cards
- "View All Trainers" action button

### ValuesSection
- Full-width value segments showcasing company values
- Uses ValueSegmentFullWidth components
- Alternating layouts and color schemes

### TestimonialsSection
- Client testimonials display section
- Simple layout with header, text, and action button
- Styled with brand colors

## Usage

```tsx
import {
    HeroSection,
    CTASection,
    TrainersSection,
    ValuesSection,
    TestimonialsSection
} from "../sections"

export default function Home() {
    return (
        <>
            <HeroSection />
            <CTASection />
            <TrainersSection />
            <ValuesSection />
            <TestimonialsSection />
        </>
    )
}
```

## Benefits of this structure

1. **Modularity** - Each section is self-contained
2. **Maintainability** - Easy to modify individual sections
3. **Reusability** - Sections can be reused on other pages
4. **Code organization** - Clear separation of concerns
5. **Easier testing** - Individual sections can be tested independently
