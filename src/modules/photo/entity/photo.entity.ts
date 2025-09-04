import { PhotoType } from "@prisma/client";

export class PhotoEntity {
  constructor(
    public id: string,
    public url: string,
    public eventId: string,
    public type?: PhotoType,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
