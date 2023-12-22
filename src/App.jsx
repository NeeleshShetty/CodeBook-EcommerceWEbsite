import { BrowserRouter as Router } from "react-router-dom"
import { Footer, Header } from "./components";
import { HomePage } from "./pages";
import { AllRoutes } from "./routes/AllRoutes";

const App = () => {
  return (
		<>
			<div className="App">
			  <Router>
				  <Header />
				  <AllRoutes />
				  <Footer />
        	  </Router>
			</div>
		</>
	);
}

export default App