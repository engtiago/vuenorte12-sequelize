
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    IDUser: {
       type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    vchUser: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    vchDescricao: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
  });
  Project.belongsToMany(User, {through: 'UserProject'});

  return User;
};
