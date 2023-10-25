import Button from "../Button";
import Modal, { ModalProps } from "../Modal/Modal";

interface Props extends ModalProps {
  message: string;
  acceptTitle: string;
  ignoreTitle?: string;
  onAccept?: () => void;
  onIgnore?: () => void;
}
export default function Dialog(props: Props) {
  const { acceptTitle, ignoreTitle, onAccept, onIgnore, onClose } = props;
  return (
    <Modal {...props}>
      <div className='w-[424px]'>
        <div className='p-6 text-sm text-gray-900 font-medium'>
          {props.message}
        </div>
        <div className='mt-8 mb-6 flex justify-end px-6 gap-2'>
          {ignoreTitle ? (
            <Button variant='outlined' textSize='text-sm' onClick={onIgnore}>
              {ignoreTitle}
            </Button>
          ) : null}
          <Button variant='primary' textSize='text-sm' onClick={onAccept}>
            {acceptTitle}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
