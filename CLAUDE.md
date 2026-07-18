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

## Individual Page Blueprints (Volume IV: Individual Page Blueprints)

### Portfolio Page
**Key Specifications:**
- Hero: Quiet introduction (single exceptional still or slow-motion shot, not showreel)
- Featured projects: 3–4 flagship projects receiving largest visual space
- Filters: Simple (All, Retail, Fitness, Hospitality, Real Estate, Commercial, White-Label)
- Grid: Editorial layout (varying sizes; strongest work = largest canvas)
- Portfolio cards: Thumbnail/looping preview, title, industry, year only
- Hover: Video plays silently, subtle zoom, soft elevation, cursor changes
- Ordering: By quality + strategic industries (NOT alphabetical)
- White-Label projects: Labeled transparently (confidentiality respected)
- Performance: Aggressive optimization (lazy loading, responsive images, efficient video)

### Case Study Page
**Key Specifications:**
- Structure: Hero → Overview → Client → Challenge → Strategy → Production → Post → Deliverables → Gallery → Results → Testimonial → Related Projects → CTA
- Storytelling: Why? → How? → What? → What changed?
- Visual rhythm: Alternate large visuals, short explanations, media, whitespace
- Copy style: Documentary tone (not marketing); specific observations over adjectives
- Media gallery: Editorial layout (landscape, portrait, full-width, split layouts)
- Results: Measurable outcomes only (not fabricated metrics)
- Navigation: Previous/Next project, Back to Portfolio (no dead ends)

### Services Page
**Key Specifications:**
- Structure: Hero → Philosophy → Service Categories (Pillar-based) → Industry Solutions → White-Label → Process → FAQ → Case Studies → CTA
- Pillar approach: Brand Films, Commercial Content, Social Media Content, White-Label Production
- Copy framework: Problem → Solution → Outcome (not technical specs)
- Industry fit: Fashion & Retail, Hospitality, Fitness, Real Estate, Marketing Agencies
- White-Label section: Dedicated, detailed, positioned as strategic service
- Deliverables: Shown visually (not long lists)
- Pricing: Value-focused (not detailed price lists; encourage conversations)

### About Page
**Key Specifications:**
- Structure: Hero → Why FrameBonds Exists → Founder's Perspective → Creative Principles → How We Work → Behind the Scenes → Partners & Collaborators → Looking Ahead → CTA
- Tone: Calm, reflective, confident (not boastful or corporate)
- Founder focus: Philosophy + standards (not autobiography)
- Creative principles: Four key principles (Purpose Before Production, Details Build Perception, Consistency Creates Trust, Relationships Over Transactions)
- Behind-the-scenes: Authentic production photos (real setups, real people, real moments)
- Visuals: Editorial layout, large photography, generous whitespace
- Timeline: Only meaningful milestones (not exhaustive company history)

### Agency Partnership (White-Label) Page
**Key Specifications:**
- Audience: Marketing agencies, branding agencies, freelancers (NOT direct clients)
- Core message: "Your Production Team—Without Expanding Your Payroll"
- Sections: Hero → Who This Is For → Why Agencies Partner → Partnership Models → How It Works → Confidentiality Promise → Communication → Deliverables → Capacity → FAQ → Agency Testimonials → CTA
- Partnership models: Production Only, Editing Only, End-to-End Production, Monthly Partnership
- Workflow: Agency Brief → Planning → Production → Editing → Agency Review → Client Delivery (clear, simple)
- Confidentiality: Heavily emphasized (no client stealing, NDAs respected)
- Tone: Collaborative, not competitive; partnership proposal, not vendor pitch

### Book a Call / Contact Page
**Key Specifications:**
- Hero: Simple, welcoming headline ("Let's Create Something Exceptional")
- Meeting expectations: Clear explanation of what happens during discovery call
- Primary action: Calendly integration (Discovery Call, Agency Partnership Call, Existing Client Meeting)
- Inquiry form: Minimal fields (Name, Company, Email, Phone optional, Business Type, Project Type, Message)
- Alternative contact: Email, Phone, WhatsApp, Instagram, LinkedIn (with response expectations)
- FAQ: Common concerns (timeline, travel, agencies, recurring shoots, pricing)
- Confirmation: Reassuring message explaining next steps
- Mobile: Large fields, sticky CTA, easy calendar interaction

