import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';
import LandingPage from '../Components/LandingPage';

export default function Navigates() {

    return(
        <Router>
            <Routes>
                <Route path="/hexnode-uem" element={<LandingPage />} />
            </Routes>
        </Router>
    );
}