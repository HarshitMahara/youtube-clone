import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <p className="font-bold text-rose-500">
        Hello World
      </p>
        <Button variant='destructive' className="p-8 mt-3">
          click me
        </Button>
    </div>
  );
}
