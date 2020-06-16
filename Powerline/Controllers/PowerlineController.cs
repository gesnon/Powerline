using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DAL.Services;
using Microsoft.AspNetCore.Mvc;
using DAL.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Powerline.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PowerlineController : ControllerBase
    {
        private PowerlineService _powerlineService;
        public PowerlineController (PowerlineService powerlineService)
        {
            _powerlineService = powerlineService;
        }

        // GET: api/<PowerlineController>
        [HttpGet]
        public IEnumerable<DAL.Models.Powerline> Get()
        {
            return _powerlineService.GetPowerlines();
        }

        // GET api/<PowerlineController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<PowerlineController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<PowerlineController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<PowerlineController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
