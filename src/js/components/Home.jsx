import React from 'react';
import Navbar from './Navbar.jsx';
import Jumbotron from './Jumbotron.jsx';
import Footer from './Footer.jsx';
import Card from './Card.jsx';


const Home = () => {
	const cardData = [
		{
			title: "The Eastern Showdown",
			text: "Review the fierce rivalry in the AL East. The Yankees and Red Sox prepare for another epic clash for the top spot, driven by powerful pitching and young talent.",
			imageUrl: "https://variety.com/wp-content/uploads/2016/03/dodgers-tv-rights.jpg"
		},
		{
			title: "Trade Deadline Buzz",
			text: "Analyze the latest acquisitions shaping the contenders. Which team secured the key relief pitcher, and how will it impact the postseason bracket?",
			imageUrl: "https://img.mlbstatic.com/mlb-images/image/upload/t_16x9/t_w1024/mlb/rwddj1rp5oirwwdqgfdl"
		},
		{
			title: "Rookie of the Year Race",
			text: "Follow the rising stars making their mark. From blazing fast outfielders to dominating starting pitchers, see who is leading the race for this prestigious award.",
			imageUrl: "https://media.newyorker.com/photos/6606e5d2035af923de756b84/16:9/w_1280,c_limit/Witt-Ohtani-Opening-Day.jpg"
		},
		{
			title: "Cy Young Contenders",
			text: "A deep dive into the stats of the league's top pitchers. FIP, ERA, and strikeout rates define the battle for the best arm in Major League Baseball this season.",
			imageUrl: "https://img.mlbstatic.com/mlb-images/image/upload/t_16x9/t_w1024/mlb/bt3jwrurrtb8qseqkjnu"
		}
	];
	return (
		
		<div className="container mx-auto px-4 py-6">
			<Navbar />

			<main className="">
					<Jumbotron />
				<section id="cards" className="row">
					{cardData.map((card, index) => (
						<div className="d-flex col-md-6 col-lg-3 mb-4 mt-4">
							<Card
								key={index}
								title={card.title}
								text={card.text}
								imageUrl={card.imageUrl}
							/>
						</div>
					))}
				</section>
			</main>
			<div className="mt-12">
				<Footer />
			</div>
		</div>
	);
};

export default Home;