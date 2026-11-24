import { useEffect, useState } from "react";

/** Ticks a number up one by one, slowing down as it reaches the target. */
export default function useCountUp(target, active, duration = 2200) {
  const [value, setValue] = useState(target);

  useEffect(() => {
    if (!active) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return undefined;
    }
    const from = Math.max(0, target - (target < 100 ? 15 : 45));
    let start = null;
    let frame;
    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from + (target - from) * eased));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    setValue(from);
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return value;
}
