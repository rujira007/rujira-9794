import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'category' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, name: 'title' })
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
