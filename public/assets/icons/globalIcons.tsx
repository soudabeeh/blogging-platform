
type iconT = {
  width?: number;
  height?: number;
  customClass?: string;
  stroke?: string;
};

export const HomeIcon = ({  width = 32,
    height = 32,customClass }: iconT) => (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      width={width}
      height={height}
    >
      <path
        className={customClass}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
);


export const AccountIcon = ({
  width = 16,
  height = 16,
  customClass,
}: iconT) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      className={customClass}
      d="M8.10671 7.24665C8.04004 7.23998 7.96004 7.23998 7.88671 7.24665C6.30004 7.19331 5.04004 5.89331 5.04004 4.29331C5.04004 2.65998 6.36004 1.33331 8.00004 1.33331C9.63337 1.33331 10.96 2.65998 10.96 4.29331C10.9534 5.89331 9.69337 7.19331 8.10671 7.24665Z"
      stroke={"#344054"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      className={customClass}
      d="M4.77323 9.70669C3.1599 10.7867 3.1599 12.5467 4.77323 13.62C6.60657 14.8467 9.61323 14.8467 11.4466 13.62C13.0599 12.54 13.0599 10.78 11.4466 9.70669C9.6199 8.48669 6.61323 8.48669 4.77323 9.70669Z"
      stroke={"#344054"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconClose = ({
  width = 24,
  height = 24,
  customClass,
}: iconT) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="vuesax/linear/Close">
      <path
        className={customClass}
        id="Icon"
        d="M18 6L6 18M6 6L18 18"
        stroke="#344054"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export const SmileIcon = ({
  width = 24,
  height = 24,
  customClass,
}: iconT) => (
  <svg
  className={customClass}
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill="none"
  >
    <path
      d="M8.25 14C8.25 14 9.75 16 12.25 16C14.75 16 16.25 14 16.25 14M9.25 9H9.26M15.25 9H15.26M22.25 12C22.25 17.5228 17.7728 22 12.25 22C6.72715 22 2.25 17.5228 2.25 12C2.25 6.47715 6.72715 2 12.25 2C17.7728 2 22.25 6.47715 22.25 12Z"
      stroke="#EC4A0A"
      strokeWidth="2"
    />
  </svg>
);

export const LogOutIcon = ({ width = 16, height = 16, customClass }: iconT) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      className={customClass}
      d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6M10.6667 11.3333L14 8M14 8L10.6667 4.66667M14 8H6"
      stroke={"#344054"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);





export const iconComponents: any = {
  home: HomeIcon,
  account: AccountIcon,
  logOut: LogOutIcon,
  smile: SmileIcon,
  close: IconClose,
};
