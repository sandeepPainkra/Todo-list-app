import { Card, CardContent, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import { IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import db from "./firebase"

const Todo =forwardRef( (props,ref) => {
   return (
      <div ref={ref}>
         <Card className="todo">
            <CardContent>
               <Typography variant="h5" component="h2">
                  {props.todo.todo}
               </Typography>
            </CardContent>
            <IconButton onClick={event=>db.collection("todos").doc(props.todo.id).delete()}><ClearIcon/></IconButton>
         </Card>
        
      </div>
   );
});

export default Todo;
