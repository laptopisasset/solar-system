import {Canvas} from "@react-three/fiber";
import './App.css';
import { Experience } from "./components/Experience";

function App() {

  return (
    <Canvas camera={{position: [3, 3, 3], fov: 30}}>
      <color attach="background" args={["#ececec"]}/>
      <Experience />
    </Canvas>
  )
}

export default App
