import { Link } from "react-router-dom";
import { DropdownLoggedIn, DropdownLoggedOut } from "../../components";
import Logo from "../../assets/logo.png"
import SettingsIcon from '@mui/icons-material/Settings';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useEffect, useState } from "react";
import { Search } from "../Sections/Search";
import { CartList } from "../../pages/Cart/components/CartList";
import { useCart } from "../../context";
export const Header = () => {
    const [dark, setDark] = useState(JSON.parse(localStorage.getItem("darkmode")) || false);
	const [showSearch, setShowSearch] = useState(false);
	const [dropDown, setDropDown] = useState(false);
	const token = JSON.parse(sessionStorage.getItem("token"))
	const { cartList } = useCart();
    useEffect(() => {
        localStorage.setItem("darkmode", JSON.stringify(dark));

        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    },[dark])
  return (
		<header>
			<nav className="bg-white border-gray-200 dark:bg-gray-900">
				<div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
					<Link
						to="/"
						className="flex items-center"
					>
						<img
							src={Logo}
							className="mr-3 h-10"
							alt="CodeBook Logo"
						/>
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
							CodeBook
						</span>
					</Link>
					<div className="flex items-center relative">
						<span
							onClick={() => setDark(!dark)}
							className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 "
						>
							<SettingsIcon />
						</span>
						<span
							onClick={() => setShowSearch(!showSearch)}
							className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5"
						>
							<SearchRoundedIcon />
						</span>
						<Link
							to="/cart"
							className="text-gray-700 dark:text-white mr-5"
						>
							<span className="text-2xl  relative">
								<ShoppingCartRoundedIcon />
								<span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
									{cartList.length}
								</span>
							</span>
						</Link>
						<span onClick={()=> setDropDown(!dropDown)} className=" cursor-pointer text-2xl text-gray-700 dark:text-white">
							
							<AccountCircleRoundedIcon />
					  </span>
					  {dropDown && (token ? <DropdownLoggedIn setDropDown={setDropDown} /> : <DropdownLoggedOut setDropDown={setDropDown} />)  }
					</div>
				</div>
			</nav>
			
			{showSearch && <Search setShowSearch={setShowSearch} />}
		</header>
	);
}
