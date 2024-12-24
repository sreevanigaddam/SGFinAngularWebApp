
using SG.FinApp.EntityLayer.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SG.FinApp.Server.Repositories
{
    public interface ICurrencyRepository
    {
        Task<IEnumerable<Currency>> GetAllAsync();
        Task<Currency> GetByIdAsync(int id);
        Task AddAsync(Currency currency);
        Task UpdateAsync(Currency currency);
        Task DeleteAsync(int id);
    }
}




