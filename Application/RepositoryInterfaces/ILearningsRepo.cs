using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Application.RepositoryInterfaces
{
    public interface ILearningsRepo
    {
        Task<List<Learning>> GetLearningsAsync();

        Task<Learning> GetLearningAsync(Guid id);

        Task CreateLearningAsync(Learning learning);

        Task ModifyLearningAsync(Guid id, Learning learning);
    }
}