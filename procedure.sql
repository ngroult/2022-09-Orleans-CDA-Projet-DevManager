--
DROP PROCEDURE IF EXISTS `everyMinute`;
--
DROP PROCEDURE IF EXISTS `everyResource`;
DROP PROCEDURE IF EXISTS `everyCharacter`;
--
DELIMITER $$
CREATE PROCEDURE `everyResource`(IN userId INT, IN gameId INT, OUT gameResource INT)
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

        SELECT resourceId, resourceQuantity INTO gameResource;
        
        CALL everyCharacter(userId, gameId, resourceId);

    END LOOP;
    CLOSE cur_game_resource;

END$$
DELIMITER ;

DELIMITER $$ 

CREATE PROCEDURE `everyCharacter`(IN userId INT, IN gameId INT, IN resourceId INT, OUT resouceUsed INT, OUT resourceProduced INT, OUT characeterQuantity INT)
BEGIN 
    DECLARE character_loop_done INT DEFAULT FALSE;
    DECLARE characterId INT;
    DECLARE characterQuantity INT;
    DECLARE resourceUsedId INT;
    DECLARE resourceProducedId INT;
    DECLARE usedQuantity INT;
    DECLARE producedQuantity INT;
    DECLARE cur_character CURSOR FOR
        SELECT
            gc.characterId AS characterId,
            gc.quantity AS characterQuantity,
            ru.resourceId AS resourceUsedId,
            ru.quantity AS usedQuantity,
            rp.resourceId AS resourceProducedId,
            rp.quantity AS producedQuantity
            INTO 
            characterQuantity, 
            resouceUsed, 
            resourceProduced;
        FROM
            game_character gc
            LEFT JOIN resource_used ru ON ru.characterId = gc.id AND ru.resourceId = resourceId
            LEFT JOIN resource_produced rp ON rp.characterId = gc.id AND rp.resourceId = resourceId
        WHERE gc.gameId = gameId;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET character_loop_done = TRUE;

    OPEN cur_character;
    character_loop: LOOP
        FETCH cur_character INTO
            characterId,
            characterQuantity,
            resourceUsedId,
            usedQuantity,
            resourceProducedId,
            producedQuantity;
        IF character_loop_done THEN
            LEAVE character_loop;
        END IF;

        SELECT
            characterQuantity,
            usedQuantity,
            producedQuantity;
    END LOOP;
    CLOSE cur_character; 
END$$

DELIMITER ;
--
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

        -- SELECT userId, gameId;
        CALL everyResource(userId, gameId);

    END LOOP;
    CLOSE cur_user_game;
END$$
DELIMITER ;
--
--
CALL everyMinute();
SELECT @resouceUsed, @resourceProduced, @characeterQuantity, @gameResource;
--