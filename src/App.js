import './App.css'
import MainPage from './components/MainPage/MainPage'
import ProfilePage from './components/ProfilePage/ProfilePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainPage />
                </Route>
                <Route path="/profile">
                    <ProfilePage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
