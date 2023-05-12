// TYPES
import { type UserProps } from "~/pages/account";

// COMPONENTS
import AccountDetails from "~/components/page-templates/account-page/accountDetails";
import NameChangeFormModal from "~/components/forms/nameChangeFormModal";

const AccountAuthed = ({ user }: UserProps) => {
  // RETURN
  return (
    <>
      <AccountDetails user={user} />
      {user ? <NameChangeFormModal user={user} /> : null}
    </>
  );
};
export default AccountAuthed;
