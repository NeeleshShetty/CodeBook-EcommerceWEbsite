import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png"

export const Header = () => {
  return (
		<header>
			<nav className="bg-white border-gray-200 dark:bg-gray-900">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
					<Link
						to=""
						className="flex items-center space-x-3 rtl:space-x-reverse"
					>
						<img
							src={Logo}
							className="h-8"
							alt="CodeBook Logo"
						/>
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
							CodeBook
						</span>
					</Link>
					<div className="flex items-center ">
						<span className="bi bi-gear-wide-connected"></span>
						<span className=" bi bi-search"></span>
						<span className="bi bi-cart"></span>
						<span className="bi bi-person-circle"></span>
					</div>
				</div>
			</nav>
		</header>
	);
}
