import IMessage from "./interfaces/IMessage";

export default class Message implements IMessage {
  constructor(
    public userId: string,
    public message: string,
    public index: number,
    public hash: string,
    public previousHash: string,
    public signature: string,
    public generatedHash: string,
    public hashValid: boolean,
    public hashChainValid: boolean,
    public valid: boolean,
  ) {

  }
}
