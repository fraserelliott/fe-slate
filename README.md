# fe-slate

A lightweight, reusable CSS theme foundation built around namespaced variables and atomic appearance classes.

---

## Overview

`fe-slate` provides a set of consistent design tokens and single-purpose CSS classes for building dark-themed user interfaces.

It is designed to be:

- **Minimal** - no framework, no components
- **Composable** - works alongside utility libraries
- **Namespaced** - avoids conflicts with other styles
- **Flexible** - no opinionated layout or structure

---

## Installation

```bash
npm install @fraserelliott/fe-slate
```

---

## Usage

Import the stylesheet at the top of your app:

```javascript
import "@fraserelliott/fe-slate";
```

This will register all variables and classes globally.

---

## What it provides

### CSS Variables

All variables are namespaced with `--fes-*`:

```css
--fes-bg-primary
--fes-bg-secondary
--fes-text-primary
--fes-text-muted
--fes-btn-primary
--fes-accent
--fes-box-shadow-subtle
--fes-font-family-primary
```

---

### Appearance Classes

Single-purpose classes that apply those variables:

```html
<div class="fes-bg-primary fes-text-primary">Content</div>
```

Examples:

- `fes-bg-primary`
- `fes-bg-secondary`
- `fes-text-primary`
- `fes-text-muted`
- `fes-btn-primary`
- `fes-btn-danger`
- `fes-shadow-subtle`
- `fes-glass-border`
- `fes-font-primary`

---

## Design Philosophy

`fe-slate` focuses purely on **appearance**, not structure.

It does **not** include:

- layout utilities (flex, grid, spacing)
- component abstractions (buttons, cards, etc.)
- opinionated combinations of styles

Instead, it provides **atomic building blocks** that can be composed elsewhere.

---

## Recommended Usage

`fe-slate` works best when combined with a structural utility system.

Example using composition:

```javascript
export const appearance = {
  Panel: "fes-bg-secondary fes-glass-border fes-shadow-subtle",
  BtnPrimary: "fes-btn-primary",
  BtnDanger: "fes-btn-danger",
};
```

Then used in your UI layer:

```javascript
<div className={appearance.Panel}>Content</div>
```

This keeps appearance flexible and easy to change without touching component code.

---

## Why not combined classes?

You will not find classes like `fes-theme` or `fes-panel`.

That is intentional.

Different projects may want slightly different combinations of styles, so composition is left to the consuming application rather than being hardcoded into the library.

---

## Relationship to fe-utilities

If you are using `@fraserelliott/fe-utilities`:

- `fe-utilities` → structure (layout, spacing, alignment)
- `fe-slate` → appearance (colours, shadows, typography)

Together, they allow you to compose UI cleanly:

```html
<div class="fe-d-flex fe-gap-2 fes-bg-secondary fes-shadow-subtle"></div>
```

---

## Extending

You can override any variable in your own CSS:

```css
:root {
  --fes-accent: #22c55e;
}
```

This allows easy theming without modifying the library.

---

## Summary

`fe-slate` is a simple, reusable foundation for consistent UI styling.

- Use it for **appearance**
- Combine it with utilities for **structure**
- Compose styles at the **application level**

---
