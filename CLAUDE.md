# Project: FrameBonds Creative System

**Status:** Brand documentation received (Volume I complete) — awaiting Volumes II–X and PDF context

## Project Description
FrameBonds is a creative production studio that shapes perception and builds trust through intentional, premium-quality video and visual content. The company exists to transform how brands are perceived—moving beyond content creation to perception engineering. Every deliverable must demonstrate obsessive refinement, authentic craftsmanship, and unwavering commitment to client success. The website is the first project visitors experience and must silently prove FrameBonds' difference before any words are read.

## Tech Stack
[To be defined once all volumes received]

---

## Design System (Volume II: Visual Language)

### Color System
- **Philosophy:** Neutral-focused with restrained accent usage; interface should feel almost monochromatic
- **Primary Palette:** Deep charcoal backgrounds (not pure black), off-white text (not pure white), muted grays for secondary text
- **Accent Colors:** Used sparingly only for CTAs, active states, interactive highlights—not as background colors
- **Photography:** Portfolio pieces provide the strongest colors; interface remains restrained to allow work to be the visual hero
- **Hierarchy:** Created through contrast, light, shadows, typography, motion—not through excessive colors

### Typography System
- **Approach:** Editorial, cinematic, modern, effortless
- **Font Pairing:** Maximum 2 font families (one for headlines, one for body content)
- **Headlines:** Large, clean, bold without aggression; confidence through words, not decoration
- **Body Text:** Prioritizes readability over style; comfortable line length, generous line height
- **Hierarchy:** Six clear levels (Hero → Section → Subheading → Body → Caption → Metadata)
- **Alignment:** Primarily left-aligned; avoid centered paragraphs except in intentional hero moments

### Spacing & Layout
- **Philosophy:** Whitespace creates luxury; when in doubt, add more space
- **Grid System:** Consistent grid governing all elements (text, images, cards, buttons, etc.)
- **Section Width:** Content never stretches edge-to-edge; consistent content containers with appropriate max-widths
- **Vertical Rhythm:** Consistent spacing above and below sections; rhythm creates comfort
- **Negative Space:** Active design tool directing attention; emptiest areas often highlight most important elements
- **Mobile:** Layouts reconsidered for mobile (not simply stacked); maintain same emotional impact across devices

### Component Design Language
- **Philosophy:** Components should not compete for attention; support content
- **Consistency:** Universal design language across all components; every element should feel like it belongs to FrameBonds
- **Button Hierarchy:** Clear three-tier system (Primary/Secondary/Tertiary) with visually distinct levels
- **Cards:** Organize information, not decorate; use only when whitespace isn't sufficient
- **Portfolio Cards:** Prioritize large imagery, minimal text, smooth hover, consistent aspect ratios
- **Forms:** Effortless; clear labeling, visible fields, obvious required vs. optional
- **Navigation:** Calm, predictable, consistent; never a visual centerpiece

### Photography & Media Direction
- **Standard:** Every visual should feel like luxury brand campaign, Netflix sequence, or premium commercial
- **Curation:** Fewer exceptional visuals over many average ones; ruthless selection
- **Framing:** Emphasize composition, subject, depth, lighting, storytelling; no awkward crops
- **Color Grading:** Consistent visual language across portfolio; even different clients should feel unmistakably FrameBonds
- **Lighting:** Directional lighting, contrast, controlled highlights; flat lighting reduces perceived quality
- **Aspect Ratios:** Support multiple formats but presentation remains visually consistent
- **Portfolio Presentation:** Give media room to breathe; spacing communicates value
- **Layout:** Think "museum rule"—each project has its own wall, its own lighting, its own space

### Iconography, Shapes & Visual Details
- **Icons:** Communicate information faster than text; no excessive icon usage; maintain consistent family
- **Corner Radius:** Restrained; architectural rather than playful
- **Shapes:** Primary reliance on rectangles, squares, clean geometric proportions
- **Borders:** Almost invisible; spacing should separate before borders do
- **Shadows:** Soft elevation only; interface should feel grounded
- **Blur:** Create focus (navigation, modals, overlays); never reduce readability
- **Gradients:** Atmospheric only; large, soft transitions, low saturation; no neon effects
- **Textures:** Subtle; resemble fine paper, film grain, matte materials, premium print
- **Patterns & Decoration:** Extremely limited; every element must support storytelling

