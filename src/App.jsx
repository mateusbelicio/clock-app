import { useState } from 'react';

import AppLayout from './ui/AppLayout';
import Quotes from './features/quotes/Quotes';
import Clock from './features/clock/Clock';

function App() {
  const [isOpenInfo, setIsOpenInfo] = useState(false);

  return (
    <AppLayout>
      {!isOpenInfo && <Quotes />}
      <Clock
        isOpenInfo={isOpenInfo}
        toggleInfo={() => setIsOpenInfo((isOpen) => !isOpen)}
      />
    </AppLayout>
  );
}

export default App;
