# fe-slate

A lightweight, reusable dark theme built around namespaced CSS variables, appearance classes, and composable JavaScript style tokens.

Designed to work independently or alongside `@fraserelliott/fe-components` and `@fraserelliott/fe-utilities`.

---

## Overview

`fe-slate` provides a consistent visual foundation for dark-themed React applications.

It is designed to be:

- **Composable** – combine individual style tokens or use the complete theme.
- **Namespaced** – CSS variables and classes use the `fes-` prefix to minimise conflicts.
- **Flexible** – customise colours, typography, and effects through CSS variables.
- **Reusable** – apply the same visual identity across multiple projects without recreating component styling.
- **Optional** – use the stylesheet independently or integrate the theme with `FEStyleProvider`.

The package provides appearance and styling configuration, not React components or application logic.

---

## Installation

```bash
npm install @fraserelliott/fe-slate
```

For integration with the React component library:

```bash
npm install @fraserelliott/fe-components @fraserelliott/fe-utilities
```

---

## Usage

### Using the theme with fe-components

Import the theme object and stylesheet:

```jsx
import { FEStyleProvider } from "@fraserelliott/fe-components";
import { feSlateTheme } from "@fraserelliott/fe-slate";
import "@fraserelliott/fe-slate/fe-slate.css";

import App from "./App";

export default function Root() {
  return (
    <FEStyleProvider theme={feSlateTheme}>
      <App />
    </FEStyleProvider>
  );
}
```

The theme provides styling for supported component slots, including panels, buttons, tables, and other UI elements.

`FEStyleProvider` applies the theme through the styling system provided by `fe-components`.

The CSS import supplies the corresponding classes, including interactive button states and transitions.

**Both imports are required for the complete themed appearance.**

### Applying the application-wide theme

Add the `fes-app` class to your document body:

```html
<body class="fes-app">
  <div id="root"></div>
</body>
```

This establishes the default Slate background, text colour, and font family for the application.

The values remain customisable through CSS variables.

### Using the stylesheet independently

You can continue using `fe-slate` without React or `fe-components`.

```javascript
import "@fraserelliott/fe-slate/fe-slate.css";
```

Then apply its appearance classes directly:

```html
<div class="fes-bg-secondary fes-text-primary fes-glass-border">
  Content
</div>
```

This is useful when you want the Slate palette without adopting the component styling system.

**Note:** Previous versions imported the stylesheet directly from `@fraserelliott/fe-slate`. The package root now exports JavaScript, so the stylesheet must be imported using the `/fe-slate.css` path.

---

## What it provides

### 1. CSS variables

All theme variables are namespaced with `--fes-*`.

Examples include:

```css
--fes-bg-primary
--fes-bg-secondary

--fes-text-primary
--fes-text-secondary
--fes-text-muted

--fes-btn-primary
--fes-btn-primary-hover
--fes-btn-primary-active
--fes-btn-primary-disabled

--fes-btn-confirm
--fes-btn-danger

--fes-accent

--fes-glass-border
--fes-box-shadow-subtle

--fes-font-family-primary
--fes-font-family-secondary
```

These variables control the theme's colours, typography, borders, and visual effects.

### 2. Appearance classes

The stylesheet includes single-purpose appearance classes.

Examples:

- `fes-bg-primary`
- `fes-bg-secondary`
- `fes-text-primary`
- `fes-text-muted`
- `fes-btn-primary`
- `fes-btn-confirm`
- `fes-btn-danger`
- `fes-shadow-subtle`
- `fes-glass-border`
- `fes-font-primary`

Button classes can also provide hover, active, and disabled appearances.

These classes remain available for projects that prefer traditional CSS styling.

### 3. JavaScript style tokens

`fe-slate` exports reusable style objects for inline styling.

```javascript
import { feSlateStyles } from "@fraserelliott/fe-slate";
```

For example:

