
using Microsoft.EntityFrameworkCore;
using SG.FinApp.EntityLayer.Entities;
using SG.FinApp.Server.Data;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SG.FinApp.Server.Repositories
{
    public class CurrencyRepository : ICurrencyRepository
    {
        private readonly ApplicationDbContext _context;

        public CurrencyRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Currency>> GetAllAsync()
        {
            try
            { 
                return await _context.Currencies.ToListAsync();
            }
            catch (Exception e)
            {
                // Log the exception (you can use a logging framework like Serilog, NLog, etc.)
                Console.WriteLine($"An error occurred while getting all currencies: {e.Message}");
                // Return an empty list or handle the error as needed
                return new List<Currency>();
            }
        }

        public async Task<Currency> GetByIdAsync(int id)
        {
            return await _context.Currencies.FindAsync(id);
        }

        public async Task AddAsync(Currency currency)
        {
            await _context.Currencies.AddAsync(currency);
            //await _context.SaveChangesAsync(); // Uncomment when database is active
        }

        public async Task UpdateAsync(Currency currency)
        {
            _context.Currencies.Update(currency);
            //await _context.SaveChangesAsync(); // Uncomment when database is active
        }

        public async Task DeleteAsync(int id)
        {
            var currency = await _context.Currencies.FindAsync(id);
            if (currency != null)
            {
                _context.Currencies.Remove(currency);
                //await _context.SaveChangesAsync(); // Uncomment when database is active
            }
        }
    }
}




