const CardLinks = ({links}) => {
	const buttonList = links.map((elem) => (
		<li className='card-links link' key={"link-" + elem.name}>
			<a
				href={"http://" + elem.imgUrl}
				target='_self'
				rel='noopener noreferrer'
			>
				{elem.name}
			</a>
		</li>
	));

	return <ul className='card_links'>{buttonList}</ul>;
};

export default CardLinks;