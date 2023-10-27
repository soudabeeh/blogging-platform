import DynamicIcon from "@/components/ui/DynamicIcon";
import Avatar from "@/components/ui/Avatar";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className='flex  bg-white px-4  pt-4 pb-2  m-auto border-b border-gray-200 lg:px-16'>
        <div className='flex  items-center w-full justify-between'>
          <Link href={"/"}>
            <DynamicIcon iconName={"home"} />
          </Link>

          <div className='flex  left-0 gap-4 items-center'>
            <Avatar
              src={""}
              alt='avatar image of header'
              customContainer={"cursor-pointer"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
