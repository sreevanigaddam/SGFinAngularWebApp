using Microsoft.AspNetCore.Identity.Data;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;

namespace AngularApp1.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        [HttpPost]
        public IActionResult Login([FromBody] User request)
        {
            // Replace with your actual user validation logic
            if (request.UserName == "admin" && request.Password == "admin")
            {
                var token = GenerateJwtToken(request.UserName);
                return Ok(new { token });
            }

            return Unauthorized("Invalid username or password");
        }

        private string GenerateJwtToken(string username)
        {
            var key = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("ChocolatesAreSweetAndDelicious2025!"));
            // Replace with your secret key
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.Name, username)
            };

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddHours(1),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

    }
}
