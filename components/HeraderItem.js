

function HeaderItem({Icon,title}) {
    return (
      <div className="flex flex-col items-center group">
       <Icon className='h-8 mb-2'/>
         <p className=" opacity-0 group-hover:opacity-100 tracking-widest ">
          {title}
         </p>
      </div>
    )
  }
  
  export default HeaderItem