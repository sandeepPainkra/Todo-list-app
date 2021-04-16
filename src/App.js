import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import FlipMove from "react-flip-move";
import db from "./firebase";
import firebase from "firebase";
const App = () => {
   const [todo, setTodo] = useState([]);
   const [input, setInput] = useState("");

   useEffect(() => {
      db.collection("todos")
         .orderBy("timestamp", "asc")
         .onSnapshot((onsnapshot) => {
            setTodo(
               onsnapshot.docs.map((doc) => ({
                  id: doc.id,
                  todo: doc.data().todo,
               }))
            );
         });
   }, []);
   const InputEvent = (event) => {
      console.log(event.target.value);
      setInput(event.target.value);
   };
   const AddTodo = (event) => {
      event.preventDefault();

      //   add data in database
      db.collection("todos").add({
         todo: input,
         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setTodo([...todo, input]);
      setInput("");
   };

   return (
      <div className="app">
         <h2>Todo-App🚀</h2>
         <br />
         <form>
            <FormControl>
               <InputLabel htmlFor="my-input">✅Add Todo..</InputLabel>
               <Input
                  type="text"
                  value={input}
                  onChange={InputEvent}
                  autoComplete="off"
               />
            </FormControl>
            <Button
               disabled={!input}
               onClick={AddTodo}
               type="submit"
               variant="contained"
               color="primary"
            >
               Add Todo
            </Button>
         </form>
         <ul className="max-width">
            <FlipMove>
               {todo.map((todo) => {
                  return <Todo todo={todo} />;
               })}
            </FlipMove>
         </ul>
      </div>
   );
};

export default App;
