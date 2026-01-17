# Mock Login / Sign-In Page (Demo Only) — Build Instructions (React + Tailwind)

## Goal

Create a **mock Sign-In page** with a **clean, consistent UI** that matches the main product styling.  
This page is **demo-only**: no authentication, no backend, no database.

When the user clicks **Sign In**, redirect them to the **Main Insights Page**.

---

## Tech Stack

- React (Vite or CRA)
- npm
- Tailwind CSS
- React Router (`react-router-dom`)

---

## Pages / Routes

Create these routes:

1. `/login` → Login Page (this page)
2. `/` or `/dashboard` → Main Insights Page (existing main page)

---

## UI Requirements (Consistent Style)

### Layout

- Full page centered card layout
- Background: light neutral gradient or soft solid
- Card: white background, rounded corners, shadow
- Max width: ~420px
- Padding: 24–32px

### Card Content

**Top section**

- Product name (example): `InsightLens`
- Subtitle: “Sign in to continue”

**Form section**

- Email input
- Password input
- Optional checkbox: “Remember me” (UI only)
- “Forgot password?” link (UI only, no action)

**Primary CTA**

- Button: `Sign In`

**Secondary link**

- “Don’t have an account? Sign up” (UI only, can link to `/signup` or keep disabled)

---

## Behavior Requirements (Demo Flow)

### Sign-In Button Logic (No Auth)

- On clicking **Sign In**, redirect the user to the main page route.
- Do NOT validate credentials.
- Do NOT call any API.
- Do NOT store anything in localStorage (optional: can store `demoUser=true` if needed).

---

## Dummy Credentials (For UI Placeholder Only)

Show this below the form in small text:

- Email: `demo@insightlens.com`
- Password: `demo123`

These are only for demo display.

---

## Components to Build

### 1) `LoginPage.jsx`

Must include:

- Card UI
- Inputs
- Sign-in button
- Redirect logic

### 2) `App.jsx` Routing

Add routes:

- `/login` → `<LoginPage />`
- `/` (or `/dashboard`) → `<Dashboard />`

Default behavior:

- When app loads, show `/login` first (demo flow).
- After sign in, go to main page.

---

## Redirect Implementation (React Router)

Use `useNavigate()`:

- On click:
  - `navigate("/")` OR `navigate("/dashboard")`

---

## Accessibility / UX Requirements

- Inputs must have labels
- Button should be full width
- Pressing Enter on password should also trigger redirect (optional)

---

## Acceptance Criteria (Must Pass)

- `/login` renders a clean sign-in page
- Clicking **Sign In** always redirects to the main insights page
- No authentication logic exists
- UI looks consistent and professional

---

## Deliverables

- `src/pages/LoginPage.jsx`
- Routing added in `src/App.jsx`
- Tailwind styling included

---

## Notes

This is strictly a demo login screen to simulate a real product flow.
No security, validation, or backend work is required.
