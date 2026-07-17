# Deployment Guide: Vercel & Custom Domain

This guide explains how to deploy the wedding invitation website to **Vercel** and connect it to your custom domain (`rahulwedssuruthi.in`).

## Prerequisites
- A GitHub repository containing this project.
- A free Vercel account (linked to your GitHub account).
- Access to your domain registrar (where you purchased `rahulwedssuruthi.in`).

---

## Step 1: Deploy to Vercel

1. Log in to [Vercel](https://vercel.com/) using your GitHub account.
2. Click the **"Add New..."** button and select **"Project"**.
3. Import your repository (e.g., `invitation`).
4. In the **Configure Project** screen, Vercel will automatically detect the Vite setup:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**.

Once the build completes (usually under a minute), your site will be live on a temporary `.vercel.app` domain.

---

## Step 2: Configure Custom Domain

To point your custom domain `rahulwedssuruthi.in` to the Vercel deployment:

1. In your Vercel project dashboard, go to **Settings** > **Domains**.
2. Type `rahulwedssuruthi.in` in the input field and click **Add**.
3. Select the recommended option (which adds both `rahulwedssuruthi.in` and `www.rahulwedssuruthi.in`).
4. Vercel will display the required DNS records:

   | Type | Name | Value |
   | :--- | :--- | :--- |
   | **A** | `@` (or empty) | `76.76.21.21` |
   | **CNAME** | `www` | `cname.vercel-dns.com` |

5. Log in to your domain registrar dashboard (e.g., GoDaddy, Namecheap, Hostinger).
6. Go to the **DNS Management / DNS Zone Editor** for `rahulwedssuruthi.in`.
7. Add or update the **A record** and **CNAME record** with the values provided above.
8. Wait for DNS propagation (usually takes 5–15 minutes, but can take up to 24 hours). Once configured, Vercel will automatically provision an SSL certificate for HTTPS access.

---

## Technical Details

- **Clean URLs**: Clean URLs are enabled via [`vercel.json`](file:///e:/invitation/vercel.json). The `invitation.html` file will be served cleanly at `https://rahulwedssuruthi.in/invitation` rather than ending with `.html`.
