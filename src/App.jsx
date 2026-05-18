import SocialCard from "./components/SocialCard/SocialCard.jsx";
import profileImg from './assets/images/avatar-jessica.jpeg';
import "./App.css";

const user_profile = {
	header: {
		name: "Jessica Randall",
		location: "London, United Kingdom",
		desc: "Front-end developer and avidd reader.",
		urlImg: profileImg,
	},
	links: [
		{ name: "github", url: "https://www.github.com" },
		{ name: "Frontend Mentor", url: "https://www.frontendmentor.io" },
		{ name: "LinkedIn", url: "https://www.linkedin.com" },
		{ name: "Twitter", url: "https://www.x.com" },
		{ name: "Instagram", url: "https://www.instagram.com" },
	],
};

function App() {
	return (
		<>
			<SocialCard userData={user_profile} />
		</>
	);
}

export default App;
