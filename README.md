# GLOW SOUQ — Luxury Fashion & Beauty Boutique

A production-ready digital flagship boutique for **GLOW SOUQ**, an original luxury brand blending contemporary fashion silhouettes, clean botanical skincare, artisanal fragrance, and sculpted accessories.

Inspired by quiet luxury aesthetics, warm taupe, deep mocha, soft mushroom, and dusty blush tones with natural afternoon sunlight and travertine textures.

---

## ✦ Table of Contents
1. [Tech Stack & Architecture](#tech-stack--architecture)
2. [Getting Started (Local Development)](#getting-started-local-development)
3. [Client Configuration & Rebranding](#client-configuration--rebranding)
4. [Managing Products & Visual Assets](#managing-products--visual-assets)
5. [Connecting Payment Gateways & Newsletter Providers](#connecting-payment-gateways--newsletter-providers)
6. [Deployment to Hostinger (Step-by-Step)](#deployment-to-hostinger-step-by-step)

---

## 1. Tech Stack & Architecture

- **Framework**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS v4 with custom luxury color variables and font pairings (`Cormorant Garamond`, `Plus Jakarta Sans`, `Alex Brush`)
- **Icons**: Lucide React
- **Persistence**: Client-side `localStorage` for Shopping Bag items and Wishlist
- **Hostinger Ready**: Includes Apache `.htaccess` rewrite rules and static asset optimization in `public/`

---

## 2. Getting Started (Local Development)

### Prerequisites
- Node.js 18+ or 20+
- npm or bun

### Commands
```bash
# 1. Install dependencies
npm install

# 2. Start local development server (port 3000)
npm run dev

# 3. Compile and verify TypeScript types
npm run lint

# 4. Create production build
npm run build

# 5. Preview production build locally
npm run preview
```

---

## 3. Client Configuration & Rebranding

All store settings, currency rates, support contact, and policies are centralized in **`src/data/config.ts`**:

```typescript
export const siteConfig = {
  brandName: "MAISON BLUSH",
  tagline: "The Art of Everyday Luxury",
  announcement: "A LITTLE LUXURY, EVERY DAY — COMPLIMENTARY SIGNATURE PACKAGING ON ALL ORDERS",
  amazonAffiliateUrl: "https://www.amazon.com/gp/css/homepage.html?&linkCode=ll2&tag=muhammadu047a-20&linkId=276ec242b400db3bed9d39100b19e78e&language=en_US&ref_=as_li_ss_tl",
  defaultCurrency: { code: "SAR", symbol: "SAR", rateToSAR: 1 },
  contactEmail: "concierge@maisonblush.com",
  freeShippingThresholdSAR: 350,
  // ...
};
```

---

## 4. Managing Products & Visual Assets

### Editing Products
Open **`src/data/products.ts`** to add, edit, or remove catalog items. Each product includes:
- `name`, `slug`, `category` (`fashion` | `beauty` | `accessories` | `essentials`)
- `priceSAR`, `compareAtPriceSAR`
- `badge` (`BESTSELLER` | `NEW` | `CURATED EDIT`)
- `images` (array of high-resolution images; primary and secondary hover image)
- `variants` (options such as size, leather tone, or fragrance volume)
- `details`, `materialsOrNotes`, and `dimensionsOrVolume`

### Categories
Open **`src/data/categories.ts`** to modify the 4 primary category tiles displayed on the homepage.

---

## 5. Connecting Payment Gateways & Newsletter Providers

The shopping cart and checkout modal currently run in a **demonstration state** with local storage persistence and mock order preview. To receive real online payments:

### Connecting Stripe / Moyasar / HyperPay
1. Add your publishable key to `.env` (`VITE_STRIPE_PUBLISHABLE_KEY=pk_live_...`).
2. Replace the simulated submit handler in `src/components/CheckoutModal.tsx` with Stripe Checkout or Moyasar Web SDK:
   ```typescript
   // Example Stripe redirect:
   const response = await fetch('/api/create-checkout-session', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ items: cart })
   });
   const { url } = await response.json();
   window.location.href = url;
   ```

### Connecting Newsletter (Klaviyo / Mailchimp)
In `src/components/Newsletter.tsx`, send a POST request with the user's validated email to your ESP endpoint (e.g., Klaviyo List API or Mailchimp Form action).

---

## 6. Deployment to Hostinger (Step-by-Step)

This application compiles to static HTML/JS/CSS, making it **100% compatible with Hostinger Web Hosting, Cloud Hosting, and VPS**.

### Method 1: Hostinger File Manager / FTP Upload (Recommended)
1. Run the build command locally:
   ```bash
   npm run build
   ```
2. This creates a `dist/` directory containing all optimized assets and the included `.htaccess` file.
3. Log in to your **Hostinger hPanel**.
4. Navigate to **Websites** → Select your domain → Click **File Manager**.
5. Open the `public_html/` folder.
6. Upload all files and folders located **inside `dist/`** into `public_html/` (ensure `index.html` and `.htaccess` are directly inside `public_html/`).
7. Visit your domain — your luxury boutique is live!

### Method 2: Hostinger Git Deployment
1. Push your repository to GitHub or GitLab.
2. In Hostinger hPanel, go to **Advanced** → **Git**.
3. Link your repository and set the branch to `main`.
4. Set the build directory to `dist` or use automated GitHub Actions.

### Method 3: SSL & Custom Domain
1. In hPanel, click **Security** → **SSL**.
2. Activate Hostinger's Free Lifetime Let's Encrypt SSL.
3. Enable **Force HTTPS** for secure shopping.

---

© 2026 MAISON BLUSH. Built for modern luxury e-commerce.
