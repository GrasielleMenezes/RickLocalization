using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiRickLocalization.Models;

namespace WebApiRickLocalization.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WebApiRickLocalization : ControllerBase
    {
        private readonly AppDbContext _context;
        public WebApiRickLocalization(AppDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        [Route("getviagens")]
        public List<Viagem> getViagens()
        {
            return _context.Viagens.ToList<Viagem>();
        }
        [HttpPost]
        [Route("addviagem")]
        public IActionResult AddViagem([FromBody] Viagem viagem_)
        {

            _context.AddViagem(viagem_);
            return Ok(viagem_);
        }

    }
}
