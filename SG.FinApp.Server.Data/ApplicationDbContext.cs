using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using SG.FinApp.EntityLayer.Entities;
using System.Collections;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace SG.FinApp.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
            // Initialize the Currencies DbSet with a collection
            Currencies = new FakeDbSet<Currency>(new List<Currency>
            {
                new Currency { Id = 1, CurrencyName = "US Dollar", CurrencyCode = "USD", Date = DateTime.Now, isEditing = false },
                new Currency { Id = 2, CurrencyName = "Euro", CurrencyCode = "EUR", Date = DateTime.Now, isEditing = false },
                new Currency { Id = 3, CurrencyName = "Japanese Yen", CurrencyCode = "JPY", Date = DateTime.Now, isEditing = false }
            });
        }

        public DbSet<Currency> Currencies { get; set; }
    }

    //// Fake DbSet implementation for in-memory collection
    //public class FakeDbSet<T> : DbSet<T>, IQueryable<T>, IEnumerable<T>, IQueryable, IEnumerable, IAsyncEnumerable<T> where T : class
    //{
    //    private readonly List<T> _data;

    //    public FakeDbSet(List<T> data)
    //    {
    //        _data = data;
    //    }

    //    public IEnumerator<T> GetEnumerator() => _data.GetEnumerator();
    //    IEnumerator IEnumerable.GetEnumerator() => _data.GetEnumerator();
    //    Type IQueryable.ElementType => _data.AsQueryable().ElementType;
    //    Expression IQueryable.Expression => _data.AsQueryable().Expression;
    //    IQueryProvider IQueryable.Provider => _data.AsQueryable().Provider;

    //    public override IEntityType EntityType => throw new NotImplementedException();
    //}
}
