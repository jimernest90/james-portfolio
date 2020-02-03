import React from 'react'
import eatzilla from '../img/eatzilla.png'
import camelot from '../img/camelot-experience.png'
import ornate from '../img/ornate-optical.png'
import stars from '../img/trip-to-stars.png'
import '../styles/Projects.css'
import githubIcon from '../img/GitHub-Mark-120px-plus.png'
import computerIcon from '../img/compIcon.png'

const Projects = () => {
        return(
        <div className='projects'>
            <div className='projectContainer'><a href='http://eatzilla.surge.sh/' target='blank'><img src={eatzilla} alt='eatzilla' className='eatzilla'/></a>
            <div className='projBottom'>
            <h3>&#47;&#47;A ux collaboration designed in React Bootstrap. This site was based on a persona, Alex, who wanted to make food at home with minimal ingredients. &#47;&#47;</h3><a href='https://github.com/frinci/Eatzilla' target="_blank"><img src={githubIcon} alt='github' className='projectGit'/></a>
            <a href='http://eatzilla.surge.sh/' target='blank'><img src={computerIcon} className='compIcon'/></a></div>
            </div>
            <div className='projectContainer'><a href='http://camelot-experience.surge.sh/' target='blank'><img src={camelot} alt='camelot' className='camelot'/></a>
            <div className='projBottom'>
            <h3>&#47;&#47;A site made in vanilla Javascript, CSS, and HTML. The purpose of this site is to provide a get away to Camelot.&#47;&#47;</h3> <a href='https://github.com/jimernest90/the-camelot-experience' target="_blank"><img src={githubIcon} alt='github' className='projectGit'/></a>
            <a href='http://camelot-experience.surge.sh/' target='blank'><img src={computerIcon} className='compIcon'/></a></div>
            </div>
           
            <div className='projectContainer'><a href='http://ornate-optical.surge.sh/' target='blank'><img src={ornate} alt='ornate' className='ornate'/></a>
            <div className='projBottom'>
            <h3>&#47;&#47;An ecommerce site built by a three partner team. This site has a fully functional back-end with CRUD capabilities. &#47;&#47;</h3> <a href='https://github.com/rakshyak/Ornate-optical' target="_blank"><img src={githubIcon} alt='github' className='projectGit'/></a>
            <a href='http://ornate-optical.surge.sh/' target='blank'><img src={computerIcon} className='compIcon'/></a></div>
            </div>
           
            <div className='projectContainer'><a href='http://trip-to-stars.surge.sh/' target='blank'><img src={stars} alt='stars' className='stars'/></a>
            <div className='projBottom'>
            <h3>&#47;&#47;A site that allows you to add, and delete a crew member on a spaceship. The site also shows you the nearest astroid according to the NASA api. &#47;&#47;</h3><a href='https://github.com/jimernest90/Star-trip' target="_blank"><img src={githubIcon} alt='github' className='projectGit'/></a>
            <a href='http://trip-to-stars.surge.sh/' target='blank'><img src={computerIcon} className='compIcon'/></a></div>
            </div>
            
        </div>
        )
}
export default Projects;