### Design Tokens & UI Specifications
- **Philosophy:** Every recurring value must exist as reusable token; never hardcode visual values
- **Color Tokens:** Semantic variables (Primary Background, Secondary Background, Primary Text, Accent, etc.)
- **Typography Tokens:** Structured scale (Display XL/L, Heading XL/L/M, Body Large/Regular/Small, Caption, Label)
- **Spacing Tokens:** Predictable rhythm (Extra Small through Extra Large, Section, Hero levels)
- **Border Radius Tokens:** One consistent system (Small/Medium/Large/Full)
- **Shadow Tokens:** Reusable elevation levels (None/Low/Medium/High)
- **Motion Tokens:** Animation durations and easing curves (Fast/Standard/Slow Interaction, Entrance/Exit/Emphasis)
- **Responsive Breakpoints:** Predefined; layouts adapt intentionally at each breakpoint
- **Component States:** Every interactive component defines all possible states (Default/Hover/Active/Focus/Disabled/Loading/Success/Error)

### Tone & Voice
[To be defined in Volume III onwards]

---

## Page Architecture (Volume III: Page Architecture)

### Homepage Structure
**10-Section Blueprint:**
1. Hero (Capture attention, showreel, one headline, two CTAs)
2. Featured Portfolio (6–8 projects, editorial grid, hover previews)
3. About FrameBonds (Philosophy, founder presence, three core principles)
4. Services (Outcome-focused, grouped by category, portfolio links)
5. Process (Five-step flow: Discovery → Planning → Production → Post → Delivery)
6. Why FrameBonds (Differentiators, comparison, trust signals)
7. Results & Testimonials (Featured testimonials, client logos, outcomes)
8. Final CTA (Simple call-to-action, alternative contact methods)
9. Footer (Brand statement, navigation, legal, social)
10. All connected as one continuous narrative

### Storytelling & Content Flow
**6-Stage Visitor Journey:**
1. Capture Attention (First 3–5 seconds in Hero)
2. Create Curiosity (Portfolio preview, teaser)
3. Demonstrate Capability (Full portfolio, case studies)
4. Remove Doubt (Services, Process, FAQ)
5. Build Trust (Testimonials, results, social proof)
6. Invite Action (Final CTA feels earned, not forced)

**Key Principles:**
- Progressive disclosure (reveal information in layers)
- Emotional rhythm (alternate between impact and calm)
- Visual rhythm (vary layouts; avoid repetition)
- CTA progression (Early: low commitment → Middle: medium → Final: high commitment)
- Three-click rule (Understand FrameBonds, see quality, know how to contact within 3 interactions)
- No dead ends (every page suggests next logical step)

### Homepage Hero Section
**Specifications:**
- 100% viewport height; full immersion
- Background: Cinematic montage showreel (no dialogue, premium pacing)
- Overlay: Subtle dark layer for readability
- Headline: One large statement (under 2 lines), answers "What FrameBonds does"
- Supporting Text: 2–3 lines max; explains who it helps + outcomes
- CTAs: One primary (Book a Call), one secondary (View Portfolio)
- Motion: Progressive reveal (video → logo → nav → headline → text → buttons)
- Mobile: Adapted (increased text width, proportional scaling, optimized video)
- Performance: Fast first paint; progressive video loading

### Featured Portfolio Section
**Specifications:**
- 6–8 curated projects (quality > quantity)
- Editorial grid (varying sizes; strongest work gets largest canvas)
- Hover behavior: Video plays, slight zoom, subtle elevation, cursor changes
- Click: Opens dedicated case study page (not modal)
- Case studies include: Hero media, challenge, approach, deliverables, gallery, related work, CTA
- Filtering: Simple (All / Commercials / Retail / etc.; hide if too few projects)
- Portfolio ordering: By quality + strategic industries (not alphabetical)
- Mobile: Vertical stack, larger cards, optimized videos, tap interactions

