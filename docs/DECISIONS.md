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

---

### Upcoming Decisions (Awaiting Volumes IV–IX)
- Page architecture and content flow (expected in Volume III—Chapter 8)
- Specific pages needed and their purpose
- Content strategy and messaging tone
- CMS and backend structure (if applicable)
- Animation and interaction specifics beyond motion tokens
- Form handling and data collection strategy
