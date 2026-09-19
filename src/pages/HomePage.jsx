import Hero from '../components/Services';
import Services from '../components/RocketCursor';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services limit={6} />
    </>
  );
}