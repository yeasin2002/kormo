import { Button as RetroButton } from "@/components/retroui/Button";
import { Button } from "@/components/ui/button";

const RootPage = () => {
  return (
    <div className="h-screen">
      <h1 className="text-3xl font-bold ">Hello Worlds</h1>
      <Button>Retro </Button>
      <RetroButton>Retro Button </RetroButton>
    </div>
  );
};

export default RootPage;
