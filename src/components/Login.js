import React, {useState} from "react"
import validator from 'validator'
import image from '../icons/image.png'
import showIcon from '../icons/show.png'
import hideIcon from '../icons/hide.png'
import swal from 'sweetalert'
import '../css/login.css'

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [toggle, setToggle] = useState(false)
    const [error, setError] = useState({})
    const errors = {}

    const validate = () => {
        if(username.trim().length <= 3){
            errors.username = 'must contain atleast 3 characters'
        } else if(!validator.isAlphanumeric(username)){
            errors.username = 'special character not allowed'
        }
        if(username.trim().length <= 3 && !validator.isAlphanumeric(username)){
            errors.username = 'username cannot contain special character and username must contain atleast 3 characters'
        } 
        else if(password.trim().length <= 6){
            errors.password = 'Minimum password length'
        } else if(password.trim().length >= 20){
            errors.password = 'Maximum password length'
        } else if(!validator.isStrongPassword(password)){
            errors.password = 'Require atleast one lowercase, uppercase, number and special character'
        }
    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value 
        if(name === 'username'){
            setUsername(value)
        } else if(name === 'password'){
            setPassword(value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validate()
        setError(errors)
        if(Object.keys(errors).length === 0){
            localStorage.setItem('token', Date.now())
            const formData = {
                username : username,
                password : password
            }
            console.log(formData)
            const result = formData 
            if(result.hasOwnProperty('errors')){
                swal(result.errors)
            } else {
                swal({
                    title: "Good job!",
                    text: "successfully logged in",
                    icon: "success"
                  })
                  props.history.push('/userdata')
            }
            setUsername('')
            setPassword('')
        }
    }

    const handlePassword = () => {
        setToggle(!toggle)
    }

    return (
        <div>
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Welcome back</h2>
                    <p>Login to the DashBoard</p>
                    <input className="login-form-input" type='text' name='username' value={username} placeholder="Username" onChange={handleChange} /><br/>
                    {error.username && <span>{error.username}</span>}<br/>
                    <div className="password">
                        <input className="login-form-input" type={toggle ? 'text' : 'password'} name='password' value={password} placeholder="Password" onChange={handleChange} /><br />
                        {
                            toggle ? <img className="icon" src={showIcon} alt='show' onClick={handlePassword} /> : <img className="icon" src={hideIcon} alt='hide' onClick={handlePassword}  />
                        }
                        {error.password && <span>{error.password}</span>}<br/>
                    </div>
                    <input type='checkbox' onChange={handleChange} /><label>Remember me</label><br/>
                    <input className="login-button" type='submit' value=' Login ' />
                </form>
                <img className="login-image" src={image} alt='' />
            </div>
        </div>
    )
}

export default Login