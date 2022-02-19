import React, { useState, useMemo } from "react";
import ValidationService from "./service";
import Form from "./containers/Form";
import TextField from "./components/TextField";
import Button from "./components/Button";

const Validation = new ValidationService("_&1234567890");

function App() {
  const [string, setString] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(Validation.isValid(string));

  useMemo(() => {
    setIsValid(Validation.isValid(string));
  }, [string]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setString(event.target.value);
  };
  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      Validation is : {isValid.toString()}
      <Button>click</Button>
      <Form params={"&_()0"}>
        <TextField />
      </Form>
    </div>
  );
}

export default App;
