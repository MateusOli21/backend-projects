const { DataTypes, Model } = require("sequelize");

class Provider extends Model {
  static init(sequelize) {
    super.init(
      {
        company: DataTypes.STRING,
        category: DataTypes.ENUM("ration", "toy"),
        email: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "providers",
        freezeTableName: true,
        timestamps: true,
      }
    );

    return this;
  }
}

module.exports = Provider;
