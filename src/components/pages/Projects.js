import { useLocation } from "react-router-dom"

import { useState, useEffect } from "react"

import styles from './Projects.module.css'

import Loading from "../layout/Loading"
import Message from "../layout/Message"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import ProjectCard from "../project/ProjectCard"

function Projects() {
  const [projects, setProjects] = useState([])
  const [removerLoading, setRemoveLoading] = useState(false)
  
  const location = useLocation()

  let message = ''
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(data => {
      console.log(data)
      setProjects(data)
      setRemoveLoading(true)
    })
    .catch(err => console.log(err))
    }, 300)
  }, [])

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}

      <Container customClass={"start"}>
        {projects.length > 0 && projects.map((project => (
          <ProjectCard 
          id={project.id} 
          name={project.name}
          budget={project.budget}
          category={project.category.name}
          key={project.id} />
        )))}
        {!removerLoading && <Loading />}
        {removerLoading && projects.length === 0 && (
          <p>Não projetos cadastrados!</p>
        )}
      </Container>

    </div>
  )
}

export default Projects
