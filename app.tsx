import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ScenarioFlow } from './components/ScenarioFlow';
import { CompletionScreen } from './components/CompletionScreen';

export type ScenarioResult = {
  scenarioId: number;
  correct: boolean;
  choiceText: string;
};

export default function App() {
  const [screen, setScreen] = useState<'welcome' | 'tutorial' | 'completion'>('welcome');
  const [results, setResults] = useState<ScenarioResult[]>([]);

  const handleStart = () => {
    setScreen('tutorial');
    setResults([]);
  };

  const handleComplete = (finalResults: ScenarioResult[]) => {
    setResults(finalResults);
    setScreen('completion');
  };

  const handleRestart = () => {
    setScreen('welcome');
    setResults([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {screen === 'welcome' && <WelcomeScreen onStart={handleStart} />}
      {screen === 'tutorial' && <ScenarioFlow onComplete={handleComplete} />}
      {screen === 'completion' && <CompletionScreen results={results} onRestart={handleRestart} />}
    </div>
  );
}
