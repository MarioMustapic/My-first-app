import "./App.css";
import { InputElement} from "./components/InputElement";
import Button from "./components/Button";
import FormMessage from "./components/FormMessage";
import FormError from "./components/FormError";
import {User} from "./components/User";
import {Counter} from "./components/Counter";

function App() {
  const isSignedIn = true;
  
  return (
    <div>
      <Counter startingState={0}/>
      {isSignedIn && <User username={"Mario Mustapić"} src={"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/208A0E5EB8E1ADCEE6DEE4149CFC1428BDAABFCE5A006D2F240ADD8B87F239A5/scale?width=1200&aspectRatio=1.78&format=jpeg"}/>
      }
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
  </form>
  </div>
  );
}

export default App;
