## Plan: AdmanCorp Site MVP Spec

Define a realistic, weekend-shippable product spec for a public, static-first freelance business website for Adman Inc. / Adman Corp. The recommended approach is a restrained 2-page MVP: a homepage that does the selling and a contact page that removes friction, built later as a static Astro site on Cloudflare Pages with room to grow into work samples and writing.

**Steps**
1. Lock positioning around infrastructure as code, CI/CD, and infrastructure automation for small to medium technical teams. Explicitly avoid narrow Kubernetes-audit positioning, hype language, and oversized consultancy framing.
2. Define the MVP information architecture as Home plus Contact. Keep portfolio proof lightweight in v1 through selected project summaries and public GitHub references on the homepage instead of building full case-study infrastructure.
3. Structure the homepage to answer the core buyer questions in sequence: who this is for, what problems are solved, what services are offered, why trust this business, and how to make contact.
4. Structure the contact page to reduce friction: direct email, optional lightweight form, expected engagement fit, response expectations, and links to GitHub/LinkedIn.
5. Establish copy strategy before design: concise headline/subheadline options, pragmatic service framing, direct CTA wording, and an explicit list of words and patterns to avoid.
6. Define a restrained visual system: clean layout, strong spacing, neutral palette, subtle accent color, sober typography, minimal motion, and project cards that feel technical rather than agency-polished.
7. Recommend an implementation stack optimized for low cost and public maintenance: Astro, static generation, content collections for future work/writing, custom CSS with tokens, Cloudflare Pages deployment, and Cloudflare Web Analytics.
8. Define verification criteria for implementation later: fast page load, mobile-first layout quality, clear contact path, complete metadata, valid previews on pull requests, and easy content editing without codebase churn.

**Relevant files**
- /home/yadman/Github/AdmanCorp.com/README.md — currently minimal; later update with local setup, deployment notes, and site purpose.
- /home/yadman/Github/AdmanCorp.com/src/pages/index.astro — planned homepage route for positioning, services, trust signals, and CTA flow.
- /home/yadman/Github/AdmanCorp.com/src/pages/contact.astro — planned low-friction contact route.
- /home/yadman/Github/AdmanCorp.com/src/content/projects — planned future content location for project summaries and case studies.
- /home/yadman/Github/AdmanCorp.com/src/content/writing — planned future content location for technical writing.
- /home/yadman/Github/AdmanCorp.com/src/styles — planned shared design tokens and global styling.

**Verification**
1. Confirm the homepage can be understood in under 15 seconds: audience, services, and CTA should all be visible above the fold or immediately below.
2. Confirm the site can ship as fully static output to Cloudflare Pages with no required backend.
3. Confirm the copy contains no fake testimonials, fake client logos, inflated team language, or unsupported claims.
4. Confirm the design remains credible on desktop and mobile, with restrained motion and accessible contrast.
5. Confirm the repo structure leaves a straightforward path for future /work and /writing sections without re-platforming.

**Decisions**
- Included scope: small, credible freelance business website for Montreal-area DevOps/infrastructure consulting.
- Included scope: infrastructure as code, CI/CD, and automation positioning.
- Included scope: public GitHub repo and simple Cloudflare Pages deployment.
- Excluded scope: custom CMS, full case-study system, blog implementation, heavy animations, lead funnels, or enterprise-style service matrix.
- Recommended primary CTA: direct contact by email or contact form with simple response expectation.
- Recommended secondary CTA: view selected work or public GitHub.

**Further Considerations**
1. Contact path recommendation: start with direct email plus optional simple form provider only if spam becomes a problem.
2. Naming recommendation: use one primary business name consistently in the UI, with the alternate legal variation mentioned only where necessary.
3. Portfolio recommendation: start with concise project summaries tied to public repos or sanitized outcomes; defer full case studies until there is real client material to publish.

## 1. Product spec

Site purpose
- Establish Adman Inc. / Adman Corp. as a credible freelance business for infrastructure as code, CI/CD, and infrastructure automation.
- Help technical companies quickly understand what problems are solved, whether the service is relevant, and how to make contact.
- Create a professional public artifact that supports credibility and doubles as a portfolio foundation.

