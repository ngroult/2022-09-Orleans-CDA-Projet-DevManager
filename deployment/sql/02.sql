--
USE `devmanager`;
DROP PROCEDURE IF EXISTS `everyMinute`;
DROP PROCEDURE IF EXISTS `everyResource`;
DROP PROCEDURE IF EXISTS `everyCharacter`;
DROP EVENT IF EXISTS `doEveryMinute`;
--
DELIMITER $$
CREATE PROCEDURE `everyResource`(IN userId INT, IN gameId INT)
BEGIN
    DECLARE resource_loop_done INT DEFAULT FALSE;
    DECLARE resourceId INT;
    DECLARE resourceQuantity INT;
    DECLARE cur_game_resource CURSOR FOR
        SELECT
            gr.id AS resourceId,
            gr.quantity AS resourceQuantity
        FROM
            game g
            INNER JOIN game_resource gr ON g.id = gr.gameId
        WHERE g.id = gameId;
        
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET resource_loop_done = TRUE;

    OPEN cur_game_resource;
    resource_loop: LOOP
        FETCH cur_game_resource INTO resourceId, resourceQuantity;
        IF resource_loop_done THEN
            LEAVE resource_loop;
        END IF;

        CALL everyCharacter(userId, gameId, resourceId, resourceQuantity);

    END LOOP;
    CLOSE cur_game_resource;

END$$
DELIMITER ;

DELIMITER $$ 
CREATE PROCEDURE `everyCharacter`(IN userId INT, IN gameId INT, IN resourceId INT, IN resourceQuantity INT)
BEGIN 
    DECLARE character_loop_done INT DEFAULT FALSE;
    DECLARE characterId INT;
    DECLARE characterQuantity INT;
    DECLARE resourceUsedId INT;
    DECLARE resourceProducedId INT;
    DECLARE usedQuantity INT;
    DECLARE producedQuantity INT;
    DECLARE isBonus INT;
    DECLARE isBonusId INT;
    DECLARE bonusRate INT;
    DECLARE eventId INT;
    DECLARE gameEventId INT;
    DECLARE cur_character CURSOR FOR
        SELECT
            gc.characterId AS characterId,
            gc.quantity AS characterQuantity,
            ru.resourceId AS resourceUsedId,
            ru.quantity AS usedQuantity,
            rp.resourceId AS resourceProducedId,
            rp.quantity AS producedQuantity,
            bm.id AS isBonusId,
            bm.isBonus AS isBonus,
            bm.rate AS bonusRate,
            bm.eventId AS eventId,
            ge.id AS gameEventId
        FROM
            game_character gc
            LEFT JOIN resource_used ru ON ru.characterId = gc.id AND ru.resourceId = resourceId
            LEFT JOIN resource_produced rp ON rp.characterId = gc.id AND rp.resourceId = resourceId
            LEFT JOIN bonus_malus bm ON bm.characterId = gc.id AND bm.type = "production"
            LEFT JOIN game_event ge ON ge.eventId = bm.eventId AND ge.gameId = gameId AND NOW() BETWEEN ge.startDate AND ge.endDate
        WHERE gc.gameId = gameId;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET character_loop_done = TRUE;

    SET @newQuantity = resourceQuantity;
    
    OPEN cur_character;
    character_loop: LOOP
        FETCH cur_character INTO
            characterId,
            characterQuantity,
            resourceUsedId,
            usedQuantity,
            resourceProducedId,
            producedQuantity,
            isBonusId,
            isBonus,
            bonusRate,
            eventId,
            gameEventId;
        IF character_loop_done THEN
            LEAVE character_loop;
        END IF;

        IF producedQuantity IS NOT NULL THEN
            IF gameEventId IS NOT NULL AND isBonus IS TRUE THEN
                SET @newQuantity = @newQuantity + (characterQuantity * producedQuantity * (bonusRate / 100));
            ELSE 
                SET @newQuantity = @newQuantity + characterQuantity * producedQuantity;
            END IF;
        END IF;

        IF usedQuantity IS NOT NULL THEN
            IF gameEventId IS NOT NULL AND isBonus IS FALSE THEN
                SET @newQuantity = @newQuantity + (characterQuantity * usedQuantity * (bonusRate / 100));
            ELSE 
                SET @newQuantity = @newQuantity + characterQuantity * usedQuantity;
            END IF;
        END IF;

        IF @newQuantity < 0 THEN 
            SET @newQuantity = 0;
        END IF;
        
        UPDATE game_resource SET quantity = @newQuantity WHERE `gameId` = gameId AND `resourceId` = resourceId;
           
    END LOOP;
    CLOSE cur_character; 
END$$

DELIMITER ;
--
DELIMITER $$
CREATE PROCEDURE `everyMinute`()
BEGIN
    DECLARE game_loop_done INT DEFAULT FALSE;
    DECLARE userId INT;
    DECLARE gameId INT;
    DECLARE cur_user_game CURSOR FOR
      SELECT
        u.id AS userId,
        g.id AS gameId
      FROM
        user u
        INNER JOIN game g ON u.id = g.userId;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET game_loop_done = TRUE;

    OPEN cur_user_game;
    game_loop: LOOP
        FETCH cur_user_game INTO userId, gameId;
        IF game_loop_done THEN
            LEAVE game_loop;
        END IF;

        CALL everyResource(userId, gameId);

    END LOOP;
    CLOSE cur_user_game;
END$$
DELIMITER ;
--

CREATE EVENT `doEveryMinute` 
ON SCHEDULE EVERY 1 MINUTE 
DO CALL `everyMinute`();
