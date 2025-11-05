import Buy from "./sections/Buy";
import Fresh from "./sections/Fresh";
import Hero from "./sections/Hero";
import ShellShock from "./sections/ShellShock";
import Skate from "./sections/Skate";
import Spin from "./sections/Spin";

const Home = () => {
  return (
    <main>
      <Hero />
      <ShellShock />
      <Fresh />
      <Spin />
      <Skate />
      <Buy />
    </main>
  );
};

export default Home;
