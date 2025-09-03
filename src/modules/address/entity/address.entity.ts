import { EventEntity } from "@/modules/event/entity/event.entity";

export class AddressEntity {
  constructor(
    public id: string,
    public street: string,
    public city: string,
    public neighborhood: string,
    public number: number,
    public CEP: string,
    public event: EventEntity[],
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}