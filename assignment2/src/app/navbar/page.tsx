
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="absolute w-[1322px] h-[91px] left-[59px] text-white mt-10 ">
    
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">BrandName</h1>
        <ul className="flex space-x-8">
          <li> 
            <Link href="/" className="hover:text-blue-400">Home</Link>
          </li>
          <li>
            <Link href="/product"className="hover:text-blue-400">Product</Link>
          </li>
          <li>
            <Link href="/pricing"className="hover:text-blue-400">Pricing</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-400">Contact</Link>
          </li>
        </ul>
        <div className="flex space-x-4">
          <Link href="/login"className="text-sm hover:text-blue-400">Login
          </Link>
         <button className="h-[22px] w-[60px] bg-[#23A6F0] font-montserra-700 text-[14px] "><Link href="/join"className=" text-white rounded-5 hover:bg-blue-600 ">JOIN US
          </Link></button>
        </div>
      </div>
    </nav>
  );
}
