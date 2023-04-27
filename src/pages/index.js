import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeaderItem from '../../components/HeraderItem'
import {
  HomeIcon,
  SearchIcon,
  CollectionIcon,
  UserIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
       <main className={`flex min-h-screen flex-col items-center justify-between p-6 ${inter.className} `}>
      <div className="z-10 w-full max-w-5l items-center justify-between font-mono text-sm lg:flex">
        <Image
              src="/logo.jpg"
              alt="Vikasana Logo"
              
              width={100}
              height={24}
              priority
            />
            
         <HeaderItem title='HOME' Icon={HomeIcon}/>
         <HeaderItem title='SEARCH' Icon={SearchIcon}/>
         <HeaderItem title='ABOUT' Icon={CollectionIcon}/>
         <HeaderItem title='LOG-IN' Icon={UserIcon}/>
        
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
         
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Vikasana Community&nbsp;
        </p>
            
          
        </div>
      </div>

    </main>
    </div>
  )
}
