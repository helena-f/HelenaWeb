import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
	return (
		<section id='experience'>
			<h5>Skills</h5>
			<h2>Experience</h2>

			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Website Development</h3>
					<div className="experience__content">
						<article className='experience__details'>
							<BsPatchCheckFill />
							<div>
								<h4>HTML</h4>
								<small className='text-light'>Experienced</small>
							</div>

						</article>
						<article className='experience__details'>
							<BsPatchCheckFill />
							<div>
								<h4>CSS</h4>
								<small className='text-light'>Experienced</small>
							</div>

						</article>
						<article className='experience__details'>
							<BsPatchCheckFill />
							<div>
								<h4>Javascript</h4>
								<small className='text-light'>Experienced</small>
							</div>

						</article>
						<article className='experience__details'>
							<BsPatchCheckFill />
							<div>
								<h4>React</h4>
								<small className='text-light'>Intermediate</small>
							</div>

						</article>
						<article className='experience__details'>
							<BsPatchCheckFill />
							<div>
								<h4>Node.JS</h4>
								<small className='text-light'>Intermediate</small>
							</div>

						</article>

					</div>
				</div>
				<div className="experience__backend">
					<h3>Robotics, Machine Learning, and Other</h3>
					<div className="experience__content">
						<article className='experience__details'>
							<BsPatchCheckFill />
							<div>
								<h4>Java</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill />
							<div>
								<h4>C</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill />
							<div>
								<h4>C++</h4>
								<small className='text-light'>Intermediate</small>
							</div>

						</article>
						<article className='experience__details'>
							<BsPatchCheckFill />
							<div>
								<h4>Python</h4>
								<small className='text-light'>Experienced</small>

							</div>
						</article>
						
						<article className='experience__details'>
							<BsPatchCheckFill />
							<div>
								<h4>MIPS</h4>
								<small className='text-light'>Intermediate</small>
							</div>

						</article>
						<article className='experience__details'>
							<BsPatchCheckFill />
							<div>
								<h4>Assembly</h4>
								<small className='text-light'>Beginner</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill />
							<div>
								<h4>TensorFlow</h4>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill />
							<div>
								<h4>PyTorch</h4>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill />
							<div>
								<h4>OpenCV</h4>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill />
							<div>
								<h4>Vuforia</h4>
							</div>
						</article>
					</div>
				</div>
			</div>

		</section>
	)
}

export default Experience