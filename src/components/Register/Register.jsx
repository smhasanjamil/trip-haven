import { Link } from 'react-router-dom';
import './Register.css';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, email, password };
        console.log(user);

         // Create user by password
         createUser(email, password)
         .then((userCredential) => {
             const user = userCredential.user;
             console.log(user);
             form.reset();
         })
         .catch((error) => {
             // const errorCode = error.code;
             const errorMessage = error.message;
             console.log(errorMessage);
         });

    }

    return (
        <div>


            <div className="hero min-h-screen ">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text-alt  ">Already Have an account? <Link to='/login' className='link link-hover'>Login</Link></span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Register;