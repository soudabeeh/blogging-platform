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
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const DynamicButton = dynamic(() => import("@/components/ui/Button/Button"));

type TPostForm = {
  title: string;
  body: string;
  userId: string;
};

const ProfileFormVS: Yup.ObjectSchema<TPostForm> = Yup.object().shape({
  title: Yup.string().required("لطفا عنوان را وارد کنید"),
  body: Yup.string().required("لطفا توضیحات را وارد کنید"),
  userId: Yup.string().required("لطفا آیدی کاربر را وارد کنید"),
});

const CreateNewPost = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<TPostForm>({ resolver: yupResolver(ProfileFormVS) });

  const { modalProps: createModalProps, handelOpen: showCreatePostModal } =
    useModal();

  const onSubmit = async (data: any) => {
    const res = await createSinglePost(data);
    if (res?.status === 201 || res?.status === 200) {
      createModalProps.onClose();
      revalidatePosts();
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
        <DynamicButton
          onClick={() => {
            showCreatePostModal();
            clearErrors(["title", "body", "userId"]);
            resetFormState();
          }}
        >
          افزودن پست
        </DynamicButton>
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
                    errorMessage={errors?.title?.message}
                  />
                  <Input
                    {...register("userId")}
                    label='ایدی کاربر'
                    className='w-full'
                    errorMessage={errors?.userId?.message}
                  />
                </div>
                <TextArea
                  {...register("body")}
                  className='w-full'
                  label='توضیحات'
                  errorMessage={errors?.body?.message}
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
