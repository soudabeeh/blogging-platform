import Modal from "../ui/Modal";
import dynamic from "next/dynamic";
import { SinglePost } from "@/types";
import { revalidatePosts } from "@/app/actions";
import { toast } from "react-toastify";
import deleteSinglePost from "@/app/actions/deleteSinglePost";

const DynamicButton = dynamic(() => import("@/components/ui/Button/Button"));

type PostDeleteModalProps = {
  post: SinglePost;
  confirmModalProps: any;
};

const PostDeleteModal = ({ post, confirmModalProps }: PostDeleteModalProps) => {
  const deletePostItem = async (postId: string) => {
    const deletePost = await deleteSinglePost(postId);
    if (deletePost?.status === 200) {
      confirmModalProps.onClose();
      revalidate();
      toast("پست با موفقیت حذف شد");
    }
  };

  const revalidate = async () => {
    revalidatePosts();
    // await fetch("api/revalidate?path=/posts&secret=BloggingPlatform");
  };
  return (
    <>
      <Modal
        {...confirmModalProps}
        bodyClassName={"w-[300px] xl:w-[425px]"}
        title='حذف'
      >
        <div className='flex flex-col gap-6 p-4'>
          <div className='text-sm'>آیا از حذف این پست اطمینان دارید؟</div>
          <div className='flex justify-end gap-2 items-center'>
            <DynamicButton
              className='h-fit'
              onClick={() => deletePostItem(post.id)}
            >
              حذف
            </DynamicButton>
            <DynamicButton
              variant='text'
              className='h-fit'
              onClick={confirmModalProps.onClose}
            >
              انصراف
            </DynamicButton>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PostDeleteModal;
