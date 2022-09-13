import { useSelector, shallowEqual } from 'react-redux';

export default function Greeting() {
  const greeting = useSelector((state) => state.greeting, shallowEqual);
  return (
    <h1>
      {greeting}
    </h1>
  );
}
