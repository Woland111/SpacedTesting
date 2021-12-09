using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Application.RepositoryInterfaces
{
    public interface ISkillsRepo
    {
        Task<List<Skill>> GetSkillsAsync();

        Task<Skill> GetSkillAsync(Guid id);

        Task CreateSkillAsync(Skill learning);

        Task ModifySkillAsync(Guid id, Skill learning);
    }
}