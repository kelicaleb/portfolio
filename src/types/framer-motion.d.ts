declare module "framer-motion" {
  /* Lightweight local override to avoid strict JSX typing issues in this workspace.
     This makes `motion` and helpers `any` so we can use them freely in components.
     It's safe for development and can be tightened later if desired. */
  const motion: any;
  export { motion };
  export const useReducedMotion: any;
  export const AnimatePresence: any;
  export const motionValue: any;
}
