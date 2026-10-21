# Wealth Bridge — Starter Website

This is a **front-end prototype** for the Wealth Bridge brand, styled in black and gold. It includes a homepage, browser-only demo registration/login, and a sample dashboard.

## Included files
- `index.html` — public homepage and demo registration/login modal
- `dashboard.html` — sample user dashboard
- `styles.css` — responsive black-and-gold styling
- `app.js` — demo-only browser registration/login
- `dashboard.js` — demo dashboard interactions

## Run locally
1. Extract the ZIP file.
2. Open `index.html` in a modern browser.
3. Create a demo account using a made-up phone number, password and PIN.
4. The dashboard opens after registration.

A local web server is recommended for the best experience, but no build step is needed. Do not use a real password or PIN.

## Free hosting: GitHub Pages
1. Create an account at https://github.com/ if needed.
2. Create a new repository, for example `wealth-bridge-demo`.
3. Upload `index.html`, `dashboard.html`, `styles.css`, `app.js`, and `dashboard.js` to the repository root.
4. In the repository, open **Settings → Pages**.
5. Under build/deployment, choose deployment from a branch, select `main` and `/ (root)`, then save.
6. Wait for the Pages URL to appear. It will usually look like `https://YOUR-USERNAME.github.io/wealth-bridge-demo/`.
7. Open that URL and test registration and the dashboard.

GitHub Pages settings can change; consult https://docs.github.com/en/pages if the menu differs.

## Important limitations — do not use for real money
This is **not production-ready financial software**:
- All accounts are stored in the browser's `localStorage`; this is not secure authentication.
- The sample balances and activity are illustrative only.
- No real bank transfer, payment verification, deposits, investment accounting, earnings, referral commissions, or withdrawals are connected.
- There is no secure admin panel, server, database, audit trail, or identity verification.
- Browser data can be edited or erased by the user.

Before accepting funds or offering investment products, replace this demo with a secure backend and database, independent payment verification, ledger-based accounting, role-based admin access, monitoring, privacy controls, and a professional review of applicable Nigerian legal and regulatory obligations. Never promise guaranteed returns or display simulated balances as real funds.

## Next production phase
A production version would need a backend (for example Node.js), a database (for example PostgreSQL), secure password hashing, server-side sessions, verified bank-transfer reconciliation, a transaction ledger, and audited admin approval workflows. Keep the demo clearly labelled until that work is complete.
