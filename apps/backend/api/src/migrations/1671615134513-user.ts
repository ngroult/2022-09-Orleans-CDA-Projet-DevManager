import { MigrationInterface, QueryRunner } from "typeorm";

export class user1671615134513 implements MigrationInterface {
    name = 'user1671615134513'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`game\` CHANGE \`id\` \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`game\` CHANGE \`idUser\` \`idUser\` int UNSIGNED NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`game\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`game\` ADD \`createdAt\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`game\` DROP COLUMN \`companyName\``);
        await queryRunner.query(`ALTER TABLE \`game\` ADD \`companyName\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`game\` DROP COLUMN \`ceo\``);
        await queryRunner.query(`ALTER TABLE \`game\` ADD \`ceo\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`game\` DROP COLUMN \`location\``);
        await queryRunner.query(`ALTER TABLE \`game\` ADD \`location\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`game\` CHANGE \`idImage\` \`idImage\` int UNSIGNED NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`room\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`room\` ADD \`name\` varchar(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`room\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`room\` ADD \`description\` varchar(2000) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`room\` DROP COLUMN \`color\``);
        await queryRunner.query(`ALTER TABLE \`room\` ADD \`color\` varchar(15) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`room\` CHANGE \`price\` \`price\` int(200) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`room\` CHANGE \`price\` \`price\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`room\` DROP COLUMN \`color\``);
        await queryRunner.query(`ALTER TABLE \`room\` ADD \`color\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`room\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`room\` ADD \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`room\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`room\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`game\` CHANGE \`idImage\` \`idImage\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`game\` DROP COLUMN \`location\``);
        await queryRunner.query(`ALTER TABLE \`game\` ADD \`location\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`game\` DROP COLUMN \`ceo\``);
        await queryRunner.query(`ALTER TABLE \`game\` ADD \`ceo\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`game\` DROP COLUMN \`companyName\``);
        await queryRunner.query(`ALTER TABLE \`game\` ADD \`companyName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`game\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`game\` ADD \`createdAt\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`game\` CHANGE \`idUser\` \`idUser\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`game\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
