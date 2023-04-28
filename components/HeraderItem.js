

function HeaderItem({Icon,title}) {
    return (
      <div className="flex flex-col items-center group cursor-pointer w-12 sm:w-8 hover:text-white ">
       <Icon className="h-8 mb-2 group-hover:animate-bounce"/>
         <p className=" opacity-0 group-hover:opacity-100 tracking-widest ">
          {title}
         </p>
      </div>
    )
  }
  
  export default HeaderItem