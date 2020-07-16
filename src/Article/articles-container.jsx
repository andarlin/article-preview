import React, {Component} from "react";
import Card from './articles';


class Articles extends Component{

  render(){
    return(
        <Card 
        header="Shift the overall look and feel by adding these wonderful touches to furniture in your home" 
        body="Ever been in a room and felt like something was missing? Perhaps it flet slightly bare and uninviting.  I've got some simple tips to help you make any room feel complete."
        userName="Michelle Appleton"
        date="28 June 2020"
        />
    );
  }
}

export default Articles;