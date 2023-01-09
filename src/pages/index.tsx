import AppProvider from 'src/hooks';
import Home from './screens/Home';
import colors from 'src/utils/colors';

export default function App() {
  return (
    <div
      style={{
        backgroundColor: colors.darkBlue,
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <AppProvider>
        <Home />
      </AppProvider>
    </div>
  );
}
