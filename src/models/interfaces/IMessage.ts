export default interface IMessage {
  userId: string;
  message: string;
  index: number;
  hash: string;
  previousHash: string;
  signature: string;

  generatedHash: string;
  hashValid: boolean;
  hashChainValid: boolean;
  valid: boolean;
 }