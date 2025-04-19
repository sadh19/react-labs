import { AppRoutes } from "@/src/models/enums/AppRoutes";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <span>Soy el dashboard</span>
      <div className="my-8">
        <Link href={AppRoutes.LOGIN} className="p-4 bg-red-500">
          Go to login
        </Link>
      </div>
    </>
  );
}
