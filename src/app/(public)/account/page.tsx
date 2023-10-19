import Account from "@/components/shares/Account";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Najot e-commerce | Account",
  description: "E-commerce website forever",
};

const AccountPage = () => {
  return (
    <div>
      <Account />
    </div>
  );
};

export default AccountPage;
