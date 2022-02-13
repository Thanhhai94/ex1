import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           selectedDish: null
        }
        console.log("constructor")
    }

    onDishSelect(dish) {
      this.setState({
        selectedDish: dish
      })
    }

    componentDidMount(){
      console.log("did mount")
    }
    componentWillUnmount(){
      console.log("unmount")
    }
    componentDidUpdate(){
      console.log('didupdate')
    }

    renderList(data){
      return data.comments.map(el => 
        <div key={el.id}>
        <p>{el.comment}</p>
        <p>--{el.author} , {Date(el.date)}</p>
        </div>
        
        )}

    renderComment(dish){
      
      
     
      if (dish != null)
          return(
            
            <div className="col-12 col-md-5 m-1">
              <Card>
                 
                  <CardBody>
                    <CardTitle style={{fontWeight: "600"}}>Comment</CardTitle>
                    <CardText>{
                      dish && this.renderList(dish)
                      }</CardText>
                  </CardBody>
              </Card>
            </div>
            
          );
      else
          return(
              <div></div>
          );
    }
    


    renderDish(dish) {
      if (dish != null)
          return(
            
            <div className="col-12 col-md-5 m-1">
              <Card>
                  <CardImg top src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle style={{fontWeight: "600"}}>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
            </div>
            
          );
      else
          return(
              <div></div>
          );
  }

    render() {
      console.log("render")
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onDishSelect(dish)} >
                  
                      <CardImg width='100%' src={dish.image} alt={dish.name} />
                      <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                  
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
                  {menu}
            </div>
            <div class="row">
                {this.renderDish(this.state.selectedDish)}
                {this.renderComment(this.state.selectedDish)}
                
            </div>
          </div>
        );
    }
}

export default Menu;