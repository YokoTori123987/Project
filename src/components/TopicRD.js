import React from 'react';

class TopicRD extends React.Component{
    render(){
        return(
            <div class="product__sidebar__comment__item">
            <div class="product__sidebar__comment__item__pic">
                <img src={this.props.img} alt=""/>
            </div>
            <div class="product__sidebar__comment__item__text">
                <ul>
                    <li>{this.props.title}</li>
                    <li>{this.props.title2}</li>
                </ul>
                <h5><a href="#">{this.props.title3}</a></h5>
                <span><i class="fa fa-eye"></i> {this.props.view} Viewes</span>
            </div>
        </div>
        )
    }
}
export default TopicRD;