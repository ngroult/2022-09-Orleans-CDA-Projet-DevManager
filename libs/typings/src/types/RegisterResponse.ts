export type RegisterResponse = {
  statusCode?: number;
  takenUsername?: { message: string };
  registeredEmail?: { message: string };
};
