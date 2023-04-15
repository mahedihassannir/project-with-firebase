import React from 'react';

import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import app from './_firebase';

let auth = getAuth(app)

let provider = new GoogleAuthProvider()


const Login = () => {
    let handleBtn = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                let remaning = res.user
                console.log(remaning);
            })
            .then(err => {
                console.log(err);
            })

    }

    return (
        <div className='text-center'>

            <button  className='  py-5 px-6 rounded-lg bg-yellow-400' onClick={handleBtn}>
                login
            </button>

        </div>
    );
};

export default Login;