using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Application.RepositoryInterfaces
{
    public interface ISkillsRepo
    {
        Task<List<Skill>> GetLearningsAsync();

        Task<Skill> GetLearningAsync(Guid id);

        Task CreateLearningAsync(Skill learning);

        Task ModifyLearningAsync(Guid id, Skill learning);
    }
}