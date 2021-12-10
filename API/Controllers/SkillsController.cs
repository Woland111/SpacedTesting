using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Skills;
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
        public async Task<ActionResult<List<Skill>>> GetLearnings()
        {
            return await mediator.Send(new ReadAll.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Skill>> GetLearning(Guid id)
        {
            return await mediator.Send(new ReadOne.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> Create(Skill learning)
        {
            return Ok(await mediator.Send(new Create.Command { Skill = learning }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Modify(Guid id, Skill skill)
        {
            skill.Id = id;
            return Ok(await mediator.Send(new Update.Command { Skill = skill }));
        }
    }
}