import {  useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
export default function Login(props) {

    const navicate = useNavigate()
    const [enteruser, setenteruser] = useState()
    const [enterpass, setenterpass] = useState()
    const [ruser, setruser] = useState(true)

    const user = props.user


    const userinput = (event) => {
        setenteruser(event.target.value)
        
    }
    const passinput = (event) => {
        setenterpass(event.target.value)
        console.log(enterpass)
    }

    const checkusers = () => {
        let userfound = false
       
        user.forEach((item) => {
            if (item.username === enteruser && item.password === enterpass) {
                userfound =true
                navicate("/landing",{state:{user:enteruser}})

            }
        })
        if(userfound === false)
        {
            console.log("login Failed")
            setruser(false)
        }
    }

    return (<div className="bg-black p-10" >
        <div className="bg-slate-200 p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            {
                ruser ? <p> I help you manage your activities after you login :)</p> : <p className="text-red-500">Please Sign Up Before you Login </p>
            }


            <div className=" flex felx-col  gap-2  my-2">
                <input onChange={userinput} type="text" className="w-52  border-black p-1 bg-transparent border rounded-md" placeholder="Username"></input>

            </div>


            <div className=" flex felx-col  gap-2  my-2">
                <input onChange={passinput} type="text" className="w-52  border-black p-1 bg-transparent border rounded-md" placeholder="Passwoed"></input>

            </div>
            <button onClick={checkusers} className="bg-purple-500 w-24 p-1 rounded-md" >Sign Up</button>

            <p> Don't have an account? <Link to={"/signup"} className="underline">Sign Up</Link></p>
        </div>
    </div>
    )
}