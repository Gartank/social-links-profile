const CardHeader = ({header}) => {
	return (
		<div className='card-header'>
			<img
				src={header.urlImg}
				alt='Profile Image'
				className='header-profile_photo'
			/>
			<div className='header-title_container'>
				<h1 className='header-profile_name'>{header.name}</h1>
				<h3 className='header-profile_location'>{header.location}</h3>
			</div>
			<p className='header-profile_description'>{`"${header.desc}"`}</p>
		</div>
	);
};

export default CardHeader;
