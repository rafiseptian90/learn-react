import {
    Switch as RouterSwitch,
    Route
} from 'react-router-dom'
// import pages
import Home from "./views/Home";
import Create from "./views/Create";

const Switch = () => {
    return(
        <RouterSwitch>
            {/* the exact props will call the actually route */}
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/create">
                <Create />
            </Route>
        </RouterSwitch>
    )
}

export default Switch;