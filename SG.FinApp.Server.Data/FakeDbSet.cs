using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Query;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;

public class FakeDbSet<T> : DbSet<T>, IQueryable<T>, IAsyncEnumerable<T>, IEnumerable<T>, IQueryable, IEnumerable where T : class
{
    private  List<T> _data;

    public FakeDbSet(List<T> data)
    {
        _data = data;
    }

    public override EntityEntry<T> Add(T entity)
    {
        _data.Add(entity);
        return null;
    }

    public override ValueTask<EntityEntry<T>> AddAsync(T entity, CancellationToken cancellationToken = default)
    {
        _data.Add(entity);
        return new ValueTask<EntityEntry<T>>((EntityEntry<T>)null);
    }


    public override EntityEntry<T> Remove(T entity)
    {
        _data.Remove(entity);
        return null;
    }

    public override EntityEntry<T> Update(T entity)
    {

        var index = _data.FindIndex(e => EqualityComparer<T>.Default.Equals(e, entity));

        if (index >= 0)
        {
            _data[index] = entity;
        }
        return null;
    }

    public override ValueTask<T?> FindAsync(params object?[]? keyValues)
    {
        return new ValueTask<T?>(_data.FirstOrDefault());
    }


    public override ValueTask<T> FindAsync(object[] keyValues, CancellationToken cancellationToken)
    {
        return new ValueTask<T>(_data.FirstOrDefault());
    }

    public IAsyncEnumerator<T> GetAsyncEnumerator(CancellationToken cancellationToken = default)
    {
        return new AsyncEnumerator<T>(_data.GetEnumerator());
    }

    public IEnumerator<T> GetEnumerator()
    {
        return _data.GetEnumerator();
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
        return _data.GetEnumerator();
    }

    Type IQueryable.ElementType => _data.AsQueryable().ElementType;
    Expression IQueryable.Expression => _data.AsQueryable().Expression;
    //IQueryProvider IQueryable.Provider => new AsyncQueryProvider<T>(_data.AsQueryable().Provider);

    public override IEntityType EntityType => throw new NotImplementedException();
}


public class AsyncEnumerator<T> : IAsyncEnumerator<T> where T : class
{
    private readonly IEnumerator<T> _inner;

    public AsyncEnumerator(IEnumerator<T> inner)
    {
        _inner = inner;
    }

    public ValueTask DisposeAsync()
    {
        _inner.Dispose();
        return ValueTask.CompletedTask;
    }

    public ValueTask<bool> MoveNextAsync()
    {
        return new ValueTask<bool>(_inner.MoveNext());
    }

    public T Current => _inner.Current;
}

//public class AsyncQueryProvider<T> : IAsyncQueryProvider where T : class
//{
//    private readonly IQueryProvider _inner;

//    public AsyncQueryProvider(IQueryProvider inner)
//    {
//        _inner = inner;
//    }

//    IQueryable IQueryProvider.CreateQuery(Expression expression)
//    {
//        return new FakeDbSet<T>(_inner.CreateQuery<T>(expression).ToList());
//    }

//    IQueryable<TElement> IQueryProvider.CreateQuery<TElement>(Expression expression) where TElement : class
//    {
//        return new FakeDbSet<TElement>(_inner.CreateQuery<TElement>(expression).ToList());
//    }

//    public object Execute(Expression expression)
//    {
//        return _inner.Execute(expression);
//    }

//    public TResult Execute<TResult>(Expression expression)
//    {
//        return _inner.Execute<TResult>(expression);
//    }

//    public TResult ExecuteAsync<TResult>(Expression expression, CancellationToken cancellationToken)
//    {
//        return Execute<TResult>(expression);
//    }

//    public Task<TResult> ExecuteAsync<TResult>(Expression expression)
//    {
//        return Task.FromResult(Execute<TResult>(expression));
//    }
//}



