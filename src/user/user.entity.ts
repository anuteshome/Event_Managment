import { Entity,PrimaryKey,Property} from '@mikro-orm/decorators/legacy';


@Entity()
export class User {
    @PrimaryKey({type: 'number'})
    id!: number;
    
    @Property({unique:true,type:'string'})
    emal!: string;

    @Property({type:'string'})
    password!: string;
    
    @Property({type:'string'})
    firstName!: string;

    @Property({type:'string'})
    lastName!:string;

    @Property({type:'Date'})
    createdAt: Date = new Date;

      
}