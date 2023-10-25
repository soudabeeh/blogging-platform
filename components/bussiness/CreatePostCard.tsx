import DynamicIcon from "@/components/ui/DynamicIcon";

const CreatePostCard = () => {
  return (
    <li className='flex justify-start items-center gap-3 mb-5 text-gray-500'>
      <DynamicIcon iconName={"checkCircle"} width={28} height={28} />
      <p className='leading-8'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
    </li>
  );
};

export default CreatePostCard;
