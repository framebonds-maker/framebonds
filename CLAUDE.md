# Project: FrameBonds Creative System

**Status:** ✅ Full 9-volume specification complete + real sales philosophy confirmed from internal docs. Awaiting: FrameBonds proposal video; model-upgrade confirmation; CMS/hosting choice. See docs/NEXT_STEPS.md.

## Project Description
FrameBonds is a creative production studio that shapes perception and builds trust through intentional, premium-quality video and visual content. The company exists to transform how brands are perceived—moving beyond content creation to perception engineering. Every deliverable must demonstrate obsessive refinement, authentic craftsmanship, and unwavering commitment to client success. The website is the first project visitors experience and must silently prove FrameBonds' difference before any words are read.

## Tech Stack
React + TypeScript + Vite + Tailwind CSS + Framer Motion + React Router + React Hook Form + Zod + TanStack Query + React Helmet Async. Headless CMS (specific provider TBD). See "Technical Architecture" section below for full detail.

---

## Real Business Context: What FrameBonds Actually Sells (Confirmed from Internal Sales Docs)

Extracted from the founder's internal Sales Operating System and Message Playbook — **philosophy only**. The scripts, CRM workflows, KPI targets, and call/message templates in those documents are salesperson-only tools and are deliberately excluded from this file; they have no bearing on the website.

**The core reframe — what clients think they're buying vs. what they're actually buying:**
| They think they want | They're actually buying |
|---|---|
| Editing, videography, reels, camera equipment, software skills | Reliable production, less management, one point of contact, ability to scale, a long-term partnership |

**Positioning (verbatim from source):** "FrameBonds is a white-label production partner that helps marketing agencies take on more client work without building or managing a larger production team." Explicitly **NOT**: a freelancer marketplace, a one-time video editing service, a social media marketing agency, or a replacement for an agency's internal team.

**Sales philosophy (confirms and grounds Volume I/VII):** Understand the agency's situation before ever pitching. Never force a fit — a respectful "No" today may become a partnership later. Never compete on price — compete on reliability, consistency, and partnership. The promise is "we work *alongside* your existing team, not instead of it."

**Audience resolution (user-confirmed 2026-07-18):** The real, current ICP in the Sales OS is marketing-agencies-only — there's no direct-to-brand sales process in the internal docs. User has confirmed to **keep Volume VII's dual "Brands + Agencies" website messaging as-is** — agencies are simply where sales efforts started first; brands remain a real, intentional future audience. No spec change needed.

**Real business facts surfaced (for later use, not yet fully integrated into page copy):** Founder is Surya. Small dedicated production team (three editors including the founder + one videographer — not a rotating freelancer pool). Based in Jaipur; travel outside Jaipur billed separately. Packages are monthly recurring with a 30% advance payment; standard delivery is 7 days post-shoot. White-label confidentiality is absolute — the agency's own clients never see the FrameBonds name. Excluded industries: adult/sexual content, gambling, weapons, tobacco/drugs, hate speech, MLM, unlicensed financial/crypto schemes.

---

## Implementation Standards (User's Final Directives — Read Before Writing Any Code)

These govern **how** to execute the spec below, not what to build. The user cares more about final craft quality than literal compliance — treat every other section of this file as "the what," and this section as "the bar for good enough."

1. **Think like a creative director, not just a developer.** Make judgment calls that elevate the brand; don't implement literally without taste.
2. **Never generate generic UI.** If a section could pass for a generic SaaS/Tailwind template example, it has failed — redesign it.
3. **Emotion before information.** First impression = curiosity + confidence, ahead of information hierarchy.
4. **Every section is its own hero section.** No stacked, generic content blocks — each section needs its own identity, rhythm, purpose.
5. **Obsess over spacing.** Premium feel comes from whitespace/rhythm more than decoration.
6. **Components must feel handcrafted.** No cookie-cutter cards/buttons/forms — everything intentionally designed for FrameBonds specifically.
7. **Motion must feel cinematic.** Smooth, subtle, story-driven — never flashy or distracting.
8. **Code stays production-ready.** Clean, modular, reusable, documented — no hacks or shortcuts, even under time pressure.
9. **Mobile is first-class, not adapted.** Design mobile interactions intentionally, not as a shrink of desktop.
10. **Continuously self-critique after each page/component:** Does this feel premium? Unique? On-brand? Would I be proud to show this publicly? What needs improvement before moving on?

