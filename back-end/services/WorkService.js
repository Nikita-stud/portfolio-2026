class WorkService {
  constructor(db) {
    this.client = db.sequelize;
    this.work = db.Work;
    this.category = db.Category;
  }

  async getAll() {
    return this.work.findAll({
      include: [{ model: this.category, attributes: ['name'] }],
      raw: true,
      nest: true,
    });
  }
  async getOne(name) {
    return this.work.findOne({
      where: { name },
      include: [{ model: this.category, attributes: ['name'] }],
      raw: true,
      nest: true,
    });
  }
}
export default WorkService;
