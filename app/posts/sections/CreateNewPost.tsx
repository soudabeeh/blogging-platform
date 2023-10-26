"use client";


import dynamic from "next/dynamic";
const DynamicButton = dynamic(() => import("@/components/ui/Button/Button"));


const DynamicInputFile = dynamic(
  () => import("@/components/ui/InputFileWrapper")
);

const CreateNewPost = ()=>{
    return(
        <>
         <DynamicInputFile onSelectFile={() => console.log("onSelectFile")}>
          <DynamicButton>افزودن پست</DynamicButton>
        </DynamicInputFile>
        </>
    )
}

export default CreateNewPost