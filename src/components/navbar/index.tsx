import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [click, setClick] = useState<boolean>(false);

	const handleClick = () => setClick(!click);
	const closeMenu = () => setClick(false);

	return (
		<div className="nav">
			<div className="nav-logo__container">
				<Link to="/" className="nav-logo" onClick={closeMenu}>
					Stereo
				</Link>
				<ul className={click ? "nav-items active" : "nav-items"}>
					<li className="nav-item" onClick={closeMenu}>
						<Link to="/legal" className="nav-link">
							Legal
						</Link>
					</li>
					<li className="nav-item" onClick={closeMenu}>
						<Link to="/discord" className="nav-link">
							Discord
						</Link>
					</li>
					<li className="nav-item" onClick={closeMenu}>
						<Link to="/invite" className="nav-link nav-invite-button">
							Invite
						</Link>
					</li>
				</ul>
				<div className="nav-hamburger" onClick={handleClick}>
					{!click ? <i className="fas fa-bars" /> : <i className="fas fa-times" />}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
