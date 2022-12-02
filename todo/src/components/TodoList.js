import { useNavigate } from "react-router-dom";


let TodoList = () => {

    let navigator = useNavigate()
    let clickHandler = () => {
        navigator("/login", true)
    }

    return (<div>
        this is TodoList components
        <div>
            <button onClick={clickHandler}>Log out</button>
        </div>
    </div>)
}

export default TodoList;