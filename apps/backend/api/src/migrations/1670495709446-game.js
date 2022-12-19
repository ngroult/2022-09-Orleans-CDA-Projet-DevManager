"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.game1670495709446 = void 0;
class game1670495709446 {
    constructor() {
        this.name = 'game1670495709446';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`game\` (\`id\` int NOT NULL AUTO_INCREMENT, \`idUser\` int NOT NULL, \`createdAt\` varchar(255) NOT NULL, \`companyName\` varchar(255) NOT NULL, \`ceo\` varchar(255) NOT NULL, \`location\` varchar(255) NOT NULL, \`idImage\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`game\``);
    }
}
exports.game1670495709446 = game1670495709446;
//# sourceMappingURL=1670495709446-game.js.map