Audience
- Small startups with fast-growing infrastructure and weak internal platform maturity.
- SMB technical teams dealing with manual deployments, inconsistent environments, and fragile delivery workflows.
- Engineering teams that need more repeatable infrastructure and cleaner automation without hiring a full platform team immediately.

Positioning
- Practical freelance infrastructure engineering for teams that need cleaner delivery and more repeatable operations.
- Emphasize implementation and system improvement rather than high-level advisory language.
- Frame work as scoped, technical, and outcome-oriented: reducing manual steps, improving reliability, and making environments easier to manage.

Information architecture
- Home: primary sales and credibility page.
- Contact: direct inquiry path and engagement-fit details.
- Future-ready but not in MVP: Work and Writing.

Page list
- / — homepage
- /contact — contact page

Homepage sections
- Hero: clear statement of who you help and what you do; one primary CTA and one secondary CTA.
- Problems: 3 to 5 concrete operational pains such as manual deploys, inconsistent environments, brittle pipelines, or hard-to-reproduce infrastructure.
- Services: 3 concise service cards for infrastructure as code, CI/CD improvement, and infrastructure automation.
- Selected work: 2 to 4 lightweight project summaries with links to public GitHub repositories or concise technical examples.
- How I work: short explanation of engagement style, scope, and delivery approach.
- Trust signals: incorporated business, Montreal area, public GitHub, clear technical focus, and direct scope language.
- Closing CTA: invitation to discuss current infrastructure or delivery bottlenecks.
- Footer: email, GitHub, LinkedIn, business name, optional location note.

Contact page sections
- Intro: short sentence about the kinds of projects that are a good fit.
- Contact methods: primary email link, optional form, GitHub, LinkedIn.
- Engagement fit: examples of suitable project types and what to include in a first message.
- Practical notes: Montreal area / remote-friendly, expected response window, and preferred engagement format.

Primary CTA and secondary CTA
- Primary CTA: Start a conversation
- Secondary CTA: View selected work

Trust signals
- Incorporated business name presented clearly.
- Montreal-area location for regional credibility.
- Public GitHub presence.
- Selected technical projects or repository links.
- Specific service scope instead of generic full-service claims.
- Clear, sober language that signals competence without overselling.

Constraints
- Static-first architecture.
- Low-cost hosting on Cloudflare Pages.
- Public GitHub repository.
- Minimal page count.
- Weekend-build scope.
- Easy future extension into work samples and writing.

Non-goals
- No fake testimonials, logos, metrics, or case studies.
- No startup-SaaS visual tropes or founder-brand persona site.
- No large agency positioning.
- No custom CMS in v1.
- No blog or complex lead capture flow in v1.

## 2. Copy strategy

Homepage headline options
- Infrastructure, CI/CD, and automation for teams that need fewer manual steps.
- Practical infrastructure engineering for growing technical teams.
- Clean up delivery pipelines and infrastructure without turning it into a platform initiative.
- Repeatable infrastructure and CI/CD for teams outgrowing ad hoc ops.
- Build more reliable delivery workflows with simpler infrastructure automation.

Subheadline options
- I help small and mid-sized technical teams make infrastructure and deployments more repeatable through infrastructure as code, CI/CD improvements, and targeted automation.
- Adman Inc. helps companies reduce manual infrastructure work, improve deployment reliability, and build cleaner operational foundations.
- For teams dealing with fragile pipelines, inconsistent environments, or too much manual deployment work, I deliver pragmatic infrastructure improvements that are easy to maintain.

Service framing
- Infrastructure as Code: bring environments under version control, improve reproducibility, and reduce configuration drift.
- CI/CD Improvement: make build and deployment workflows more dependable, easier to understand, and less manual.
- Infrastructure Automation: remove repetitive operational work and standardize routine infrastructure tasks.
- Optional supporting language: short scoped engagements, technical cleanup, delivery enablement, platform foundations.

CTA wording
- Start a conversation
- Discuss your infrastructure
- View selected work
- See public GitHub
- Contact Adman Inc.

Tone guidance
- Use plain technical language over polished marketing language.
- Prefer concrete operational outcomes over abstract business transformation language.
- Keep sentences short and direct.
- Sound like an experienced engineer explaining where they can help, not a consultancy pitch deck.
- Avoid making claims that require proof you do not yet plan to publish.

