import React from 'react'
import { Link, Route, useMatch } from 'react-router-dom'

const About = () => {
    console.log(useMatch())
    return <h3>Hello from the about page</h3>
}

export default About