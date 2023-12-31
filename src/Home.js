import { useState } from 'react';
import { Box, styled } from '@mui/material';
import Sunset from './assets/images/bg.jpg';
import Form from './components/Form';
import Information from './components/Information';
// import { useNavigate } from 'react-router-dom';
import "./Home.css"
const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '65%'
})

const Image = styled(Box)({
    backgroundImage: `url(${Sunset})`,
    width: '27%',
    height: '80%',
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px'
})

const Home = () => {
    const [result, setResult] = useState({})
    // const navigate = useNavigate()
    const logOut = () => {
        window.localStorage.clear();
        window.location.href = "./login";
    };
    return (
        <Component className='container3'>
            <Image className='imge'></Image>
            <Box className='box' style={{ width: '73%', height: '80%' }}>
                <Form setResult={setResult} />
                <Information result={result} />
            </Box>
            <button className="button1" onClick={logOut}>Logout</button>
        </Component>

    )
}

export default Home;