import React from "react"
import Form from "./Form"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useDispatch } from "react-redux"
import { setUser } from "store/slices/userSlice"
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleRegister = (email, password) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.id,
                        token: user.accessToken,
                    })
                )
                navigate("/login")
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                // ..
            })
    }
    return (
        <div>
            <Form handleClick={handleRegister} title="Register" />
        </div>
    )
}

export default SignUp
