import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h2>Subscribe to Tube Guruji</h2>
      <Button variant="destructive">Subscribe</Button>
      <UserButton/>
    </div>
  );
}
