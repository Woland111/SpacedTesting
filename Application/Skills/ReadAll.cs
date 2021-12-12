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
    public class ReadAll
    {
        public class Query : IRequest<List<Skill>> {}

        public class Handler : IRequestHandler<Query, List<Skill>>
        {
            private readonly ISkillsRepo skillsRepo;

            public Handler(ISkillsRepo skillsRepo)
            {
                this.skillsRepo = skillsRepo;
            }

            public async Task<List<Skill>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await skillsRepo.GetSkillsAsync(cancellationToken);
            }
        }
    }
}