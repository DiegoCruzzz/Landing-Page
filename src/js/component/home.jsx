import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { func } from "prop-types";

//create your first component
function TopNavBar() {
	return(
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <a className="navbar-brand" href="#">Bootstrap</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    			<span class="navbar-toggler-icon"></span>
  			</button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
					<li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
	);
}

function Alerta (){
	return(
		<div className="alert alert-dark" role="alert">
			<h1 className="alert-heading">Welcome!!</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.            
			</p>
			<hr />
			<button className="btn btn-primary">Lets Get Started</button>
		</div>
	);
}

function CardBoot (){
	return(
		<div className="card m-3" style={{ width: '18rem' }}>
            <img className="card-img-top" src="https://www.shutterstock.com/image-illustration/3d-house-isolated-on-white-260nw-120056503.jpg" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
	);
}

const Home = () => {
	return (
	<>
		<TopNavBar />
		<div className="m-5 p-5">
			<Alerta />
			
			<div className="container">
				<div className="row">
					<div className="col-3 mb-4">
						<CardBoot />
					</div>
					<div className="col-3 mb-4">
						<CardBoot />
					</div>
					<div className="col-3 mb-4">
						<CardBoot />
					</div>
					<div className="col-3 mb-4">
						<CardBoot />
					</div>
					<div className="col-3 mb-4">
						<CardBoot />
					</div>
					<div className="col-3 mb-4">
						<CardBoot />
					</div>
					<div className="col-3 mb-4">
						<CardBoot />
					</div>
					<div className="col-3 mb-4">
						<CardBoot />
					</div>
				</div>
			</div>
		</div>
	</>
	);
};

export default Home;
