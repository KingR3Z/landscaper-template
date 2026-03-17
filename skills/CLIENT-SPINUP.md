# CLIENT SPINUP SKILL

Spin up a new client website from the landscaper-template in under 5 minutes.
Template source: landscaper-template-gray.vercel.app (hartwood-landscapes repo)

---

## OVERVIEW

This skill creates a complete, branded website for a new client by duplicating the landscaper template and customising all content, colours, and metadata. Designed for scale — every new client follows this exact process.

---

## INPUTS REQUIRED

Before starting, gather the following client information:

### Must Have
- **Business name** (e.g. "RAS Services")
- **Owner/founder name** (e.g. "Richard")
- **Phone number**
- **Location** (town, county, postcode)
- **Services offered** (list of services they provide)

### Nice to Have (check cold call list or Google)
- Email address
- Google Reviews rating + count
- MyBuilder/Checkatrade rating + count
- Facebook page URL
- Business hours
- Year founded

### Where to Find Client Data
1. **Cold Call List**: Check `Cold Call List *.numbers` in the project root — contains lead info, revenue estimates, contact times
2. **Google Search**: Search "[business name] [location]" for reviews, address, phone, services
3. **MyBuilder/Checkatrade**: Search for additional reviews and service listings
4. **Facebook**: Check for business page and photos

---

## STEP-BY-STEP PROCESS

### Step 1: Duplicate the Template
```bash
cp -R /Users/lorenzobandawe/Desktop/hartwood-landscapes /Users/lorenzobandawe/Desktop/[client-slug]
```
- Use kebab-case for folder name (e.g. `ras-services`, `smith-landscapes`)
- This creates a complete, independent copy

### Step 2: Clean Up for Fresh Deployment
```bash
rm -rf /Users/lorenzobandawe/Desktop/[client-slug]/.vercel
rm -rf /Users/lorenzobandawe/Desktop/[client-slug]/.git
cd /Users/lorenzobandawe/Desktop/[client-slug]
git init
```

### Step 3: Update Client Config (MOST IMPORTANT)
**File: `src/config/client.ts`**

This is the single source of truth. Update ALL fields:
- `name`, `shortName`, `legalName`, `tagline`, `logoInitials`
- `founderName`, `founderRole`, `yearFounded`
- `phone`, `email`, `whatsapp` (display + link)
- `address` array, `region`, `basedIn`
- `hours` array
- `socials` array
- `awards` array (Google Reviews, MyBuilder, etc.)
- `partners` array
- `metaTitle`, `metaDescription` (SEO)

### Step 4: Update Brand Colours
**File: `src/app/globals.css`** (lines 10-14)

Choose colours that suit the client's industry/brand:
- `--sage`: Primary button/accent colour
- `--sage-dark`: Hover state
- `--forest`: Secondary colour
- `--gold`: Badge/highlight accent

**File: `src/components/layout/Footer.tsx`**
- Update footer background colour (line 10, `style={{ background: "..." }}`)
- Update badge accent colours (replace all `#C9A96E` with new `--gold` value)

### Step 5: Update Homepage Content
**File: `src/data/homepage.ts`**

- `heroData`: Title, subtitle, hero image
- `introData`: Heading, description paragraphs, CTA
- `servicesData.tabs`: Create 4 service tabs matching client's services
  - Each tab: `label`, `title`, `text`, `tagline`, `cta`, `image`
- `whyChooseData`: Title, 4 paragraphs about their USPs
- `philosophyData`: Their approach/values
- `landscapingData`: Overview of all services combined
- `ctaData`: Call-to-action heading, text, subtext with phone number
- `projectsShowcase`: 8-10 project cards with local area locations

### Step 6: Update About Page
**File: `src/data/about.ts`**

- `aboutHeaderData`: Overline, heading, 2 paragraphs, image
- `coreValues`: 3 values (Safe/Reliable, Expertise, Promise)
- `directorData`: Founder bio (auto-uses client.ts name/role)
- `missionData`: Mission statement paragraphs

### Step 7: Update Contact Page
**File: `src/data/contact.ts`**

- `contactHeroData`: Heading, description text
- `exploreServices`: 4 service cards matching the services tabs

### Step 8: Update Projects/Portfolio
**File: `src/data/projects.ts`**

- Update all `featuredProjects` with client-relevant:
  - Service descriptions matching their trade
  - Local area locations (use real nearby towns/areas)
  - Realistic timelines

### Step 9: Update Package Name
**File: `package.json`**
- Change `"name"` to client slug

### Step 10: Initial Commit
```bash
cd /Users/lorenzobandawe/Desktop/[client-slug]
git add -A
git commit -m "Initial commit: [Client Name] site from landscaper template"
```

### Step 11: Deploy (use INSTANT-PUBLISH-SKILL)
Follow the Instant Publish skill to push to GitHub and deploy to Vercel.

---

## COLOUR PALETTE SUGGESTIONS BY TRADE

| Trade Type | Primary (--sage) | Hover (--sage-dark) | Accent (--gold) | Footer BG |
|---|---|---|---|---|
| Landscaper/Garden | #B5BFB0 | #8A9A84 | #C9A96E | #C1C7BF |
| Multi-trade/Property | #4A7C6F | #3A6459 | #D4914E | #7BA99C |
| Roofing | #5B6B7A | #4A5A69 | #C4763C | #8A9AAA |
| Paving/Driveways | #8B8578 | #6E6A5F | #B8860B | #ADA99C |
| Painting/Decorating | #7B8E9A | #6A7D89 | #D4A574 | #9AABB7 |
| Fencing/Boundaries | #6B7B5A | #5A6A49 | #C9A96E | #8A9B79 |

---

## FILES CHECKLIST

- [ ] `src/config/client.ts` — All business info
- [ ] `src/app/globals.css` — Brand colours (4 variables)
- [ ] `src/data/homepage.ts` — All homepage content
- [ ] `src/data/about.ts` — About page content
- [ ] `src/data/contact.ts` — Contact page content
- [ ] `src/data/projects.ts` — Portfolio projects
- [ ] `src/components/layout/Footer.tsx` — Footer BG + badge colours
- [ ] `package.json` — Project name
- [ ] `.vercel/` — Removed
- [ ] `.git/` — Fresh init

---

## NOTES

- The template automatically uses `client.ts` values across Navigation, Footer, and all data files — so updating client.ts handles 80% of the rebrand
- Images stay as template placeholders until the client provides their own photos
- The `navigation.ts` file rarely needs changing — it pulls from client.ts automatically
- Always save client info to memory (`/memory/project_[client-slug].md`) so you can reference it later
- Check the cold call list spreadsheet for lead data before searching online
