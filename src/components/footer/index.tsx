import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Wave } from "../../assets/waves/wave.svg";

const socials = [
	{
		name: "Github",
		link: "/github",
	},
	{
		name: "Discord",
		link: "/discord",
	},
	{
		name: "Paypal",
		link: "/paypal",
	},
];

const about =
	"Stereo is a discord music bot written in TypeScript, it provides all the basic commands and is free to use. It is really easy to use and requires little permissions to work. It is extremely performant and supports multiple languages (English, French & Dutch) and is online 24/7. Stereo not only supports YouTube, but also supports Spotify, Deezer and SoundCloud.";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-svg">
				<Wave />
			</div>
			<div className="footer-container">
				<div className="footer__about-container">
					<h2 className="footer-title" key="title-1">
						About Stereo
					</h2>
					<p className="footer-description">{about}</p>
				</div>
				<div className="footer__socials-container">
					<h2 className="footer-title" key="title-2">
						Socials
					</h2>
					<ul className="footer__socials-items">
						{socials &&
							socials.map(({ link, name }, i) => (
								<li key={`social-${i}`}>
									<Link className="footer__socials-item" to={link}>
										{name}
									</Link>
								</li>
							))}
					</ul>
				</div>
			</div>
			<div className="footer__link-container">
				<div className="footer__link-item">
					Icons made by{" "}
					<a href="https://www.freepik.com" className="footer-link" title="Freepik">
						Freepik
					</a>{" "}
					from{" "}
					<a href="https://www.flaticon.com/" className="footer-link" title="Flaticon">
						www.flaticon.com
					</a>
				</div>
				<div className="footer__link-item">
					<i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
					<a className="footer-link" href="https://daangamesdg.wtf/">
						DaanGamesDG
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
