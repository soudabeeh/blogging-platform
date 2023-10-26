import { MoonLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className='mx-auto flex h-[75vh] items-center justify-center sm:h-[65vh] lg:h-[70vh] '>
      <MoonLoader color='#36d7b7' />
    </div>
  );
};
export default Loader;
