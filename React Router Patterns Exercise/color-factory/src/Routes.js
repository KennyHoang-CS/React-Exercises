import { useState } from "react";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import Banner from './Banner';
import ColorsList from './ColorsList';
import Color from './Color';
import NewColorForm from './NewColorForm';
import './Routes.css';

function Routes() {
    
    const INITIAL_COLORS = {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
    };

    const [colors, updateColors] = useState(INITIAL_COLORS);

    function handleAdd(newColorObj) {
        updateColors(prevColors => ({...prevColors, ...newColorObj}))
    }

    function renderCurrentColor(props) {
        const { color } = props.match.params;
        const hex = colors[color]; 
        return <Color hex={hex} color={color}/>
    }

    return (
        <BrowserRouter>
            <div className="Routes">
                <Banner />
                <Switch>
                    <Route exact path="/colors">
                        <ColorsList colors={colors} />
                    </Route>
                    <Route exact path="/colors/new">
                        <NewColorForm addColor={handleAdd} />
                    </Route>
                    <Route path ="/colors/:color" render={renderCurrentColor}/>
                    <Redirect to="/colors" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}


export default Routes;