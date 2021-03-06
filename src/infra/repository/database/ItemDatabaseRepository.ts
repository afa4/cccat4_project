import ItemAbstractRepository from "../../../domain/repository/ItemAbstractRepository";
import Item from "../../../domain/entity/item/Item";
import Connection from '../../database/Connection';
import ItemVolume from "../../../domain/entity/item/ItemVolume";

export default class ItemDatabaseRepository extends ItemAbstractRepository {

    constructor(private readonly connection: Connection) {
        super();
    }

    async findByIdIn(ids: number[]): Promise<Item[]> {
        const query = `select *
                       from ccca.item
                       where id_item in (${ids.join(',')})`;
        const itemsData = await this.connection.query(query, []);
        const items = itemsData.map((itemData: any) => {
            //id_item, category, description, price, width, height, length, weight
            const itemVolume = new ItemVolume(itemData.height, itemData.width, itemData.length, itemData.weight);
            return new Item(itemData.id_item, itemData.description, Number(itemData.price), itemVolume);
        });
        return Promise.resolve(items);
    }

    async findById(id: number): Promise<Item> {
        const query = "select * from ccca.item where id_item = $1"
        const [itemData] = await this.connection.query(query, [id]);
        const itemVolume = new ItemVolume(itemData.height, itemData.width, itemData.length, itemData.weight);
        return new Item(itemData.id_item, itemData.description, Number(itemData.price), itemVolume);
    }
}
