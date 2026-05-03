SavoryOps Landing Page
======================

Marketing / landing site for SavoryOps, built with React 19 and Vite 7. It loads
theme and copy from your backend where configured.


Requirements
------------

  Node.js (LTS recommended) and npm.


Setup
-----

  1. Clone the repository.

  2. Copy environment template and edit values:

       Copy ".env.example" to ".env" in this folder.

     Never commit real ".env" values to source control.

  3. Install dependencies:

       npm install

  4. Start the dev server:

       npm run dev

     Vite prints a local URL (usually http://127.0.0.1:5173).


Environment variables (see ".env.example")
------------------------------------------

All public build-time vars must start with VITE_.

  VITE_BACKEND_URL
    REST API base URL (plans, settings, contact, auth calls).

  VITE_HOST / VITE_TLD
    Used when building subdomain redirect URLs after owner sign-in or sign-up.

  VITE_URL
    Landing sign-in URL used by the token middleware flow.

  VITE_ADMIN_PANEL_URL
    Admin panel base URL linked from authentication flows where applicable.

  VITE_AdminTOKEN_NAME
    Name of the cookie / token key expected by Auth middleware.

  VITE_HOME_URL (optional)
    Home path after auth; defaults to "/" if omitted.


NPM scripts
-----------

  npm run dev      Development server with hot reload
  npm run build    Production bundle to folder "dist"
  npm run preview  Serve "dist" locally to test the production build
  npm run lint     ESLint across the project


Production build
----------------

  npm run build

  Deploy the contents of "dist/" behind your CDN or static host. Configure the
  same VITE_* values at build time (or your host's equivalent) so APIs and
  redirects point to the correct servers.
