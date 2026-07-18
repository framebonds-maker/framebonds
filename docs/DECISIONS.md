# Architecture & Design Decisions

This file logs all non-trivial decisions made during the project, including the reasoning behind them. This prevents silent re-litigation of choices and preserves context.

---

## Decision Template

### [Decision Title]
**Date:** YYYY-MM-DD  
**Context:** Why this decision needed to be made  
**Options Considered:** 
- Option A (pros/cons)
- Option B (pros/cons)

**Decision:** [Which option was chosen]  
**Reasoning:** [Why this was the best choice]  
**Trade-offs:** [What we're giving up or accepting]  

---

## Decisions Log

### Color System: Neutral-Focused with Restrained Accents
**Date:** 2026-07-18  
**Context:** FrameBonds is a visual production company; the website must showcase work, not compete with it  
**Decision:** Interface uses nearly monochromatic palette (deep charcoal background, off-white text, muted grays); accents used only for CTAs, active states, and interactive highlights  
**Reasoning:** Neutral interface acts as "gallery walls"; portfolio pieces provide strongest visual impact without interface distraction  
**Trade-offs:** Less colorful interface may feel subdued on first impression, but this sacrifices short-term visual excitement for long-term brand trust  

### Typography: Two-Font Maximum with Editorial Hierarchy
**Date:** 2026-07-18  
**Context:** Premium brands use restraint in typography; consistency is more sophisticated than variety  
**Decision:** Maximum 2 font families (one for headlines, one for body); 6-level hierarchy (Hero/Section/Subheading/Body/Caption/Metadata)  
**Reasoning:** Fewer fonts increase consistency; 6-level hierarchy prevents visual competition; editorial approach feels premium  
**Trade-offs:** Designers may feel limited; some layout challenges require careful planning, but result is more professional  

### Layout: Whitespace as Priority
**Date:** 2026-07-18  
**Context:** Luxury communicates through space; busy layouts appear cheap  
**Decision:** When in doubt, add more space; content containers have max-widths; no edge-to-edge stretching on large screens  
**Reasoning:** Whitespace is active design tool; generous spacing communicates confidence; readable line lengths improve user experience  
**Trade-offs:** Less content fits per page; may require longer scrolling; but perceived quality increases dramatically  

### Components: Reusable System Over One-Off Design
**Date:** 2026-07-18  
**Context:** Consistency determines perceived professionalism more than individual creativity  
**Decision:** Every component follows one unified design language; reuse before redesigning; consistency prioritized over novelty  
**Reasoning:** Visitors subconsciously recognize unified system; reusability enables scaling; consistency creates brand recognition  
**Trade-offs:** Less opportunity for creative flexibility; some components may feel repetitive, but brand identity strengthens  

### Portfolio Presentation: "Museum Rule"
**Date:** 2026-07-18  
**Context:** FrameBonds' work is its strongest asset; presentation must not diminish it  
**Decision:** Each portfolio project gets dedicated space; museum-quality presentation; spacing communicates value; work is visual hero  
**Reasoning:** Quality clients expect premium presentation; portfolio quality directly impacts client acquisition; each project deserves its moment  
**Trade-offs:** Fewer projects showcase per page; may require longer scrolling; but quality of presentation increases trust more than quantity  

### Media Direction: Cinematic Standard
**Date:** 2026-07-18  
**Context:** Every visual should communicate professionalism and intentionality  
**Decision:** Only showcase media that is sharp, properly exposed, professionally graded, stable; consistent color grading across portfolio  
**Reasoning:** One exceptional reel creates more trust than ten mediocre ones; cinematic standard directly reflects FrameBonds' brand promise  
**Trade-offs:** May require excluding some projects; higher curation standards; but portfolio remains consistently premium  

### Design Tokens: Systematic Over Random Values
**Date:** 2026-07-18  
**Context:** Inconsistent design values create perceived inconsistency; systems enable scaling  
**Decision:** Every recurring value exists as reusable token (colors, typography, spacing, shadows, motion, states); no hardcoded values  
**Reasoning:** Systematic approach ensures consistency; tokens enable future developers to understand system; scalability without redesign  
**Trade-offs:** Initial setup requires detailed planning; less spontaneity during implementation; but long-term maintainability increases  

### Homepage Section Order & Content Flow
**Date:** 2026-07-18  
**Context:** Homepage must guide visitors from awareness to action through psychological progression  
**Decision:** 9-section structure (Hero → Portfolio → About → Services → Process → Why → Results → CTA → Footer) following 6-stage visitor journey  
**Reasoning:** Sections ordered by psychological necessity (capture attention first → prove capability → remove doubt → build trust → enable action); each section has one clear purpose  
**Trade-offs:** Linear structure may feel prescriptive; some visitors might want to skip sections; but navigation allows flexibility while maintaining optimal conversion flow  

### Featured Portfolio: Quality Over Quantity (6–8 Projects)
**Date:** 2026-07-18  
**Context:** Portfolio is strongest proof of capability; weak projects undermine credibility  
**Decision:** Display only 6–8 of the strongest projects; curate ruthlessly; avoid showing quantity  
**Reasoning:** One exceptional portfolio > ten mediocre ones; smaller portfolio focuses attention on best work; reduces cognitive load; easier to maintain quality standards  
**Trade-offs:** May leave out legitimate work; requires tough editorial decisions; but perceived quality increases dramatically  

### Outcome-First Service Presentation
**Date:** 2026-07-18  
**Context:** Clients buy outcomes, not features; telling clients what FrameBonds does is less persuasive than showing them what they'll achieve  
**Decision:** Frame services as business outcomes rather than tasks (e.g., "Content That Holds Attention" not "Video Editing")  
**Reasoning:** Outcome framing answers "why should I care?" before "what does it cost?"; aligns with decision-making psychology; connects to business goals  
**Trade-offs:** Requires more thoughtful copy; less obvious service grouping; but increases perceived value and relevance  

### Process Section: Transparent, Not Overwhelming
**Date:** 2026-07-18  
**Context:** Visitors fear uncertainty; detailed process removes fear but can overcomplicate  
**Decision:** 5-step timeline (Discovery → Planning → Production → Post → Delivery) with clear explanations; not a detailed technical flowchart  
**Reasoning:** Simplicity builds confidence; 5 steps is memorable; each step focuses on client perspective, not internal operations; FAQ answers follow-up concerns  
**Trade-offs:** Some production detail is hidden; may not satisfy highly technical visitors; but mainstream clients appreciate simplicity  

### Three-Click Rule: Information Hierarchy
**Date:** 2026-07-18  
**Context:** Visitors scan before they read; every click should move them closer to decision  
**Decision:** Visitor should achieve three goals within three meaningful interactions: (1) Understand FrameBonds, (2) See quality of work, (3) Know how to contact  
**Reasoning:** Reduces cognitive load; respects visitor time; if more clicks are needed, someone failed to communicate clearly; natural stopping point if visitor doesn't feel ready  
**Trade-offs:** Removes detailed information from above-the-fold; requires ruthless editing; but improves conversion  

### Social Proof: Authenticity Over Volume
**Date:** 2026-07-18  
**Context:** Testimonials can strengthen trust or reduce credibility if fabricated  
**Decision:** Display authentic testimonials from real clients; avoid generic praise; show genuine before/after outcomes; never fabricate reviews  
**Reasoning:** One genuine testimonial = more trust than ten marketing-speak reviews; authenticity builds long-term credibility; fabrication destroys trust permanently  
**Trade-offs:** Early-stage FrameBonds cannot use this section heavily; cannot exaggerate results; slower credibility building; but foundation is honest  

### CTA Progressive Commitment Strategy
**Date:** 2026-07-18  
**Context:** Visitor trust builds gradually; asking for maximum commitment too early reduces conversion  
**Decision:** Vary CTA commitment levels: Early (low: "Explore Work") → Middle (medium: "See Our Process") → Final (high: "Book a Discovery Call")  
**Reasoning:** Respects visitor readiness; builds trust naturally; final CTA feels earned, not forced; multiple pathways accommodate different decision styles  
**Trade-offs:** Requires more CTAs (higher maintenance); some visitors may not reach final CTA; but those who do are warmer leads  

### White-Label as Strategic Service (Not Hidden)
**Date:** 2026-07-18  
**Context:** White-label production is strategic differentiator for reaching agency partners  
**Decision:** Present white-label as clear service category (not buried in fine print); explain simply; link to dedicated partnership page  
**Reasoning:** Agencies search specifically for white-label providers; clear positioning captures right clients; simplicity (Agency Brief → Production → Delivery) is self-explanatory  
**Trade-offs:** May confuse direct brand clients; requires separate landing page for agencies; but expands addressable market significantly  

### Hero Section: Showreel Over Copy
**Date:** 2026-07-18  
**Context:** Visual medium requires visual proof; words alone don't convince  
**Decision:** Hero background is cinematic montage showreel; minimal copy (one headline + 2–3 supporting lines); two CTAs only  
**Reasoning:** Video communicates premium production instantly; overcrowding with text defeats purpose; simplicity increases impact; showreel is portfolio  
**Trade-offs:** Showreel requires production; video optimization adds complexity; may not load on poor connections; but first impression is strongest  

### Footer: Reinforcement, Not Duplication
**Date:** 2026-07-18  
**Context:** Footer can either reinforce brand or create clutter  
**Decision:** Footer includes: logo, brand statement (one sentence), minimal navigation, social links, business info, legal pages; no excessive links or widgets  
**Reasoning:** Footer is final impression; should feel composed, not desperate; only meaningful destinations reduce navigation fatigue; heavy footer damages premium perception  
**Trade-offs:** Fewer navigation options; no newsletter or third-party embeds; but footer remains elegant  

### Portfolio Page: Curation First (3–4 Flagships)
**Date:** 2026-07-18  
**Context:** Portfolio Page sets visitor confidence that FrameBonds consistently delivers; weak projects undermine brand  
**Decision:** Feature only 3–4 flagship projects prominently; editorial grid with varying sizes; strongest work gets largest canvas  
**Reasoning:** Premium perception comes from consistency, not volume; smaller curated portfolio focuses attention on excellence; signals quality standards  
**Trade-offs:** May exclude legitimate work; requires tough editorial decisions; but perceived quality increases significantly  

### Case Study Page: Documentary Storytelling (Why → How → What → Changed)
**Date:** 2026-07-18  
**Context:** Case studies convert curiosity into confidence; must prove FrameBonds solves business problems (not just creates beautiful content)  
**Decision:** Structure every case study as narrative (Challenge → Strategy → Production → Results); documentary tone; measurable outcomes only  
**Reasoning:** Storytelling connects emotionally; measurable outcomes prove business impact; documentary tone is more credible than marketing speak  
**Trade-offs:** Requires finding authentic outcomes for every project; cannot fabricate metrics; but trust foundation is honest  

### Services Page: Pillar-Based, Outcome-Focused Architecture
**Date:** 2026-07-18  
**Context:** Services page educates + converts; standard feature lists don't drive business value  
**Decision:** Organize by 4 pillars (Brand Films, Commercial Content, Social Media, White-Label); present as outcomes (not tasks); industry-specific sections  
**Reasoning:** Pillar structure reduces cognitive load; outcome framing connects to client goals; industry fit helps visitors see themselves  
**Trade-offs:** Requires thoughtful grouping; cannot simply list all capabilities; but relevance and clarity increase conversion  

### About Page: Founder Visible But Not Dominant
**Date:** 2026-07-18  
**Context:** About page builds personal connection but must remain client-focused (not autobiography)  
**Decision:** Feature founder with professional imagery + philosophy statement; emphasize standards + principles (not biography); behind-the-scenes focus  
**Reasoning:** People trust people but don't care about origin stories; founder as symbol of standards is more powerful than biography; behind-the-scenes proves craftsmanship  
**Trade-offs:** Limits founder storytelling; may not satisfy curiosity about company history; but visitor trust increases through demonstrated values  

### Agency Partnership Page: Confidentiality as Primary Promise
**Date:** 2026-07-18  
**Context:** White-label agencies need reassurance that client relationships will be protected; without this, partnership will not happen  
**Decision:** Confidentiality Promise given dedicated section; workflow clearly shows client remains agency's; never competes for clients; explicit NDA policy  
**Reasoning:** Trust is prerequisite for agency partnerships; explicit confidentiality policies remove friction; clear workflow shows how relationships are protected  
**Trade-offs:** Limits FrameBonds' ability to market agency work; client invisibility; but partnership relationships are protected long-term  

### Contact Page: Calendly as Primary Action
**Date:** 2026-07-18  
**Context:** Visitors who reach contact page have already decided to engage; minimize friction between decision + action  
**Decision:** Calendly embedded directly (no redirect); three meeting types (Discovery, Agency Partnership, Existing Client); minimal inquiry form (backup option)  
**Reasoning:** Calendar integration is frictionless; meeting type self-selection improves prep; embedded experience keeps visitor on site  
**Trade-offs:** Requires Calendly integration; no email-only fallback for users uncomfortable with calendars; but conversion rate improves significantly  

### Navigation: Flat Architecture, No Dropdowns
**Date:** 2026-07-18  
**Context:** Flat navigation reduces complexity; dropdowns often hide important information or overwhelm users  
**Decision:** Primary navigation: Home, Portfolio, Services, Agency Partnership, About, Contact; no dropdowns; CTA (Book a Call) always visible  
**Reasoning:** Flat structure is easier to scan; CTA visibility increases discoverability; complex dropdowns reduce premium perception  
**Trade-offs:** Limited navigation options; may require more pages for detailed content; but simplicity wins  

### Utility Pages: Same Premium Standard (Including 404)
**Date:** 2026-07-18  
**Context:** Most agencies ignore utility pages; treating them as secondary signals inattention to detail  
**Decision:** 404, Thank You, Privacy, Terms all receive intentional design; no generic templates; 404 headline: "Looks Like This Story Hasn't Been Written Yet"  
**Reasoning:** Consistency builds trust; even error states should reinforce professionalism; visitors notice attention to detail  
**Trade-offs:** Requires designing more pages; cannot use generic templates; but brand consistency and perceived quality improve  

### Navigation: Flat Structure Over Dropdowns
**Date:** 2026-07-18  
**Context:** Flat navigation reduces complexity; dropdowns often hide content or overwhelm  
**Decision:** Primary nav only (Home, Portfolio, Services, Agency, About, Contact); no dropdown menus; CTA always visible  
**Reasoning:** Flat structure easier to scan; reduces decision fatigue; maintains premium minimalism  
**Trade-offs:** Limited navigation options per page; may need additional pages for detailed content; but simplicity increases usability  

### Buttons: Four-Level Hierarchy
**Date:** 2026-07-18  
**Context:** Not all actions deserve equal visual emphasis; clarity comes from hierarchy  
**Decision:** Level 1 (Primary, filled), Level 2 (Secondary, outlined), Level 3 (Text, no styling), Level 4 (Icon, utility)  
**Reasoning:** One dominant action per section; visitors never confused about what matters most; hierarchy prevents decision paralysis  
**Trade-offs:** More structured than flexible; some sections may struggle with hierarchy; but clarity always wins  

### Cards: Seven Reusable Types
**Date:** 2026-07-18  
**Context:** Consistency requires limiting card variations; unlimited customization creates chaos  
**Decision:** Define 7 card types (Portfolio, Service, Testimonial, Case Study, Process, Statistic, Feature); reuse only these  
**Reasoning:** Visitors instantly recognize interactions; development faster; maintenance easier; brand consistency automatic  
**Trade-offs:** Less creative flexibility; some sections may feel constrained; but unified system is worth the trade  

### Forms: Labels Always Visible
**Date:** 2026-07-18  
**Context:** Placeholder-only labels confuse users and harm accessibility  
**Decision:** Labels always visible (never hide inside placeholders); minimal required fields (only genuinely necessary)  
**Reasoning:** Improves accessibility and usability simultaneously; users understand what each field is for; form completion rates increase  
**Trade-offs:** More vertical space required; cannot use creative floating label animations; but clarity matters more than aesthetics  

### Modals: Focus Trapped + Returned
**Date:** 2026-07-18  
**Context:** Keyboard users need protection; focus should never become lost  
**Decision:** Focus trapped inside modal while open; returned to triggering element on dismiss; Escape always closes  
**Reasoning:** Keyboard accessibility improved; user orientation preserved; predictable behavior builds trust  
**Trade-offs:** Requires focus-management JavaScript; complex modals need careful implementation; but accessibility is non-negotiable  

### Social Proof: Authentic Only (No Fabrication)
**Date:** 2026-07-18  
**Context:** Fake testimonials destroy credibility if discovered; trust built on honesty  
**Decision:** Only display authentic testimonials; facts-based statistics only; never invent reviews or metrics  
**Reasoning:** Long-term trust more valuable than short-term impressive numbers; early-stage FrameBonds can start small  
**Trade-offs:** Social proof section may be minimal initially; cannot compete with exaggerated competitors; but foundation is honest  

### FAQ: Multiple Expansion Default
**Date:** 2026-07-18  
**Context:** Users often compare FAQ answers; forcing one-open-at-a-time creates friction  
**Decision:** Allow multiple FAQ items to remain open simultaneously (not one-open-at-a-time)  
**Reasoning:** Users compare information naturally; one-open feels restrictive; no space constraint on FrameBonds pages  
**Trade-offs:** Slightly longer FAQ sections; requires more careful writing to avoid redundancy; but user experience improves  

### CTA Copywriting: Describe Outcomes
**Date:** 2026-07-18  
**Context:** Generic button labels (Submit, Continue, Learn More) confuse users about what happens next  
**Decision:** Every button describes the outcome (Book a Discovery Call, View Portfolio, Become a Production Partner)  
**Reasoning:** Users know exactly what to expect; reduces hesitation; increases conversion  
**Trade-offs:** Longer button labels; some creative brevity sacrificed; but clarity dramatically improves trust  

### System Feedback: Skeleton Screens First
**Date:** 2026-07-18  
**Context:** Users perceive skeletons as faster than spinners (even if identical wait time)  
**Decision:** Use skeleton screens wherever possible (showing structure before content); spinners only when structure unknown  
**Reasoning:** Perceived performance improves; users see progress; anxiety reduces; premium experience feels faster  
**Trade-offs:** Requires matching layout in skeleton form; additional CSS for shimmer animation; but perceived quality improves significantly  

### Motion: Restraint-First Density (70/20/10)
**Date:** 2026-07-18  
**Context:** Most websites over-animate; FrameBonds must differentiate through restraint, matching brand philosophy of "less, but better"  
**Decision:** Motion density target: 70% static content, 20% micro-interactions, 10% cinematic reveals; animations play once per session (not on every scroll re-entry)  
**Reasoning:** Silence creates impact; overuse of animation cheapens premium feel; matches [[framebonds-laws-of-taste]] restraint principles from Volume I  
**Trade-offs:** Less "wow factor" per section; requires discipline to not add animation everywhere; but overall experience feels more premium and less fatiguing  

### Motion Tokens: Centralized System (Never Hardcode)
**Date:** 2026-07-18  
**Context:** Inconsistent animation timing across components makes a site feel unpolished even if each animation individually looks fine  
**Decision:** 9 duration tokens (80ms–1200ms) + 4 easing curves define every animation; identical interactions (dropdown/accordion/FAQ) must share identical timing  
**Reasoning:** Consistency is imperceptible individually but felt collectively; centralized tokens make future maintenance and design changes trivial  
**Trade-offs:** Requires upfront token system setup before any component work; less flexibility for one-off "special" animations; but long-term consistency wins  

### Page Transitions: Scene-Based Navigation (Not Page Reloads)
**Date:** 2026-07-18  
**Context:** Traditional page loads feel disconnected; FrameBonds wants the site to feel like one continuous cinematic experience  
**Decision:** Every route change treated as a scene transition (700–800ms total); scroll position preserved on back navigation; hero never replays on repeat visits  
**Reasoning:** Reinforces cinematic brand identity from Volume I; respects returning visitors' time (no forced re-watching intro animations)  
**Trade-offs:** Requires more complex routing/transition engineering (likely Next.js App Router + Framer Motion or similar); slower to build than plain page loads; but reinforces core brand differentiation  

### Signature Motion Patterns: 10 Reusable Cinematic Signatures
**Date:** 2026-07-18  
**Context:** Premium visual design (color/typography) can be copied; a consistent, restrained motion language is harder to replicate and becomes a brand asset  
**Decision:** Define exactly 10 signature motion patterns (Cinematic Hero Reveal, Editorial Mask Reveal, Layered Depth Motion, etc.) and reuse them everywhere; no page gets one-off custom animations  
**Reasoning:** Motion becomes recognizable brand identity even without logo/color; discipline of "only these 10 patterns" prevents motion sprawl as the site grows  
**Trade-offs:** Constrains creative flexibility per page; requires all future work (including client portals/decks per Volume VI) to reuse this same motion vocabulary; but identity payoff is significant  

### Video: Muted Autoplay + Poster-First (Never Forced Fullscreen)
**Date:** 2026-07-18  
**Context:** FrameBonds' product IS video; the player must disappear so the work is the star, and must respect browser autoplay policies  
**Decision:** Hero/portfolio videos autoplay muted with instant poster image; hover preview only on desktop (~250ms delay, max 5–8s loop); mobile uses tap-to-play; fullscreen only on explicit user request  
**Reasoning:** Matches "video is the product, not decoration" principle; avoids jarring forced-fullscreen UX; respects mobile bandwidth/battery  
**Trade-offs:** Slightly less "impressive" than autoplay-with-sound or forced fullscreen; but far more professional, accessible, and performant  

### Motion Governance: Newest Action Always Wins (No Animation Queuing)
**Date:** 2026-07-18  
**Context:** Real users interrupt animations constantly (rapid clicks, fast scrolling, quick navigation); queued animations feel laggy and unresponsive  
**Decision:** Any new user action immediately interrupts and overrides in-progress animation; never queue multiple UI animations; every animation must be safely interruptible and resolve to a valid complete state  
**Reasoning:** Responsiveness > choreography; a website that feels laggy under real usage undermines the entire premium motion investment  
**Trade-offs:** More complex animation state management (must handle interruption at every step); but this is a hard requirement for the site to feel truly premium under real-world use, not just in demos  

---

### Upcoming Decisions (Awaiting Volumes VII–IX)
- Page architecture and content flow (expected in Volume III—Chapter 8)
- Specific pages needed and their purpose
- Content strategy and messaging tone
- CMS and backend structure (if applicable)
- Animation and interaction specifics beyond motion tokens
- Form handling and data collection strategy
