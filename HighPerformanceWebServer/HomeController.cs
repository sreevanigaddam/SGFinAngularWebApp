using Microsoft.AspNetCore.Mvc;

namespace HighPerformanceWebServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            // Simulate an asynchronous operation
            await Task.Delay(10);
            return Ok("Hello, World!");
        }
    }
}
