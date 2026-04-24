import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/" },
  { icon: <FaLinkedin />, path: "https://linkedin.com/" },
];

type SocialProps = {
  containerStyles?: string;
  iconsStyles?: string;
};

const Social = ({
  containerStyles = "",
  iconsStyles = "",
}: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, idx) => (
        <Link
          href={item.path}
          key={idx}
          target="_blank"
          className={iconsStyles}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;