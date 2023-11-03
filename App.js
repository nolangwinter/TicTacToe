import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigation';
import { PaperProvider } from 'react-native-paper';
import { useEffect, useState } from 'react';
import AppContext from './AppContext';

export default function App() {
  const [currentPlayer, setCurrentPlayer] = useState("Player 1")
  const [players, setPlayers] = useState([]);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [board, setBoard] = useState(['0','1','2','3','4','5','6','7','8'])

  const addPlayer = (newPlayer) => {
    setPlayers([...players, { id: Date.now(), name: newPlayer, wins: 0, loses: 0, ties: 0 }]);

    console.log(players);

  };


  const contextValue = {
    currentPlayer,
    setCurrentPlayer,
    players,
    setPlayers,
    addPlayer,
    player1,
    setPlayer1,
    player2,
    setPlayer2,
    board,
    setBoard,
  }
  return (
    <PaperProvider>
      <AppContext.Provider value={contextValue}>
        <StackNavigator/>
      </AppContext.Provider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
