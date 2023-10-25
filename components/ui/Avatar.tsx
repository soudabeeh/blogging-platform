import { HTMLAttributes, CSSProperties } from "react";
import Image, { ImageProps } from "next/image";
import avatarImg from "@/public/assets/images/Avatar.png";

type Props = ImageProps &
  HTMLAttributes<HTMLElement> & {
    gender?: number | string;
    avatarUrl?: string;
    imageClassName?: CSSProperties;
    customContainer?: string;
    alt?: string;
  };

const Avatar = (props: Props) => {
  const {
    src: avatarUrl,
    gender,
    imageClassName,
    customContainer,
    alt,
    ...rest
  } = props;

  return (
    <div className={`flex items-center justify-center ${customContainer}`}>
      <Image
        //layout="fill"
        src={avatarUrl ? avatarUrl : avatarImg}
        //priority={true}
        {...rest}
        width={40}
        height={40}
        style={imageClassName}
        color='red'
        alt={alt ? alt : "avatar pic"}
      />
    </div>
  );
};

export default Avatar;
