import {
    Switch as RouterSwitch,
    Route
} from 'react-router-dom'
// import pages
import Home from "./views/Home";

const Switch = () => {
    return(
        <RouterSwitch>
            <Route path="/">
                <Home />
            </Route>
        </RouterSwitch>
    )
}

export default Switch;