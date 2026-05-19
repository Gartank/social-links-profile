import SocialCard from "./components/SocialCard/SocialCard.jsx";
import profileImg from "./assets/images/avatar-jessica.jpeg";

const user_profile = {
	header: {
		name: "Jessica Randall",
		location: "London, United Kingdom",
		desc: "Front-end developer and avidd reader.",
		urlImg: profileImg,
	},
	links: [
		{ key: "github", url: "https://www.github.com" },
		{ key: "Frontend Mentor", url: "https://www.frontendmentor.io" },
		{ key: "LinkedIn", url: "https://www.linkedin.com" },
		{ key: "Twitter", url: "https://www.x.com" },
		{ key: "Instagram", url: "https://www.instagram.com" },
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
