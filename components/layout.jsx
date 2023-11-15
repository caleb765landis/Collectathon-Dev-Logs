import Head from "next/head";
import Image from "next/image";
import styles from "/styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import ProfileHeader from "/components/ProfileHeader";

const name = "Caleb Landis";
export const siteTitle = "Collectathon - Dev Logs";

export default function Layout({children, home}) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Articles following the development of my project - Collectathon."
				/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				{/* <meta name="twitter:card" content="summary_large_image" /> */}
			</Head>
			<header className={styles.header}>
				{/* Use this when we want to add multiple people with unique profiles writing posts */}
				{/* <Header home={home} /> */}

				<Image
					priority
					src="/images/Collectathon.png"
					height={51}
					width={344}
					alt=""
				/>
				{home ? (
					<h1 className={utilStyles.heading2Xl}>{"Dev Logs"}</h1>
				) : (
					<Link href="/" className={styles.backToHome}>
						← Back to home
					</Link>
				)}
			</header>
			<main>{children}</main>
			{/* {!home && (
				<div className={styles.pagination}>
					<Link href="/">← Prev</Link>
					<Link href="/">Home</Link>
					<Link href="/">Next →</Link>
				</div>
			)} */}
		</div>
	);
}

function Header({
	home,
	name = "Caleb Landis",
	profileImage = "/images/profile.jpg",
}) {
	return (
		<>
			{home ? (
				<>
					<Image
						priority
						src="/images/Collectathon.png"
						height={51}
						width={344}
						alt=""
					/>
					<h1 className={utilStyles.heading2Xl}>{"Dev Log"}</h1>
				</>
			) : (
				<ProfileHeader name profileImage />
			)}
		</>
	);
}
