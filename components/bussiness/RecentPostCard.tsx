import Image from "next/image";
import PostImg from "@/public/assets/images/post.png";
import dynamic from "next/dynamic";

const DynamicAvatar = dynamic(() => import("@/components/ui/Avatar"));

const RecentPostCard = () => {
  return (
    <div className='flex flex-col py-3 px-4 border-2 border-gray-200 rounded-xl'>
      <div className='flex items-center gap-3'>
        <DynamicAvatar
          src={""}
          alt='avatar image of header'
          customContainer={"cursor-pointer"}
        />
        <div className='text-base font-semibold'>نام کاربر</div>
      </div>

      <div className='py-3'>
        <Image src={PostImg} alt='Picture of post' height={246} />
      </div>

      <div className='w-61 leading-8'>
        نام کاربری لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
        ...
      </div>
    </div>
  );
};

export default RecentPostCard;
