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
    public class ReadAll
    {
        public class Query : IRequest<List<Skill>> {}

        public class Handler : IRequestHandler<Query, List<Skill>>
        {
            private readonly ISkillsRepo learningsRepo;

            public Handler(ISkillsRepo learningsRepo)
            {
                this.learningsRepo = learningsRepo;
            }

            public async Task<List<Skill>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await learningsRepo.GetLearningsAsync();
            }
        }
    }
}