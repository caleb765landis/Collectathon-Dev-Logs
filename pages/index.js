import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, {siteTitle} from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import {getSortedPostsData} from "../lib/posts";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Home({allPostsData}) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Welcome to the <b>Collectathon - Dev Logs</b> homepage! This is a blog
					that contains articles following the development of my project,
					Collectathon, which is a video game library management application.
				</p>
				<p>
					To start reading posts from the beggining of development,{" "}
					<Link href={`/posts/${allPostsData[allPostsData.length - 1].id}`}>
						click here.
					</Link>{" "}
					To read the most recent post,{" "}
					<Link href={`/posts/${allPostsData[0].id}`}>click here.</Link>
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Posts</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({id, date, title}) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>{title}</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
