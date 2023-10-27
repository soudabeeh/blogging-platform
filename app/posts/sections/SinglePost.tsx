"use client";

import useModal from "@/hooks/use-modal";
import Image from "next/image";
import dynamic from "next/dynamic";
import ModalPostImg from "@/public/assets/images/modalPost.png";
import Modal from "@/ui/Modal";
import DynamicIcon from "@/components/ui/DynamicIcon";
import PostImg from "@/public/assets/images/singlePost.png";
import { SinglePost } from "@/types";
import deleteSinglePost from "@/app/actions/deleteSinglePost";
import { revalidatePosts } from "@/app/actions";
import PostDetailModal from "@/components/bussiness/PostDetailModal";
import { useRef } from "react";
import { toast } from "react-toastify";
import Toast from "@/components/ui/Toast";

const DynamicButton = dynamic(() => import("@/components/ui/Button/Button"));
const DynamicInput = dynamic(() => import("@/components/ui/Input"));

type SinglePostProp = {
  post: SinglePost;
};
const SinglePost = ({ post }: SinglePostProp) => {
  const { modalProps, handelOpen: showModal } = useModal();
  const isEditingMode = useRef(false);
  const { modalProps: confirmModalProps, handelOpen: showConfirmModal } =
    useModal();

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
      <div>
        <div
          onClick={(e) => {
            showModal();
            isEditingMode.current = false;
          }}
          className='m-auto col-span-1 w-full'
        >
          <div className='flex flex-col bg-gray-50 rounded-lg max-h-[300px] min-h-[250px] overflow-hidden'>
            <div className='flex justify-between'>
              <div>
                <Image
                  src={PostImg}
                  alt='Picture of the post'
                  className='w-[100px]'
                />
                <p className='text-base font-semibold p-2'>{post.title}</p>
              </div>
              <div className='flex gap-4 pt-2 pl-4'>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    showConfirmModal();
                  }}
                >
                  <DynamicIcon iconName={"trash"} />
                </div>
                <div
                  onClick={(e) => {
                    showModal();
                    e.stopPropagation();
                    isEditingMode.current = true;
                  }}
                >
                  <DynamicIcon iconName={"edit"} />
                </div>
              </div>
            </div>
            <div className='p-2'>
              <div className='overflow-hidden text-ellipsis'>{post.body}</div>
            </div>
          </div>
          {/* <div className='flex gap-4 absolute top-0 h-full hover:backdrop-blur w-full'>
            <div className='absolute flex top-0 right-10 justify-center h-full items-center left-10 gap-6 opacity-0 hover:opacity-100'>
              <div onClick={showConfirmModal}>
                <DynamicIcon iconName={"trash"} />
              </div>
              <div onClick={showModal}>
                <DynamicIcon iconName={"edit"} />
              </div>
            </div>
          </div> */}
        </div>
        <PostDetailModal
          post={post}
          modalProps={modalProps}
          isEditingMode={isEditingMode.current}
        />
        <Modal {...confirmModalProps} bodyClassName={"w-[425px]"} title='حذف'>
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
      </div>
      <div>
        <div
          onClick={(e) => {
            showModal();
            isEditingMode.current = false;
          }}
          className='m-auto col-span-1 w-full'
        >
          <div className='flex flex-col bg-gray-50 rounded-lg max-h-[300px] min-h-[250px] overflow-hidden'>
            <div className='flex justify-between'>
              <div>
                <Image
                  src={PostImg}
                  alt='Picture of the post'
                  className='w-[100px]'
                />
                <p className='text-base font-semibold p-2'>{post.title}</p>
              </div>
              <div className='flex gap-4 pt-2 pl-4'>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    showConfirmModal();
                  }}
                >
                  <DynamicIcon iconName={"trash"} />
                </div>
                <div
                  onClick={(e) => {
                    showModal();
                    e.stopPropagation();
                    isEditingMode.current = true;
                  }}
                >
                  <DynamicIcon iconName={"edit"} />
                </div>
              </div>
            </div>
            <div className='p-2'>
              <div className='overflow-hidden text-ellipsis'>{post.body}</div>
            </div>
          </div>
          {/* <div className='flex gap-4 absolute top-0 h-full hover:backdrop-blur w-full'>
            <div className='absolute flex top-0 right-10 justify-center h-full items-center left-10 gap-6 opacity-0 hover:opacity-100'>
              <div onClick={showConfirmModal}>
                <DynamicIcon iconName={"trash"} />
              </div>
              <div onClick={showModal}>
                <DynamicIcon iconName={"edit"} />
              </div>
            </div>
          </div> */}
        </div>
        <PostDetailModal
          post={post}
          modalProps={modalProps}
          isEditingMode={isEditingMode.current}
        />
        <Modal {...confirmModalProps} bodyClassName={"w-[425px]"} title='حذف'>
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
      </div>
    </>
  );
};

export default SinglePost;
