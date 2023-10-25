import { useState } from "react";
import useLockScroll from "./use-lock-scroll";

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { lockScroll, openScroll } = useLockScroll();

  const handelOpen = () => {
    setIsOpen(true);
    lockScroll();
  };

  const handelClose = () => {
    setIsOpen(false);
    openScroll();
  };

  return {
    handelClose,
    handelOpen,
    modalProps: {
      isOpen,
      onClose: handelClose,
    },
  };
}
