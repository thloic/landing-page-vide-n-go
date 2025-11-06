import Image from "next/image";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Image
      src={"/logo.png"}
      alt="Mediacy"
      width={36}
      height={36}
      className={`cursor-pointer ${className || "w-auto h-auto"}`}
      priority
    />
  );
};