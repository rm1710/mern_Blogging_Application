import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa'; // Corrected import

export default function Header() {
  return (
    <Navbar className="border-b-2 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center w-full">
        {/* Logo and Title */}
        <Link to="/" className="text-sm sm:text-xl font-semibold dark:text-white">
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg text-white">
            Ritesh's
          </span>{' '}
          Blogs
        </Link>
        
        {/* Search Form for Larger Screens */}
        <form className="hidden lg:flex items-center ml-auto mr-16">
          <div className="relative">
            <TextInput
              type="text"
              placeholder="Search..."
              className="pr-12 pl-4 py-2 border-2 border-gray-300 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 transition-all duration-300 ease-in-out hover:border-indigo-400 w-48"
            />
            <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-indigo-500 text-xl transition-all duration-200" />
          </div>
        </form>
        
        {/* Search Button for Mobile Screens */}
        <Button className="lg:hidden w-10 h-10 flex items-center justify-center" color="gray" pill>
          <AiOutlineSearch className="text-xl" />
        </Button>

        <div>
          {/* Dark Mode Button */}
          <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
            <FaMoon />
          </Button>

          {/* Sign In Button */}
          <Link to='/signin'>
            <Button className="ml-2 w-15 h-10 hidden sm:inline" color="gray" pill>
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </Navbar>
  );
}
