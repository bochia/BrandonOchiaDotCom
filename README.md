# BrandonOchiaDotCom

## To Do
* [X] Find the correct data type to return from your Api (IActionResult, specific typ ???) (https://code-maze.com/aspnetcore-web-api-return-types/)
* [X] How to add code if one of your controllers throws an exception (https://learn.microsoft.com/en-us/aspnet/core/web-api/handle-errors?view=aspnetcore-7.0)
* [X] Add return types for api swagger documentation. (https://learn.microsoft.com/en-us/aspnet/core/web-api/action-return-types?view=aspnetcore-7.0)
* [X] Implement all methods for controller.
* [] What is the correct way to specify connection string for dbcontext? How can I put it in a settings file? Can I use dependency injection?
* [] Add upsert method to the repository.
* [] Add defensive code to generic repository.
* [] Add logging to each of the layers. Needs to be everywhere.
* [] How to hide your user name and password in connection strings? (https://stackoverflow.com/questions/7581801/how-can-i-hide-my-password-in-my-c-sharp-connection-string)
* What is the point of IDesignTimeDbContextFactory?
* Make a generic service class that has CRUD.
* Make a BaseController class with things you need Code for returning correct Problem from service response. Or maybe you can use auto mapper for this?
* Do I need to add some logic inside of Create and Update for if the object couldn't be found? Is it fine if that gets handled by the exception catch?
* Add Base entity logical delete, update and created time, user.
* ServiceResponse shouldn´t contain http status code. If get method doesn´t find data should return true with data null. It should be the controllers job to return check for null data and return 404 not found.
* IMPORTANT - Repositories should return domain models!!!!!



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


///<inheritdoc/>
public IQueryable<BriefWorkflow> GetAll(bool includeDeleted = false)
{
    IQueryable<BriefWorkflow> entities = null;

    if (includeDeleted)
    {
        entities = deliveryContext.BriefWorkflows;
    }
    else
    {
        entities = deliveryContext.BriefWorkflows.Where(x => x.IsDeleted == false);
    }

    return entities;
}

/// <inheritdoc/>
public DeliveryTemplateType GetByID(int id, bool includeDeleted = false)
{
    if (id <= 0)
    {
        LogAndThrowArgumentException(nameof(id), "GetByID - id must be greater than 0.");
    }

    return GetAll(includeDeleted).FirstOrDefault(x => x.ID == id);
}
