import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { CircleUser, LogOut } from 'lucide-react'

const user = {}

const Navbar = () => {
  return (
    <header className='navbar'>
        <nav>
            <Link href="/" >
               <Image src="/assets/icons/logo.svg" alt='Logo - ClipSathi' quality={100} width={32} height={32} />
                <h1 className=''>ClipSathi</h1>     
            </Link>
{
    user && (
        <figure>
            <Button>
                <Image
                src="/assets/images/dummy.jpg"
                alt="User"
                width={32}
                height={32}
                className="rounded-full aspect-square"
              />
            </Button>
            <Button className='cursor-pointer'>
          <Image
                src="/assets/icons/logout.svg"
                alt="logout"
                width={24}
                height={24}
                className="rotate-180"
              />
            </Button>
        </figure>
    )
}
        </nav>

    </header>
  )
}

export default Navbar