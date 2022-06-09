import React from 'react';
import auth from '../../firebase.init';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-semibold">Login</h2>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline" onClick={()=>signInWithGoogle()}>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;