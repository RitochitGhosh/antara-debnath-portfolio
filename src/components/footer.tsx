import { GithubIcon, InstagramIcon, LinkedinIcon, LucideTwitter } from 'lucide-react';
import Link from 'next/link';

const navigation = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/antara-debnath-276a25308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: LinkedinIcon
  },
  {
    name: 'GitHub',
    href: '#',
    icon: GithubIcon
  },
  {
    name: 'Twitter',
    href: '#',
    icon: LucideTwitter
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/an_tara65?igsh=MTB3ZmoweXZpMTcwNA==',
    icon: InstagramIcon
  },
]

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} RG. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {navigation.map(({ href, name, icon: Icon }) => (
              <Link href={href} key={name} className='text-muted-foreground hover:text-foreground transition-colors'>
                <Icon className='w-4 h-4' />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
