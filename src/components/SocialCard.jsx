import "./SocialCard.css";
const CardHeader = ( { header } ) => {
	return (
		<div className='card_header'>
			<img
				src={header.urlImg}
				alt='Profile Image'
				className='card-header header-profile_photo'
			/>
			<div className="header-title_container">
				<h1 className='card-header header-profile_name'>
					{(header.name)}
				</h1>
				<h3 className='card-header header-profile_location'>
					{header.location}
				</h3>
			</div>
				<p className='card-header header-profile_description'>
					{`"${header.desc}"`}
				</p>
		</div>
	);
};

const CardLinks = ( { links } ) => {
	const buttonList = links.map((elem) => (
		<li className='card-links link' key={"link-" + elem.name}>
			<a
				href={'http://'+ elem.imgUrl}
				target='_self'
				rel='noopener noreferrer'
			>
				{elem.name}
			</a>
		</li>
	));

	return <ul className='card_links'>{buttonList}</ul>;
};

const SocialCard = ({ header, links }) => {
	return (
		<div className='social_links-card'>
			<CardHeader header={header} />
			<CardLinks links={links} />
		</div>
	);
};

export default SocialCard;
