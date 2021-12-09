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
    public class Create
    {
        public class Command : IRequest
        {
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
                await learningsRepo.CreateLearningAsync(request.Learning);
                
                return Unit.Value;
            }
        }
    }
}