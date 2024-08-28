import PasscodeModal from "@/components/PasscodeModal";
import { connectToDb } from "@/utils/database";

export default function Home() {
  // connectToDb();
  return (
    <div className="flex min-h-screen  h-screen mx-auto">
      <PasscodeModal></PasscodeModal>
    </div>
  );
}
