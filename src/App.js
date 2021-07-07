import React from 'react';
import ProfileContextProvider from './contexts/ProfileContext';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className="App">
      <ProfileContextProvider>
          <Profile />
      </ProfileContextProvider>
    </div>
  );
}

export default App;
