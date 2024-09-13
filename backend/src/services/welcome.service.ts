import { welcomeData } from "../dataAccessLayer/welcome.data";
import { BasicMessageType } from "../types/welcome.types";

const mapperDataToResponse = (msg: string): BasicMessageType => {
  return {
    message: msg,
  };
};

export const welcomeService = (): BasicMessageType => {
  try {
    const msg: BasicMessageType = mapperDataToResponse(welcomeData());
    return msg;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
