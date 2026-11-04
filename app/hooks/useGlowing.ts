import { useEffect } from "react";

export default function useGlowing() {
  useEffect(() => {
    window.addEventListener("pointermove", updatePointerPosition);
    return () => window.removeEventListener("pointermove", updatePointerPosition);
  }, []);
}

function updatePointerPosition({ x, y }: PointerEvent) {
  const { style } = document.documentElement;

  style.setProperty("--pointer-x", x + "px");
  style.setProperty("--pointer-y", y + "px");
}
