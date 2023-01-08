import { CreateDateColumn } from 'typeorm';

class BaseEntity {
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}

export default BaseEntity;
