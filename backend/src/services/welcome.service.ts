import { welcomeData } from "../dataAccessLayer/welcome.data";
import { BasicMessageType } from "../types/welcome.types";

const mapperDataToResponse = (msg: string): BasicMessageType => {
  return {
    message: msg,
  };
};

export const welcomeService = (): BasicMessageType => {
  try {
    const dataFromDataLayer: string = welcomeData();
    const msg: BasicMessageType = mapperDataToResponse(dataFromDataLayer);
    return msg;
  } catch (error: any) {
    throw error;
  }
};
