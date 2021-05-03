import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import React from "react";
// pages
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Redirect from "./pages/Redirect";

// components
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const App = () => (
	<Router>
		<Navbar />
		<Switch>
			<Route path="/" exact component={Landing} />
			<Route path="/:id" exact component={Redirects} />
			<Route path="*" component={NotFound} />
		</Switch>
		<Footer />
	</Router>
);

const Redirects = () => {
	const pathname = useParams<{ id: string }>();

	switch (pathname?.id) {
		case "legal":
			document.location.replace("https://cdn.daangamesdg.wtf/stereo/legal.pdf");
			break;
		case "invite":
			document.location.replace(
				"https://discord.com/oauth2/authorize?client_id=745665203777306664&scope=bot&permissions=11889984"
			);
			break;
		case "discord":
			document.location.replace("https://discord.com/invite/46v9tr3Wxp");
			break;
		case "github":
			document.location.replace("https://github.com/Stereo-music-bot/");
			break;
		default:
			return <NotFound />;
	}
	return <Redirect />;
};

export default App;
