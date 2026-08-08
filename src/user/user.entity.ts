import { Entity,PrimaryKey,Property} from '@mikro-orm/decorators/legacy';


@Entity()
export class User {
    @PrimaryKey()
    id!: number;
    
    @Property({unique:true})
    emal!: string;

    @Property()
    password!: string;
    
    @Property()
    firstName!: string;

    @Property()
    lastName!:string;

    @Property()
    createdAt: Date = new Date;

      
}