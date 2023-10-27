"use client";

import dynamic from "next/dynamic";
import useModal from "@/hooks/use-modal";
import Modal from "@/ui/Modal";
import { useForm } from "react-hook-form";
import Input from "@/components/ui/Input";
import { revalidatePosts } from "@/app/actions";
import createSinglePost from "@/app/actions/createSinglePost";
import TextArea from "@/components/ui/TextArea";
import { toast } from "react-toastify";
import Toast from "@/components/ui/Toast";
const DynamicButton = dynamic(() => import("@/components/ui/Button/Button"));

const CreateNewPost = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<any>({});

  const { modalProps: createModalProps, handelOpen: showCreatePostModal } =
    useModal();

  const onSubmit = async (data: any) => {
    const res = await createSinglePost(data);
    if (res?.status === 201 || res?.status === 200) {
      createModalProps.onClose();
      revalidatePosts();
      resetFormState();
      toast("پست جدید با موفقیت ایجاد شد.");
    }
  };

  const resetFormState = () => {
    reset({
      title: "",
      body: "",
      userId: "",
    });
  };

  return (
    <div className='flex flex-col'>
      <div>
        <DynamicButton onClick={showCreatePostModal}>افزودن پست</DynamicButton>
        <Modal {...createModalProps} title='ایجاد پست'>
          <div className='w-[300px] xl:w-[900px]'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col gap-4 p-4'
            >
              <div className='flex flex-col'>
                <div className='grid grid-cols-2 gap-4'>
                  <Input
                    {...register("title")}
                    label='عنوان'
                    className='w-full'
                  />
                  <Input
                    {...register("userId")}
                    label='ایدی کاربر'
                    className='w-full'
                  />
                </div>
                <TextArea
                  {...register("body")}
                  className='w-full'
                  label='توضیحات'
                />
              </div>
              <div className='flex justify-end pt-4 px-4 '>
                <DynamicButton
                  type='submit'
                  className='h-fit'
                  disabled={isSubmitting}
                >
                  ایجاد
                </DynamicButton>
              </div>
            </form>
          </div>
        </Modal>
      </div>
      <div>
        <Toast />
      </div>
    </div>
  );
};

export default CreateNewPost;
