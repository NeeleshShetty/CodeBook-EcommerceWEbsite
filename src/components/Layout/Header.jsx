import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png"
import SettingsIcon from '@mui/icons-material/Settings';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
export const Header = () => {
  return (
		<header>
			<nav className="bg-white border-gray-200 dark:bg-gray-900">
				 <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
                <Link to="/" className="flex items-center">
					  <img src={Logo} className="mr-3 h-10" alt="CodeBook Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
                </Link>
                <div className="flex items-center relative">
                    <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 "><SettingsIcon/> </span>
                    <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5"><SearchRoundedIcon /> </span>
                    <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
						  <span className="text-2xl  relative">
							  <ShoppingCartRoundedIcon />
                        <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">0</span>
                    </span>                    
                    </Link>
                    <span className=" cursor-pointer text-2xl text-gray-700 dark:text-white"> <AccountCircleRoundedIcon /> </span>
                </div>
            </div>
			</nav>
		</header>
	);
}
