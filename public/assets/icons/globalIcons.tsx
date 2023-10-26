type iconT = {
  width?: number;
  height?: number;
  customClass?: string;
  stroke?: string;
};

export const HomeIcon = ({ width = 32, height = 32, customClass }: iconT) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    width={width}
    height={height}
  >
    <path
      className={customClass}
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
    />
  </svg>
);

export const AccountIcon = ({
  width = 16,
  height = 16,
  customClass,
}: iconT) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    viewBox='0 0 16 16'
    fill='none'
  >
    <path
      className={customClass}
      d='M8.10671 7.24665C8.04004 7.23998 7.96004 7.23998 7.88671 7.24665C6.30004 7.19331 5.04004 5.89331 5.04004 4.29331C5.04004 2.65998 6.36004 1.33331 8.00004 1.33331C9.63337 1.33331 10.96 2.65998 10.96 4.29331C10.9534 5.89331 9.69337 7.19331 8.10671 7.24665Z'
      stroke={"#344054"}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      className={customClass}
      d='M4.77323 9.70669C3.1599 10.7867 3.1599 12.5467 4.77323 13.62C6.60657 14.8467 9.61323 14.8467 11.4466 13.62C13.0599 12.54 13.0599 10.78 11.4466 9.70669C9.6199 8.48669 6.61323 8.48669 4.77323 9.70669Z'
      stroke={"#344054"}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const IconClose = ({ width = 24, height = 24, customClass }: iconT) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g id='vuesax/linear/Close'>
      <path
        className={customClass}
        id='Icon'
        d='M18 6L6 18M6 6L18 18'
        stroke='#344054'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
  </svg>
);

export const SmileIcon = ({ width = 24, height = 24, customClass }: iconT) => (
  <svg
    className={customClass}
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    viewBox='0 0 25 24'
    fill='none'
  >
    <path
      d='M8.25 14C8.25 14 9.75 16 12.25 16C14.75 16 16.25 14 16.25 14M9.25 9H9.26M15.25 9H15.26M22.25 12C22.25 17.5228 17.7728 22 12.25 22C6.72715 22 2.25 17.5228 2.25 12C2.25 6.47715 6.72715 2 12.25 2C17.7728 2 22.25 6.47715 22.25 12Z'
      stroke='#EC4A0A'
      strokeWidth='2'
    />
  </svg>
);

export const LogOutIcon = ({ width = 16, height = 16, customClass }: iconT) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    viewBox='0 0 16 16'
    fill='none'
  >
    <path
      className={customClass}
      d='M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6M10.6667 11.3333L14 8M14 8L10.6667 4.66667M14 8H6'
      stroke={"#344054"}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const TrashIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    stroke-width='1.5'
    stroke='currentColor'
    className='w-6 h-6'
  >
    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
    />
  </svg>
);

export const EditIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    stroke-width='1.5'
    stroke='currentColor'
    className='w-6 h-6'
  >
    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
    />
  </svg>
);

export const iconComponents: any = {
  home: HomeIcon,
  account: AccountIcon,
  logOut: LogOutIcon,
  smile: SmileIcon,
  close: IconClose,
  trash: TrashIcon,
  edit: EditIcon,
};
