export interface Profile {
  id: number;
  username: string;
  avatarUrl: string | null;
  firstName: string;
  lastName: string;
  subscribersAmount: number;
  isActive: Boolean;
  stack: string[];
  city: string;
  description: string;
}
