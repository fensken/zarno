import Image from "next/image";

const Logo = () => {
  return (
    <Image
      height={80}
      width={100}
      alt="logo"
      src="/logo.png"
      className="rounded-md"
    />
  );
};

export default Logo;
