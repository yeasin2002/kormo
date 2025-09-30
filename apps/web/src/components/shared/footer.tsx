import { contactSocialList } from '@/data/contact-social-list';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '../retroui';
import { Logo } from './logo';
import { Newsletter } from './Newsletter';

export const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="lg:col-span-1">
              <Logo />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Making job searching less frustrating.
              </p>
              <div className="flex space-x-4">
                {contactSocialList.map((social) => (
                  <Link
                    href={social.link}
                    key={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({
                        variant: 'outline',
                        size: 'icon',
                      }),
                      'border-border hover:bg-muted rounded-lg border-2',
                    )}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            <Newsletter />
          </div>
        </div>
      </div>
    </footer>
  );
};
