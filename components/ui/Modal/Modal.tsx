import ClientOnlyPortal from "@/helpers/ClientOnlyPortal";
import { IconClose } from "@/public/assets/icons/globalIcons";
import cn from "classnames";

export interface ModalProps {
  isOpen: boolean;
  onClose: (_?: any) => void;
  children: React.ReactNode;
  title?: string;
  fullScreen?: boolean;
  bodyClassName?: string;
  className?: string;
  noHeader?: boolean;
  closable?: boolean;
}

export default function Modal(props: ModalProps) {
  const {
    title,
    isOpen,
    onClose,
    children,
    fullScreen = false,
    bodyClassName,
    className,
    noHeader = false,
    closable = true,
  } = props;

  if (!isOpen) return null;

  return (
    <ClientOnlyPortal selector='body'>
      <div
        className={cn(
          "fixed top-0 p- bottom-0 left-0 right-0 bg-gray-500 z-infinity bg-opacity-50 backdrop-blur-sm flex",
          className
        )}
        onClick={closable ? onClose : undefined}
      >
        <div
          className={cn(
            "bg-white m-auto rounded-3xl overflow-hidden",
            { "h-screen w-screen rounded-none": fullScreen },
            bodyClassName
          )}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {!noHeader ? (
            <div className='py-4 px-6 border-b-[1px] border-gray-200 text-base font-semibold text-gray-700 flex justify-between'>
              <div>{title} </div>
              <div className='cursor-pointer' onClick={onClose}>
                <IconClose />
              </div>
            </div>
          ) : null}
          <div>{children}</div>
        </div>
      </div>
    </ClientOnlyPortal>
  );
}
