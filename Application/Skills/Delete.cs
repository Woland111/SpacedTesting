using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.RepositoryInterfaces;
using MediatR;

namespace Application.Skills
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
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
                await skillsRepo.DeleteSkillAsync(request.Id);

                return Unit.Value;
            }
        }
    }
}