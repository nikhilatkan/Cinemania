import { useState } from "react";
import AppContext from "./context";

const MyProvider = ({ children }) => {
    const [state, setState] = useState("");

    return (
        <AppContext.Provider value={{ state, setState }}>
            {children}
        </AppContext.Provider>
    );
}

export default MyProvider;