import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dish : null
        }
        
    }

    

    renderList(data){
        return data.comments.map(el => 
          <div key={el.id}>
          <p>{el.comment}</p>
          <p>--{el.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(el.date)))}</p>
          </div>
          )}
    renderComment(dishSelect){
        return(
            
            <div className="col-12 col-md-5 m-1">
              <Card>
                  <CardBody>
                    <CardTitle style={{fontWeight: "600"}}>Comment</CardTitle>
                    <CardText>
                        {this.renderList(dishSelect)}
                    </CardText>
                  </CardBody>
              </Card>
            </div>
            

          );
          }
          
    renderDish(dishSelect) {
        return(
            
                <div className="col-12 col-md-5 m-1">
                    <Card>
                         <CardImg top src={dishSelect.image} alt={dishSelect.name} />
                        <CardBody>
                        <CardTitle style={{fontWeight: "600"}}>{dishSelect.name}</CardTitle>
                        <CardText>{dishSelect.description}</CardText>
                        </CardBody>
                        </Card>
                </div>
            
            )}

    render(){
        const isClick = this.props.dish
        if(isClick){
            return(
                <div className='row'>
                    
                {this.renderDish(isClick)}
                {this.renderComment(isClick)}
                    
                </div>
            )}
        return(<div></div>)
    }

}
export default Dishdetail