Words and phrases to avoid
- world-class
- cutting-edge
- full-service
- end-to-end digital transformation
- accelerate innovation
- cloud-native excellence
- DevOps guru / ninja / rockstar
- best-in-class
- frictionless scale
- your trusted partner in transformation
- bespoke solutions for every challenge

## 3. Visual and UX direction

Visual style
- Clean, modern, restrained, and technical.
- More like a well-designed engineering consultancy page than a marketing site.
- Use deliberate spacing, clear hierarchy, and a small number of strong visual patterns.

Layout principles
- Keep the homepage linear and easy to scan.
- Use a narrow content measure for copy-heavy sections and a wider grid for service cards and selected work.
- Let whitespace do most of the work instead of decoration.
- Keep each section focused on one job.

Navigation
- Simple top nav with Home, Contact, GitHub.
- Keep the CTA visible in the header on desktop.
- On mobile, collapse to a minimal menu without adding extra routes.

Responsiveness
- Mobile-first layout.
- Service cards and project summaries should stack cleanly on small screens.
- Hero content should remain readable without oversized text or multi-line CTA clutter.

Typography direction
- Use a sober sans-serif for body and headings, such as Public Sans, Source Sans 3, or IBM Plex Sans.
- Pair with a restrained monospace for labels, metadata, or small technical accents, such as IBM Plex Mono.
- Avoid overly geometric startup fonts and avoid default system-stack feel.

Color direction
- Base palette: off-white or very light gray backgrounds with charcoal/slate text.
- Accent palette: muted blue, steel blue, or subdued teal.
- Use color sparingly for links, CTAs, section dividers, and focus states.
- Avoid loud gradients, neon accents, or high-saturation brand colors.

Portfolio/project presentation style
- Present projects as concise technical summaries, not glossy case studies.
- Each card should include project name, short problem/solution framing, key technologies, and a link to code or more detail.
- Prefer technical clarity over visual flourish.

What to avoid
- Fake social proof blocks.
- Generic illustration libraries and SaaS-style dashboard mockups.
- Over-animated hero sections.
- Too many cards, badges, or icon grids.
- Personal-brand lifestyle photography.
- Copy-heavy About sections in the MVP.

## 4. Technical implementation brief

Framework recommendation
- Astro is the strongest fit.
- Reasons: static-first by default, excellent Cloudflare Pages support, very low runtime complexity, simple content routing, and easy future expansion into work and writing.

Styling approach
- Use custom CSS with design tokens and Astro component-scoped styles.
- Keep one global token file for colors, typography, spacing, and breakpoints.
- Avoid introducing a large design system or utility sprawl in v1.

Content structure
- Keep homepage and contact page as Astro pages.
- Store selected work entries in a structured content collection so they can be rendered on the homepage now and expanded into /work later.
- Leave a writing collection scaffold in place only if it does not add much complexity; otherwise add it in v2.

SEO basics
- Unique page title and meta description per page.
- Proper H1 hierarchy and semantic sections.
- Open Graph and Twitter preview metadata.
- Sitemap and robots.txt.
- Canonical URLs.
- Basic Organization or ProfessionalService structured data if implementation remains simple.

Analytics recommendation
- Cloudflare Web Analytics is the default recommendation.
- Reason: free, privacy-friendly, low operational overhead, and aligned with Cloudflare Pages.

Deployment workflow
- GitHub as source of truth.
- Cloudflare Pages connected to the repository.
- Preview deployments on pull requests.
- Production deployment from main.
- Keep CI simple: build check on pull requests, Pages deploy on merge.

Repo structure suggestion
- src/pages for routes.
- src/components for reusable layout sections.
- src/content/projects for selected work entries.
- public for static assets.
- src/styles for tokens and global styles.
- README updated with local setup, deploy notes, and content editing guidance.

Recommended MVP version
- 2 pages: Home and Contact.
- Homepage includes hero, problems, services, selected work, approach, trust signals, and final CTA.
- Contact page includes direct email, optional lightweight form, GitHub, LinkedIn, and engagement-fit notes.
- Selected work limited to 2 to 4 concise entries.
- No blog, no case-study template system, no CMS.

Version 2 later
- Dedicated Work page with fuller project writeups.
- Writing or Notes section for technical articles.
- Basic case-study template for sanitized client work.
- Availability/status note.
- Lightweight lead form with spam protection if direct email becomes noisy.

