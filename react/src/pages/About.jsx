import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <>
      <h1>About</h1>
      <p>Questa è un'app creata per esercitarsi con React</p>
      <button onClick={handleGoHome}>Vai alla Home</button>
    </>
  );
};

export default About;