using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.RepositoryInterfaces;
using Domain;
using MediatR;

namespace Application.Skills
{
    public class Update
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public Skill Skill { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly ISkillsRepo skillsRepo;

            public Handler(ISkillsRepo skillsRepo)
            {
                this.skillsRepo = skillsRepo;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                await skillsRepo.ModifySkillAsync(request.Id, request.Skill);

                return Unit.Value;
            }
        }
    }
}