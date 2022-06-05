
const GenericModel = Model => ({
    create(data) {
        return Model.create(data);
    },
    async get(conditions) {
        const query = await Model.findAll(conditions ? { where: conditions } : {});
        return query;
    },
    getById(id) {
        return Model.findOne({ where: { id } });
    },
    updateById(id, data) {
        return Model.update(data, { where: { id } });
    },
    deleteById(id) {
        return Model.destroy({ where: { id } });
    },
    findOrCreate(condition, newObj) {
        return Model.findOrCreate({ where: condition, defaults: newObj });
    }
});

export default GenericModel;
