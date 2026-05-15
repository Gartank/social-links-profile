import SocialCard from "./components/SocialCard";
import "./App.css";

const user_profile = {
	header : {
		name: "Jessica Randall",
		location: "London, United Kingdom",
		desc: "Front-end developer and avidd reader.",
		urlImg: "./assets/images/avatar-jessica.jpeg",
	},
	links: [
		{ name: "github", url: "" },
		{ name: "Fronten Mentor", url: "" },
		{ name: "LinkedIn", url: "" },
		{ name: "Twitter", url: "" },
		{ name: "Instagram", url: "" },
	],
};

function App() {
	return (
		<>
			<SocialCard {...user_profile} />
		</>
	);
}

export default App;
