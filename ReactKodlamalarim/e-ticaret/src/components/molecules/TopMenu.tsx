import React from "react";

function TopMenu() {
	return (
		<div className="container px-0">
			<nav className="navbar navbar-light bg-white navbar-expand-xl">
				<a href="index.html" className="navbar-brand">
					<h1 className="text-primary display-6">Doğal Ürünler</h1>
				</a>
				<button
					className="navbar-toggler py-2 px-3"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarCollapse">
					<span className="fa fa-bars text-primary"></span>
				</button>
				<div className="collapse navbar-collapse bg-white" id="navbarCollapse">
					<div className="navbar-nav mx-auto">
						<a href="index.html" className="nav-item nav-link active">
							Anasayfa
						</a>
						<a href="shop.html" className="nav-item nav-link">
							Mevsim Meyveleri
						</a>
						<a href="shop-detail.html" className="nav-item nav-link">
							Mevsim Sebzeleri
						</a>
						<div className="nav-item dropdown">
							<a
								href="#"
								className="nav-link dropdown-toggle"
								data-bs-toggle="dropdown">
								Taze Sıkım Ürünler
							</a>
							<div className="dropdown-menu m-0 bg-secondary rounded-0">
								<a href="cart.html" className="dropdown-item">
									Elma Suyu
								</a>
								<a href="chackout.html" className="dropdown-item">
									Nar Suyu
								</a>
								<a href="testimonial.html" className="dropdown-item">
									Üzüm Suyu
								</a>
								<a href="404.html" className="dropdown-item">
									Alıç Marmelatı
								</a>
							</div>
						</div>
						<a href="contact.html" className="nav-item nav-link">
							İletişim
						</a>
					</div>
					<div className="d-flex m-3 me-0">
						<button
							className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
							data-bs-toggle="modal"
							data-bs-target="#searchModal">
							<i className="fas fa-search text-primary"></i>
						</button>
						<a href="#" className="position-relative me-4 my-auto">
							<i className="fa fa-shopping-bag fa-2x"></i>
							<span
								className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
								style={{
									top: "-5px",
									left: "15px",
									height: "20px",
									minWidth: "20px",
								}}>
								3
							</span>
						</a>
						<a href="#" className="my-auto">
							<i className="fas fa-user fa-2x"></i>
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default TopMenu;