Positioning directions ranked
1. Infrastructure as Code + CI/CD + Automation Partner
- Strongest because it matches your likely freelance reality, reads as broad enough to be commercially useful, and remains specific enough to feel credible.
2. Delivery Reliability and Platform Foundations
- Good option if you want slightly more strategic framing, but it risks sounding more abstract unless supported by concrete examples.
3. Kubernetes and Infrastructure Assessments
- Weakest for this site because it narrows your market too early and pushes you toward audit-style positioning you explicitly do not want.

## 5. Recommended MVP messaging direction

Recommended positioning to implement
- Use Infrastructure as Code + CI/CD + Automation Partner as the default v1 direction.
- Present the business as a focused freelance engineering practice, not a broad consultancy.
- Keep Kubernetes as supporting technical credibility, not the headline offer.

Recommended homepage message stack
- Headline: Practical infrastructure engineering for growing technical teams.
- Subheadline: I help small and mid-sized technical teams make infrastructure and deployments more repeatable through infrastructure as code, CI/CD improvements, and targeted automation.
- Primary CTA: Start a conversation.
- Secondary CTA: View selected work.

Message priorities in order
1. Who this is for: technical teams with messy infrastructure or delivery workflows.
2. What is being improved: repeatability, reliability, and reduction of manual work.
3. How it is done: infrastructure as code, CI/CD improvement, and automation.
4. Why trust this business: clear scope, public technical work, and sober presentation.
5. What to do next: send an email or use the contact page.

## 6. Page-by-page wireframe and content outline

### Home page

Section 1: Header
- Purpose: orient the visitor quickly and make the contact path obvious.
- Content: wordmark or simple text logo, Home, Contact, GitHub, primary CTA button.
- Notes: keep the header compact and fixed only if it does not add visual noise.

Section 2: Hero
- Purpose: establish audience, service category, and tone within a few seconds.
- Content:
	- Eyebrow: Montreal, QC or Infrastructure engineering for technical teams.
	- H1: Practical infrastructure engineering for growing technical teams.
	- Supporting paragraph: one short paragraph explaining infrastructure as code, CI/CD improvements, and targeted automation.
	- Primary CTA: Start a conversation.
	- Secondary CTA: View selected work.
- Notes: avoid hero illustrations; use layout, type, and spacing for authority.

Section 3: Problems I help solve
- Purpose: let the right visitor self-identify immediately.
- Content:
	- Short intro sentence.
	- 4 problem statements, for example:
		- Deployments rely on manual steps and tribal knowledge.
		- Infrastructure changes are inconsistent across environments.
		- CI/CD pipelines are brittle, slow, or difficult to maintain.
		- Routine operational work has not yet been automated.
- Notes: keep each item concrete and recognizable.

Section 4: Services
- Purpose: show clear service boundaries without looking like a large agency.
- Content:
	- Card 1: Infrastructure as Code.
	- Card 2: CI/CD Improvement.
	- Card 3: Infrastructure Automation.
	- Each card includes: one-sentence description, example deliverables, and expected practical outcome.
- Notes: each card should read like scoped engineering work, not abstract consulting.

Section 5: Selected work
- Purpose: provide proof without inventing client material.
- Content:
	- Section intro explaining that examples are selected public technical work or representative infrastructure projects.
	- 2 to 4 project cards.
	- Each card includes: project name, short context, what was built or improved, stack/tools, GitHub link.
- Notes: if real client work cannot be shown, use public repos, labs, or internal tooling examples described honestly.

Section 6: How I work
- Purpose: reduce uncertainty about engagement style.
- Content:
	- Short intro paragraph.
	- 3 simple steps:
		1. Review the current setup and identify the most useful improvement.
		2. Scope a focused piece of work with clear deliverables.
		3. Implement changes that are documented, maintainable, and easy for the team to own.
- Notes: keep this operational, not process-heavy.

Section 7: Trust signals
- Purpose: add credibility without overselling.
- Content:
	- Incorporated business.
	- Based in the Montreal area.
	- Public GitHub repository and visible technical work.
	- Clear technical scope in infrastructure, CI/CD, and automation.
- Notes: this can be a compact section or integrated near the footer.

