import Header from '../components/Header/Header';
import Intro from '../components/Intro/Intro';
import Team from '../components/Team/Team';
import StartedForm from '../components/StartedForm/StartedForm';
import StartedInfo from '../components/StartedInfo/StartedInfo';
import Slider from '../components/Slider/Slider';
import Footer from '../components/Footer/Footer';

const Home = () => {
	return (
		<>
			<Header />
			<Intro />
			<Team />
			<StartedForm />
			<StartedInfo />
			<Slider />
			<Footer />
		</>
	);
};

export default Home;
