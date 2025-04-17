import { userProfiles } from "../../../../data/staticUserData";
import LargeButton from "../../../../ui/components/LargeButton";

export default function UserSelect() {
  return (
    <>
      {userProfiles.map((user) => (
        <LargeButton
          key={user.id}
          text={user.name}
          handleClick={() => {
            console.log(user);
          }}
        />
      ))}
    </>
  );
}
