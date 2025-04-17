import { userProfiles } from "../../../../data/staticUserData";
import "./UserSelect.scss";
import LargeButton from "../../../../ui/components/LargeButton";

export default function UserSelect() {
  return (
    <>
      {userProfiles.map((user) => (
        <LargeButton text={user.name} />
      ))}
    </>
  );
}
