"use client";

import useModal from "@/hooks/use-modal";
import Image from "next/image";
import DynamicIcon from "@/components/ui/DynamicIcon";
import PostImg from "@/public/assets/images/singlePost.png";
import { SinglePost } from "@/types";
import PostDetailModal from "@/components/bussiness/PostDetailModal";
import { useRef } from "react";
import PostDeleteModal from "@/components/bussiness/PostDeleteModal";

type SinglePostProp = {
  post: SinglePost;
};
const SinglePost = ({ post }: SinglePostProp) => {
  const { modalProps, handelOpen: showModal } = useModal();
  const isEditingMode = useRef(false);
  const { modalProps: confirmModalProps, handelOpen: showConfirmModal } =
    useModal();

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
        </div>
        <PostDetailModal
          post={post}
          modalProps={modalProps}
          isEditingMode={isEditingMode.current}
        />
        <PostDeleteModal post={post} confirmModalProps={confirmModalProps} />
      </div>
    </>
  );
};

export default SinglePost;
