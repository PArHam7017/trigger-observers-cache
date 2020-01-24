import React, {useState} from 'react';
import ReactDOM from 'react-dom';

export default function App() {
    const [name , setName] = useState('');

    const handleCreateProductButton = () => {
        fetch("/api/product" , {
            method:"POST" ,
            body:JSON.stringify({name}) ,
            headers: {
                "content-type":"application/json"
            }
        }).then(res => res.json()).then(data => console.log(data));
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Create Product</div>

                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name :</label>
                                    <input
                                        id="name"
                                        className="form-control"
                                        placeholder="Enter Name"
                                        type="text"
                                        value={name}
                                        onChange={event => setName(event.target.value)}/>
                                </div>
                                <div className="w-100 d-flex justify-content-center">
                                    <button type="button" onClick={event => handleCreateProductButton()}>Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
