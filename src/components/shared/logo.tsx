import logoImg from '@/assets/logo.png';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Props {
  textClassName: string;
  className?: string;
}

export const Logo = ({ className, textClassName }: Props) => {
  return (
    <div className="flex items-center gap-x-2">
      <Image src={logoImg} alt="Logo" className={cn(`size-10`, className)} />
      <span className={cn('font-head', textClassName)}>Kormo Setu</span>
    </div>
  );
};
