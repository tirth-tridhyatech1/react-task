import React,{ createContext } from "react";
import { useContext, useReducer ,useState } from "react";
import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Child1 from "./extra/Child1";


export const Tododata = createContext();
function Newtodo () {
    const [Todovalue, setTodovalue] = useState({id:'', text: ''});
    const [isedit, setisedit] = useState(false);

const initialState = [];


function reducer(state, action) {
    
  switch (action.type) {
    case 'insertnew':
        const newTodo = {
            id: new Date().getTime(),
            text: action.payload.text,
        }
         state = state.concat(newTodo)
        return state;
    case 'delete':
      state = state.filter((state) => state.id !== action.payload);
      console.log(state,34);
        return state ;
    case 'edit':
      console.log(action.payload.id,47);
      state.map((state) => {
        if(state.id === action.payload.id) {
          state.id =action.payload.id
          state.text = action.payload.text
        }
        return state;
      })
      return state ;    
    default:
      throw new Error();
  }
}

function onsubmithandel(e)  {
    e.preventDefault();
    dispatch({  type: "insertnew" ,payload: Todovalue  })
    setTodovalue({text:""})
}

function oninputchange(e){
    e.preventDefault();
    setTodovalue({...Todovalue, text : e.target.value})
}

function onupdatechange(e){
    e.preventDefault();
    setTodovalue({...Todovalue,text : e.target.value})
     console.log(Todovalue,101);
}
const updateSubmit = (e) => {
  dispatch({  type: "edit" ,payload: Todovalue  })
  setTodovalue({text:""})
  setisedit(false);

}
  const [state, dispatch] = useReducer(reducer, initialState);

  const ondelete =(id)=>{
    console.log(id,84);
     dispatch({  type: "delete" , payload: id  })
  }

  const onedit = (todo) =>
  {
    if(isedit == false)
    {
    setTodovalue(todo)
      setisedit(true);
    }
    else
    {
      setTodovalue({text:""})
      setisedit(false);
    }
  }

    return (
        <>
        <div className="container " >
        <Form className='border rounded border-primary  p-3'  >
            <Form.Group className="mb-3" controlId="newtodo"> 
            {isedit?
            <>
            <Form.Label>Update Todo</Form.Label>
            <Form.Control type="text" className="w-50 " value={Todovalue.text} name='text' 
             onChange={onupdatechange} placeholder="Enter Todo"  />
             <Button variant="primary" onClick={updateSubmit}>
            Update
          </Button></>:<><Form.Label>Enter New Todo</Form.Label>
            <Form.Control type="text" className="w-50 " value={Todovalue.text} name='text' 
             onChange={oninputchange} placeholder="Enter Todo"  />
            <Button variant="primary" onClick={onsubmithandel}>
              Submit
            </Button></>} 
            </Form.Group>
        </Form>
        </div>
        <div className="container">
            <h1>TODO LIST</h1>
            <div>
                <h4>input value :</h4>
                  {console.log(state,"jfjfjfj")}
                 {state.map( (todo) =>  
                  <>
                      <h3 key={todo.id}>{todo.text}</h3>
                      <Button variant="warning" type="submit"  onClick={() =>onedit(todo)} >Update</Button>
                      <Button variant="danger" className="mx-2" type="submit"  onClick={() => ondelete(todo.id)} >Delete</Button>
                     <br /> 
                      </>
                  )} 
            </div>
        </div>
        
        <Tododata.Provider value={state}>
          <Child1/>
        </Tododata.Provider>
        
        </>
    );
    //export {Tododata};
  };

  
  //  export  {Tododata};
  export default Newtodo;

