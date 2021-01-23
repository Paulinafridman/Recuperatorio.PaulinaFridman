module.exports = (sequelize, DataTypes) => {

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
            //allowNull:false
        },
        nombre: {
            type: DataTypes.STRING//(45)
            //unique:true
        },
        email: {
            type: DataTypes.STRING//(255),
            //allowNull:false,
           // unique:true
        },
        password: {
            type: DataTypes.STRING//(255),
            //allowNull:false
        }
    };

    let config = {
        tableName: "usuarios"
        //timestamps:true,
        //underscored:true
    };

    const Usuario = sequelize.define("Usuario", cols, config);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Comentario, { 
            foreignKey: 'usuario_id',
            as: 'comentarios'
        })
    }

    return Usuario;

}