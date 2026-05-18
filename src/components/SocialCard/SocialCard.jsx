import CardHeader from "./CardHeader.jsx";
import CardLinks from "./CardLinks.jsx";
import "./SocialCard.css";

const SocialCard = ({userData}) => {
	const {header, links} = userData;

	return (
		<div className='social_links-card'>
			<CardHeader header={header} />
			<CardLinks links={links} />
		</div>
	);
};

export default SocialCard;
