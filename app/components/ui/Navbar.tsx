'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Phone, Menu, ChevronDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname()
  return (
    <Link
      href={href}
      className={cn(
        'text-base font-medium transition-colors hover:text-primary',
        pathname === href
          ? 'text-black dark:text-white'
          : 'text-muted-foreground'
      )}
    >
      {children}
    </Link>
  )
}

export function Navbar({ logo = "/barthrooms/ghlogo.jpeg" }: { logo?: string }) {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
      isScrolled && 'shadow-lg'
    )}>
      <div className="container flex h-24 items-center">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center pl-[2rem]">
            <Image src={logo} alt="Goldman Holdings Logo" width={180} height={48} className="h-12 w-auto max-h-12" />
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-base font-medium">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about-us">About Us</NavItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-base hover:bg-transparent focus:ring-0 cursor-pointer">
                  Industries
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-[200px]">
                <DropdownMenuItem asChild>
                  <Link href="/construction" className="cursor-pointer py-1">Construction</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/environmental" className="cursor-pointer">Environmental</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/manufacturing" className="cursor-pointer py-1">Manufacturing</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <NavItem href="/gallary">Partners</NavItem>
          </nav>
          <div className="flex items-center space-x-4">
            <Button asChild className="hidden md:inline-flex" variant="outline">
              <Link href="tel:+27634582860">
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="pr-14 text-base  hover:bg-transparent focus:ring-0 md:hidden">
                  <Menu className="h-10 w-10 " />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <Link href="/" className="flex items-center pl-4">
                  <Image src={logo} alt="Goldman Holdings Logo" width={180} height={48} className="h-12 w-auto max-h-12" />
                </Link>
                <nav className="mt-8 flex flex-col space-y-4">
                  <NavItem href="/">Home</NavItem>
                  <NavItem href="/about-us">About Us</NavItem>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="industries">
                      <AccordionTrigger className="text-base font-medium">Industries</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2 pl-4">
                          <NavItem href="/construction">Construction</NavItem>
                          <NavItem href="/environmental">Environmental</NavItem>
                          <NavItem href="/manufacturing">Manufacturing</NavItem>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <NavItem href="/gallary">Partners</NavItem>
                  <Button asChild variant="outline" className="mt-4">
                    <Link href="tel:+27634582860">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Us
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