### Navigation & Utility System
**Primary Navigation:** Home, Portfolio, Services, Agency Partnership, About, Contact
- **CTA Always Visible:** Book a Call button
- **Sticky Behavior:** Transparent initially; background + blur on scroll; logo + CTA always accessible
- **Mobile:** Full-screen menu, large typography, generous spacing
- **Breadcrumbs:** Only where hierarchy exists (Portfolio → Case Study)
- **404 Page:** Intentional (not generic); Headline: "Looks Like This Story Hasn't Been Written Yet"
- **Thank You Page:** Timeline of next steps (Today → Review → Within 1 Business Day → Reply → Call → Planning)
- **Footer Navigation:** Company, Portfolio, Services, Agency Partnership, Resources, Legal, Contact
- **Link Strategy:** Internal = smooth transitions; External = new tabs; Indicate external links subtly
- **Microcopy:** Human, not robotic; all system messages should reinforce professionalism

---

## Component Library & Design System (Volume V: Component Library & Design System)

### Navigation Component
**Specifications:**
- Fixed positioning (transparent → soft blur on scroll)
- Height: Desktop 72–80px, Mobile 64–72px
- Three zones: Brand (logo) | Navigation (links) | CTA (Book a Call)
- Primary nav: Home, Portfolio, Services, Agency Partnership, About, Contact
- Active state: Subtle brightness + thin underline (no loud colors)
- Mobile: Full-screen overlay menu (not hamburger dropdowns)
- Sticky behavior: Logo + CTA always accessible
- Keyboard: Tab navigation, Escape closes mobile menu

### Button & CTA System
**Hierarchy:**
- Level 1 (Primary): One per section (Book a Call, Start a Project)
- Level 2 (Secondary): Supporting actions (View Portfolio, Learn More)
- Level 3 (Text): Simple navigation (Read More, Back)
- Level 4 (Icon): Utility actions (play, close, etc.) — 44×44px minimum

**Sizes:** Large (56px), Medium (48px default), Small (40px)
**Styling:** No gradients; medium/semi-bold weight; sentence case; icon support
**States:** Default, Hover (slight brightness/lift), Pressed (compress), Focus, Disabled, Loading
**Copywriting:** Describe outcomes (not vague labels); every button answers "What happens next?"

### Cards & Content Containers
**Seven Card Types:**
1. Portfolio Card: Media + Title + Industry (hover plays video)
2. Service Card: Icon + Title + Problem → Solution → CTA
3. Testimonial Card: Quote + Name + Role + Company
4. Case Study Preview: Hero + Challenge + Solution + CTA
5. Process Card: Number + Title + Description
6. Statistic Card: Large number + Label + Context
7. Feature Card: Icon + Title + Supporting paragraph

**Universal Structure:** Media → Heading → Supporting Info → Action
**Spacing:** Generous padding (24–32px); no crowding
**Hover:** Subtle elevation + border brightening + scale (98–99% press only)
**Responsive:** Desktop (natural width), Tablet (2-col), Mobile (stack)

### Forms & Input Components
**Components:** Text Input, Textarea, Dropdown, Radio, Checkbox, File Upload, Phone, Date Picker
**Rules:**
- Labels always visible (never hidden in placeholders)
- Minimal required fields (only genuinely necessary data)
- Validation: Early not aggressive; helpful error messages
- Height: 48–52px for text inputs; textareas 5–6 lines visible
- Keyboard support enabled; autocomplete enabled
- Touch targets: 44px minimum; full-width on mobile

### Modals, Drawers & Overlay Components
**Nine Types:** Image Lightbox, Video Modal, Gallery Viewer, Confirmation Dialog, Mobile Menu, Booking Modal, Success Modal, Drawer, Full-Screen
**Behavior:**
- Dark translucent background (70–80% opacity)
- Prevent background scrolling; restore on close
- Support dismissal: Close button + Escape + Click outside
- Focus trapped inside; returned on dismiss
- Animation: 250–350ms fade + subtle scale

