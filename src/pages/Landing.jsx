import { useLocation } from "react-router-dom"
import Header from "../components/Header"
import Card from "../components/Card"
import TodoContainer from "../components/TodoContainer"
export default function Landing()
{
    const data = useLocation()
    return(
     <div className="bg-black p-16 ">
            <div className=" bg-slate-200 p-10 border rounded-lg">
                <Header name = {data.state.user}/>

                 <div className="flex justify-between gap-7 my-5 flex-wrap">
                     <Card bgcolor = {"#8272DA"} title={"23"} subtitle = {"Kaniyakumari"}/>
                      <Card bgcolor = {"#FD6663"} title={"December"} subtitle = {"14:03:34"}/>
                        <Card bgcolor = {"#FCA201"} title={"Built Using"} subtitle = {"React"}/>
                 </div>
                <TodoContainer/>

            </div>

        </div>
    )
}