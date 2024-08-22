import { connectToDb } from "@/utils/database";

export default function Home() {
  connectToDb();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello</h1>
    </main>
  );
}
