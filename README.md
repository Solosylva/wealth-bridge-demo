# Wealth Bridge — Supabase-connected demo

This is a static front-end prototype for Wealth Bridge / EverHarvest Investment. Authentication is configured to use Supabase Auth once you add the project URL and publishable key in `supabase-config.js`.

## Setup
1. In Supabase, open Project Settings → API Keys (or Data API) and copy the Project URL and publishable key. Never use a secret/service_role key in browser code.
2. Edit `supabase-config.js`, replacing both placeholders with your project values.
3. In Supabase SQL Editor, run `SUPABASE_SETUP.sql` to create a profile row automatically for new registrations. Your existing `public.profiles` table and RLS policies must already exist.
4. In Supabase Authentication settings, enable Email provider and configure the site URL / redirect URLs for your GitHub Pages address. Keep email confirmation enabled if possible.
5. Upload all files in this folder to the root of your GitHub Pages repository, replacing the old versions.
6. Test with an email account you control. If confirmation is enabled, confirm the email before logging in.

## Included
- `index.html`, `dashboard.html`, `styles.css` — website pages and styling
- `app.js`, `dashboard.js` — Supabase authentication and dashboard session checks
- `supabase-config.js` — public connection settings placeholders
- `SUPABASE_SETUP.sql` — profile creation trigger

## Limitations and safety
- This is an early demo, not production financial software. It does not accept deposits, calculate or pay returns, issue referral commissions, or process withdrawals. Dashboard figures and plan cards remain illustrative only.
- The referral field is captured as registration metadata but referral attribution/commission logic is not implemented. Referral bonuses should not be enabled until financially sustainable and legally reviewed.
- Do not collect or store PINs, payment credentials, or sensitive identity documents in this demo.
- Before any real financial offering, get professional Nigerian legal/regulatory advice and verify the business can meet all obligations.
