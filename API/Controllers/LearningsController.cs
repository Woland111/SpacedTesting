using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Learnings;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class LearningsController : BaseApiController
    {
        public LearningsController(IMediator mediator) : base(mediator)
        {
        }

        [HttpGet]
        public async Task<ActionResult<List<Learning>>> GetLearnings()
        {
            return await mediator.Send(new ReadAll.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Learning>> GetLearning(Guid id)
        {
            return await mediator.Send(new ReadOne.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> Create(Learning learning)
        {
            return Ok(await mediator.Send(new Create.Command { Learning = learning }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Modify(Guid id, Learning learning)
        {
            return Ok(await mediator.Send(new Update.Command { Id = id, Learning = learning }));
        }
    }
}