const Footer = () => {
  return (
    <div className="w-full">
      <div className="w-full mt-8 bg-black px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 ">
       <div className="flex flex-col text-white">
         <p className="hover:text-blue-600 hover:underline underline-offset-1 hover:cursor-pointer">Featured Blogs</p>
         <p className="hover:text-blue-600 hover:underline underline-offset-1 hover:cursor-pointer">Most viewed</p>
         <p className="hover:text-blue-600 hover:underline underline-offset-1 hover:cursor-pointer">Readers Choice</p>
       </div>

       <div className="flex flex-col text-white">
         <p className="hover:text-blue-600 hover:underline underline-offset-1 hover:cursor-pointer">Forum</p>
         <p className="hover:text-blue-600 hover:underline underline-offset-1 hover:cursor-pointer">Support</p>
         <p className="hover:text-blue-600 hover:underline underline-offset-1 hover:cursor-pointer">Recent Posts</p>
       </div>

       <div className="flex flex-col text-white">
         <p className="hover:text-blue-600 hover:underline underline-offset-1 hover:cursor-pointer">Privacy Policy</p>
         <p className="hover:text-blue-600 hover:underline underline-offset-1 hover:cursor-pointer">About Us</p>
         <p className="hover:text-blue-600 hover:underline underline-offset-1 hover:cursor-pointer">Terms & Conditions</p>
         <p className="hover:text-blue-600 hover:underline underline-offset-1 hover:cursor-pointer">Terms of Service</p>
       </div>
    </div>
    <hr className="w-full border-t border-gray-600" />
    <p className="py-2 pb-6 text-center text-white bg-black text-sm">All rights reserved @Scribble 2024</p>
    </div>
  )
}

export default Footer;