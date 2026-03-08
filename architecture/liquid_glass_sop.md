# SOP: Liquid Glass UI Implementation

## Goal
Implement a premium, minimalist "Liquid Glass" aesthetic for Gateway Networks.

## Inputs
- `gemini.md` Design Ethos.
- `ui-ux-pro-max-skill` design patterns.

## Technical Rules
1. **Backgrounds:** Use a mesh gradient with at least 3-4 colors.
2. **Cards:**
    - `background: rgba(255, 255, 255, 0.05)`
    - `backdrop-filter: blur(20px)`
    - `border: 1px solid rgba(255, 255, 255, 0.1)`
3. **Animations:** Use `framer-motion` for all transitions.
    - Hover: Scale up slightly (1.02) and increase border opacity.
    - Entrance: Fade in with a slight slide up.

## Tools
- `tools/process_plans.py` (Optional, if processing raw data).
