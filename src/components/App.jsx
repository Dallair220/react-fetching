// import Image from './Image';
import Profile from './Profile';

function App() {
  return (
    <>
      <h1>React Fetching</h1>
      <div className='card app'>
        {/* <Image /> */}
        <Profile delay={1000} />
      </div>
    </>
  );
}

export default App;
