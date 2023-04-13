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
								<a href="https://helena-f.github.io/3D/" className='text-light link'>Blender 3D Design Custom Room Display.</a>					
							</div>
						</article>
						<article className='experience__details'>
							<div>
								<h4>Machine Learning Algorithms</h4>
								<a href="https://helena-f.github.io/3D/" className='text-light link'>Blender 3D Design Custom Room Display.</a>					
							</div>
						</article>

					</div>
				</div>
				<div className="experience__backend">
					<h3>Robotics</h3>
					<div className="experience__content">
						<article className='experience__details'>
							<div>
								<h4>Odometry</h4>
								<a href="https://helena-f.github.io/3D/robotics/" className='text-light link'>View robot and odometry.</a>
							</div>
						</article>
						<article className='experience__details'>
							<div>
								<h4>Algorithms</h4>
								<a href="https://helena-f.github.io/3D/robotics/" className='text-light link'>View robot and odometry.</a>
							</div>
						</article>
					</div>
				</div>
			</div>

		</section>
	)
}
  export default Model