# 📝 Product Requirements Document (PRD)

## Project Title  
**Urban Bank Website (React + Site)**

## Objective  
Create a modern, responsive website for a financial institution or cooperative bank. The site should inform customers, showcase services, and allow for basic interactions (e.g., form submissions, contact requests).

---

## 🔧 Technologies to be used

- **Frontend**: React.js (with Tailwind CSS)
- **Static Site Generator**: Site, Gatsby
- **Forms**: React Hook Form
- **Image Optimization**: Cloudinary or built-in optimization (Image)
- **Hosting**: GitHub Pages

---

## 🧩 Website Sections

### 1. Home Page

**Must-Have:**
- Hero banner with tagline
- Mission & vision
- Quick links to loans, deposits
- Testimonials / client logos
- Latest news/updates ticker
- Call-to-action (CTAs)

**Good-to-Have:**
- Carousel or video background
- Animated counters (branches, members, loans)

**Components:**
- `HeroBanner`
- `QuickLinksCard`
- `TestimonialCarousel`
- `StatsCounter`
- `NewsTicker`

---

### 2. About Us

**Must-Have:**
- History and objectives
- Board of directors section with photos
- Vision & mission

**Good-to-Have:**
- Timeline component
- Message from the CEO/Chairman

**Components:**
- `TeamGrid`
- `MissionVision`
- `Timeline`

---

### 3. Loans

**Must-Have:**
- List of loan types (Gold Loan, Personal Loan, etc.)
- Features, benefits, eligibility
- Loan application form (PDF or interactive)

**Good-to-Have:**
- EMI calculator
- Comparison table

**Components:**
- `LoanCard`
- `LoanDetailsModal`
- `EMICalculator`
- `LoanForm`

---

### 4. Deposits

**Must-Have:**
- Types: Fixed, Recurring, Savings
- Interest rates
- Deposit benefits

**Good-to-Have:**
- Comparison chart
- Calculator

**Components:**
- `DepositCard`
- `InterestTable`

---

### 5. Gallery

**Must-Have:**
- Images of branches, events, board meetings
- Categorized albums

**Good-to-Have:**
- Lightbox preview
- Video gallery

**Components:**
- `ImageGallery`
- `VideoPlayer`

---

### 6. Branches

**Must-Have:**
- List of all branches with address, contact
- Map integration (Google Maps or Leaflet)

**Good-to-Have:**
- Search by city or pincode

**Components:**
- `BranchList`
- `MapView`

---

### 7. Careers

**Must-Have:**
- List of open positions
- Downloadable or interactive job application form

**Good-to-Have:**
- Upload resume feature
- Career growth path

**Components:**
- `JobList`
- `ApplicationForm`

---

### 8. Contact Us

**Must-Have:**
- Contact form
- Head office and branch contacts
- Social media links

**Good-to-Have:**
- Embedded map
- WhatsApp or chatbot link

**Components:**
- `ContactForm`
- `ContactInfoCard`
- `SocialLinks`

---

### 9. News & Announcements

**Must-Have:**
- Recent announcements
- Downloads (e.g., notices, PDFs)

**Good-to-Have:**
- Archive filter
- RSS/Newsletter subscription

**Components:**
- `NewsList`
- `DownloadCenter`

---

### 10. Downloads

**Must-Have:**
- Application forms (PDF)
- Interest rate charts
- Reports & Disclosures

**Components:**
- `DownloadList`

---

### 11. Footer

**Must-Have:**
- Sitemap
- Legal disclaimers
- Contact info

**Good-to-Have:**
- Social feed (Twitter, Facebook)

**Components:**
- `FooterLinks`
- `SocialIcons`

---

## 🎨 Assets to Generate

### Hero Banner
- Background: Urban financial theme, cooperative banking
- Overlay text: “Empowering Dreams, Building Futures”

### Icons
- For Loans, Deposits, Branches (use vector icons from HeroIcons or FontAwesome)

### Images
- Team photos (placeholders)
- Office photos (generic stock images for now)
- Event images (banking events, community programs)

### PDFs
- Sample loan application form
- Interest rate chart

---

## 📦 Additional Features

### Must-Have:
- SEO Optimization (meta tags, alt texts)
- Mobile responsiveness
- Multilingual support (English + Marathi, optional)

### Good-to-Have:
- Accessibility (WCAG compliance)
- Offline mode (PWA)

---

## 🗂 Folder Structure (React + Site)

```bash
/src
  /components
    /HeroBanner
    /LoanCard
    /DepositCard
    /ContactForm
    ...
  /pages
    index.jsx
    about.jsx
    loans.jsx
    deposits.jsx
    contact.jsx
  /assets
    /images
    /icons
    /pdf
  /styles
    tailwind.css
