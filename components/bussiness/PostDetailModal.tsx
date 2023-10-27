import Modal from "../ui/Modal";
import dynamic from "next/dynamic";
import Image from "next/image";
import ModalPostImg from "@/public/assets/images/modalPost.png";
import { SinglePost } from "@/types";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/ui/Input";
import TextArea from "../ui/TextArea";
import updateSinglePost from "@/app/actions/updateSinglePost";
import { revalidatePosts } from "@/app/actions";
import { toast } from "react-toastify";
import Toast from "@/components/ui/Toast";

const DynamicAvatar = dynamic(() => import("@/components/ui/Avatar"));
const DynamicButton = dynamic(() => import("@/components/ui/Button/Button"));
const DynamicInput = dynamic(() => import("@/components/ui/Input"));

type PostDetailModal = {
  post: SinglePost;
  modalProps: any;
  isEditingMode?: boolean;
};
const PostDetailModal = ({
  post,
  modalProps,
  isEditingMode,
}: PostDetailModal) => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm();

  const onSubmit = async (data: any) => {
    const postData = {
      id: post.id,
      userId: post.userId,
      ...data,
    };
    const res = await updateSinglePost(postData);
    if (res?.status === 201 || res?.status === 200) {
      modalProps.onClose();
      revalidatePosts();
      toast("پست با موفقیت آپدیت شد.");
    }
  };

  return (
    <>
      <Modal
        {...modalProps}
        title={`کاربر ${post.userId}`}
        bodyClassName={"w-[300px] xl:w-auto"}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='p-6  w-[300px] grid grid-cols-12 gap-6 xl:w-[1000px]'>
            <div className='col-span-12 xl:col-span-5'>
              <div className='flex flex-col justify-between h-full'>
                <div className='flex flex-col gap-6 border-b border-gray-100 pb-4 '>
                  <div className='flex justify-between'>
                    <div className='flex gap-3'>
                      <div className=''>
                        <DynamicAvatar
                          src={""}
                          alt='avatar image of modal post'
                          customContainer={"w-auto h-auto"}
                          imageClassName={{
                            width: "56px",
                            height: "56px",
                          }}
                        />
                      </div>
                      <div className='justify-between'>
                        <Input
                          {...register("title")}
                          className='w-full'
                          label=''
                          defaultValue={post.title}
                          disabled={!isEditingMode}
                        />
                      </div>
                    </div>
                  </div>
                  <TextArea
                    {...register("body")}
                    className='w-full h-[200px]'
                    defaultValue={post.body}
                    disabled={!isEditingMode}
                  />
                </div>

                {isEditingMode && (
                  <div className='flex flex-col pt-4 gap-4 border-t border-gray-100'>
                    <div className='flex gap-3'>
                      <DynamicButton
                        className='h-fit'
                        type={"submit"}
                        disabled={!isDirty}
                        variant={isDirty ? "primary" : "disabled"}
                      >
                        ذخیره تغییرات
                      </DynamicButton>

                      <DynamicInput
                        placeholder='نظر خود را یادداشت کنید...'
                        className={"h-6"}
                        customContainer={"grow-2 w-0"}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className='hidden col-span-7 w-auto h-auto overflow-hidden rounded-bl-3xl rounded-tl-3xl xl:grid'>
              <Image
                src={ModalPostImg}
                alt='Picture of the modal post'
                className='max-w-none'
              />
            </div>
          </div>
        </form>
      </Modal>
      <Toast />
    </>
  );
};

export default PostDetailModal;
