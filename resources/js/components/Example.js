import React from 'react';
import { render } from 'react-dom';

const Example = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

if(document.getElementById("example")) {
    render( <Example/>, document.getElementById("example"))
}

export default Example;