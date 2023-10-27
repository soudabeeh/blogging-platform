import React, { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Button.module.css";
import Link from "next/link";

type TButtonVaraint =
  | "primary"
  | "secondary"
  | "text"
  | "outlined"
  | "disabled";
type TButtonSize = "sm" | "md" | "xl" | "2xl";
type TButtonTextSize = "text-sm" | "text-base";

type Props = {
  variant?: TButtonVaraint;
  size?: TButtonSize;
  iconRight?: JSX.Element;
  iconLeft?: JSX.Element;
  textSize?: TButtonTextSize;
  isLinked?: boolean;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: any;
  disabled?: any;
};

const buttonStyles = {
  variant: {
    primary:
      "min-w-[112px] rounded-xl bg-primary-600 text-white  font-semibold ",
    secondary: " ",
    text: " min-w-[112px] rounded-xl  text-gray-700  font-semibold border-1 border-gray-300 ",
    outlined:
      "rounded-xl  font-semibold  order border border-gray-300 flex justify-center",
    disabled:
      "rounded-xl  font-regular  order flex justify-center text-gray-400 bg-gray-100",
  },
  loading: {
    primary: "",
    secondary: "",
    text: "",
    outlined: "",
  },
  size: {
    "sm": "",
    "md": "",
    "xl": "",
    "2xl": "",
  },
  theme: {
    error: {
      primary: "",
      secondary: "",
      text: "",
    },
    simple: {
      primary: "",
      secondary: "",
      text: "",
    },
  },
  block: "w-full",
};

const Button = (props: Props) => {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    iconRight,
    iconLeft,
    textSize = "text-base",
    isLinked = false,
    href = "#",
  } = props;
  const buttonStyle = cn(
    className,
    styles.root,
    buttonStyles.variant[variant],
    buttonStyles.size[size],
    { "py-3 px-6": children },
    { "h-13 w-14": !children },
    { "gap-2": children && (iconRight || iconLeft) },
    textSize
  );

  const childJsx = (
    <>
      {" "}
      {iconRight ? iconRight : null}
      {children}
      {iconLeft ? iconLeft : null}
    </>
  );

  return (
    <>
      {isLinked ? (
        <Link
          {...props}
          className={buttonStyle}
          href={href}
          passHref
          prefetch={false}
        >
          {childJsx}
        </Link>
      ) : (
        <>
          {" "}
          <button {...props} className={buttonStyle}>
            {childJsx}
          </button>
        </>
      )}
    </>
  );
};

export default Button;
