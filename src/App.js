import "./App.css";
import { InputElement} from "./components/InputElement";
import Button from "./components/Button";
import FormMessage from "./components/FormMessage";
import FormError from "./components/FormError";
import {User} from "./components/User";
import { useState } from "react";

function App() {
  const [formState, setFormState] = useState({ username: '' });
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formState.password === '') {
      setError(true);
    } else {
      setUser(formState);
      setError(null);
    }
  }

  const handleChange = (event) => {
    setFormState((state) => ({
          ...state,
          [event.target.name]: event.target.value,
    }));
  }
  const handleLogOff = () => {
    setUser(null);
    setError(null);
  }


  const isSignedIn = user !== null;
  const showErrorMessage = error !== null;
  const showFormMessage = user !== null;
  return (
    <div>
      {isSignedIn && <User username={user.username} src={"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/208A0E5EB8E1ADCEE6DEE4149CFC1428BDAABFCE5A006D2F240ADD8B87F239A5/scale?width=1200&aspectRatio=1.78&format=jpeg"}/>
      }
    {!isSignedIn && <form className="form" onSubmit={handleSubmit}>
    <div className="form-field">
      <InputElement label="Username" name="username" type="text" onChange={handleChange}/>
    </div>
    <div className="form-field">
      <Button type="submit">Sign in</Button>
      <Button type="reset">Reset</Button>
    </div>
      <FormError visible={showErrorMessage} />
      <FormMessage visible={showFormMessage} />
    </form>}
    {isSignedIn && <Button onClick={handleLogOff}/>}
  </div>
  );
}

export default App;
