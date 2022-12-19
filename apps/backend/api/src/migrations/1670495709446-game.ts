import { MigrationInterface, QueryRunner } from "typeorm";

export class game1670495709446 implements MigrationInterface {
    name = 'game1670495709446'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`game\` (\`id\` int NOT NULL AUTO_INCREMENT, \`idUser\` int NOT NULL, \`createdAt\` varchar(255) NOT NULL, \`companyName\` varchar(255) NOT NULL, \`ceo\` varchar(255) NOT NULL, \`location\` varchar(255) NOT NULL, \`idImage\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`game\``);
    }

}
