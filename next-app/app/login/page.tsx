import Link from "next/link";
import { AppRoutes } from "@/src/models/enums/AppRoutes";

export default function Login() {
  return (
    <>
      <div>
        <span>Soy el login</span>
      </div>

      <div className="my-8">
        <Link href={AppRoutes.DASHBOARD} className="p-4 bg-red-500">
          Go to dashboard
        </Link>
      </div>
      <div className="my-8">
        <Link href={AppRoutes.USERS} className="p-4 bg-green-500">
          Go to users
        </Link>
      </div>
    </>
  );
}
