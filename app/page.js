import { Button, buttonVariants } from "@/components/ui/button";

export default function Home() {
  return <div>
    <h1>Home</h1>
    <Button variant={buttonVariants.primary}>Primary Button</Button>
    <Button variant="destructive">hi</Button>
  </div>
  ;
}
