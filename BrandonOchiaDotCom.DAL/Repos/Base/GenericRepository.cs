namespace BrandonOchiaDotCom.DAL.Repos.Base
{
    using Microsoft.EntityFrameworkCore;

    public abstract class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class
    {
        private DbContext dbContext;
        private DbSet<TEntity> table;

        public GenericRepository(DbContext dbContext)
        {
            this.dbContext = dbContext;
            table = this.dbContext.Set<TEntity>();
        }
        public IQueryable<TEntity> GetAll()
        {
            return table.AsQueryable();
        }
        //CFR: change this to an int.
        public TEntity GetById(object id)
        {
            return table.Find(id);
        }
        public void Insert(TEntity obj)
        {
            table.Add(obj);
        }
        public void Update(TEntity obj)
        {
            table.Attach(obj);
            dbContext.Entry(obj).State = EntityState.Modified;
        }
        //CFR: change this to an int.
        public void Delete(object id)
        {
            TEntity existing = table.Find(id);
            table.Remove(existing);
        }
        public void Save()
        {
            if (dbContext.ChangeTracker.HasChanges())
            {
                dbContext.SaveChanges();
            }
        }
    }
}
