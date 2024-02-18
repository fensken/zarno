import Image from "next/image";

const Logo = () => {
  return (
    <Image
      height={80}
      width={152}
      alt="logo"
      src="/zarno-logo.png"
      className="rounded-md"
    />
  );
};

export default Logo;
