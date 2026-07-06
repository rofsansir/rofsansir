# OG Images Specification

## Purpose
These Open Graph images are used for WhatsApp sharing previews and social media posts.

## Required Images

| File Name | Size | Use | Design Content |
|-----------|------|-----|----------------|
| `home-og.jpg` | 1200x630px | Homepage | Teacher photo + "O Level Bengali - Achieve A* with Rofsan Sir" |
| `about-og.jpg` | 1200x630px | About page | Credentials + "CAIE Examiner - 8+ Years Experience" |
| `resources-og.jpg` | 1200x630px | Resources | Books collage + "Free O Level Bengali Resources" |
| `contact-og.jpg` | 1200x630px | Contact | Contact info + "Join O Level Bengali Classes" |
| `default-og.jpg` | 1200x630px | Fallback | Logo + "Expert O Level Bengali Tutor in Dhaka" |

## Design Guidelines

### Layout
```
┌────────────────────────────────────────────┐
│                                            │
│  [Image/Photo - 60%]  [Text Area - 40%]   │
│                                            │
│  Teacher/Books       Dark Background       │
│  Gradient/Graphic    (#344871)             │
│                     White Text             │
│                                            │
└────────────────────────────────────────────┘
```

### Colors
- **Background Dark:** #344871 (Brand Navy)
- **Background Light:** #006DD6 (Brand Blue)
- **Text:** White (#FFFFFF)
- **Accents:** Use brand blue for highlights

### Typography
- **Main Headline:** Bold, 48-60px
- **Subheadline:** Medium, 24-32px
- **Brand Name:** "Rofsan Sir" - should be visible on all images

### Content Specifications

#### home-og.jpg
- **Left:** Professional photo of Rofsan Sir
- **Right Text:**
  - "O Level Bengali"
  - "Achieve A* Grades"
  - "Rofsan Sir"

#### about-og.jpg
- **Left:** Credentials graphic or teacher photo
- **Right Text:**
  - "CAIE Examiner"
  - "8+ Years Experience"
  - "3000+ Students"
  - "Rofsan Sir"

#### resources-og.jpg
- **Left:** Collage of book covers
- **Right Text:**
  - "Free O Level Bengali"
  - "Resources & Notes"
  - "5 Guidebooks"

#### contact-og.jpg
- **Left:** Teacher photo or classroom image
- **Right Text:**
  - "Join O Level Bengali"
  - "Classes in Dhaka"
  - "WhatsApp: +8801948116595"

#### default-og.jpg
- **Left:** Brand logo
- **Right Text:**
  - "Expert O Level Bengali"
  - "Tutor in Dhaka"
  - "Rofsan Sir"

## Technical Requirements

```
Dimensions: 1200px × 630px (minimum)
Format: JPG or PNG
File Size: Under 8MB
Quality: High (for crisp text)
```

## How to Create

### Option 1: Canva (Recommended)
1. Go to https://canva.com
2. Search for "Facebook Post 1200x630"
3. Use the layout specifications above
4. Download as JPG

### Option 2: Figma
1. Create 1200x630px frame
2. Split 60/40
3. Add images and text
4. Export as JPG

### Option 3: Online Tools
- Snappa: https://snappa.com
- Adobe Express: https://www.adobe.com/express/create/facebook-cover

## Testing

After creating images, test with:
https://developers.facebook.com/tools/debug/

Enter your page URL to see how it will appear on WhatsApp.
