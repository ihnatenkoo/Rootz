import Intro from '../components/Intro/Intro';
import Header from '../components/Header/Header';
import StartedForm from '../components/StartedForm/StartedForm';
import StartedInfo from '../components/StartedInfo/StartedInfo';

const Home = () => {
	return (
		<>
			<Header />
			<Intro />
			<StartedForm />
			<StartedInfo />
		</>
	);
};

export default Home;
