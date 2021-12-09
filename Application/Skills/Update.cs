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
            public Skill Learning { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly ISkillsRepo learningsRepo;

            public Handler(ISkillsRepo learningsRepo)
            {
                this.learningsRepo = learningsRepo;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                await learningsRepo.ModifyLearningAsync(request.Id, request.Learning);

                return Unit.Value;
            }
        }
    }
}