import React from "react"
import Container from "../components/container"

// This imports a CSS Module. All CSS files ending with ".module.css" are CSS Modules
// This means that the styles defined in this stylesheet are only available to this module
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
  // Uncomment the following line to see how the CSS Module is imported
  // You will see that each class is a key in the object and the value 
  // is a unique classname that CSS-Modules has generated
  
  // console.log(userStyles)
  
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
