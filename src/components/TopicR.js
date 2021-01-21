import React from 'react';

class TopicR extends React.Component{
    render(){
        return(
            <div class="product__sidebar__view__item set-bg" style={this.props.img}>
                <div class="ep">{this.props.number} / {this.props.num}</div>
                    <div class="view"><i class="fa fa-eye"></i>{this.props.view}</div>
                        <h5><a href="#">{this.props.title}</a></h5>
            </div>
        );
    }
}
export default TopicR;