
using SG.FinApp.EntityLayer.Entities;
using SG.FinApp.Server.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SG.FinApp.Server.Services
{
    public class CurrencyService : ICurrencyService
    {
        private readonly ICurrencyRepository _currencyRepository;

        public CurrencyService(ICurrencyRepository currencyRepository)
        {
            _currencyRepository = currencyRepository;
        }

        public async Task<IEnumerable<Currency>> GetAllAsync()
        {
            return await _currencyRepository.GetAllAsync();
        }

        public async Task<Currency> GetByIdAsync(int id)
        {
            return await _currencyRepository.GetByIdAsync(id);
        }

        public async Task AddAsync(Currency currency)
        {
            await _currencyRepository.AddAsync(currency);
        }

        public async Task UpdateAsync(Currency currency)
        {
            await _currencyRepository.UpdateAsync(currency);
        }

        public async Task DeleteAsync(int id)
        {
            await _currencyRepository.DeleteAsync(id);
        }
    }
}