Section 8: Closing CTA
- Purpose: capture intent after the visitor has scanned the page.
- Content:
	- Short heading: Have an infrastructure or delivery bottleneck?
	- One sentence inviting a short initial discussion.
	- Primary CTA: Start a conversation.
	- Optional text link: Or email directly.
- Notes: keep friction low and tone neutral.

Section 9: Footer
- Purpose: provide final contact and identity details.
- Content: business name, email, GitHub, LinkedIn, Montreal area, copyright.
- Notes: minimal and factual.

### Contact page

Section 1: Page intro
- Purpose: reassure visitors that the contact path is simple and appropriate for small engagements.
- Content:
	- H1: Contact Adman Inc.
	- Short paragraph explaining the kinds of infrastructure or delivery problems that are a good fit.

Section 2: Primary contact method
- Purpose: make it obvious how to reach you.
- Content:
	- Direct email link.
	- Optional note about preferred first-message content: team size, current pain point, stack, and desired outcome.
- Notes: email-first is the simplest credible v1 choice.

Section 3: Optional lightweight form
- Purpose: give a second path without requiring backend work.
- Content:
	- Name
	- Work email
	- Company
	- Brief project summary
- Notes: only include this in v1 if the implementation remains simple; otherwise keep the page email-only.

Section 4: Engagement fit
- Purpose: qualify inquiries without sounding exclusionary.
- Content:
	- Good fit examples:
		- Cleaning up infrastructure as code.
		- Improving CI/CD pipelines.
		- Automating repetitive infrastructure tasks.
		- Stabilizing delivery workflows before growth.
	- Not the focus in v1:
		- Large multi-team transformation programs.
		- Fully managed 24/7 operations.
- Notes: useful for setting expectations and protecting positioning.

Section 5: Practical details
- Purpose: answer simple operational questions before they are asked.
- Content:
	- Montreal area.
	- Remote-friendly.
	- Expected response window, for example within 2 business days.
	- Links to GitHub and LinkedIn.

## 7. Build-order guidance

Implementation sequence
1. Finalize one headline, one subheadline, and one CTA set.
2. Draft the exact homepage copy section by section.
3. Draft the exact contact page copy.
4. Collect or write 2 to 4 honest project summaries.
5. Build the site shell and design tokens.
6. Implement Home and Contact.
7. Add metadata, analytics, and deployment configuration.

Definition of done for MVP content
- The homepage explains audience, services, and contact path without scrolling far.
- Every claim on the site can be supported by real experience or public work.
- The site reads like a focused engineering practice rather than a large consultancy.
- The contact path is obvious on both desktop and mobile.
- The site is ready to publish even before a dedicated Work page exists.

## 8. Draft homepage copy

Use this as the default MVP homepage copy.

### Header

- Brand: Adman Inc.
- Navigation: Home, Contact, GitHub
- CTA: Start a conversation

### Hero

Eyebrow
- Montreal, QC

Headline
- Practical infrastructure engineering for growing technical teams

Supporting paragraph
- I help small and mid-sized technical teams make infrastructure and deployments more repeatable through infrastructure as code, CI/CD improvements, and targeted automation.

Primary CTA
- Start a conversation

Secondary CTA
- View selected work

### Problems section

Section heading
- Where I can help

Intro sentence
- This is a good fit for teams that are shipping product, but still relying on too many manual infrastructure and delivery steps.

Problem items
- Deployments rely on manual steps and team memory.
- Infrastructure changes are inconsistent between environments.
- CI/CD pipelines are fragile, slow, or difficult to maintain.
- Repetitive operational work has not yet been automated.

### Services section

Section heading
- Services

Intro sentence
- I focus on a small number of practical infrastructure services that help teams reduce manual work and build more repeatable systems.

Service 1 title
- Infrastructure as Code

Service 1 copy
- Bring infrastructure under version control, reduce configuration drift, and make environments easier to reproduce and maintain.

Service 1 example deliverables
- Terraform or other IaC cleanup
- Environment standardization
- Repository structure and documentation improvements

Service 2 title
- CI/CD Improvement

Service 2 copy
- Improve build and deployment workflows so releases are more consistent, easier to understand, and less dependent on manual intervention.

