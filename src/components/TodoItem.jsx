export default function TodoItem (props)
{
     const setActivityArr = props.setActivityArr
     const activityArr = props.activityArr
      function handleDelete(deleteid)
    {
        var temparr = activityArr.filter(function(item){
            if(item.id === deleteid)
            {
                return false 
            }else{
                return true 
            }
        })

        setActivityArr(temparr)
    }

    return(
        <div className="flex justify-between">
        <p>{props.index+1}.{props.activity}</p>
        <button className="text-red-500" onClick={()=>handleDelete(props.id)} >Delete</button>
        </div>
    )
}