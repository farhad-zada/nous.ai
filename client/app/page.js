import { ThemeSwitcher } from "./{components}/ThemeSwitcher";
import LoginModal from "./{modals}/LoginModal";

export default function Home() {
  return (
    <div>
      <LoginModal />
      <ThemeSwitcher />
    </div>
  );
}
