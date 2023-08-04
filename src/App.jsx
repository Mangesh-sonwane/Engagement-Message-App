import EngagementChart from './components/EngagementChart';
import EngagementDataProcessor from './components/EngagementDataProcessor';
import channels from './utils/Channels';
import messageCountList from './utils/messageCountList';

const App = () => {
  const seriesData = EngagementDataProcessor(messageCountList, channels);

  return (
    <div className='App'>
      <EngagementChart seriesData={seriesData} />
    </div>
  );
};

export default App;
