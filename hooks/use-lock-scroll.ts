import { useCallback } from "react";

export default function useLockScroll() {
  const lockScroll = useCallback(() => {
    document.body.classList.add("overflow-hidden");
  }, []);

  const openScroll = useCallback(() => {
    document.body.classList.remove("overflow-hidden");
  }, []);

  return { lockScroll, openScroll };
}
