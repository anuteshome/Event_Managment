import { Migration } from '@mikro-orm/migrations';

export class Migration20260808124731 extends Migration {
  override name = 'Migration20260808124731';

  override up(): void | Promise<void> {
    this.addSql(
      `create table "user" ("id" serial primary key, "email" varchar(255) not null, "password" varchar(255) not null, "first_name" varchar(255) not null, "last_name" varchar(255) not null, "created_at" timestamptz not null);`,
    );
    this.addSql(
      `alter table "user" add constraint "user_email_unique" unique ("email");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "user" cascade;`);
  }
}
