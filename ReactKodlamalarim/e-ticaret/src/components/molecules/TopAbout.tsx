import React from "react";

function TopAbout() {
	return (
		<>
			<div className="container topbar bg-primary d-none d-lg-block">
				<div className="d-flex justify-content-between">
					<div className="top-info ps-2">
						<small className="me-3">
							<i className="fas fa-map-marker-alt me-2 text-secondary"></i>{" "}
							<a href="#" className="text-white">
								Ankara, merkez
							</a>
						</small>
						<small className="me-3">
							<i className="fas fa-envelope me-2 text-secondary"></i>
							<a href="#" className="text-white">
								JavaHS1@gmail.com
							</a>
						</small>
					</div>
					<div className="top-link pe-2">
						<a href="#" className="text-white">
							<small className="text-white mx-2">Privacy Policy</small>/
						</a>
						<a href="#" className="text-white">
							<small className="text-white mx-2">Terms of Use</small>/
						</a>
						<a href="#" className="text-white">
							<small className="text-white ms-2">Sales and Refunds</small>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default TopAbout;
