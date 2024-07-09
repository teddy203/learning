import { createContext, useContext, useState } from "react";
const RandomPasswordContext = createContext();
const SetRandomPasswordContext = createContext();
const RandomPassword = () =>{
    const randomPassword = useContext(RandomPasswordContext);
    return <div>Password: {randomPassword}</div>
}
const PasswordGenerator = () =>{
    let text = ''
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_";
    const setRandomNumber = useContext(SetRandomPasswordContext);
    const generateRandomNumber = ()=>{
        for (let i=1; i <= 8; i++){
            setRandomNumber(text+=characters.charAt(Math.floor(Math.random() * characters.length)));
        }
    };
    return <button onClick={generateRandomNumber}>Generate Random Password</button>
}
const App = ()=>{
    const [randomNumber, setRandomNumber] = useState(0);
    return(
        <RandomPasswordContext.Provider value={randomNumber}>
            <SetRandomPasswordContext.Provider value={setRandomNumber}>
                <RandomPassword />
                <PasswordGenerator />
            </SetRandomPasswordContext.Provider>
        </RandomPasswordContext.Provider>
    )
}
export default App