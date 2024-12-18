import { DataTypes,Model,Optional } from "sequelize";
import { sequelize } from "../configs/db";

interface BlogAttributes {
    id: number;
    title: string;
    description: string;
    author: string;
    pic: string;
}
interface BlogCreationAttributes extends Optional<BlogAttributes, "id"> {}

class Blog extends Model<BlogAttributes,BlogCreationAttributes> implements BlogAttributes {
    public id!: number;
    public title!: string;
    public description!: string;
    public author!: string;
    public pic!: string;
}

Blog.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pic: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
  tableName: "blogs",
  sequelize,
});

export default Blog;