import React from 'react';
import image from '../assets/Mobile login-bro.png';

const Body = () => {
    return (
        <div>
            <div className='main'>
                <div className='form'>
                    <h2 className='sign'>Sign Up to Masai</h2>
                    <form>
                        <div className="row g-3">
                            <div className="col">
                                <label for="exampleInputFirst" className="form-label">First Name</label>
                                <input type="text" className="form-control" aria-label="First name" />
                            </div>
                            <div className="col">
                                <label for="exampleInputLast" className="form-label">Last Name</label>
                                <input type="text" class="form-control" aria-label="Last name" />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <p className='emailHelp'>We'll never share your email with anyone else...</p>
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputMobile" className="form-label">Mobile no</label>
                            <input type="number" className="form-control" id="exampleInputMobile" />
                        </div>

                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

                <div className='image'>
                    <img src={image} alt='img' />
                </div>
            </div>
        </div>
    );
}

export default Body;