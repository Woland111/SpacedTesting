using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.RepositoryInterfaces;
using Domain;
using MediatR;

namespace Application.Learnings
{
    public class ReadOne
    {
        public class Query : IRequest<Skill>
        {
            public Guid Id { get; set; }

        }

        public class Handler : IRequestHandler<Query, Skill>
        {
            private readonly ISkillsRepo learningsRepo;

            public Handler(ISkillsRepo learningsRepo)
            {
                this.learningsRepo = learningsRepo;
            }

            public async Task<Skill> Handle(Query request, CancellationToken cancellationToken)
            {
                return await learningsRepo.GetLearningAsync(request.Id);
            }
        }
    }
}