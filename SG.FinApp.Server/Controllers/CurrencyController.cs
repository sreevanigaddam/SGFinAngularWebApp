
using Microsoft.AspNetCore.Mvc;
using SG.FinApp.EntityLayer.Entities;
using SG.FinApp.Server.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SG.FinApp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CurrencyController : ControllerBase
    {
        private readonly ICurrencyService _currencyService;

        public CurrencyController(ICurrencyService currencyService)
        {
            _currencyService = currencyService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Currency>>> GetAll()
        {
            var currencies = await Task.Run(() => new List<Currency>()
            {
                new Currency { CurrencyName = "US Dollar", CurrencyCode = "USD", Date = DateTime.Now , Id =1, isEditing = false},
                new Currency { CurrencyName = "Euro", CurrencyCode = "EUR", Date = DateTime.Now, Id=2 , isEditing = false},
                new Currency { CurrencyName = "Japanese Yen", CurrencyCode = "JPY", Date = DateTime.Now, Id=3, isEditing = false},
                // Add more currency data here
            });

            //var currencies = await _currencyService.GetAllAsync();
            return Ok(currencies);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Currency>> GetById(int id)
        {
            var currency = await _currencyService.GetByIdAsync(id);
            if (currency == null)
            {
                return NotFound();
            }
            return Ok(currency);
        }

        [HttpPost]
        public async Task<ActionResult> Add(Currency currency)
        {
            await _currencyService.AddAsync(currency);
            return CreatedAtAction(nameof(GetById), new { id = currency.Id }, currency);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, Currency currency)
        {
            if (id != currency.Id)
            {
                return BadRequest();
            }
            await _currencyService.UpdateAsync(currency);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await _currencyService.DeleteAsync(id);
            return NoContent();
        }
    }
}




