import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeaderItem from '../../components/HeraderItem'
import {
  HomeIcon,
  SearchIcon,
  CollectionIcon,
  UserIcon,

} from "@heroicons/react/outline";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
       <header className="flex flex-col sm:flex-row m-1 justify-between items-center h-auto${inter.className}">
    
      
          
       
          <div className="flex h-8 w-full   bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
             <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-4 pt-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                Vikasana Community&nbsp;
             </p>
             
 
         </div>
         <div className="flex pt-8 flex-grow justify-evenly max-w-2xl ">
         <HeaderItem title='HOME' Icon={HomeIcon}/>
         <HeaderItem title='SEARCH' Icon={SearchIcon}/>
         <HeaderItem title='ABOUT' Icon={CollectionIcon}/>
         <HeaderItem title='LOGIN' Icon={UserIcon}/>
         </div>
     
          
        
          
    <Image
          src="/logo.jpg"
          alt="Vikasana Logo"
          
          width={70}
          height={24}
          
          
        />
        
        
    
     
    </header>
    <main>
      <section className="scroll-m-5">
       
      </section>
    </main>
    </div>
  )
}




      