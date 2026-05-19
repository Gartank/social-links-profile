const CardLinks = ({links}) => {
	const buttonList = links.map((elem) => (
		<li className='card-links link' key={"link-" + elem.key}>
			<a
				href={elem.url}
				target='_self'
				rel='noopener noreferrer'
			>
				{elem.key}
			</a>
		</li>
	));

	return <ul className='card_links'>{buttonList}</ul>;
};

export default CardLinks;