### About FrameBonds Section
**Specifications:**
- Opening statement explains purpose (why FrameBonds exists, not company history)
- Philosophy paragraph (belief that drives every project)
- Founder presence (professional imagery, personal statement about standards)
- Three core principles (Story Before Style, Craft Without Compromise, Business Before Vanity)
- Behind-the-scenes imagery (process, production, collaboration)
- Tone: Specific + authentic (no corporate jargon; no empty buzzwords)
- Transition: Naturally leads into Services section

### Services Section
**Specifications:**
- Outcome-focused (not task-focused; "Content That Holds Attention" not "Video Editing")
- Grouped by category (Production, Post Production, Content Systems)
- Each service: Name → One-line outcome → 2–3 sentence description → Related portfolio → Learn More
- White-Label Production clearly explained (simple, direct)
- Monthly Content Packages positioned as partnerships (consistency, efficiency, value)
- Industry fit shown (Fashion, Hospitality, Fitness, Real Estate, Luxury, Food)
- Cross-linking: Every service connects to relevant portfolio work
- Visual layout: Large spacing, service images, breathing room

### Process Section
**Specifications:**
- Five-step timeline: Discovery → Planning → Production → Post → Delivery
- Each step: Clear title, explanation of focus, client benefit
- Communication section: Response expectations, approval process
- Revision policy: Transparent (not hidden; discussed confidently)
- "What You Can Expect" subsection (clear communication, transparent timelines, etc.)
- FAQ section: Answers common concerns before Contact
- White-Label workflow explained: Agency Brief → FrameBonds Production → Agency Review → Delivery
- Timeline philosophy: Quality never sacrificed for speed

### Why FrameBonds Section
**Specifications:**
- Opening statement: Shifts focus from production volume to business impact
- 4–6 differentiators: Quality Over Quantity, Business-First Creativity, White-Label Partnerships, Detail is Part of Product, Professional Communication, Long-Term Partnerships
- Comparison table: Subtle (not aggressive); educates without attacking competitors
- Supporting visuals: Authentic behind-the-scenes (director, collaboration, production, etc.)
- Tone: Calm confidence; no superlatives; specific practices over generic claims
- Cross-linking: Each differentiator connects to relevant website section

### Results, Testimonials & Social Proof
**Specifications:**
- Featured testimonial: Large space, includes name/company/role/logo/authentic quote
- Client logos: Monochrome, consistent size, evenly spaced (if permission granted)
- Industry diversity: Show work across multiple sectors
- Measurable outcomes: Real results (improved brand perception, increased engagement, etc.)
- Case study highlight: Challenge → Approach → Outcome → Link to full case study
- Video testimonials: 30–60 seconds, authentic (not over-polished)
- Before & after: Show genuine transformations (not exaggerated)
- Trust without clients (early-stage): Portfolio evidence, process clarity, quality philosophy

### Final CTA & Footer
**Specifications:**
- Closing statement: Emotional conclusion (timeless, not dramatic marketing language)
- Supporting copy: 2–3 lines; emphasis on understanding, not selling
- Primary CTA: Single dominant action (Book a Discovery Call)
- Secondary contact methods: Email, WhatsApp, Instagram, LinkedIn (alternatives)
- Response expectation: "We typically respond within one business day"
- Contact form: Minimal fields (Name, Company, Email, Project Type, Description only)
- Success message: Personal, conversational (not generic confirmation)
- Footer: Logo, brand statement, navigation, social links, business info, legal links
- Mobile: Vertically stacked, large tap targets, CTA prominent before footer

---

## Coding Conventions
[To be defined in Volumes IV–V]

### File Structure
[Expected in Volume IV]

### Naming Conventions
[Expected in Volume IV]

### Component Patterns
[Expected in Volume IV]

### Folder Organization
[Expected in Volume IV]

---

## Important Notes
- All context and business details are in the PDFs provided by the user
- Model upgrade requested when final website building begins
- Minimal, focused implementation — no over-engineering
