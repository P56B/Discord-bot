
const mongoose = require('mongoose');
const User = require('./userModel');

class XPSystem {
    constructor() {
        // Verbinden Sie sich hier mit Ihrer MongoDB-Datenbank
        mongoose.connect('mongodb://localhost:27017/discordbot', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
    }

    async addXP(userId, xpToAdd) {
        const user = await User.findOneAndUpdate(
            { discordId: userId },
            { $inc: { xp: xpToAdd } },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );
        return user;
    }

    async getXP(userId) {
        const user = await User.findOne({ discordId: userId });
        return user ? user.xp : 0;
    }
}

module.exports = XPSystem;
