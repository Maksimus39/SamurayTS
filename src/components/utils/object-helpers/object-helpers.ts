import { UsersDataType } from "../../redux/store";

export const updateObjectInArray = (
    items: UsersDataType[],
    itemId: number,
    objPropName: keyof UsersDataType, // Используйте keyof для свойств UsersDataType
    newObjProps: Partial<UsersDataType> // Используйте Partial для частичного обновления
) => {
    return items.map(u =>
        u[objPropName] === itemId ? { ...u, ...newObjProps } : u
    );
}
