import React from "react"
import Container from "../components/container"
import userStyles from "../styles/user.module.css"

const User = props => (
  <div className={userStyles.user}>
    <img src={props.avatar} className={userStyles.avatar} alt="" />
    <div className={userStyles.description}>
      <h2 className={userStyles.username}>{props.username}</h2>
      <p className={userStyles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => {
  return (
    <Container>
      <h1>Hello, Gatsby!</h1>
      <User
        username="Jane Doe"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Bob Smith"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Container>
  )
}
