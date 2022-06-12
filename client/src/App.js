import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/home/Home';
import Hotel from './pages/hotel/Hotel';
import Hotels from './pages/hotels/Hotels';

const App = () => {
    return <AppContainer className='app-container'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/hotels' element={<Hotels />} />
            <Route path='/hotels/:id' element={<Hotel />} />
        </Routes>
    </AppContainer>
};

const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export default App;