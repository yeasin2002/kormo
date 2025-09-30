'use client';

import premiumIcon from '@/assets/premium-icon.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  name: string;
  items: {
    name: string;
    href: string;
    isPro?: boolean;
  }[];
}

export function NavItems({ items, name }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="group cursor-pointer font-sans font-bold outline-none focus:outline-none">
          {name}
          <span className="bg-primary block h-[0.20rem] w-0 transition-all group-hover:w-full"></span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {items.map((item, index) => (
          <DropdownMenuItem key={index} className="cursor-pointer">
            <Link href={{ pathname: item.href }}>{item.name}</Link>

            {item.isPro && (
              <Image src={premiumIcon} alt="Premium" width={20} height={20} className="ml-2" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