### Testimonials & Social Proof Components
**Components:** Testimonial Card, Featured Testimonial, Logo Grid, Partner Showcase, Statistics, Quote Block, Success Story, Industry Trust, Badge, Repeat Indicator
**Rules:**
- Only authentic testimonials (no fabrication)
- Specific outcomes (not generic praise)
- Logo grid: Monochrome, consistent sizing, generous spacing
- Statistics: Factual only (no vanity metrics)
- Placement: After proof (not before)

### FAQ & Expandable Content Components
**Eight Types:** Standard Accordion, Rich Accordion, Multi-Level, Expandable Text, Inline Expand, Timeline, Comparison, Media
**Rules:**
- Questions sound natural (not categories)
- Answers conversational (not corporate)
- Support multiple expansion (not one-at-a-time)
- Icon: Simple chevron (180° rotation only)
- Animation: 220–280ms smooth
- Keyboard: Tab, Enter, Escape support

### CTA & Conversion Components
**Ten Types:** Primary Section, Secondary Block, Split Layout, Sticky, Inline, Case Study, Agency, Banner, Footer, Exit
**Philosophy:**
- One primary action per section
- CTA after trust established (not before)
- Copy describes outcomes
- No artificial urgency (unless authentic)
- Never trap visitors with pressure

### Footer, Badges & Micro Components
**Components:**
- Footer: Logo + Brand statement + Navigation groups + Social + Copyright
- Badges: Status indicators (Available, New, Featured, etc.)
- Tags: Category organization (Retail, Fitness, etc.) — max 4 per item
- Breadcrumbs: Only where hierarchy exists (Portfolio → Project)
- Dividers: Whitespace first; visible lines only when clarity needs them
- Icons: One consistent family; SVG optimized

### Loaders, Skeletons & System Feedback
**Ten Types:** Skeleton Screens, Spinner, Progress Indicators, Toast, Success, Error, Warning, Empty State, Offline, Retry
**Philosophy:**
- Show structure (skeleton) before content
- Explain what's happening (not just "Loading...")
- Guide recovery (not just "Error")
- Every state communicates current status + next action
- Motion: Subtle (no harsh flashes)
- Accessibility: ARIA live regions + screen reader support

---

## Motion, Interactions & Cinematic Experience (Volume VI)

### Motion Philosophy
- Motion communicates (hierarchy, spatial relationships, interaction confirmation) — never decoration
- Personality: Calm, intentional, confident, elegant, controlled (never energetic/playful/hyperactive)
- Three-level hierarchy: Micro Motion (100–180ms: hover, focus) → Interface Motion (200–350ms: cards, modals) → Cinematic Motion (500–1000ms: hero, page transitions, reserved/rare)
- Motion density: 70% static content, 20% micro-interactions, 10% cinematic — silence creates impact
- Movement distance: 8–32px only (small = refined; large = theatrical)
- Rotation: Almost never (only chevrons/tiny loaders)
- Animations play once (not every viewport re-entry); `prefers-reduced-motion` always respected

### Timing, Easing & Motion Tokens
**Duration tokens:** Instant (80ms) → Very Fast (120ms) → Fast (180ms) → Normal (250ms) → Medium (350ms) → Slow (500ms) → Cinematic (700ms) → Feature (900ms) → Immersive (1200ms)
**Easing:** Standard UI = `cubic-bezier(0.22,1,0.36,1)`; Entrance = `cubic-bezier(0.16,1,0.3,1)`; Exit = `cubic-bezier(0.4,0,1,1)`; Linear only for loaders
**Stagger:** 40–80ms between items; max 100ms; entire grid completes within 600ms
**Rule:** Never hardcode durations — always reference motion tokens; identical actions (dropdown/accordion/FAQ) share identical timing

### Page Transitions & Route Navigation
- Every route change = scene change (not page reload); preserve spatial continuity and scroll orientation
- Sequence: Click → Feedback → Exit (300–350ms) → New Route → Entry (450–500ms) → Scroll Restoration → Interactive
- Total transition: 700–800ms max (never exceed 1 second)
- Shared element transitions only when meaningful (Portfolio thumbnail → Case Study hero)
- Scroll position restored on browser back; scroll-to-top on new page navigation
- Hero never replays on repeat visits/refresh — returning visitors get speed, not spectacle

