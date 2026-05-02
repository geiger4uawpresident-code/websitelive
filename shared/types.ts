export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
export interface User {
  id: string;
  name: string;
}
export interface Chat {
  id: string;
  title: string;
}
export interface ChatMessage {
  id: string;
  chatId: string;
  userId: string;
  text: string;
  ts: number;
}
export type SupporterType = 'update' | 'amplifier';
export interface Supporter {
  id: string;
  name: string;
  email: string;
  zipCode: string;
  type: SupporterType;
  phone?: string;
  shopLocation?: string;
  interests?: string[];
  createdAt: number;
}
export interface CampaignFormResponse {
  message: string;
  supporterId: string;
}