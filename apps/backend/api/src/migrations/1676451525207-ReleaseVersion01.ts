import { MigrationInterface, QueryRunner } from 'typeorm';

export class ReleaseVersion011676451525207 implements MigrationInterface {
  name = 'ReleaseVersion011676451525207';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`image\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(200) NOT NULL, \`description\` varchar(200) NOT NULL, \`category\` varchar(200) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`deletedAt\` datetime(6) NULL, \`imageId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`game_character\` (\`id\` int NOT NULL AUTO_INCREMENT, \`quantity\` int NOT NULL, \`gameId\` int UNSIGNED NULL, \`characterId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`game_event\` (\`id\` int NOT NULL AUTO_INCREMENT, \`startDate\` date NOT NULL, \`endDate\` date NOT NULL, \`eventId\` int NULL, \`gameId\` int UNSIGNED NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`game_room\` (\`id\` int NOT NULL AUTO_INCREMENT, \`size\` int NOT NULL, \`totalSize\` int NOT NULL, \`roomId\` int NULL, \`gameId\` int UNSIGNED NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`room\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(200) NOT NULL, \`description\` varchar(2000) NOT NULL, \`image\` varchar(200) NOT NULL, \`label\` varchar(200) NOT NULL, \`color\` varchar(15) NOT NULL, \`price\` int(12) NOT NULL, \`order\` int(3) NOT NULL, \`isExpandable\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`event\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`label\` varchar(255) NOT NULL, \`image\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`order\` int(3) NOT NULL, \`duration\` int NOT NULL, \`roomId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`bonus_malus\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`label\` varchar(255) NOT NULL, \`rate\` int NOT NULL, \`isBonus\` tinyint NOT NULL, \`eventId\` int NULL, \`characterId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`resource_produced\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`quantity\` int NOT NULL, \`resourceId\` int UNSIGNED NULL, \`characterId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`character\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`image\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`order\` int(3) NOT NULL, \`size\` int NOT NULL, \`roomId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`resource_used\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`quantity\` int NOT NULL, \`resourceId\` int UNSIGNED NULL, \`characterId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`resource\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NOT NULL, \`description\` varchar(50) NOT NULL, \`image\` varchar(50) NOT NULL, \`color\` varchar(50) NOT NULL, \`order\` int(3) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`game_resource\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`quantity\` int UNSIGNED NOT NULL, \`gameId\` int UNSIGNED NULL, \`resourceId\` int UNSIGNED NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`game\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`companyName\` varchar(50) NOT NULL, \`ceo\` varchar(50) NOT NULL, \`location\` varchar(50) NOT NULL, \`deletedAt\` datetime(6) NULL, \`userId\` int NULL, \`imageId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD CONSTRAINT \`FK_5e028298e103e1694147ada69e5\` FOREIGN KEY (\`imageId\`) REFERENCES \`image\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`game_character\` ADD CONSTRAINT \`FK_529bbed8668c96fae8fabc1f10d\` FOREIGN KEY (\`gameId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`game_character\` ADD CONSTRAINT \`FK_bd5bc4da1efd6f0cfacbdd182f9\` FOREIGN KEY (\`characterId\`) REFERENCES \`character\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`game_event\` ADD CONSTRAINT \`FK_9ead0e3dae7138c028fccb7875f\` FOREIGN KEY (\`eventId\`) REFERENCES \`event\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`game_event\` ADD CONSTRAINT \`FK_71fa66873a3ea8dabfa3b267432\` FOREIGN KEY (\`gameId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`game_room\` ADD CONSTRAINT \`FK_9f06551497b3d00222a175169d7\` FOREIGN KEY (\`roomId\`) REFERENCES \`room\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`game_room\` ADD CONSTRAINT \`FK_38cb9dac6888f6f51eae2b883f3\` FOREIGN KEY (\`gameId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`event\` ADD CONSTRAINT \`FK_7053aa43bf50d4f4463c9643999\` FOREIGN KEY (\`roomId\`) REFERENCES \`room\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`bonus_malus\` ADD CONSTRAINT \`FK_6a0ca98b06eadc7f1e8a44a1fa1\` FOREIGN KEY (\`eventId\`) REFERENCES \`event\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`bonus_malus\` ADD CONSTRAINT \`FK_3b597c344564537066b48dc0106\` FOREIGN KEY (\`characterId\`) REFERENCES \`character\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`resource_produced\` ADD CONSTRAINT \`FK_8c85e14de6ab8955fb8a42bfcd5\` FOREIGN KEY (\`resourceId\`) REFERENCES \`resource\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`resource_produced\` ADD CONSTRAINT \`FK_cc06011247006c170bba913a1bc\` FOREIGN KEY (\`characterId\`) REFERENCES \`character\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`character\` ADD CONSTRAINT \`FK_563690874a6641292e930cdfca6\` FOREIGN KEY (\`roomId\`) REFERENCES \`room\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`resource_used\` ADD CONSTRAINT \`FK_9ce02b5a189d6472a3718cd69db\` FOREIGN KEY (\`resourceId\`) REFERENCES \`resource\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`resource_used\` ADD CONSTRAINT \`FK_96c69464933ed249fe4ad1d3686\` FOREIGN KEY (\`characterId\`) REFERENCES \`character\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`game_resource\` ADD CONSTRAINT \`FK_8168175af3f9aec47b25ae86357\` FOREIGN KEY (\`gameId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`game_resource\` ADD CONSTRAINT \`FK_350a4ac0d40f6ad770f79a4aeff\` FOREIGN KEY (\`resourceId\`) REFERENCES \`resource\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`game\` ADD CONSTRAINT \`FK_a8106c0a84d70ecfc3358301c54\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`game\` ADD CONSTRAINT \`FK_39b973b2f959cd6a68daa6f3814\` FOREIGN KEY (\`imageId\`) REFERENCES \`image\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`game\` DROP FOREIGN KEY \`FK_39b973b2f959cd6a68daa6f3814\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`game\` DROP FOREIGN KEY \`FK_a8106c0a84d70ecfc3358301c54\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`game_resource\` DROP FOREIGN KEY \`FK_350a4ac0d40f6ad770f79a4aeff\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`game_resource\` DROP FOREIGN KEY \`FK_8168175af3f9aec47b25ae86357\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`resource_used\` DROP FOREIGN KEY \`FK_96c69464933ed249fe4ad1d3686\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`resource_used\` DROP FOREIGN KEY \`FK_9ce02b5a189d6472a3718cd69db\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`character\` DROP FOREIGN KEY \`FK_563690874a6641292e930cdfca6\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`resource_produced\` DROP FOREIGN KEY \`FK_cc06011247006c170bba913a1bc\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`resource_produced\` DROP FOREIGN KEY \`FK_8c85e14de6ab8955fb8a42bfcd5\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`bonus_malus\` DROP FOREIGN KEY \`FK_3b597c344564537066b48dc0106\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`bonus_malus\` DROP FOREIGN KEY \`FK_6a0ca98b06eadc7f1e8a44a1fa1\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`event\` DROP FOREIGN KEY \`FK_7053aa43bf50d4f4463c9643999\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`game_room\` DROP FOREIGN KEY \`FK_38cb9dac6888f6f51eae2b883f3\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`game_room\` DROP FOREIGN KEY \`FK_9f06551497b3d00222a175169d7\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`game_event\` DROP FOREIGN KEY \`FK_71fa66873a3ea8dabfa3b267432\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`game_event\` DROP FOREIGN KEY \`FK_9ead0e3dae7138c028fccb7875f\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`game_character\` DROP FOREIGN KEY \`FK_bd5bc4da1efd6f0cfacbdd182f9\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`game_character\` DROP FOREIGN KEY \`FK_529bbed8668c96fae8fabc1f10d\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_5e028298e103e1694147ada69e5\``,
    );
    await queryRunner.query(`DROP TABLE \`game\``);
    await queryRunner.query(`DROP TABLE \`game_resource\``);
    await queryRunner.query(`DROP TABLE \`resource\``);
    await queryRunner.query(`DROP TABLE \`resource_used\``);
    await queryRunner.query(`DROP TABLE \`character\``);
    await queryRunner.query(`DROP TABLE \`resource_produced\``);
    await queryRunner.query(`DROP TABLE \`bonus_malus\``);
    await queryRunner.query(`DROP TABLE \`event\``);
    await queryRunner.query(`DROP TABLE \`room\``);
    await queryRunner.query(`DROP TABLE \`game_room\``);
    await queryRunner.query(`DROP TABLE \`game_event\``);
    await queryRunner.query(`DROP TABLE \`game_character\``);
    await queryRunner.query(`DROP TABLE \`user\``);
    await queryRunner.query(`DROP TABLE \`image\``);
  }
}
