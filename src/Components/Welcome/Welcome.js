import React from "react";
import {HomeContainer,ButtonContainer,HomeButton,Logo} from '../Styled/index';

const logo = require("../../Images/logo.png")

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
 
    };

  }

  render() {
    return (
      <HomeContainer >
       <Logo src={logo} />
      <ButtonContainer>
       <HomeButton background="#1A77F2" color="white">
         Login with Facebook
       </HomeButton>
       <HomeButton background="#FFF" color="#7A869A">
         Login with Gmail
       </HomeButton>
            <HomeButton background="#FF5A6E" color="#FFF">
         Login
       </HomeButton>
       </ButtonContainer>
      </HomeContainer>    
);
  }
}

export default App;
