import React from "react";
import { Link } from "react-router-dom";

// @ts-expect-error
import Fade from "react-reveal/Fade";

import { ReactComponent as Bot } from "../assets/general/bot.svg";
import { ReactComponent as Wave2Down } from "../assets/waves/wave3-down.svg";
import { ReactComponent as Wave2Up } from "../assets/waves/wave3-up.svg";
import { ReactComponent as WaveDown } from "../assets/waves/wave2-down.svg";
import { ReactComponent as WaveUp } from "../assets/waves/wave2-up.svg";
import { ReactComponent as Support } from "../assets/general/support.svg";
import { ReactComponent as Music } from "../assets/general/music.svg";
import img from "../assets/general/voice.png";

const Landing = () => {
	document.title = "Stereo - Home";

	return (
		<div className="landing">
			<div className="landing-container">
				<div className="landing-info">
					<h1 className="landing-title">Stereo</h1>
					<h2>
						The only free discord music bot you will ever need. The best audio quality completely
						free!
					</h2>
					<Link to="/invite" className="invite-button">
						Invite
					</Link>
				</div>
				<div className="img">
					<img src={img} alt="img" />
				</div>
			</div>
			<WaveDown className="landing-wave" />
			<div className="landing-container landing-first">
				<Fade>
					<div className="svg-pm">
						<Music className="svg" />
					</div>
					<div className="landing-info">
						<h1>24/7 online to play music</h1>
						<p>
							Stereo is online 24/7 and always available to give the best audio quality possible
						</p>
					</div>
				</Fade>
			</div>
			<WaveUp />
			<div className="landing-container">
				<Fade>
					<div className="landing-info">
						<h1>Instant Support</h1>
						<p>
							Stereo has a support server with multiple staff members to provide instant support
							24/7
						</p>
						<Link to="/discord" className="invite-button">
							Get Support
						</Link>
					</div>
					<div>
						<Support className="svg" />
					</div>
				</Fade>
			</div>
			<Wave2Down className="landing-wave" />
			<div className="landing-container landing-second">
				<Fade>
					<div className="landing-info">
						<h1>Easy to use</h1>
						<p>
							Stereo is easy to use and requires little permissions to work and it even supports
							multiple languages (English, Dutch and French)
						</p>
					</div>
					<div>
						<Bot className="svg" />
					</div>
				</Fade>
			</div>
			<Wave2Up />
			<div className="landing-container landing-last">
				<Fade>
					<div className="landing-info">
						<h1>Ready to use Stereo?</h1>
						<p>
							Invite Stereo to listen to music with the best audio quality and filters for free!
						</p>
					</div>
					<Link to="/invite" className="invite-big">
						Invite
					</Link>
				</Fade>
			</div>
		</div>
	);
};

export default Landing;
