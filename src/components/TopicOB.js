import React from 'react';

class TopicOB extends React.Component{
    render(){
        return(
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={this.props.img}>
                        <div class="ep">{this.props.number} / {this.props.num}</div>
                        <div class="comment"><i class="fa fa-comments"></i> {this.props.number3}</div>
                        <div class="view"><i class="fa fa-eye"></i> {this.props.view}</div>
                    </div>
                    <div class="product__item__text">
                        <ul>
                            <li>{this.props.title}</li>
                            <li>{this.props.title2}</li>
                        </ul>
                        <h5><a href="#">{this.props.title3}</a></h5>
                    </div>
                </div>
            </div>
        );
    }
}
export default TopicOB;