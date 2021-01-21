import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class SingUp extends React.Component{
    render(){
        return(
            <section class="normal-breadcrumb set-bg" style={{backgroundImage: "url(/mono/img/normal-breadcrumb.jpg)"}}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="normal__breadcrumb__text">
                                <h2>Login</h2>
                                <p>Welcome to the official Anime blog.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SingUp;