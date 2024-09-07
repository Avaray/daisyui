export default {
  ".checkbox": {
    "@apply border-base-content/20 rounded-[--radius-btn] size-6 cursor-pointer appearance-none border shrink-0 text-base-content relative p-[4px]": {},
    "boxShadow": "0 1px oklch(0% 0 0 / 0.1) inset",
    "transition": "background-color .2s, box-shadow .2s",
    "&:before": {
      "@apply size-full block content-[''] bg-current opacity-0 rotate-45 translate-y-[10%]": {},
      "transition": "clip-path .3s, opacity .1s",
      "clipPath": "polygon(20% 100%, 20% 80%, 50% 80%, 50% 80%, 70% 80%, 70% 100%)",
      "boxShadow": "0px 3px 0 0px oklch(100% 0 0 / 0.1) inset"
    },
    "&:focus-visible": {
      "@apply outline-2 outline-offset-2 outline-current": {}
    },
    "&:checked,\n  &[aria-checked=\"true\"]": {
      "boxShadow": "0 8px 0 -4px oklch(100% 0 0 / 0.1) inset, 0 1px oklch(0% 0 0 / 0.1)",
      "&:before": {
        "@apply opacity-100 translate-y-[0%]": {},
        "clipPath": "polygon(20% 100%, 20% 80%, 50% 80%, 50% 0%, 70% 0%, 70% 100%)"
      }
    }
  },
  ".checkbox-primary": {
    "@apply border-primary": {},
    "&:checked": {
      "@apply bg-primary text-primary-content": {}
    }
  },
  ".checkbox-secondary": {
    "@apply border-secondary": {},
    "&:checked": {
      "@apply bg-secondary text-secondary-content": {}
    }
  },
  ".checkbox-accent": {
    "@apply border-accent": {},
    "&:checked": {
      "@apply bg-accent text-accent-content": {}
    }
  },
  ".checkbox-success": {
    "@apply border-success": {},
    "&:checked": {
      "@apply bg-success text-success-content": {}
    }
  },
  ".checkbox-warning": {
    "@apply border-warning": {},
    "&:checked": {
      "@apply bg-warning text-warning-content": {}
    }
  },
  ".checkbox-info": {
    "@apply border-info": {},
    "&:checked": {
      "@apply bg-info text-info-content": {}
    }
  },
  ".checkbox-error": {
    "@apply border-error": {},
    "&:checked": {
      "@apply bg-error text-error-content": {}
    }
  },
  ".checkbox:disabled": {
    "@apply cursor-not-allowed opacity-20": {}
  },
  ".checkbox-xs": {
    "&:is([type=\"checkbox\"])": {
      "@apply size-4": {},
      "&:before": {
        "clipPath": "polygon(10% 100%, 10% 70%, 40% 70%, 40% 70%, 70% 70%, 70% 100%)"
      },
      "&:checked,\n        &[aria-checked=\"true\"]": {
        "&:before": {
          "clipPath": "polygon(10% 100%, 10% 70%, 40% 70%, 40% 0%, 70% 0%, 70% 100%)"
        }
      }
    }
  },
  ".checkbox-sm": {
    "&:is([type=\"checkbox\"])": {
      "@apply size-5": {}
    }
  },
  ".checkbox-md": {
    "&:is([type=\"checkbox\"])": {
      "@apply size-6": {}
    }
  },
  ".checkbox-lg": {
    "&:is([type=\"checkbox\"])": {
      "@apply size-8": {}
    }
  }
};