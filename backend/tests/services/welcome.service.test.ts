import { welcomeService } from "../../src/services/welcome.service";

jest.mock("../../src/dataAccessLayer/welcome.data.ts", () => {
  return {
    welcomeData: jest
      .fn()
      .mockImplementationOnce(() => "TestMessage")
      .mockImplementationOnce(() => {
        throw new Error("MOCK ERROR!");
      }),
  };
});

describe("Testing the welcome function in the services", () => {
  it("Should return a message as TestMessage", () => {
    const result = welcomeService();
    expect(result).toEqual({ message: "TestMessage" });
  });
  it("Should return a message as TestMessage", () => {
    try {
      const result = welcomeService();
      expect(result).toEqual({ message: "TestMessage" });
    } catch (error: any) {
      expect(error.message).toEqual("MOCK ERROR!");
    }
  });
});