Service 2 example deliverables
- Pipeline cleanup and simplification
- Deployment workflow improvements
- Build reliability and delivery guardrails

Service 3 title
- Infrastructure Automation

Service 3 copy
- Remove repetitive operational work by automating routine infrastructure tasks and standardizing common workflows.

Service 3 example deliverables
- Environment bootstrap automation
- Operational scripts and task runners
- Repeatable deployment and maintenance workflows

### Selected work section

Section heading
- Selected work

Intro sentence
- A few examples of public technical work and representative infrastructure projects. Keep this section factual and link directly to code where possible.

Project card template
- Project name: [Project name]
- Summary: [One or two sentences describing the problem, what was built, and the practical result.]
- Stack: [Terraform, Kubernetes, GitHub Actions, Ansible, Cloudflare, etc.]
- Link label: View project

Notes for this section
- Do not fabricate client names, outcomes, or metrics.
- If needed, use public repos, labs, or internal tooling examples described in neutral terms.
- Two strong entries are better than four weak ones.

### How I work section

Section heading
- How I work

Intro sentence
- I prefer focused engagements with clear deliverables, practical implementation, and documentation your team can maintain after handoff.

Step 1
- Review the current setup and identify the most useful improvement.

Step 2
- Define a focused scope with clear technical deliverables.

Step 3
- Implement changes that are documented, maintainable, and easy for your team to own.

### Trust signals section

Section heading
- Why Adman Inc.

Trust items
- Incorporated business
- Based in the Montreal area
- Public GitHub presence
- Clear focus on infrastructure as code, CI/CD, and automation

Optional supporting sentence
- The goal is straightforward: make infrastructure and delivery workflows cleaner, more reliable, and easier to maintain.

### Closing CTA section

Heading
- Have an infrastructure or delivery bottleneck?

Supporting sentence
- If your team is dealing with manual deploys, inconsistent environments, or fragile automation, I can help scope a focused improvement.

Primary CTA
- Start a conversation

Secondary text link
- Or email directly at [your email]

### Footer

- Adman Inc.
- Montreal, QC
- [your email]
- GitHub
- LinkedIn

## 9. Draft contact page copy

Use this as the default MVP contact page copy.

### Page intro

Headline
- Contact Adman Inc.

Intro paragraph
- If your team needs help cleaning up infrastructure as code, improving CI/CD, or reducing manual infrastructure work, send a short note. A concise description of the current setup and the main pain point is enough to start.

### Primary contact block

Section heading
- Get in touch

Primary copy
- The simplest way to reach me is by email.

Email line
- [your email]

Helpful prompt
- In your message, it helps to include your team size, current stack, the main issue you want to solve, and what a useful outcome would look like.

### Optional form copy

Section heading
- Prefer a form?

Supporting sentence
- If you add a lightweight contact form later, keep it short and focused.

Suggested fields
- Name
- Work email
- Company
- Brief project summary

### Engagement fit section

Section heading
- Good fit

Intro sentence
- Typical engagements are focused pieces of infrastructure or delivery work that can be scoped clearly and implemented pragmatically.

Good fit items
- Cleaning up infrastructure as code
- Improving CI/CD pipelines
- Automating repetitive infrastructure tasks
- Stabilizing delivery workflows before growth

Not the focus
- Large multi-team transformation programs
- Fully managed 24/7 operations

### Practical details section

Section heading
- Practical details

Detail items
- Based in the Montreal area
- Remote-friendly
- Expected response time: within 2 business days
- GitHub: [GitHub URL]
- LinkedIn: [LinkedIn URL]

### Closing line

- If you are not sure whether a project is a fit, send a brief description anyway. If it is outside scope, I can usually tell you that quickly.

## 10. Copy placeholders to replace before launch

- [your email]
- [GitHub URL]
- [LinkedIn URL]
- [Project name]
- [One or two sentences describing the problem, what was built, and the practical result.]
- [Terraform, Kubernetes, GitHub Actions, Ansible, Cloudflare, etc.]

## 11. Final content decisions for MVP

- Use Adman Inc. as the primary displayed business name across the site.
- Keep the site email-first unless there is a clear reason to add a form immediately.
- Launch with 2 strong project entries if that is what you can support honestly.
- Keep the homepage tighter rather than trying to prove too much in v1.