# BrandonOchiaDotCom

## To Do
* [X] Find the correct data type to return from your Api (IActionResult, specific typ ???) (https://code-maze.com/aspnetcore-web-api-return-types/)
* [] How to add code if one of your controllers throws an exception.
* [] Try using an in memory db context until you can get your database setup.
* [] Add return types for api swagger documentation.
* [] Implement all methods for controller, service, and repos.
* [] What is the correct way to specify connection string for dbcontext? How can I put it in a settings file? Can I use dependency injection?
* [] Refactor Update and save method for BaseRepository to use the best practices.
* [] Repos shouldn't be using DataContext in the constructor. Need to be using an Interface.
* [] Add upsert method to the repository.
* [] Add defensive code to generic repository.
* [] Add logging to each of the layers. Needs to be everywhere.



/// <inheritdoc/>
        public IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predicate, string[] includeProperties = null)
        {
            if (includeProperties != null && includeProperties.Any())
            {
                var query = this.dbSet.Where(predicate).AsQueryable();

                foreach (string include in includeProperties)
                {
                    query = query.Include(include);
                }

                return query.ToList();
            }

            return this.dbSet.Where(predicate).ToList();
        }
