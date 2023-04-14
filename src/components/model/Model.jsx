import React from 'react'
import './model.css'
import { BsPatchCheckFill } from 'react-icons/bs'
const Model = () => {
	return (
		<section id='experience'>
			<h5>Click links to</h5>
			<h2>My Projects</h2>

			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Independent</h3>
					<div className="experience__content">
						<article className='experience__details'>
							<div>
								<h4> Mini-Room Model</h4>
								<a href="https://helena-f.github.io/3D/" className='text-light link'>View 3D Blender Room Display.</a>					
							</div>
						</article>
						<article className='experience__details'>
							<div>
								<h4>Research Internship Results</h4>
								<a href="https://helena-f.github.io/3D/" className='text-light link'>View presentation and paper.</a>					
							</div>
						</article>
						<article className='experience__details'>
							<div>
								<h4>Music Neural Network</h4>
								<a href="https://helena-f.github.io/3D/" className='text-light link'>Listen to AI Composer.</a>					
							</div>
						</article>
					</div>
				</div>
				<div className="experience__backend">
					<h3>Robotics</h3>
					<div className="experience__content">
						<article className='experience__details'>
							<div>
								<h4>Robot Control</h4>
								<a href="https://helena-f.github.io/3D/robotics.html" className='text-light link'>View robot and control explanation.</a>
							</div>
						</article>
						<article className='experience__details'>
							<div>
								<h4>Pathing Algorithms</h4>
								<a href="https://helena-f.github.io/3D/robotics/" className='text-light link'>View algorithms and odometry demonstrations.</a>
							</div>
						</article>
						<article className='experience__details'>
							<div>
								<h4>Image Recognition</h4>
								<a href="https://helena-f.github.io/3D/robotics/" className='text-light link'>View image recognition through the years.</a>
							</div>
						</article>
					</div>
				</div>
			</div>

		</section>
	)
}
  export default Model