import { ReactNode, useEffect, useState } from "react";

import { Round } from "./Avatar.style";

type AvatarPropsType = {
  children: ReactNode;
  size: string;
};

const Avatar = ({ children, size }: AvatarPropsType) => {
  const [randomColor, setRandomColor] = useState("");

  useEffect(() => {
    let random = "#";
    while (random.length < 7) {
      random += Math.floor(Math.random() * 0x10).toString(16);
    }
    setRandomColor(random);
  }, []);

  return (
    <Round bg={randomColor} size={size} data-testid="avatar">
      {children}
    </Round>
  );
};

export default Avatar;
