import React, { useState } from "react";
import Todo from "../../pages/todo";

type routes = {
    home: 'home',
    todo: 'todo'
}

const Router = () => {
    //const [getRoute, setRoute] = useState<routes>('home');

    return (
        <div>
            <Todo />
        </div>
    )
}

export default Router;