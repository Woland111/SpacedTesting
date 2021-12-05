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
        public class Query : IRequest<List<Learning>> {}

        public class Handler : IRequestHandler<Query, List<Learning>>
        {
            private readonly ILearningsRepo learningsRepo;

            public Handler(ILearningsRepo learningsRepo)
            {
                this.learningsRepo = learningsRepo;
            }

            public async Task<List<Learning>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await learningsRepo.GetLearningsAsync();
            }
        }
    }
}