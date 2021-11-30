using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class LearningsController : BaseApiController
    {
        private readonly DataContext dbContext;

        public LearningsController(DataContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Learning>>> GetLearnings()
        {
            return await dbContext.Learnings.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Learning>> GetLearning(Guid id)
        {
            return await dbContext.Learnings.FindAsync(id);
        }
    }
}