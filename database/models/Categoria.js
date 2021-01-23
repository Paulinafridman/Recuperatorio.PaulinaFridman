module.exports = (sequelize, DataTypes) => {

    let alias = "Categoria";

    let cols = {
        id:{
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
            primaryKey: true,
            allowNull:false
        },
 
        nombre:{
            type: DataTypes.STRING(45),
            allowNull:false
        },
    };

    let config = {
       tableName: "categorias",
       timestamps:false
       
    };

    const Categoria = sequelize.define("Categoria", cols, config);

    Categoria.associate = function (models) {
        Categoria.hasMany(models.Producto,{
            foreignKey: 'categoria_id',
            as: 'productos'
        })
    }
  
    return Categoria;

}