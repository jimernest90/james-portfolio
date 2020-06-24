import React from 'react'
import '../styles/About.css'

const About = () =>{
    return(
        <h4>
            <div className='object'>
            const <b>softwareEngineer</b> = &#123;
                <div className ='insideClass'>
                <br/>
                <b>name:</b> 'James',
                <br/>
                <b>occupation:</b> 'Software Engineer',
                <br/>
                <b>traits:</b> 'loves working with newer frameworks and libraries to create cool desktop and mobile applications.'
                <br/>
                <b>skills:</b> 'Javascript, Jquery, Css, Html, React.js, Ruby, Postgresql, Sql, and Ruby on Rails.'
                <br/>  
                </div>
                &#125; 
                <div className='functionName'>
                    const <b>aboutMe</b> = {"("}{")"} =&gt; &#123; console.log{"("} `Hi I'm &#36;&#123; softwareEngineer.name&#125; and I am a &#36;&#123; softwareEngineer.occupation&#125; who &#36;&#123; softwareEngineer.traits&#125; I have experience in &#36;&#123; softwareEngineer.skills&#125;`{")"}
                    <br/>&#125; 
                </div>
                <div className='runFunction'>
                    <b>aboutMe{"("}{")"}</b>
                </div>
                </div>
                <div className='ranFunction'>
                Hi I'm James and I am a Software Engineer who loves working with newer frameworks and libraries to create cool desktop and mobile applications. I have experience in Javascript, Jquery, Css, Html, React.js, Ruby, Postgresql, Sql, and Ruby on Rails.<div className='symb'>&#124;</div>
                </div>
        </h4>
    )
}
export default About;