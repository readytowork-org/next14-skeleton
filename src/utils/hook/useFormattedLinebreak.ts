import { useCallback } from "react";
import { useWindowSizeDetector } from "./useWindowSizeDetector";

/* eslint-disable no-unused-vars */
export enum ScreenSize {
  xs = 390,
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
}
/* eslint-enable no-unused-vars */

interface UseFormattedLineBreakOptions {
  screenSize?: ScreenSize | number;
  isGreaterThan?: boolean;
}

/*
When using /n to create line break and
then doing it with responsive design where sentences
are on same line, then it will create extra spaces
to solve the problem this hook is created

Mostly on small screens there are line break and on
large screen there are no line break, so default configuration
is set up keeping that in mind but you can change it as
needed by passing appropriate screen size
*/

export const useFormattedLineBreak = () => {
  const { width } = useWindowSizeDetector();

  return useCallback(
    (
      text: string,
      {
        screenSize = ScreenSize.md,
        isGreaterThan = false,
      }: UseFormattedLineBreakOptions = {},
    ) => {
      if (isGreaterThan ? width >= screenSize : width <= screenSize) {
        return text;
      }
      return text.replace(/\n/g, "");
    },
    [width],
  );
};
