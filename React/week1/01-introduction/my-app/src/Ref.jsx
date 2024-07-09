import { useRef, useEffect } from "react";

const App = () => {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return <input ref={inputRef} type="text" />
}

export default App