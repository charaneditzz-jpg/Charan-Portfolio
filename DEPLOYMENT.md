# Production Deployment & Custom Domain Guide: charangolkonda.com

This guide provides the exact steps to host your cinematography portfolio 24/7 permanently on the cloud and connect your custom domain **`charangolkonda.com`**.

---

## 🏗️ Architecture Overview

Your portfolio features **high-definition commercial video reels, live hover TVC previews, and a 195 MB transparent showreel mask**.

Because of the ~8 GB total high-bitrate video library, the recommended production setup is:

```
[ Visitor: charangolkonda.com ]
                │
                ▼
      ┌──────────────────┐
      │  Cloudflare Edge  │ (Global CDN + SSL Certificate + DDoS Protection)
      └─────────┬────────┘
                │
        ┌───────┴────────┐
        ▼                ▼
┌──────────────┐  ┌──────────────┐
│  Web Pages   │  │ Video Media  │
│ Cloudflare   │  │ Cloudflare   │
│    Pages     │  │   R2 / VPS   │
│ (HTML/CSS/JS)│  │ (Zero Egress)│
└──────────────┘  └──────────────┘
```

## ⚡ Option 1: Vercel (Fast 1-Click Deployment from GitHub)

Your repository is pre-configured with `vercel.json` (clean URLs, video streaming headers, redirects) and `api/contact.js` (serverless function for the inquiry form).

### Step-by-Step Vercel Setup:
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account (`charaneditzz-jpg`).
2. Click **"Add New..."** &rarr; **"Project"**.
3. Under **"Import Git Repository"**, select **`charaneditzz-jpg/Charan-Portfolio`**.
4. Configure the Project Settings:
   - **Framework Preset**: `Other` (or leave default detected)
   - **Root Directory**: `./`
   - **Build Command**: Leave empty / default
   - **Output Directory**: Leave empty / default
5. (Optional) In **Environment Variables**, add `RESEND_API_KEY` if you use Resend for emails. (If omitted, form inquiries forward automatically via FormSubmit to `charaneditzz@gmail.com`).
6. Click **"Deploy"**.
7. Vercel will build and deploy the site in ~30–45 seconds and give you a live URL like `https://charan-portfolio.vercel.app`.

> **Note on Bandwidth**: Vercel's Hobby (free) tier includes 100 GB/month egress bandwidth. Because all video files have been web-compressed to &le; 11.9 MB, the site streams efficiently. If your visitor traffic surges past 100 GB in a month, consider Cloudflare Pages (Option 2) which offers unlimited egress bandwidth.

---

## 🚀 Option 2: Cloudflare Pages (Recommended for Unlimited Bandwidth)

### Step 1: Register Domain & Free Cloudflare Account
1. Create a free account at [cloudflare.com](https://dash.cloudflare.com/sign-up).
2. Go to **Domain Registration** → **Register Domains**.
3. Search for **`charangolkonda.com`** (available at wholesale price ~$9.77/year with free WHOIS privacy).
4. Complete registration.

### Step 2: Deploy Frontend to Cloudflare Pages
1. In Cloudflare Dashboard, click **Workers & Pages** → **Create application** → **Pages**.
2. Select **Upload assets** (drag & drop the website folder or connect via GitHub).
3. Under **Custom Domains**, click **Set up a custom domain** and enter `charangolkonda.com`.
4. Cloudflare automatically issues a free HTTPS SSL certificate and routes traffic globally.

### Step 3: Video Storage with Cloudflare R2
1. Go to **R2 Object Storage** in Cloudflare.
2. Create a bucket named `portfolio-videos`.
3. Upload the `assets/` video files.
4. R2 provides **zero egress fees**, meaning you never get charged for visitors streaming your showreel or TVC reels.

---

## 🖥️ Option 2: Cloud Linux VPS (DigitalOcean / Hetzner)

If you prefer full root control where all 8 GB of video files and web files sit in one place:

1. Create a $4–$5/mo VPS (Ubuntu 24.04 LTS) on DigitalOcean, Hetzner, or AWS Lightsail.
2. Run NGINX with byte-range streaming enabled:
   ```nginx
   server {
       listen 80;
       listen 443 ssl http2;
       server_name charangolkonda.com www.charangolkonda.com;
       root /var/www/website;
       index index.html;

       location ~* \.(mp4|webm)$ {
           mp4;
           mp4_buffer_size 1m;
           mp4_max_buffer_size 5m;
           add_header Accept-Ranges bytes;
       }
   }
   ```
3. Upload the project folder via `rsync`:
   ```bash
   rsync -avz --exclude 'Images' --exclude 'REELS 2' --exclude 'TVC' ./ user@vps_ip:/var/www/website/
   ```
4. Point the `A` record of `charangolkonda.com` to your VPS IP.
5. Run `sudo certbot --nginx -d charangolkonda.com` for instant free SSL.

---

## 📋 DNS Configuration Reference for `charangolkonda.com`

When linking your domain, configure these DNS records:

| Type | Name / Host | Value / Target | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | Cloudflare / VPS IP address | Auto / 300 |
| **CNAME** | `www` | `charangolkonda.com` (or Pages project URL) | Auto / 300 |

---

## 💡 Summary of Current Status
- **Live Demo Link (Temporary Tunnel)**: `https://study-forestry-vip-old.trycloudflare.com`
- **Domain Status**: `charangolkonda.com` is unregistered and available for immediate purchase.
- **Git Repo**: Initialized locally with clean `.gitignore`.
