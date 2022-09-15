import "./App.css";
import { useSelector, useDispatch, connect } from "react-redux";
import { clearData, fetchData, incrementId, decrementId, inputId, } from "./features/dataSlice";
import { useEffect } from "react";
import { darkMode, lightMode } from './features/modeSlice'
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'


function App(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const mode = useSelector((state) => state.mode);

  const toggleMode = () => {
    mode.darkMode ? dispatch(lightMode()) : dispatch(darkMode())
  }

  const renderImg = () => {
    if (data.apiData) {
      return (
        <img
          style={{ width: "30vw", height: "30vw" }}
          src={data.apiData.primaryImage}
          alt={data.apiData.title}
        />
      );
    } else {
      return <p>image here</p>;
    }
  };

  //Awesome job!

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [props.objectId, dispatch]);

  // useEffect(() => dispatch(), [props.modeSlice, dispatch]);

  console.log('these r my props in app.js!!', props)
  return (
    <div style={{ backgroundColor: mode.color1, color: 'white' }} className="App">
      <h1>Artist: {props.apiData.apiData.artistAlphaSort}</h1>
      <h2>Artist's bio: {props.apiData.apiData.artistDisplayBio}</h2>
       <h2>Department: {props.apiData.apiData.department}</h2> 
       <h2 className="title">"{props.apiData.apiData.title}"</h2>
      <div>
        <Nav />
        <button onClick={toggleMode}>{mode.darkMode ? 'Light Mode' : 'Dark Mode'}</button>
        <button onClick={() => dispatch(fetchData())}>Thunk!</button>
        <button onClick={() => dispatch(clearData())}>Clear</button>
        <button onClick={() => dispatch(incrementId())}>Next</button>
        <button onClick={() => dispatch(decrementId())}>Back</button>
        <ContentWrapper />
       
      </div>
      <input
        value={data.objectId}
        onChange={(e) => {
          dispatch(inputId(Number(e.target.value)));
        }}
      />
      <div >
       
        {renderImg()}
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({ apiData: state.data, objectId: state.data.objectId, mode: state.mode.color })

export default connect(mapStateToProps)(App);
