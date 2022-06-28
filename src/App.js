import "./App.css"
import { InputElement} from "./components/InputElement";
import Button from "./components/Button";
import FormMessage from "./components/FormMessage";
import FormError from "./components/FormError";
import {User} from "./components/User"


function App() {
  const isSignedIn = false;
  
  return (
  <form className="form">
    <div className="form-field">
      <InputElement label="Username" type="text"/>
    </div>
    <div className="form-field">
    <InputElement label="Password" type="password"/>
    </div>
    <div className="form-field">
      <Button type="button">Sign in</Button>
      <Button type="reset">Reset</Button>
    </div>
    <FormError visible={!isSignedIn} />
    <FormMessage visible={isSignedIn} />
    <User username={"Mario Mustapić"} src={"../public/Avatar.jpg"} alt={"Avatar Picture"}/>
  </form>
  );
}

export default App;