### Scroll Behavior & Reveal Animations
- Scroll = storytelling mechanism; content reveals exactly when relevant (trigger ~15–25% into viewport)
- Section reveal: 500–700ms total; heading → paragraph → CTA → media in sequence
- Animate once per session (not on scroll-back) except small interactive/live components
- Parallax: subtle only (0.8×–1.1× speed differential), backgrounds/decoration only — never primary text/buttons/nav
- Sticky sections: max 1–2 viewport heights; never trap visitors
- Horizontal scroll: extremely rare (major showcase only); always provide escape to vertical scroll

### Micro Interactions & Hover States
- Every interaction gets feedback; feedback is immediate but understated
- Button hover: scale 100%→101–102%, 120–180ms; Button press: 100%→99%→100%, 120ms
- Card hover: 4–8px lift + subtle shadow + slight image scale (unified motion, not sequential)
- Portfolio card hover is richest: image scale to 102%, overlay, title emphasis, CTA appears
- Links: animated underline (left origin, 150ms) preferred over color-only change
- No custom/oversized cursors unless flawlessly implemented; mobile = touch feedback (no hover simulation)
- No interface sounds — ever

### Media Playback & Video Interactions
- Video is the product, not supporting content — player should disappear behind the film
- Hero video: muted autoplay, poster image instant, no visible controls initially, inline only (never forced fullscreen)
- Portfolio hover preview (desktop only): begins ~250ms after hover, muted loop, max 5–8 seconds, resets on hover-end
- Mobile: poster → tap → playback (no hover simulation)
- Fullscreen: smooth fade, maintains playback position, returns to prior scroll on exit
- Lazy load videos (viewport-triggered only); never preload entire portfolio simultaneously
- Every video requires high-quality poster frame (never black/loading frames)

### Signature Cinematic Motion Patterns
**10 Reusable Signature Patterns:** Cinematic Hero Reveal, Editorial Mask Reveal, Layered Depth Motion, Ambient Background Motion, Signature Image Transition, Premium Text Reveal, Sequential Storytelling, Scene Transition, Filmstrip Motion, Signature Exit
- Hero reveal sequence: Background(0ms) → Nav(40ms) → Headline(120ms) → Text(200ms) → CTA(260ms) → Media(320ms), total 900–1000ms
- Editorial mask reveal: text slides up from behind mask, 16–24px movement — reserved for major headings only (not body text)
- Layered depth: Foreground 1.00× / Content 0.98× / Background 0.94× / Texture 0.90× — felt, not seen
- These patterns must become brand identity: recognizable even without logo/color/typography

### Motion Governance & Edge Cases
- Newest user action always interrupts/overrides in-progress animation (never queue)
- Duplicate-click prevention on all submit/booking actions ("Processing..." state)
- State priority hierarchy: Disabled > Loading > Active > Focused > Hovered > Default
- Tab-inactive: pause ambient motion/video; resume naturally on return (no replay of entrance sequences)
- Reduced motion removes: mask reveals, parallax, layered depth, large translation — replaced with simple opacity/instant transitions
- Every animation interruptible; must resolve to valid complete state (never left half-transitioned)
- QA required across: mouse, keyboard, touch, slow CPU/network, reduced motion, all screen sizes

---

## Coding Conventions
[To be defined in Volumes VII-IX]

### File Structure
[Expected in Volume VIII — Technical Stack]

### Naming Conventions
[Expected in Volume VIII — Technical Stack]

### Component Patterns
[Expected in Volume VIII — Technical Stack]

### Folder Organization
[Expected in Volume VIII — Technical Stack]

---

## Important Notes
- All context and business details are in the PDFs provided by the user
- Model upgrade requested when final website building begins
- Minimal, focused implementation — no over-engineering
- 6 of ~10 volumes received; Volumes VII–IX to follow (Content Strategy, Technical Stack, Analytics/Deployment)
- Complete brand, design system, page architecture, component library, and motion system documented
- Next: Content strategy/copywriting, technical stack, analytics/deployment
