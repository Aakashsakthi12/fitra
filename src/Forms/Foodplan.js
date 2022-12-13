import React, { Component } from 'react'
import "./style.css";
import LocalDiningIcon from '@mui/icons-material/LocalDining';
document.body.style.backgroundImage= "url('blur-close-up-delicious-diet-wallpaper-preview.jpg')";
document.body.style.backgroundSize = "cover";
export default class  extends Component {
  render() {
    return (
      <div><h2>Choose Your Healthy Calories</h2><br/>
      
    <h1 class="fun"><LocalDiningIcon/>ALMOND AND CAULIFLOWER RICE SALAD</h1>
    <h1><LocalDiningIcon/>CRUCIFEROUS VEGETABLE</h1>
    <h1><LocalDiningIcon/>LEAN MEAT</h1>
    <h1><LocalDiningIcon/>WHOLE GRAINS</h1>
    <h1><LocalDiningIcon/>DARK CHOCOLATE</h1>
    <h1><LocalDiningIcon/>AVOCADOS</h1>
    <h1><LocalDiningIcon/>COTTAGE CHEESE</h1>
    <h1><LocalDiningIcon/>NUTS</h1>
    <h1><LocalDiningIcon/>YOGURT</h1>
      </div>
    )
  }
}
