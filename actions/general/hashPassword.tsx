import bcrypt from "bcryptjs";

export const hashPassword = async(value: string) => {
  const salt = bcrypt.genSaltSync(10);
  const hash =await bcrypt.hash(value, salt);
  return hash;
};
