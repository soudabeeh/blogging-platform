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
import getAllPosts from "@/app/actions/getAllPosts";

const DynamicButton = dynamic(() => import("@/components/ui/Button/Button"));
const DynamicAvatar = dynamic(() => import("@/components/ui/Avatar"));
const DynamicInput = dynamic(() => import("@/components/ui/Input"));

type SinglePostProp = {
  post: SinglePost;
};
const SinglePost = ({ post }: SinglePostProp) => {
  const { modalProps, handelOpen: showModal } = useModal();
  const { modalProps: detailModalProps, handelOpen: showDetailModal } =
    useModal();

  const deletePostItem = async (postId: string) => {
    const deletePost = await deleteSinglePost(postId);
    if (deletePost?.status === 200) {
      detailModalProps.onClose();
      await getAllPosts();
    }
  };
  return (
    <>
      <div className='m-auto col-span-1 w-full'>
        <div className='relative'>
          <div className='flex flex-col bg-gray-50 rounded-lg'>
            <div className='flex'>
              <Image
                src={PostImg}
                alt='Picture of the post'
                className='w-[100px]'
              />
              <p className='text-base font-semibold p-2'>{post.title}</p>
            </div>
            <div className='p-2'>
              <div>{post.body}</div>
            </div>
          </div>
          <div className='flex gap-4 absolute top-0 h-full hover:backdrop-blur w-full'>
            <div className='absolute flex top-0 right-10 justify-center h-full items-center left-10 gap-6 opacity-0 hover:opacity-100'>
              <div onClick={showDetailModal}>
                <DynamicIcon iconName={"trash"} />
              </div>
              <div onClick={showModal}>
                <DynamicIcon iconName={"edit"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal {...modalProps} title='افزودن عکس'>
        <div className='p-6  w-[1000px] grid grid-cols-12 gap-6'>
          <div className='col-span-5'>
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
                      <div className='text-gray-700 font-semibold text-base leading-7'>
                        {post.title}
                      </div>
                    </div>
                  </div>
                </div>
                <p className='text-sm font-normal leading-7'>{post.body}</p>
              </div>

              <div className='flex flex-col pt-4 gap-4 border-t border-gray-100'>
                <div className='flex gap-3'>
                  <DynamicButton className='h-fit'>ذخیره تغییرات</DynamicButton>

                  <DynamicInput
                    placeholder='نظر خود را یادداشت کنید...'
                    className={"h-6"}
                    customContainer={"grow-2 w-0"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-7 w-auto h-auto overflow-hidden rounded-bl-3xl rounded-tl-3xl'>
            <Image
              src={ModalPostImg}
              alt='Picture of the modal post'
              className='max-w-none'
            />
          </div>
        </div>
      </Modal>
      <Modal {...detailModalProps} bodyClassName={"w-[425px]"} title='حذف'>
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
              onClick={detailModalProps.onClose}
            >
              انصراف
            </DynamicButton>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SinglePost;
