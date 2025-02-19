import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ResultGetMemberProfile } from "@/types/getMemberProfile";

export type FormHooks = {
  register: UseFormRegister<typeof ResultGetMemberProfile.data>;
  errors?: FieldErrors<typeof ResultGetMemberProfile.data>;
};
