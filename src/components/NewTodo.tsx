import React, { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const textRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredValue = textRef.current!.value;

    if (enteredValue.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredValue);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">To Do Text</label>
      <input type="text" id="text" ref={textRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
