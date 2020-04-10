import React, { useState } from 'react';
import Head from 'next/head';
import vCard from '../helpers/VCard';

const Home = () => {
	const [name, setName] = useState('');
	const [telephone, setTelephone] = useState('');

	const downloadVCard = () => {
		var card = vCard.create(vCard.Version.FOUR);
		card.add(vCard.Entry.NAME, name);
		card.add(vCard.Entry.FORMATTEDNAME, 'John Doe');
		card.add(vCard.Entry.NICKNAME, 'jd');
		card.add(vCard.Entry.TITLE, 'Missing man');
		card.add(vCard.Entry.PHONE, telephone, vCard.Type.CELL);

		var link = vCard.export(card, 'Foo Bar', true);
		console.log(link);
	};
	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1 className="title">VCard POC</h1>
				<div>
					<label>Name</label>
					<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
				</div>
				<div>
					<label>Telephone</label>
					<input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
				</div>
				<div>
					<button onClick={downloadVCard}>Download</button>
				</div>
			</main>

			<style jsx>{`
				.container {
					min-height: 100vh;
					padding: 0 0.5rem;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				main {
					padding: 5rem 0;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				a {
					color: inherit;
					text-decoration: none;
				}

				.title a {
					color: #0070f3;
					text-decoration: none;
				}

				.title a:hover,
				.title a:focus,
				.title a:active {
					text-decoration: underline;
				}

				.title {
					margin: 0;
					line-height: 1.15;
					font-size: 4rem;
				}

				.title,
				.description {
					text-align: center;
				}

				code {
					background: #fafafa;
					border-radius: 5px;
					padding: 0.75rem;
					font-size: 1.1rem;
					font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
				}

				@media (max-width: 600px) {
					.grid {
						width: 100%;
						flex-direction: column;
					}
				}
			`}</style>

			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
						sans-serif;
				}

				* {
					box-sizing: border-box;
				}
			`}</style>
		</div>
	);
};

export default Home;
