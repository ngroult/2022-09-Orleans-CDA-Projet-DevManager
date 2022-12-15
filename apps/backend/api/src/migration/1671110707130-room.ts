import { MigrationInterface, QueryRunner } from 'typeorm';

export class room1671110707130 implements MigrationInterface {
  name = 'room1671110707130';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`room\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`color\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`isExpandable\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`room\``);
  }
}
