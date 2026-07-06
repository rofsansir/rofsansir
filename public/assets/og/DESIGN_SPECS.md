# OG Image Design Specifications

## Overview
These Open Graph images are used for WhatsApp sharing previews and social media posts.

## Technical Requirements
```
Dimensions: 1200px × 630px (minimum)
Format: JPG or PNG
File Size: Under 8MB
Quality: High (for crisp text at small sizes)
```

## Design Template

### Layout Structure
```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  ┌──────────────────┐  ┌──────────────────────────────┐ │
│  │                  │  │                               │ │
│  │  Image/Photo     │  │  Dark Background              │ │
│  │  (Left 60%)      │  │  (Right 40%)                 │ │
│  │                  │  │                               │ │
│  │                  │  │  - Main Headline              │ │
│  │                  │  │  - Subheadline                │ │
│  │                  │  │  - Brand Name                 │ │
│  │                  │  │                               │ │
│  └──────────────────┘  └──────────────────────────────┘ │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Color Palette
```
Brand Navy:     #344871 (RGB: 52, 72, 113)
Brand Blue:     #006DD6 (RGB: 0, 109, 214)
Brand Blue Lt:  #1877F2 (RGB: 24, 119, 242)
Text White:     #FFFFFF (RGB: 255, 255, 255)
Text Light:     #E2E8F0 (RGB: 226, 232, 240)
```

## Page-Specific Designs

### 1. home-og.jpg

**Purpose:** Homepage - First impression, key value proposition

**Layout:**
```
┌────────────────────────────────────────────────────────────┐
│  [Teacher Photo]         [Dark Navy #344871]              │
│  - Professional portrait - "O Level Bengali"              │
│  - Warm, approachable     - "Achieve A*"                  │
│  - Classroom setting      - "with Rofsan Sir"             │
│                            - [CAIE Examiner Badge]        │
└────────────────────────────────────────────────────────────┘
```

**Text Specifications:**
- **Main Headline:** "O Level Bengali"
  - Font: Bold, 52px
  - Color: White
  - Position: Top right
  
- **Subheadline:** "Achieve A*"
  - Font: Extra Bold, 64px
  - Color: Brand Blue (#006DD6)
  - Position: Middle right
  
- **Brand:** "with Rofsan Sir"
  - Font: Medium, 28px
  - Color: Text Light (#E2E8F0)
  - Position: Bottom right

- **Badge:** "CAIE Examiner ✓"
  - Small rounded rectangle
  - Green checkmark icon

**Image Source:** `/assets/teacher/1.jpg` or similar professional photo

---

### 2. about-og.jpg

**Purpose:** About page - Credentials and experience

**Layout:**
```
┌────────────────────────────────────────────────────────────┐
│  [Credentials Graphic]   [Dark Navy #344871]              │
│  - Book cover collage    - "CAIE Examiner"               │
│  - Certificate icons     - "8+ Years Experience"          │
│  - Achievement symbols   - "3000+ Students Taught"        │
│                          - "5 Books Published"            │
│                            - "University of Chittagong"   │
└────────────────────────────────────────────────────────────┘
```

**Text Specifications:**
- **Main Headline:** "Meet Rofsan Sir"
  - Font: Bold, 48px
  - Color: White
  
- **Credential 1:** "CAIE Examiner"
  - Font: Semi-bold, 32px
  - Color: Brand Blue
  
- **Credential 2:** "8+ Years Experience"
  - Font: Semi-bold, 32px
  - Color: White
  
- **Credential 3:** "3000+ Students"
  - Font: Semi-bold, 32px
  - Color: White
  
- **Bottom:** "O Level Bengali Expert"
  - Font: Medium, 24px
  - Color: Text Light

**Image Source:** Collage of book covers or teacher with students

---

### 3. resources-og.jpg

**Purpose:** Resources page - Free materials and downloads

**Layout:**
```
┌────────────────────────────────────────────────────────────┐
│  [Books Collage]         [Dark Navy #344871]              │
│  - 5 book covers         - "Free O Level Bengali"        │
│  - Stacked/arranged      - "Resources & Notes"            │
│  - Colorful spines       - "Past Papers • Tips"          │
│                          - "Download Now"                 │
│                            - [↓ Arrow Icon]               │
└────────────────────────────────────────────────────────────┘
```

**Text Specifications:**
- **Main Headline:** "Free O Level Bengali"
  - Font: Bold, 44px
  - Color: White
  
- **Subheadline:** "Resources & Notes"
  - Font: Semi-bold, 36px
  - Color: Brand Blue
  
- **Features:** "Past Papers • Tips • Mock Tests"
  - Font: Medium, 24px
  - Color: Text Light
  
- **CTA:** "Download Now ↓"
  - Font: Bold, 28px
  - Color: Brand Blue

**Image Source:** Stacked book covers from `/assets/books/`

---

### 4. contact-og.jpg

**Purpose:** Contact page - Get in touch and join

**Layout:**
```
┌────────────────────────────────────────────────────────────┐
│  [Teacher/Classroom]     [Dark Navy #344871]              │
│  - Teacher photo          - "Join O Level Bengali"        │
│  - Classroom image        - "Classes in Dhaka"            │
│  - Welcoming atmosphere   - "WhatsApp: +8801948116595"     │
│                          - [WhatsApp Icon]                │
│                            - "Enroll Today"               │
└────────────────────────────────────────────────────────────┘
```

**Text Specifications:**
- **Main Headline:** "Join O Level Bengali"
  - Font: Bold, 48px
  - Color: White
  
- **Location:** "Classes in Dhaka"
  - Font: Medium, 32px
  - Color: Text Light
  
- **Contact:** "WhatsApp: +8801948116595"
  - Font: Semi-bold, 28px
  - Color: Brand Blue
  
- **Bottom:** "Enroll Today →"
  - Font: Bold, 24px
  - Color: White

**Image Source:** Teacher photo or welcoming classroom image

---

### 5. default-og.jpg

**Purpose:** Fallback for pages without specific images

**Layout:**
```
┌────────────────────────────────────────────────────────────┐
│  [Logo + Icon]           [Dark Navy #344871]              │
│  - Brand logo             - "Expert O Level Bengali"       │
│  - Graduation cap icon    - "Tutor in Dhaka"              │
│  - Book graphic          - "Rofsan Sir"                   │
│                          - "CAIE Examiner"                │
│                            - "Book Your Free Class"       │
└────────────────────────────────────────────────────────────┘
```

**Text Specifications:**
- **Main Headline:** "Expert O Level Bengali"
  - Font: Bold, 52px
  - Color: White
  
- **Location:** "Tutor in Dhaka"
  - Font: Medium, 32px
  - Color: Text Light
  
- **Name:** "Rofsan Sir"
  - Font: Bold, 36px
  - Color: Brand Blue
  
- **Badge:** "CAIE Examiner"
  - Font: Semi-bold, 24px
  - Color: White

---

## How to Create

### Using Canva (Recommended)

1. Go to https://canva.com
2. Search for "Facebook Post 1200x630"
3. Use "Custom Dimensions" → 1200 x 630 px
4. Follow the layout specifications above
5. Download as JPG (High Quality)

### Design Tips

1. **Text Readability:**
   - Use white text on dark backgrounds
   - Add subtle text shadow for contrast
   - Keep font sizes large (minimum 24px)

2. **Image Quality:**
   - Use high-resolution photos (minimum 1000px width)
   - Ensure good lighting and clarity
   - Crop professionally

3. **Brand Consistency:**
   - Always use brand colors (#344871, #006DD6)
   - Include "Rofsan Sir" branding
   - Keep consistent typography

4. **WhatsApp Preview:**
   - Test at 200px width to ensure readability
   - Ensure key text is visible when small
   - Test with Facebook Debugger

## Testing Checklist

After creating each image:
- [ ] Image is 1200x630px minimum
- [ ] File size is under 8MB
- [ ] Text is readable at 200px width
- [ ] Brand colors are used correctly
- [ ] "Rofsan Sir" is visible
- [ ] Test with Facebook Debugger

## Tools

- **Canva:** https://canva.com (Easiest, free templates)
- **Figma:** https://figma.com (Professional, precise control)
- **Snappa:** https://snappa.com (Quick, good templates)
- **Photoshop:** For professional designers