```jsx
<div
  style={{
    ...feSlateStyles.BGSecondary,
    ...feSlateStyles.TextPrimary,
    ...feSlateStyles.GlassBorder,
    ...feSlateStyles.ShadowSubtle,
  }}
>
  Content
</div>
```

Each token uses CSS variables with fallback values, allowing the appearance to remain configurable.

For more complex compositions, use `sx` from `fe-utilities`:

```javascript
import { sx, utilities } from "@fraserelliott/fe-utilities";
import { styles } from "@fraserelliott/fe-slate";

const panelStyle = sx(
  utilities["fe-d-flex"],
  utilities["fe-flex-column"],
  utilities["fe-gap-2"],
  feSlateStyles.BGSecondary,
  feSlateStyles.TextPrimary,
  feSlateStyles.GlassBorder,
  feSlateStyles.ShadowSubtle
);
```

This separates structural utilities from visual appearance while keeping the resulting styles easy to reuse.

### 4. feSlateTheme

The `feSlateTheme` export provides a ready-made theme configuration for `FEStyleProvider`.

```javascript
import { feSlateTheme } from "@fraserelliott/fe-slate";
```

The theme contains slot-based inline styles and CSS class definitions for interactive states.

Rather than replacing component functionality or layout, it supplies Slate's visual appearance to supported slots.

Components can continue using their existing styling API:

```jsx
const { styleComponent } = useFEStyles(defaultStyles);

return (
  <button {...styleComponent("BtnPrimary")}>
    Save
  </button>
);
```

When the Slate theme is active, the styling system applies the theme's corresponding slot configuration.

Without the theme, the component's default styling remains available.

---

## Customisation

### Overriding CSS variables

You can override theme values in your own CSS:

```css
:root {
  --fes-accent: #22c55e;
  --fes-bg-primary: #111827;
  --fes-bg-secondary: #1f2937;
}
```

Because the stylesheet and JavaScript tokens reference these variables, the changes propagate wherever those values are used.

You can also scope overrides to particular sections or dynamically change the variables at runtime.

### Component-level styling

When using `fe-components`, you can override individual styling slots without changing the global theme.

For example:

```jsx
<Modal
  open={isOpen}
  onOpenChange={setIsOpen}
  style={{
    Panel: {
      width: "400px",
      height: "300px",
    },
  }}
>
  Modal content
</Modal>
```

This allows application-specific adjustments while retaining the Slate appearance.

### Interactive styling and noAnim

Interactive styles, such as button hover and active states, are provided through CSS classes.

The `fe-components` styling system can use the theme's animation classes in place of its own defaults, preventing conflicting appearance rules.

When `noAnim` is enabled, components can instead use static inline appearance tokens without the corresponding interactive classes.

---

## Design philosophy

`fe-slate` is intentionally focused on **appearance rather than functionality**.

It does not provide:

- React component implementations.
- Application state or business logic.
- A replacement for structural layout utilities.
- Mandatory styling for every component or slot.

Instead, it offers three levels of use:

1. **CSS classes and variables** for conventional styling.
2. **JavaScript tokens** for composable inline styling.
3. **`feSlateTheme`** for integration with `FEStyleProvider`.

You can use whichever level suits your application.

---

## Relationship to the other fe packages

The packages have separate responsibilities:

| Package | Responsibility |
|---|---|
| `fe-utilities` | Style composition, layout, spacing, and utility functions |
| `fe-components` | Reusable React components and the styling system |
| `fe-slate` | Dark appearance, semantic colours, typography, and theme configuration |

Together, they allow applications to share both reusable behaviour and a consistent visual identity without tightly coupling the two.

---

## Summary

`fe-slate` provides a reusable dark visual identity that can be applied across projects.

- Import the **stylesheet** for CSS variables and appearance classes.
- Use **`feSlateStyles`** for composable inline styling.
- Use **`feSlateTheme`** with `FEStyleProvider` for ready-made React component styling.
- Override **CSS variables** or individual component slots when needed.

The aim is to make consistent styling straightforward without sacrificing application-level control.