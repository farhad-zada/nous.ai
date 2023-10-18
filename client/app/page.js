import Login from "./{components}/Login";
import { ThemeSwitcher } from "./{components}/ThemeSwitcher";

export default function Home() {
  return (
    <div>
      <ThemeSwitcher />
      <Login/>
    </div>
  );
}
