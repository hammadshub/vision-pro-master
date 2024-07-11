
import './App.css';
import AppControls from './components/appControl';
import ControlThroughApp from './components/controlThroughApp';
import HeadSet from './components/headSet';
import HeroSection from './components/heroSection';
import ParallexAppControl from './components/parallexAppControl';
import ParallexSectionOne from './components/parallexSectionOne';
import Photos_videos from './components/photo_videos';
import VisionPro from './components/visionPro';
import VisionPro2 from './components/visionPro2';
import VisionProApps from './components/visionProApps';
import VrHeadset from './components/vrHeadset';


function App() {
  return (
    <div>
      <HeroSection />
      <VisionPro />
      <VrHeadset />
      <AppControls />
      <Photos_videos />
      {/* <ControlThroughApp/> */}
      {/* <ParallexSectionOne/> */}
      <HeadSet />
      {/* <VisionProApps/> */}
      <ParallexAppControl />
      {/* <VisionPro2/> */}
      
    </div>


  );
}

export default App;
