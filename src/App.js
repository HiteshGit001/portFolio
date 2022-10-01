import SkillCard from './components/SkillCard/SkillCard';
import "./assets/scss/styles.scss";
import HeroHome from './components/HeroHome/HeroHome';
import SideNavBar from './components/SideNavBar/SideNavBar';

function App() {
  return (
      <div className="bg_color flex_none_start">
        <SkillCard />
        <HeroHome />
        <SideNavBar />
      </div>
  );
}

export default App;
