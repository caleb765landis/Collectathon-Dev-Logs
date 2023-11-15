export default function profileHeader({name, profileImage}) {
	return (
		<>
			<Link href="/">
				<Image
					priority
					src={`/images/${profileImage}`}
					className={utilStyles.borderCircle}
					height={108}
					width={108}
					alt=""
				/>
			</Link>
			<h2 className={utilStyles.headingLg}>
				<Link href="/" className={utilStyles.colorInherit}>
					{name}
				</Link>
			</h2>
		</>
	);
}
