const models = require("../models");

module.exports = socket => {
    return async (data) => {
        try {
            let c = await models.Command.findOne({where: {number: {[models.Sequelize.Op.eq]: data}, date: {[models.Sequelize.Op.eq]: new Date()}}});
            if (!c)
                throw new Error("Command not found");
            c.done = null;
            c.give = null;
            c.error = false;

            c.WIP = false;

            await c.save();
            socket.emit("clear command", data);
            socket.broadcast.emit("clear command", data);
        } catch (e) {
            socket.emit("internal error");
            console.error(e);
        }
    }
}