**The one master instruction, if only one could be given:**
> "Do not stop at a correct implementation. Continue refining every layout, animation, interaction, spacing, typography, and visual detail until the website feels like something worthy of being featured on Awwwards—not because it is flashy, but because it demonstrates exceptional craftsmanship, storytelling, usability, performance, and attention to detail."

When in doubt between shipping something merely correct vs. spending more time refining visual/UX polish, the user has explicitly pre-authorized choosing refinement. (Note: this applies to visual/UX craft specifically — the Volume VIII simplicity/YAGNI principles for backend architecture still hold; don't over-engineer plumbing, do over-polish what visitors see and feel.)

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

## Content Strategy, Copywriting & Brand Voice (Volume VII)

### Brand Voice & Tone
- Personality: Calm, observant, professional, creative, reliable, curious, precise — never arrogant, desperate, or overly casual
- Core principle: Write to build confidence, not excitement (confidence lasts longer)
- Speak to the reader: "You/Your/Let's" over "We/Our/Us" — the client's business is the subject, not FrameBonds
- Active voice preferred; contractions acceptable (warmth without losing professionalism)
- Reading level: Grade 8–10 — sophisticated ideas, accessible language
- Preferred vocabulary: craft, thoughtful, purposeful, story, production, editorial, partnership, intentional
- Avoid overused words: innovative, disruptive, revolutionary, game-changing, world-class, best-in-class, elite, luxury/premium (if everything is "premium," nothing is)
- Never promise: guaranteed growth, viral content, instant success — only promise what can actually be kept

### Messaging Framework & Positioning
- Positioning: "Creative production partner" — NOT a freelancer, gig marketplace, traditional agency, or content mill
- Positioning ladder: FrameBonds → Creative Production Partner → Commercial Films & Branded Content → For Brands & Agencies → White-Label → Long-Term Partnership
- Three pillars (every message reinforces at least one): Craft, Partnership, Consistency
- Two audiences require different messaging:
  - **Brands** care about: recognition, trust, professional image, business growth
  - **Agencies** care about: capacity, reliability, scalability, deadlines, confidentiality, white-label execution
- Messaging hierarchy (never reverse): Problem → Understanding → Solution → Benefits → Evidence → CTA
- Sell outcomes, never equipment/features (e.g., "professional editing" → "content that reinforces your brand")
- Compete on reliability/craft/partnership — never compete on price or become "the cheapest option"

### Homepage Copy Architecture
- Narrative structure: Attention → Understanding → Credibility → Proof → Process → Trust → Action
- Hero headline states the outcome, not the service (avoid "Welcome to FrameBonds")
- Hero supporting copy: ~35–60 words, answers "How?"
- Section order fixed: Hero → Value Prop → Social Proof → Portfolio → Services → Process → Why FrameBonds → Testimonials → FAQ → Final CTA
- Each section must answer the question the previous section created (creates natural progression)
- Copy density: Headline → Paragraph → Visual → Whitespace → repeat (never walls of text)

### Service Page Copywriting
- Structure: Hero → Problem → Solution → Benefits → Portfolio → Process → Why FrameBonds → FAQ → CTA
- Benefits framework: Title → Explanation → Business Outcome (never just feature lists)
- Include "Who this is for" (self-qualification) and optionally "Who this isn't for" (increases trust)
- White-label messaging: "Your Production Team. Invisible to Your Clients." — frame as partnership/extension of team, never "outsourcing"
- Target length: 800–1,500 words; every paragraph must serve a purpose
- Objection-handling built into copy (revisions, deadlines, confidentiality, "what if I don't know what I need")

### Portfolio & Case Study Storytelling
- Core principle: "Don't showcase projects. Showcase decisions." — the thinking matters as much as the result
- Case study structure: Hero → Overview → Challenge → Creative Approach → Production → Final Film → Gallery → Results → Client Quote → Related Projects → CTA
- Storytelling formula: Challenge → Strategy → Production → Delivery → Reflection
- Project naming: editorial names (e.g., "Ethnix by Raymond"), never internal filenames ("Client Final V3")
- Visual balance: ~40% visuals, 60% narrative in case studies
- Agency/white-label case studies: anonymized when confidentiality requires ("National Marketing Agency — Confidential White-Label Production")
- Never invent metrics; if no quantitative data exists, focus on production outcomes instead

### About Page & Trust Building
- Core principle: "Build trust before asking for trust" — page is a credibility story, not a biography
- Structure: Hero → Our Purpose → Our Story → Philosophy → How We Work → Values (max 5) → Team → Why Clients Trust Us → CTA
- Purpose comes before history (why FrameBonds exists, not when it was founded)
- Story structure: Observation → Problem → Decision → Today (~250–400 words)
- Values demonstrated through actions/examples, never just listed as adjectives
- Team bios: who they are → what they specialize in → how they think creatively (short, human, not corporate)
- Founder present but never the hero — client remains the hero throughout

### Microcopy & Conversion Writing
- Every micro-interaction answers: What's happening? What should I do? What happens next?
- CTA style: action + outcome language ("Book a Discovery Call," "Send Inquiry") — never "Click Here," "Submit," "Learn More"
- Form philosophy: conversational, not administrative; labels always clear; placeholders show examples, not repeat labels
- Validation/errors: explain, never blame ("Please enter a valid email" not "Invalid Input"); no technical error codes shown to users
- Tone matrix by situation: Hero CTA=Confident, Form=Helpful, Error=Calm, Success=Reassuring, Loading=Neutral, Empty State=Encouraging, 404=Respectful, Contact=Welcoming
- 404 page: professional, never jokes ("This page couldn't be found" + Return Home / View Portfolio)

### SEO Content Strategy & Editorial Governance
- Philosophy: "Write for people. Structure for search engines." — best SEO strategy is an excellent content strategy
- Three pillars: Authority, Relevance, Consistency (not volume — fewer excellent pages > many average ones)
- Each page targets ONE primary search intent/keyword; never target everything on one page
- Recommended structure: industry landing pages (e.g., "Video Production for Restaurants"), dedicated White-Label SEO pages
- Blog exists to educate (not generate random traffic); categories: Production Insights, Behind the Scenes, Creative Strategy, Agency Growth
- Metadata required on every page: unique title (50–60 chars), meta description (140–160 chars), OG tags, canonical URL
- Image/video SEO: descriptive filenames + alt text (never "IMG_3847.jpg")
- AI-assisted writing allowed for research/drafting/editing — but human review mandatory before publishing; AI never replaces original thinking or real project experience
- Content governance: every new page defines purpose, audience, primary/secondary keywords, internal links, CTA, owner, review date

---

## Technical Architecture, Performance & Engineering Standards (Volume VIII)

### Tech Stack (Confirmed)
React → TypeScript → Vite → Tailwind CSS → Framer Motion → React Router → React Hook Form → Zod → TanStack Query (only if server state exists) → React Helmet Async
- Philosophy: "Build to evolve," not "build to launch" — every dependency must solve a real problem
- Avoid unnecessary frameworks/dependency bloat; before adding any library ask "does React already solve this?"

### File Structure
```
src/
  app/
  components/ (ui/ layout/ navigation/ sections/ forms/ feedback/ media/ portfolio/)
  pages/
  hooks/
  lib/
  services/
  constants/
  types/
  utils/
  assets/
  styles/
  animations/
  providers/
  routes/
  config/
```
- Component files: PascalCase (`Hero.tsx`, `PortfolioCard.tsx`) — never `hero.tsx` or `component1.tsx`
- Folders: lowercase
- One component per file; recommended 100–250 lines (a 900-line component is multiple components hiding in one file)
- Self-contained component folders: `Button/Button.tsx`, `Button.types.ts`, `Button.test.tsx`, `Button.stories.tsx`, `index.ts`

### Component Architecture (4-Layer Hierarchy)
Primitive (Button, Input, Card, Badge — no business logic) → UI Component (Video Card, Accordion, Portfolio Tile — layout only) → Feature Component (Portfolio Grid, Agency Section — knows the domain) → Page Section (Homepage Hero, Contact Section — composes full experiences)
- Composition over inheritance: `<Button variant="primary" size="lg" />` not a chain of extended button subclasses
- Recommended: Class Variance Authority (CVA) for variant-heavy components (Button, Card, Badge, Input states)
- Compound components for naturally grouped parts: `<Card><Card.Header/><Card.Body/><Card.Footer/></Card>`
- One icon library only (Lucide/Heroicons/Phosphor) — never mix icon sets
- Every component defines all states: Default/Hover/Focus/Active/Disabled/Loading/Error/Success
- Never hardcode colors/spacing/radius — always reference design tokens (`bg-surface` not `background: #000`)

### State Management (4-Level Hierarchy)
Local State (useState, default choice — modals/accordions/tabs/hover) → Shared UI State (Context — theme/motion prefs/navigation/toasts; avoid for frequently-changing values) → Server State (TanStack Query — portfolio/case studies/testimonials/CMS content; automatic caching/retry/dedup) → Persistent Global State (only if truly required — auth, user prefs)
- Core principle: "Keep state as close as possible to where it's used"; always ask "who owns this state?"
- Forms: React Hook Form + Zod (single source of truth for validation; never duplicate validation rules)
- Business logic layered: Component → Custom Hook → Service → API (never put business logic directly in UI components)
- Never store derived state (e.g., don't store "Full Name" if you have First/Last — calculate it)

### Performance Engineering
**Target metrics:** FCP < 1.8s | LCP < 2.5s | INP < 200ms | CLS < 0.1
- Optimization hierarchy: Architecture → Network → Rendering → Assets → JavaScript → Animations → Micro-optimizations
- Route-based code splitting (every major page = own bundle); React.lazy() for heavy components (VideoPlayer, PortfolioGallery, Lightbox, BookingFlow)
- Images: AVIF → WebP → JPEG/PNG fallback; responsive sizes (400/800/1200/1600/2400px); lazy-load below fold (except hero/LCP images); always define width/height to prevent layout shift
- Video: muted-only autoplay, pause off-viewport, poster image always ready before playback, compress aggressively, MP4(H.264) primary format
- Animation: GPU-friendly only (opacity/transform/scale/translate) — never animate width/height/top/left/margin
- Performance budgets: Hero image <300KB, Thumbnail <120KB, Large portfolio image <500KB
- Memoization (`React.memo`/`useMemo`/`useCallback`) only when profiling demonstrates measurable benefit — not by default

### Accessibility Engineering
**Baseline: WCAG 2.2 AA** (aim to exceed, not just meet)
- Semantic HTML always preferred over ARIA (`<header>`, `<nav>`, `<main>` before `<div>` + role attributes)
- One H1 per page, logical heading hierarchy, never skip levels
- Every interactive element keyboard-reachable; visible focus indicators never removed without replacement
- "Skip to Main Content" link required; native `<button>` always (never simulate with `<div>`/`<span>`)
- Links describe destination ("View Commercial Portfolio" not "Click Here" or "Read More")
- Forms: labels always associated with inputs (placeholder is never a label substitute); errors announced + focus moved to invalid field
- Color never sole indicator of meaning (pair with icon + text)
- Contrast minimums: 4.5:1 normal text, 3:1 large text; touch targets minimum 44×44px
- `prefers-reduced-motion` always respected — replace movement with fade/instant transition, never remove information
- Testing: automated (axe, Lighthouse) + mandatory manual (keyboard-only, screen reader, 200% zoom)

### Security, Deployment & Production Infrastructure
- Environment separation: Local → Development → Staging → Production (never test unfinished features directly in prod)
- All secrets in environment variables — never committed to Git, never logged
- HTTPS enforced everywhere; security headers required: CSP, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- CI/CD pipeline: Commit → PR → Code Review → CI (lint/typecheck/tests/build/a11y) → Preview Deployment → Approval → Production
- Every deployment must support immediate rollback; preview deployments for every PR
- Server-side validation always required (never trust client-side validation alone)
- Rate limiting on public endpoints (contact form, booking, uploads); spam protection via honeypot fields before CAPTCHA
- File uploads: validate MIME type + extension, rename files, never trust original filename
- Logging: log events, never secrets/passwords/API keys/personal data
- Backups tested (not just created); documented disaster recovery procedures

### Testing Strategy & QA
**Quality pyramid:** Static Analysis → Unit Tests → Integration Tests → Component Tests → Visual Regression → Accessibility Testing → E2E Tests → Manual QA → Production Monitoring
- Every PR auto-runs: lint → type-check → unit tests → build → accessibility audit
- Critical E2E flows (minimum coverage): Homepage, Portfolio browsing, Case study nav, Contact form, Booking flow, 404 handling, Responsive nav
- Every bug fix must add a corresponding regression test (same bug should never reappear)
- Cross-browser: Chrome, Firefox, Safari, Edge, mobile browsers
- Release checklist: all tests passing, no TS/lint errors, performance acceptable, a11y verified, responsive QA complete, rollback available

### Analytics, SEO Engineering & Observability
- Core principle: "Measure outcomes, not noise" — every tracked event must answer "what decision will this help us make?"
- Analytics isolated in a service layer (Component → Analytics Service → Provider → Platform) — never call analytics APIs directly from business logic
- Event naming: lowercase + underscores (`portfolio_viewed`, `discovery_call_booked`, `contact_form_submitted`)
- Primary conversion funnel: Homepage → Portfolio → Case Study → Services → Contact → Inquiry Submitted (measure every step, identify drop-off)
- Secondary funnel (agencies): Agency Partners → White-Label Page → Capability Deck → Discovery Call
- SEO: centralized metadata system (title/description/canonical/OG/Twitter/structured data) generated per page; XML sitemap auto-generated; structured data for Organization, Service, FAQ, Article, Video
- Business KPIs (not vanity metrics): qualified inquiries, discovery calls booked, agency partnership inquiries, organic traffic growth
- A/B testing requires explicit hypothesis + success metric + duration + decision — never test multiple major variables simultaneously
- Privacy-first: collect behavior, not identity; retain only data serving a legitimate purpose

---

## Implementation Roadmap, Future Scalability & Product Evolution (Volume IX — FINAL VOLUME)

### Implementation Roadmap & Execution Strategy
**10-Phase build order (foundations before features, systems before pages):**
1. Project Foundation (repo, TS, Tailwind, Framer Motion, routing, CI, env setup — no UI work begins before this is done)
2. Design System (every reusable component built + documented before any page-specific styling)
3. Core Layout (header, footer, page shell, responsive containers, error boundaries, SEO provider)
4. Core Pages — build order: **Homepage → Services → Portfolio → About → Agency Partners → Contact → Book Discovery Call → 404** (homepage first — it establishes typography/spacing/motion/content patterns as the reference for everything else)
5. Portfolio System (dedicated engineering attention — the strongest conversion asset)
6. Forms & Integrations (contact, booking, validation, email, uploads, analytics)
7. Optimization (performance, a11y, SEO, animation polish — quality not functionality)
8. Testing (unit, integration, a11y audit, cross-browser, regression, manual review)
9. Launch (production build, analytics/monitoring live, SEO verified, security headers, final QA)
10. Continuous Improvement (Observe → Measure → Improve → Ship → Repeat, ongoing post-launch)

- Per-page build sequence: Structure → Layout → Typography → Components → Responsive → Accessibility → Motion → SEO → Optimization → Testing (never animate unfinished layouts)
- Git workflow: `main` → `develop` → feature branches → PR → review → merge (never develop directly on main)
- "Definition of Done": Implemented → Responsive → Accessible → Tested → Reviewed → Documented → Performance verified → Merged (coding alone ≠ completion)
- 8 Development Milestones: Architecture → Design System → Homepage → Core Pages → Portfolio → Interactions → Production-Ready → Launch

### CMS, Admin Architecture & Content Operations
- **Headless CMS architecture**: Editor → CMS → Content API → React App → Rendered Website (CMS never dictates design/layout, only structured content)
- **Primary content models**: Homepage, Services, Portfolio Projects, Case Studies, Testimonials, Clients, Team Members, FAQs, Blog Articles, Agency Partners, Global Settings, Navigation, Footer, SEO Metadata, Media Library
- Content relationships replace duplication (Project → Related Service → Related Client → Related Case Study → Related Testimonials)
- Publishing workflow: Draft → Review → Approved → Published → Archived; role-based permissions (Administrator/Content Manager/Editor/Writer/Media Manager/Reviewer/Viewer)
- Version history + rollback capability required; autosave to prevent data loss
- Localization-ready from day one even though initially English-only
- SEO validation blocks publishing without: title, meta description, canonical URL, featured image, alt text

### Scalability, Future Features & Product Evolution
- **Evolution layers**: Portfolio Website → Lead Generation Platform → Agency Operations Platform → Client Portal → Automation Platform → Creative Management System → Digital Product Ecosystem
- Modular architecture: every major feature (Portfolio, Service, Blog, CMS, Booking, Client, Analytics, Media) independently developable/deployable/replaceable/testable
- Future business models to architect for (not build now): white-label production, subscription content, course platform, digital products/marketplace, creative community, SaaS tools
- CRM integration via abstraction layer (Application → CRM Service → CRM Provider) so switching CRM providers never requires business logic rewrites
- AI philosophy: "AI should assist humans, not replace creative judgment" — AI Service Layer with versioned/documented prompts, replaceable providers
- Future: client dashboards, multi-brand/white-label platform support, internationalization (currency/timezone/locale), payment integration, plugin architecture

### Operational Workflows & Business Systems
- Full client lifecycle: Lead → Qualified → Discovery → Proposal → Closed → Onboarding → Production → Delivery → Retention → Referral
- Sales pipeline: New Lead → Contacted → Meeting Scheduled → Discovery Complete → Proposal Sent → Negotiation → Won/Lost (every lead has exactly ONE owner)
- Production workflow: Planning → Shot List → Scheduling → Production → Media Backup → Editing → Quality Review → Client Review → Final Delivery
- Backup discipline: Primary storage → Secondary backup → Cloud backup (three copies minimum)
- Internal vs. client-visible notes always kept separate (internal discussion should never leak to clients)
- SOP library required for: Sales, Onboarding, Production, Editing, QA, Delivery — every recurring process documented, not memory-dependent

### Long-Term Governance & 10-Year Vision
- **10-year evolution**: Premium Portfolio → Creative Agency Platform → Production Operations System → Creative Technology Platform → Global Creative Ecosystem
- Review cadence: Component quality (monthly) → Architecture (quarterly) → Complete platform audit (annually)
- Dependency updates: security patches immediately, minor updates monthly, major upgrades quarterly/strategic
- Architecture Decision Records (ADRs) required for major decisions: Problem → Context → Decision → Alternatives → Consequences → Date
- Vendor independence prioritized (avoid lock-in to any single hosting/CMS/analytics/email provider)
- Platform must always remain: Simple, Fast, Elegant, Reliable, Accessible, Premium — no future feature may violate these regardless of business growth

### The FrameBonds Engineering Manifesto (Timeless Principles — Override Any Future Spec Conflict)
1. Build experiences, not pages (cinematic storytelling, not browsing)
2. Simplicity is luxury (restraint over excess — everything must justify its existence)
3. Motion must have meaning (communication, not decoration)
4. Performance is part of design (not an afterthought engineering task)
5. Accessibility is premium (craftsmanship, not compliance)
6. Components are products (predictable, documented, tested, future-proof)
7. Systems over shortcuts (temporary hacks become permanent architecture)
8. Content is the product (design supports content, never competes with it)
9. Consistency creates trust (predictable interactions → confidence → business)
10. Every pixel has a job (nothing exists purely for decoration)
11. Every millisecond matters (speed = perceived competence)
12. Build for humans first (before algorithms/SEO/AI/analytics)
13. Documentation is part of the product (knowledge must outlive any one developer)
14. Quality compounds (small consistent improvements > occasional big redesigns)
15. Launch is the beginning, not success (learning is success — the site never becomes "finished")

**Engineering Commandments (priority order when in doubt):** Clarity > cleverness | Maintainability > speed of implementation | Performance > unnecessary effects | Accessibility > visual shortcuts | Systems > one-off solutions | Reusability > duplication | Documentation > assumptions | Measurement > intuition | Consistency > novelty | Long-term value > short-term convenience

---

## Coding Conventions

### File Structure
See Technical Architecture section above — `src/{app,components,pages,hooks,lib,services,constants,types,utils,assets,styles,animations,providers,routes,config}`

### Naming Conventions
PascalCase for components (`PortfolioCard.tsx`), lowercase for folders, descriptive names that communicate responsibility (never `ComponentA`, `Box1`, `Thing`)

### Component Patterns
4-layer hierarchy (Primitive → UI → Feature → Page Section); composition over inheritance; CVA for variants; compound components where parts naturally group

### Folder Organization
Self-contained component folders (component + types + test + stories + index per component); services/hooks/utils separated by responsibility; centralized config/constants (never scattered magic values)

---

## Important Notes
- **THE FULL 9-VOLUME SPECIFICATION IS NOW COMPLETE** (72 → 78 chapters + Epilogue, confirmed complete by the user's own closing statement)
- All context and business details are in the PDFs provided by the user — **still not yet received**
- **Model upgrade requested when final website building begins — this moment has now arrived per the spec being complete; still need to have this conversation with the user before writing implementation code**
- Minimal, focused implementation — no over-engineering
- Tech stack locked: React + TypeScript + Vite + Tailwind + Framer Motion + React Router + React Hook Form + Zod + TanStack Query + React Helmet Async
- CMS approach confirmed: headless CMS (specific provider not yet named — still an open question)
- Build order confirmed: Foundation → Design System → Core Layout → Homepage first, then Services/Portfolio/About/Agency/Contact/Book Call/404 → Portfolio System → Forms → Optimization → Testing → Launch
- Next: receive the 2 PDFs, resolve the model-upgrade conversation, confirm concrete CMS/hosting provider choice, then begin Phase 1 (Project Foundation)
