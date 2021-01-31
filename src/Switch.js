import {
    Switch as RouterSwitch,
    Route
} from 'react-router-dom'
// import pages
import Home from "./views/Home";
import Create from "./views/Create";
import BlogDetail from "./views/BLogDetail";
import { NotFound } from "./views/404";

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
            <Route path="/post/:id">
                <BlogDetail />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </RouterSwitch>
    )
}

export default Switch;