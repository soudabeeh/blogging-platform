"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import ModalPostImg from "@/public/assets/images/modalPost.png";
import Modal from "@/ui/Modal";
import DynamicIcon from "@/components/ui/DynamicIcon";

const DynamicButton = dynamic(() => import("@/components/ui/Button/Button"));
const DynamicAvatar = dynamic(() => import("@/components/ui/Avatar"));
const DynamicInput = dynamic(() => import("@/components/ui/Input"));


type List={
  modalProps:any
  showDetailModal:any
  detailModalProps:any
}

const ListOfPosts = ({modalProps,showDetailModal,detailModalProps}:List)=>{
   
  
    return(
       <>
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
                        فرانک حیدری
                      </div>
                      <div className='text-gray-500 font-normal text-sm'>
                        تهران، ایران
                      </div>
                    </div>
                  </div>
                  <div onClick={showDetailModal} className='cursor-pointer'>
                    <DynamicIcon iconName={"detail"} />
                  </div>
                </div>
                <p className='text-sm font-normal leading-7'>
                  فرانک حیدری لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                  صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                  <p className='text-blue-500'>#پت</p>
                </p>
              </div>
              <div className='flex flex-col gap-6  py-4'>
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-2'>
                    <div>
                      <DynamicAvatar
                        src={""}
                        alt='avatar image of chat post'
                        customContainer={"w-auto h-auto"}
                      />
                    </div>
                    <div className='flex flex-col  w-3/4 gap-2'>
                      <div className='py-2 px-3  flex flex-col bg-gray-50 rounded-tr-sm rounded-tl-20 rounded-bl-lg rounded-br-20'>
                        <div className='text-xs font-bold leading-6'>
                          فرزانه خزائی
                        </div>
                        <div className='text-xs font-normal  leading-6'>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ
                        </div>
                        <div className='flex-end text-gray-500 text-xs font-normal'>
                          ۱۰:۴۵
                        </div>
                      </div>
                      <div className='flex justify-between'>
                        <div className='text-xxs text-gray-500'>پاسخ</div>
                        <div>
                          <DynamicIcon iconName={"heart"} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='flex gap-2 justify-end'>
                    <div>
                      <DynamicAvatar
                        src={""}
                        alt='avatar image of chat post'
                        customContainer={"w-auto h-auto"}
                      />
                    </div>
                    <div className='flex flex-col  w-3/4 gap-2'>
                      <div className='py-2 px-3  flex flex-col bg-gray-50 rounded-tr-sm rounded-tl-20 rounded-bl-lg rounded-br-20'>
                        <div className='text-xs font-bold leading-6'>
                          فرانک حیدری
                        </div>
                        <div className='text-xs font-normal  leading-6'>
                          لورم ایپسوم متن ساختگی با تولید سادگی.
                        </div>
                        <div className='flex-end text-gray-500 text-xs font-normal'>
                          ۱۰:۴۵
                        </div>
                      </div>
                      <div className='flex justify-between'>
                        <div className='text-xxs text-gray-500'>پاسخ</div>
                        <DynamicIcon iconName={"heart"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col pt-4 gap-4 border-t border-gray-100'>
                <div className='flex justify-between'>
                  <div className='flex gap-4'>
                    <DynamicIcon
                      iconName={"heart"}
                      width={24}
                      height={24}
                      stroke={"black"}
                    />
                    <DynamicIcon
                      iconName={"message"}
                      width={24}
                      height={24}
                      stroke={"black"}
                    />
                    <DynamicIcon
                      iconName={"send"}
                      width={24}
                      height={24}
                      stroke={"black"}
                    />
                  </div>
                  <DynamicIcon
                    iconName={"archive"}
                    width={24}
                    height={24}
                    stroke={"black"}
                  />
                </div>
                <div className='flex justify-between'>
                  <div className='text-sm font-normal leading-7 text-gray-500'>
                    8 اردیبهشت
                  </div>
                  <div className='text-sm font-normal leading-7 text-gray-500'>
                    ۲۰ لایک و ۲۴ کامنت
                  </div>
                </div>
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
      <Modal {...detailModalProps} bodyClassName={"w-[425px]"} noHeader>
        <div className='flex flex-col gap-2'>
          <div className='py-4 px-6 text-center border-b border-gray-100 text-base font-semibold text-primary-600 leading-7'>
            حذف
          </div>
          <div className='py-4 px-6 text-center  border-b border-gray-100'>
            ویرایش
          </div>
          <div className='py-4 px-6 text-center  border-b border-gray-100'>
            مخفی کردن نظرات
          </div>
          <div className='py-4 px-6 text-center  border-b border-gray-100'>
            بستن
          </div>
        </div>
      </Modal>
       </>
    )
}

export default ListOfPosts