const Footer = () => {
  return (
    <div className="w-full">
      <div className="w-full mt-8 bg-black px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 ">
       <div className="flex flex-col text-white">
         <p>Featured Blogs</p>
         <p>Most viewed</p>
         <p>Readers Choice</p>
       </div>

       <div className="flex flex-col text-white">
         <p>Forum</p>
         <p>Support</p>
         <p>Recent Posts</p>
       </div>

       <div className="flex flex-col text-white">
         <p>Privacy Policy</p>
         <p>About Us</p>
         <p>Terms & Conditions</p>
         <p>Terms of Service</p>
       </div>
    </div>
    <hr className="w-full border-t border-gray-600" />
    <p className="py-2 pb-6 text-center text-white bg-black text-sm">All rights reserved @Scribble 2024</p>
    </div>
  )
}

export default Footer
