import { BrowserRouter as Router } from "react-router-dom"
import { Footer, Header, ScrollToTop } from "./components";
import { HomePage } from "./pages";
import { AllRoutes } from "./routes/AllRoutes";

const App = () => {
  return (
		<>
			<div className="App dark:bg-darkbg">
			  <Router>
				  <ScrollToTop />
				  <Header />
				  <AllRoutes />
				  <Footer />
        	  </Router>
			</div>
		</>
	);
}

export default App