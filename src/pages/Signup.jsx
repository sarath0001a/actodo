import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Signup(props) {
    let user = props.user
    let setuser = props.setuser
    const navigate = useNavigate() 
    const [userinput, setuserinput] = useState()
    const [passinput, setpassinput] = useState()
    const [cfpass, setcfpass] = useState("")
    const [check, setcheck] = useState(true)
   

    const inputUsers = (event) => {
        setuserinput(event.target.value)
        console.log(userinput)
    }
    const inputPass = (event) => {
        setpassinput(event.target.value)
        console.log(passinput)
    }

    const confirmpass = (event) => {
        setcfpass(event.target.value)
    }

    const userAdd = () => {
    
        if (passinput === cfpass) {
            setuser([...user, { username: userinput, password: passinput }])
            navigate("/")
        }
        else{
            setcheck(false)
        }
      
        
    }
     
    console.log(user)

    return (
        <div className="bg-black p-10" >
            <div className="bg-slate-200 p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {
                    check ? <p> Sign Up here :)</p> : <p className="text-red-500">Password Not Match Please Check password</p>
                }


                <div className=" flex felx-col  gap-2  my-2">
                    <input onChange={inputUsers} type="text" className="w-52  border-black p-1 bg-transparent border rounded-md" placeholder="Username"></input>

                </div>


                <div className=" flex felx-col  gap-2  my-2">
                    <input onChange={inputPass} type="text" className="w-52  border-black p-1 bg-transparent border rounded-md" placeholder="Passwoed"></input>

                </div>


                <div className=" flex felx-col  gap-2  my-2">
                    <input onChange={confirmpass} type="text" className="w-52  border-black p-1 bg-transparent border rounded-md" placeholder="Confirm Password"></input>

                </div>
                <button onClick={userAdd} className="bg-orange-400 w-24 p-1 rounded-md" >Sign Up</button>

                <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
            </div>
        </div>
    )
}