'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog'
import { Menu } from 'lucide-react'
import ThemeToggle from '@/components/theme-toggle'


export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className='bg-background/75 fixed inset-x-0 top-0 z-50 mx-auto max-w-2xl py-4 backdrop-blur-sm sm:max-w-3xl lg:max-w-4xl'>
      <nav className='container flex items-center justify-between px-8 sm:mx-10'>
        {/* Logo */}
        <Link href='/' className='font-serif text-2xl font-bold'>
          AD
        </Link>

        {/* Desktop Navigation */}
        <ul className='text-muted-foreground hidden items-center gap-6 text-sm font-light md:flex'>
          <li>
            <Link href='/about-me' className='hover:text-foreground/80 transition-colors'>
              About
            </Link>
          </li>
          <li>
            <Link href='/posts' className='hover:text-foreground/80 transition-colors'>
              Posts
            </Link>
          </li>
          <li>
            <Link href='/projects' className='hover:text-foreground/80 transition-colors'>
              Projects
            </Link>
          </li>
          <li>
            <Link href='/contact' className='hover:text-foreground/80 transition-colors'>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu & Theme Toggle */}
        <div className='flex items-center gap-4'>
          <ThemeToggle />
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className='hover:bg-muted rounded-md p-2 transition md:hidden'>
                <Menu className='h-6 w-6' />
              </button>
            </DialogTrigger>
            <DialogTitle className='sr-only'>Menu</DialogTitle>
            <DialogContent className='bg-background w-72 rounded-lg p-6'>
              <ul className='text-muted-foreground flex flex-col gap-4 text-lg font-light'>
                <li>
                  <Link href='/#about' onClick={() => setOpen(false)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href='/posts' onClick={() => setOpen(false)}>
                    Posts
                  </Link>
                </li>
                <li>
                  <Link href='/projects' onClick={() => setOpen(false)}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href='/contact' onClick={() => setOpen(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </DialogContent>
          </Dialog>
        </div>
      </nav>
    </header>
  )
}
