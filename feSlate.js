import { sx, cx, utilities } from "@fraserelliott/fe-utilities";

export const feSlateStyles = {
  // Backgrounds
  BGPrimary: {
    backgroundColor: "var(--fes-bg-primary, #0f172a)",
  },
  BGSecondary: {
    backgroundColor: "var(--fes-bg-secondary, #1e293b)",
  },
  BGDropdown: {
    backgroundColor: "var(--fes-dropdown-bg, #334155)",
  },

  // Text
  TextPrimary: {
    color: "var(--fes-text-primary, #f1f5f9)",
  },
  TextSecondary: {
    color: "var(--fes-text-secondary, #ffffff)",
  },
  TextMuted: {
    color: "var(--fes-text-muted, #94a3b8)",
  },

  // Buttons
  BtnPrimary: {
    backgroundColor: "var(--fes-btn-primary, #64748b)",
  },
  BgDanger: {
    backgroundColor: "var(--fes-btn-danger, #f87171)",
  },
  BgConfirm: {
    backgroundColor: "var(--fes-btn-confirm, #15803d",
  },

  // Accent
  Accent: {
    color: "var(--fes-accent, #3b82f6)",
  },

  // Borders / effects
  GlassBorder: {
    border: "var(--fes-glass-border, 1px solid rgba(255, 255, 255, 0.05))",
  },
  ShadowSubtle: {
    boxShadow:
      "var(--fes-box-shadow-subtle, 0 1px 2px rgba(0, 0, 0, 0.3), 0 6px 18px rgba(0, 0, 0, 0.25))",
  },

  // Typography
  FontPrimary: {
    fontFamily: "var(--fes-font-family-primary, Verdana, sans-serif)",
  },
  FontSecondary: {
    fontFamily: "var(--fes-font-family-secondary, Arial, sans-serif)",
  },
};

const buttonBase = sx(
  utilities["fe-d-inline-flex"],
  utilities["fe-items-center"],
  utilities["fe-justify-center"],
  utilities["fe-gap-2"],
  utilities["fe-p-em-1"],
  utilities["fe-rounded-2"],
  feSlateStyles.ShadowSubtle,
);

export const feSlateTheme = {
  inline: {
    Btn: buttonBase,

    BtnPrimary: sx(buttonBase, feSlateStyles.TextPrimary),

    BtnDanger: sx(buttonBase, feSlateStyles.TextSecondary),

    BtnConfirm: sx(buttonBase, feSlateStyles.TextSecondary),

    InputPrimary: sx(
      feSlateStyles.BGDropdown,
      feSlateStyles.TextPrimary,
      feSlateStyles.GlassBorder,
      feSlateStyles.ShadowSubtle,
      utilities["fe-rounded-1"],
      utilities["fe-px-1"],
      { resize: "none" },
    ),

    Panel: sx(
      utilities["fe-p-em-3"],
      utilities["fe-d-flex"],
      utilities["fe-flex-column"],
      utilities["fe-justify-center"],
      utilities["fe-gap-2"],
      utilities["fe-rounded-1"],
      feSlateStyles.BGSecondary,
      feSlateStyles.GlassBorder,
      feSlateStyles.ShadowSubtle,
      feSlateStyles.TextPrimary,
    ),

    Heading: sx(
      utilities["fe-fw-bold"],
      utilities["font-size-2"],
      feSlateStyles.TextPrimary,
    ),

    Form: sx(
      utilities["fe-d-flex"],
      utilities["fe-flex-column"],
      utilities["fe-gap-3"],
      utilities["fe-justify-center"],
      utilities["fe-items-center"],
      utilities["fe-w-100"],
    ),

    Navbar: sx(
      utilities["fe-d-flex"],
      utilities["fe-flex-row"],
      utilities["list-style-none"],
      utilities["fe-justify-center"],
      feSlateStyles.BGSecondary,
    ),

    NavItem: sx(
      utilities["fe-d-flex"],
      utilities["fe-items-center"],
      utilities["fe-p-em-2"],
    ),

    Table: sx(utilities["fe-w-100"], utilities["fe-p-em-2"], {
      borderCollapse: "collapse",
    }),

    TableCell: sx(feSlateStyles.Border, utilities["fe-p-em-1"]),

    TextPrimary: feSlateStyles.TextPrimary,

    Toast: sx(feSlateStyles.BGSecondary, feSlateStyles.TextPrimary),

    ToastSuccess: sx(feSlateStyles.BgConfirm, feSlateStyles.TextSecondary),

    ToastError: sx(feSlateStyles.BgDanger, feSlateStyles.TextSecondary),
  },

  anim: {
    anim: {
      Btn: "fe-pressable",

      BtnPrimary: "fe-pressable fes-btn-primary",

      BtnDanger: "fe-pressable fes-btn-danger",

      BtnConfirm: "fe-pressable fes-btn-confirm",

      NavItem: "navlink",
    },

    noAnim: {
      BtnPrimary: feSlateStyles.BtnPrimary,

      BtnDanger: feSlateStyles.BgDanger,

      BtnConfirm: feSlateStyles.BgConfirm,
    },
  },
};
