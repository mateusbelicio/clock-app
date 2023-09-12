import { useState } from 'react';

import ClockProvider from './features/clock/ClockContext';

import AppLayout from './ui/AppLayout';
import Quotes from './features/quotes/Quotes';
import Clock from './features/clock/Clock';

function App() {
  const [isOpenInfo, setIsOpenInfo] = useState(false);

  return (
    <ClockProvider>
      <AppLayout>
        {!isOpenInfo && <Quotes />}
        <Clock
          key="clock"
          isOpenInfo={isOpenInfo}
          toggleInfo={() => setIsOpenInfo((isOpen) => !isOpen)}
        />
      </AppLayout>
    </ClockProvider>
  );
}

export default App;
