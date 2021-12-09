using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.RepositoryInterfaces;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Repositories
{
    public class SkillsRepo : ISkillsRepo
    {
        private readonly DataContext dataContext;

        public SkillsRepo(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        public async Task CreateLearningAsync(Skill skill)
        {
            dataContext.Skills.Add(skill);
            await dataContext.SaveChangesAsync();
        }

        public async Task<Skill> GetLearningAsync(Guid Id)
        {
            return await dataContext.Skills.FindAsync(Id);
        }

        public async Task<List<Skill>> GetLearningsAsync()
        {
            return await dataContext.Skills.ToListAsync();
        }

        public async Task ModifyLearningAsync(Guid id, Skill updatedSkill)
        {
            var originalSkill = await dataContext.Skills.FindAsync(id);
            originalSkill.Question = updatedSkill.Question;
            originalSkill.Answer = updatedSkill.Answer;
            originalSkill.NextTestOn = updatedSkill.NextTestOn;
            originalSkill.Result = updatedSkill.Result;
            await dataContext.SaveChangesAsync();
        }
    }
}