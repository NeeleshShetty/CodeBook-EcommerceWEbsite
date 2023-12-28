import { BrowserRouter as Router } from "react-router-dom"
import { Footer, Header, ScrollToTop } from "./components";
import { HomePage } from "./pages";
import { AllRoutes } from "./routes/AllRoutes";
import { FilterProvider } from "./context";
const App = () => {
  return (
		<>
			<div className="App dark:bg-darkbg">
				<Router>
					<FilterProvider>
						<ScrollToTop />
						<Header />
						<AllRoutes />
						<Footer />
					</FilterProvider>
				</Router>
			</div>
		</>
	);
}

export default App