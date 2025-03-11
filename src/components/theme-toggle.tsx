'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'


export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Button variant='ghost' size='sm' onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
      {resolvedTheme === 'dark' ? <SunIcon className='h-4 w-4 text-orange-300' /> : <MoonIcon className='h-4 w-4 text-orange-300' />}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}